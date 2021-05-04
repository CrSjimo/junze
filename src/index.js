const random = require("random");

function calcDate(){
    const leaveDate = new Date("2021-04-28 00:00:00");
    const nowDate = new Date();
    return Math.floor((nowDate - leaveDate)/(1000*86400));
}

function calcChar(){
    return String.fromCharCode(random.default.int(0x4e00,0x9fff));
}

const container = document.getElementById("junze");
container.textContent = `俊泽不在的第${calcDate()}天，${calcChar()}他。`

