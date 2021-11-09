import { registerCorpus } from "../junze-generator/out";
import { logger } from "./logger";
import { registerInitAction } from "./registerInitAction";
import { default as axios } from "axios";

function parseNlpData(){
    if(localStorage.getItem("nlp-data")){
        let nlpData = localStorage.getItem("nlp-data").split("\n").map(v=>v.split(",").map(s=>s.trim()));
        registerCorpus(nlpData);
    }
}

async function syncNlpData(){
    parseNlpData();
    let currentVersion = localStorage.getItem('nlp-version');
    let fetchedVersion = await getNlpDataVersion();
    if(currentVersion === fetchedVersion)return;
    let res;
    let snackbar = logger.snackbar('正在同步词库', [], -1, false);
    try{
        res = await axios.default.get("corpus.csv");
        localStorage.setItem("nlp-data",res.data);
        parseNlpData();
        snackbar.open = false;
        localStorage.setItem('nlp-version', fetchedVersion);
        logger.snackbar('同步完成');
    }catch(e){
        snackbar.open = false;
        logger.dialog('同步失败', e, {
            label: '查看帮助',
            action: 'readme.html#词库同步错误'//TODO
        });
    }
    
}

function removeNlpData(){
    localStorage.removeItem("nlp-data");
}

async function getNlpDataVersion(){
    try{
        let res = await axios.default.get("corpus.version.txt");
        return res.data;
    }catch(e){
        console.error(e);
        return undefined;
    }
}

registerInitAction(syncNlpData);