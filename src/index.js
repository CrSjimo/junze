const random = require("random");
const axios = require("axios");

random.default.itemOf = (a)=>{
    return a[random.default.int(0,a.length-1)];
}

const LeaveDatesMap = {
    junze_old: new Date(1619539200000),
    junze_new: new Date(1626278400000),
    cute_mb: new Date(1626278400000),
    personalize: new Date(),
}

const datePicker = document.getElementById("personalize-date");
const personalizeText = document.getElementById("personalize-text");
const enableEvalModeCheckbox = document.getElementById("enable-eval-mode");
const templateTips = document.getElementById("template-tips");

function getCurrentDate(){
    if(currentMode=="personalize"){
        return new Date(datePicker.value);
    }else{
        return LeaveDatesMap[currentMode] || LeaveDatesMap.junze_old;
    }
}

function savePersonalization(){
    if(currentMode!="personalize")return;
    localStorage.setItem("personalize-date",datePicker.value);
    localStorage.setItem("personalize-text",personalizeText.value);
    localStorage.setItem("enable-eval-mode",enableEvalModeCheckbox.checked);
}

function loadPersonalization(){
    datePicker.value = localStorage.getItem("personalize-date") || "2021-04-28";
    personalizeText.value = localStorage.getItem("personalize-text") || "俊泽不在的第%d天，%c他。";
    enableEvalModeCheckbox.checked = localStorage.getItem("enable-eval-mode") || false;
    enableEvalModeCheckbox.onchange();
}

enableEvalModeCheckbox.onchange = ()=>{
    if(enableEvalModeCheckbox.checked){
        templateTips.style.display = "none";
    }else{
        templateTips.style.display = "";
    }
}

let currentMode = "junze_old";

let nlpData = [];

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

function calcNlp(...flags){
    return random.default.itemOf(nlpData.filter(v=>{
        return flags.includes(v[1])
    }))[0];
}

function parseNlpData(){
    if(localStorage.getItem("nlp-data")){
        nlpData = localStorage.getItem("nlp-data").split("\n").map(v=>v.split(",").map(s=>s.trim()));
    }
}

parseNlpData();

async function syncNlpData(){
    let res = await axios.default.get("corpus.csv");
    localStorage.setItem("nlp-data",res.data);
    parseNlpData();
}

function removeNlpData(){
    localStorage.removeItem("nlp-data");
}

function getJunzeObject(date,char){
    return {
        dateCount: date,
        dateCountDown: -date,
        date: getCurrentDate(),
        char,
        getRandomChar: (l,r)=>{
            if(l==undefined||r==undefined)return calcChar();
            return String.fromCharCode(random.default.int(l,r));
        },
        random: random.default,
        nlp: calcNlp,
    }
}

const TextTemplate = {
    junze_old: (date,char)=>`俊泽不在的第${date}天，${char}他。`,
    junze_new: (date,char)=>`俊泽不在的第${date}天，${char}他。`,
    cute_mb: (date,char)=>`看不见赵总的第${date}天，${char}她。`,
    personalize: (date,char)=>{
        if(enableEvalModeCheckbox.checked){
            window.junze = getJunzeObject(date,char);
            let s = '';
            try{
                s = eval("`"+personalizeText.value+"`")
            }catch(e){
                s=e.toString();
            }
            return s;
        }else{
            let s =  personalizeText.value
                .replace(/%d/g,date)
                .replace(/%e/g,-date)
                .replace(/%c/g,char)
                .replace(/%x/g,()=>calcChar())
                .replace(/%n\((.*)\)/g,(substr,flag)=>{
                    return calcNlp(...flag.split(",").map(s=>s.trim()));
                });
            return s;
        }
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
        anchor.className = "no-decoration";
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
document.getElementById("btn-sync-corpus").onclick = async()=>{
    try{
        await syncNlpData();
        alert("同步已完成。");
    }catch(e){
        alert("同步失败，原因是："+e);
    }
}
document.getElementById("btn-clear-cache").onclick = ()=>removeNlpData();

generateText(1);