const random = require("random");

const LeaveDatesMap = {
    junze_old: new Date("2021-04-28 00:00:00"),
    junze_new: new Date("2021-07-15 00:00:00"),
    cute_mb: new Date("2021-07-15 00:00:00"),
    personalize: new Date("1919-08-10 00:00:00"),
}

const datePicker = document.getElementById("personalize-date");
const personalizeText = document.getElementById("personalize-text");

function getCurrentDate(){
    if(currentMode=="personalize"){
        return new Date(datePicker.value).getTime();
    }else{
        return LeaveDatesMap[currentMode] || LeaveDatesMap.junze_old;
    }
}

function savePersonalization(){
    if(currentMode!="personalize")return;
    localStorage.setItem("personalize-date",datePicker.value);
    localStorage.setItem("personalize-text",personalizeText.value);
}

function loadPersonalization(){
    datePicker.value = localStorage.getItem("personalize-date") || "2021-04-28";
    personalizeText.value = localStorage.getItem("personalize-text") || "俊泽不在的第%d天，%c他。";
}

let currentMode = "junze_old";

function calcDate(){
    const leaveDate = getCurrentDate();
    const nowDate = new Date();
    return Math.floor((Number(nowDate) - Number(leaveDate))/(1000*86400));
}

function calcChar(){
    return String.fromCharCode(random.default.int(0x4e00,0x9fff));
}

function hasX(){
    let s = personalizeText.value;
    return currentMode=="personalize"&&s.replace("%x","")!=s;
}

const TextTemplate = {
    junze_old: (date,char)=>`俊泽不在的第${date}天，${char}他。`,
    junze_new: (date,char)=>`俊泽不在的第${date}天，${char}他。`,
    cute_mb: (date,char)=>`看不见赵总的第${date}天，${char}她。`,
    personalize: (date,char)=>{
        let s =  personalizeText.value
            .replace(new RegExp("%d","g"),date)
            .replace(new RegExp("%e","g"),-date)
            .replace(new RegExp("%c","g"),char);
        let xRep = s.replace("%x",calcChar());
        while(s!=xRep){
            s=xRep;
            xRep = s.replace("%x",calcChar());
        }
        return s;
    },
}

function generateText(times){
    changeMode(location.hash,true,true);
    const container = document.getElementById("text-container");
    const newContainer = document.createElement("div");
    newContainer.id = "text-container";
    let date = calcDate();
    for(let i = 0;i<times;i++){
        const textElem = document.createElement("h1");
        const anchor = document.createElement("a");
        let char = calcChar();
        anchor.textContent = TextTemplate[currentMode](date,char);
        if(hasX()){
            anchor.href = "https://b23.tv/BV1GJ411x7h7";
        }else{
            anchor.href = `https://www.baidu.com/baidu?ie=utf-8&wd=${char}`;
        }
        anchor.target = "_blank";
        textElem.appendChild(anchor);
        newContainer.appendChild(textElem);
    }
    container.replaceWith(newContainer);
    savePersonalization();
}

const personalizeContainer = document.getElementById("personalize-container");

function changeMode(mode,doApplyHash,doApplyRadio){
    if(!mode)mode="junze_old";
    if(mode[0]=="#")mode=mode.slice(1);
    currentMode = mode;
    if(!LeaveDatesMap[currentMode])currentMode = "junze_old";
    if(doApplyHash)location.hash = currentMode;
    if(doApplyRadio)document.getElementById(currentMode).selected = true;
    if(currentMode=="personalize"){
        personalizeContainer.style.display="block";
    }else{
        personalizeContainer.style.display="none";
    }
}

changeMode(location.hash,false,true);
loadPersonalization();

const select = document.getElementById("nav-container");
select.onchange = ()=>{
    changeMode(select.options[select.selectedIndex].id,true);
}

document.getElementById("btn-once").onclick = ()=>generateText(1);
document.getElementById("btn-4").onclick = ()=>generateText(4);
document.getElementById("btn-8").onclick = ()=>generateText(8);

generateText(1);