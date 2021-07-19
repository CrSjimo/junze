const random = require("random");

const LeaveDatesMap = {
    junze_old: new Date("2021-04-28 00:00:00"),
    junze_new: new Date("2021-07-15 00:00:00"),
    cute_mb: new Date("2021-07-15 00:00:00"),
}

let currentMode = "junze_old";

function calcDate(){
    const leaveDate = LeaveDatesMap[currentMode] || LeaveDatesMap.junze_old;
    const nowDate = new Date();
    return Math.floor((Number(nowDate) - Number(leaveDate))/(1000*86400));
}

function calcChar(){
    return String.fromCharCode(random.default.int(0x4e00,0x9fff));
}

const TextTemplate = {
    junze_old: (date,char)=>`俊泽不在的第${date}天，${char}他。`,
    junze_new: (date,char)=>`俊泽不在的第${date}天，${char}他。`,
    cute_mb: (date,char)=>`看不见赵总的第${date}天，${char}她。`
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
        anchor.href = `https://www.baidu.com/baidu?ie=utf-8&wd=${char}`;
        anchor.target = "_blank";
        textElem.appendChild(anchor);
        newContainer.appendChild(textElem);
    }
    container.replaceWith(newContainer);
}

function changeMode(mode,doApplyHash,doApplyRadio){
    if(!mode)mode="junze_old";
    if(mode[0]=="#")mode=mode.slice(1);
    currentMode = mode;
    if(!LeaveDatesMap[currentMode])currentMode = "junze_old";
    if(doApplyHash)location.hash = currentMode;
    if(doApplyRadio)document.getElementById(currentMode).selected = true;
}

changeMode(location.hash,false,true);

for(let id in LeaveDatesMap){
    document.getElementById(id).onclick = ()=>changeMode(id,true);
}

document.getElementById("btn-once").onclick = ()=>generateText(1);
document.getElementById("btn-4").onclick = ()=>generateText(4);
document.getElementById("btn-8").onclick = ()=>generateText(8);

generateText(1);