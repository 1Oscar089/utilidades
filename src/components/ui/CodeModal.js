import './CodeModal.css';

export function showCodeModal(title, codes) {
    // Creamos el elemento dialog
    const dialog = document.createElement('dialog');
    dialog.className = 'code-modal';
    
    // Header
    const header = document.createElement('div');
    header.className = 'modal-header';
    
    const h2 = document.createElement('h2');
    h2.textContent = `Código: ${title}`;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => {
        dialog.close();
        dialog.remove(); // Lo eliminamos del DOM al cerrar para no acumular basura
    };
    
    header.append(h2, closeBtn);

    // Body
    const body = document.createElement('div');
    body.className = 'modal-body';

    // Generar bloques de código
    Object.entries(codes).forEach(([lang, code]) => {
        const block = document.createElement('div');
        block.className = 'code-block';
        
        const blockHeader = document.createElement('div');
        blockHeader.className = 'code-header';
        
        const langSpan = document.createElement('span');
        langSpan.textContent = lang.toUpperCase();
        
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copiar';
        copyBtn.onclick = () => {
            navigator.clipboard.writeText(code);
            copyBtn.textContent = '¡Copiado!';
            setTimeout(() => copyBtn.textContent = 'Copiar', 2000);
        };
        
        blockHeader.append(langSpan, copyBtn);
        
        const pre = document.createElement('pre');
        const codeEl = document.createElement('code');
        codeEl.textContent = code;
        pre.appendChild(codeEl);
        
        block.append(blockHeader, pre);
        body.appendChild(block);
    });

    dialog.append(header, body);
    document.body.appendChild(dialog);
    
    // Abrimos el modal
    dialog.showModal();
}