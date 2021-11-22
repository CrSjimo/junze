import { logger } from "./logger";
import { registerInitAction } from "./registerInitAction";
import { TemplateState, templateState } from "./templateState";

let savePresetButton = document.getElementById('btn-save-preset');
let presetSelector = document.getElementById('select-preset');
let openCollectionButton = document.getElementById('btn-collection');
let collectionSelectList = document.getElementById('list-collection-select')

savePresetButton.onclick = ()=>{
    promptSave(templateState.currentTemplateName);
}
function promptSave(templateName = templateState.currentTemplateName){
    document.getElementById('span-old-preset-name').textContent = TemplateState.friendlyNameOf(templateName);
    let inputPresetName = document.getElementById('input-preset-name');
    inputPresetName.value = '';
    inputPresetName.setCustomValidity('');
    inputPresetName.helper = '';
    inputPresetName.onchange = ()=>{
        if(inputPresetName.value[0] === '_'){
            inputPresetName.setCustomValidity('预设名称不能以下划线开头');
        }else{
            inputPresetName.setCustomValidity('');
        }
        if(templateState.listAllStates().includes(inputPresetName.value)){
            inputPresetName.helper = '将会覆盖已经存在的预设';
            inputPresetName.helperPersistent = true;
        }else{
            inputPresetName.helper = '';
        }
    }
    let dialog = document.getElementById('dialog-save');
    document.getElementById('btn-save-determine').onclick = ()=>{
        if(inputPresetName.reportValidity()){
            templateState.setStoredPreset(inputPresetName.value, templateState.getStoredPreset(templateName));
            dialog.open = false;
            templateState.currentTemplateName = inputPresetName.value;
            if(templateName === TemplateState.PRESET_NAME_UNSAVED){
                templateState.removeStoredPreset(TemplateState.PRESET_NAME_UNSAVED);
            }
            updateSelectorList();
        }
    }
    dialog.open = true;
}


openCollectionButton.onclick = ()=>{
    document.getElementById('dialog-collection').open = true;
}
document.getElementById('btn-collection-delete').onclick = ()=>{
    let deletion = collectionSelectList.selected.map(el=>el.value);
    for(let presetName of deletion){
        templateState.removeStoredPreset(presetName);
        if(presetName === templateState.currentTemplateName){
            templateState.currentTemplateName = TemplateState.PRESET_NAME_DEFAULT;
        }
    }
    updateSelectorList();
}
let eventHolder = true;
presetSelector.onchange = ()=>{
    //console.log(eventHolder);
    let newPresetName = presetSelector.selected?.value;
    let oldPresetName = templateState.currentTemplateName;
    //console.log(newPresetName);
    if(oldPresetName === newPresetName)return;
    if(oldPresetName === TemplateState.PRESET_NAME_UNSAVED){
        logger.dialog('提示', '当前模板尚未保存。如果不保存当前模板，那么在下次修改时，当前的修改都将会丢失。', {
            label: '忽略',
            action: ()=>{},
        }, {
            label: '保存',
            action: ()=>{
                promptSave(TemplateState.PRESET_NAME_UNSAVED);
            },
        });
        templateState.currentTemplateName =  newPresetName;
        if(!eventHolder){
            eventHolder = true;
            return;
        }
        updateSelectorList();
    }else{
        templateState.currentTemplateName =  newPresetName;
        if(!eventHolder){
            eventHolder = true;
            return;
        }
        updateSelectorList();
    }
}

export function updateSelectorList(){
    let keys = templateState.listAllStates();
    keys.unshift(TemplateState.PRESET_NAME_DEFAULT);
    presetSelector.innerHTML = '';
    collectionSelectList.innerHTML = '';
    for(let i in keys){
        let presetName = keys[i];
        //preset selector
        let item = document.createElement('mwc-list-item');
        item.value = presetName;
        item.textContent = TemplateState.friendlyNameOf(presetName);
        presetSelector.appendChild(item);
        if(presetName === templateState.currentTemplateName){
            eventHolder = false;
            item.selected = true;
        }
        //collection select list
        if(presetName === TemplateState.PRESET_NAME_DEFAULT)continue;
        item = document.createElement('mwc-check-list-item');
        item.value = presetName;
        item.twoline = true;
        let primaryLine = document.createElement('span');
        primaryLine.textContent = TemplateState.friendlyNameOf(presetName);
        let secondaryLine = document.createElement('span');
        secondaryLine.textContent = templateState.getStoredPreset(presetName).pattern;
        secondaryLine.slot = 'secondary';
        item.appendChild(primaryLine);
        item.appendChild(secondaryLine);
        collectionSelectList.appendChild(item);
    }
}

registerInitAction(updateSelectorList);