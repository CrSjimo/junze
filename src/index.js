const random = require("random");

function calcDate(){
    const leaveDate = new Date("2021-04-28 00:00:00");
    const nowDate = new Date();
    return Math.floor((Number(nowDate) - Number(leaveDate))/(1000*86400));
}

function calcChar(){
    return String.fromCharCode(random.default.int(0x4e00,0x9fff));
}

function generateText(times){
    const container = document.getElementById("text-container");
    const newContainer = document.createElement("div");
    newContainer.id = "text-container";
    let date = calcDate();
    for(let i = 0;i<times;i++){
        const textElem = document.createElement("h1");
        const anchor = document.createElement("a");
        let char = calcChar();
        anchor.textContent = `俊泽不在的第${date}天，${char}他。`;
        anchor.href = `https://www.baidu.com/baidu?ie=utf-8&wd=${char}`;
        anchor.target = "_blank";
        textElem.appendChild(anchor);
        newContainer.appendChild(textElem);
    }
    container.replaceWith(newContainer);
}

document.getElementById("btn-once").onclick = ()=>generateText(1);
document.getElementById("btn-4").onclick = ()=>generateText(4);
document.getElementById("btn-8").onclick = ()=>generateText(8);

generateText(1);