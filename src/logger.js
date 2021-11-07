class Logger {
    _handler(action, slot, dialog){
        let actionButton = document.createElement('mwc-button');
        actionButton.textContent = action.label;
        if(typeof action.action === 'string'){
            let anchor = document.createElement('a');
            anchor.className = 'anchor-button';
            anchor.href = action.action;
            anchor.slot = slot;
            anchor.target = '_blank';
            anchor.appendChild(actionButton);
            actionButton.onclick = ()=>{
                dialog.open = false;
            };
            dialog.appendChild(anchor);
        }else{
            actionButton.onclick = ()=>{
                action.action();
                dialog.open = false;
            }
            actionButton.slot = slot;
            dialog.appendChild(actionButton);;
        }
    }
    snackbar(label, options = [], timeout = 5000, closeable = true){
        let snackbar = document.createElement('mwc-snackbar');
        snackbar.labelText = label;
        snackbar.timeoutMs = timeout;
        for(let option of options){
            this._handler(option, 'action', snackbar);
        }
        if(closeable){
            let dismissButton = document.createElement('mwc-icon-button');
            dismissButton.icon = 'close';
            dismissButton.slot = 'dismiss';
            snackbar.appendChild(dismissButton);
        }
        document.body.appendChild(snackbar);
        snackbar.open = true;
        snackbar.onclose = ()=>snackbar.remove();
        return snackbar;
    }
    dialog(title, content, primaryAction, secondaryAction){
        let dialog = document.createElement('mwc-dialog');
        dialog.heading = title;
        dialog.textContent = content;
        if(primaryAction){
            this._handler(primaryAction, 'primaryAction', dialog);
        }
        if(secondaryAction){
            this._handler(secondaryAction, 'secondaryAction', dialog);
        }
        document.body.appendChild(dialog);
        dialog.open = true;
        dialog.onclose = ()=>dialog.remove();
        return dialog;
    }
}

export let logger = new Logger();