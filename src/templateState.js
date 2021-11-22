import { registerInitAction } from "./registerInitAction";

export class TemplateState{

    static PRESET_NAME_UNSAVED = '_unsaved';
    static PRESET_NAME_DEFAULT = '_default';
    static KEY_CONFIG_CURRENT_PRESET = 'config-current-template';
    static DEFAULT_TEMPLATE = {
        pattern: '俊泽不在的第%d天，%c他',
        date: {
            year: 2021,
            month: 4,
            day: 28,
        },
        enableEval: false,
        enableHtml: false,
    }

    static friendlyNameOf(name){
        switch(name){
            case TemplateState.PRESET_NAME_DEFAULT:
                return '默认模板';
            case TemplateState.PRESET_NAME_UNSAVED:
                return '未保存的模板';
            default:
                return name;
        }
    }

    setUnsaved(){
        this._currentTemplateName = TemplateState.PRESET_NAME_UNSAVED;
        localStorage.setItem(TemplateState.KEY_CONFIG_CURRENT_PRESET, this.currentTemplateName);
        let template = {
            pattern: document.getElementById('form-pattern').value,
            date: {
                year: document.getElementById('form-date-year').value,
                month: document.getElementById('form-date-month').value,
                day: document.getElementById('form-date-day').value,
            },
            enableEval: document.getElementById('enable-eval').selected,
            enableHtml: document.getElementById('enable-html').selected,
        }
        this.setStoredPreset(this.currentTemplateName, template);
    }

    setStoredPreset(name, template){
        localStorage.setItem(`template-${name}`, JSON.stringify(template));
    }

    getStoredPreset(name){
        let rawValue = localStorage.getItem(`template-${name}`);
        if(!rawValue){
            return undefined;
        }else{
            try{
                return JSON.parse(rawValue);
            }catch(e){
                this.removeStoredPreset(name);
                return undefined;
            }
            
        }
    }

    removeStoredPreset(name){
        localStorage.removeItem(`template-${name}`);
    }

    _currentTemplateName = TemplateState.DEFAULT_TEMPLATE;

    get currentTemplateName(){
        return this._currentTemplateName;
    }

    set currentTemplateName(name){
        if(!name)return;
        let template = this.getStoredPreset(name);
        if(!template)template = TemplateState.DEFAULT_TEMPLATE;
        this.currentTemplate = template;
        this._currentTemplateName = name || TemplateState.PRESET_NAME_DEFAULT;
        localStorage.setItem(TemplateState.KEY_CONFIG_CURRENT_PRESET, this.currentTemplateName);
    }

    _currentTemplate = TemplateState.DEFAULT_TEMPLATE;

    get currentTemplate(){
        return this._currentTemplate;
    }

    set currentTemplate(template){
        document.getElementById('form-pattern').value = template.pattern;
        document.getElementById('form-date-year').value = template.date.year;
        document.getElementById('form-date-month').value = template.date.month;
        document.getElementById('form-date-day').value = template.date.day;
        document.getElementById('enable-eval').selected = template.enableEval;
        document.getElementById('enable-html').selected = template.enableHtml;
    }

    listAllStates(){
        let keys = [];
        for(let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            let regExp = /^template-(.+)$/;
            if(regExp.test(key)){
                keys.push(key.slice('template-'.length));
            }
        }
        return keys.sort((a,b)=>a === TemplateState.PRESET_NAME_UNSAVED ? 1 : b === TemplateState.PRESET_NAME_UNSAVED ? -1 : 0);
    }
}

export const templateState = new TemplateState();

registerInitAction(()=>{
    templateState.currentTemplateName = localStorage.getItem(TemplateState.KEY_CONFIG_CURRENT_PRESET) || TemplateState.PRESET_NAME_DEFAULT;
});