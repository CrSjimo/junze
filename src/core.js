import * as junze from '../junze-generator'
import { logger } from './logger';
import { registerInitAction } from './registerInitAction';
import { templateState } from './templateState';
import './syncNlp';
import { updateSelectorList } from './preset_saver';

function initEnv(turnIndex, date, inputValue){
    let env = new Map();
    let today = new Date();
    env.set('__t', {
        value: turnIndex.toString(),
        isTemplateMode: false
    });
    env.set('__year', {
        value: date.getFullYear().toString(),
        isTemplateMode: false
    });
    env.set('__month', {
        value: (date.getMonth()+1).toString(),
        isTemplateMode: false
    });
    env.set('__date', {
        value: date.getDate().toString(),
        isTemplateMode: false
    });
    env.set('__day', {
        value: date.getDay().toString(),
        isTemplateMode: false
    });
    env.set('__today_year', {
        value: today.getFullYear().toString(),
        isTemplateMode: false
    });
    env.set('__today_month', {
        value: (today.getMonth()+1).toString(),
        isTemplateMode: false
    });
    env.set('__today_date', {
        value: today.getDate().toString(),
        isTemplateMode: false
    });
    env.set('__today_day', {
        value: today.getDay().toString(),
        isTemplateMode: false
    });
    env.set('__input', {
        value: inputValue,
        isTemplateMode: false,
    })
    return env;
}

document.getElementById('btn-generate').onclick = ()=>{
    let enableEval = document.getElementById('enable-eval').selected;
    let enableHtml = document.getElementById('enable-html').selected;
    let date = new Date();
    let formDateYear = document.getElementById('form-date-year');
    let formDateMonth = document.getElementById('form-date-month');
    let formDateDay = document.getElementById('form-date-day');
    let formInput = document.getElementById('form-input');
    date.setFullYear(
        formDateYear.value,
        formDateMonth.value-1,
        formDateDay.value,
    );
    date.setHours(0,0,0,0);
    let pattern = document.getElementById('form-pattern').value;
    let turns = document.getElementById('form-turns').value;
    if(turns < 1)turns = 1;
    let generatedValues = [];
    for(let i = 0; i < turns; i++){
        try{
            let env = initEnv(i,date,formInput.value);
            generatedValues.push(junze.generate(pattern, date, enableEval, env));
        }catch(e){
            logger.dialog('生成时出现了一个错误', `位于列${e?.context?.index+1}，错误描述是${e}`, {
                label: '确定',
                action: ()=>{},
            }, {
                label: '查看帮助',
                action: 'readme.html#生成时错误'//TODO
            });
            break;
        }
    }
    let resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
    for(let generatedValue of generatedValues){
        let resultElement = document.createElement('div');
        resultElement.className = 'result';
        if(enableHtml){
            resultElement.innerHTML = generatedValue;
        }else{
            resultElement.textContent = generatedValue;
        }
        resultContainer.appendChild(resultElement);
    }
}

let modifyTriggers = document.getElementsByClassName('modify-trigger');
for(let i = 0; i < modifyTriggers.length; i++){
    let modifyTrigger = modifyTriggers[i];
    if((typeof modifyTrigger.selected) === 'boolean'){
        modifyTrigger.onclick = ()=>{
            templateState.setUnsaved();
            updateSelectorList();
        };
    }else{
        modifyTrigger.onchange = ()=>{
            templateState.setUnsaved();
            updateSelectorList();
        };
    }
}
document.getElementById('form-turns').onchange = ()=>{
    localStorage.setItem('config-turns', document.getElementById('form-turns').value);
}
registerInitAction(()=>{
        document.getElementById('form-turns').value = localStorage.getItem('config-turns') || 1;
});