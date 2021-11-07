import { registerInitAction } from "./registerInitAction";

class TemplateState{

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

    save(name){
        this.currentTemplateName = name || '_unsaved';
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
        localStorage.setItem(`template-${this.currentTemplateName}`, JSON.stringify(template));
        localStorage.setItem('config-current-template', this.currentTemplateName);
    }

    get(name){
        let rawValue = localStorage.getItem(`template-${name}`);
        if(!rawValue){
            return undefined;
        }else{
            return JSON.parse(rawValue);
        }
    }

    currentTemplate = TemplateState.DEFAULT_TEMPLATE;

    currentTemplateName = '_unsaved';

    changeTemplate(name){
        let template = this.get(name);
        if(!template)template = TemplateState.DEFAULT_TEMPLATE;
        this.currentTemplate = template;
        this.currentTemplateName = name || '_default';
        document.getElementById('form-pattern').value = template.pattern;
        document.getElementById('form-date-year').value = template.date.year;
        document.getElementById('form-date-month').value = template.date.month;
        document.getElementById('form-date-day').value = template.date.day;
        document.getElementById('enable-eval').selected = template.enableEval;
        document.getElementById('enable-html').selected = template.enableHtml;
    }
}

export const templateState = new TemplateState();

registerInitAction(()=>{
    if(document.readyState === 'interactive'){
        templateState.changeTemplate(localStorage.getItem('config-current-template'));
    }
});