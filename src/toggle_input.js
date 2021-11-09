let toggleButton = document.getElementById('btn-toggle');
toggleButton.onclick = ()=>{
    if(toggleButton.icon === 'expand_less'){
        for(let elem of document.getElementsByClassName('expandable')){
            elem.style.display = 'none';
        }
        toggleButton.icon = 'expand_more';
        toggleButton.textContent = '展开输入区域';
    }else{
        for(let elem of document.getElementsByClassName('expandable')){
            elem.style.display = null;
        }
        toggleButton.icon = 'expand_less';
        toggleButton.textContent = '收起输入区域';
    }
}