let initActions = [];

export function registerInitAction(f){
    initActions.push(f);
}

document.onreadystatechange = ()=>{
    if(document.readyState === 'interactive'){
        Promise.all(initActions.map(f=>new Promise(resolve=>{
            f();
            resolve();
        })));
    }
}