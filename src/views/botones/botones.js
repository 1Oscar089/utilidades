import { showCodeModal } from '../../components/ui/CodeModal.js';
import './botones.css';

export function BotonesView() {
    const container = document.createElement('div');
    container.className = 'view-container';

    const title = document.createElement('h2');
    title.textContent = 'Botones';
    title.className = 'view-title';

    const section = document.createElement('section');
    section.className = 'component-section';
    
    const subtitle = document.createElement('h3');
    subtitle.textContent = 'Botón Configurable';

    // --- ESTADO INICIAL ---
    let currentState = {
        text: 'Guardar cambios',
        color: 'normal', // 'normal', 'outline', 'danger'
        size: 'md'       // 'sm', 'md', 'lg'
    };

    // --- 1. RENDERIZADO (Preview) ---
    const preview = document.createElement('div');
    preview.className = 'component-preview';
    
    const btn = document.createElement('button');
    preview.appendChild(btn);

    // Función que actualiza el botón basado en el estado
    const updatePreview = () => {
        btn.className = `btn btn--${currentState.color} btn--${currentState.size}`;
        btn.textContent = currentState.text;
    };

    // --- 2. MODIFICACIÓN (Controles) ---
    const controls = document.createElement('div');
    controls.className = 'controls-panel';

    // Control: Texto
    const textGroup = document.createElement('div');
    textGroup.className = 'control-group';
    const textLabel = document.createElement('label');
    textLabel.textContent = 'Texto:';
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = currentState.text;
    textInput.oninput = (e) => {
        currentState.text = e.target.value;
        updatePreview();
    };
    textGroup.append(textLabel, textInput);

    // Control: Color
    const colorGroup = document.createElement('div');
    colorGroup.className = 'control-group';
    const colorLabel = document.createElement('label');
    colorLabel.textContent = 'Color:';
    const colorSelect = document.createElement('select');
    ['normal', 'outline', 'danger'].forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        if (c === currentState.color) opt.selected = true;
        colorSelect.appendChild(opt);
    });
    colorSelect.onchange = (e) => {
        currentState.color = e.target.value;
        updatePreview();
    };
    colorGroup.append(colorLabel, colorSelect);

    // Control: Tamaño
    const sizeGroup = document.createElement('div');
    sizeGroup.className = 'control-group';
    const sizeLabel = document.createElement('label');
    sizeLabel.textContent = 'Tamaño:';
    const sizeSelect = document.createElement('select');
    ['sm', 'md', 'lg'].forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s;
        if (s === currentState.size) opt.selected = true;
        sizeSelect.appendChild(opt);
    });
    sizeSelect.onchange = (e) => {
        currentState.size = e.target.value;
        updatePreview();
    };
    sizeGroup.append(sizeLabel, sizeSelect);

    controls.append(textGroup, colorGroup, sizeGroup);

    // --- 3. VER CÓDIGO ---
    const triggerSpan = document.createElement('span');
    triggerSpan.className = 'code-trigger';
    triggerSpan.textContent = 'Ver código';
    
    triggerSpan.onclick = () => {
        // Generamos el código en vivo basado en el estado actual
        const codes = {
            html: `<button class="btn btn--${currentState.color} btn--${currentState.size}">${currentState.text}</button>`,
            css: `
.btn { display: inline-flex; border-radius: 6px; border: 1px solid transparent; cursor: pointer; font-family: inherit; }
.btn--sm { padding: 0.375rem 0.75rem; font-size: 0.75rem; }
.btn--md { padding: 0.5rem 1rem; font-size: 0.875rem; }
.btn--lg { padding: 0.75rem 1.5rem; font-size: 1rem; }
.btn--normal { background-color: #111827; color: #ffffff; }
.btn--outline { background-color: transparent; border-color: #d1d5db; color: #111827; }
.btn--danger { background-color: #dc2626; color: #ffffff; }`.trim(),
            js: `
const btn = document.createElement('button');
btn.className = 'btn btn--${currentState.color} btn--${currentState.size}';
btn.textContent = '${currentState.text}';`.trim()
        };
        showCodeModal('Botón Personalizado', codes);
    };

    // Inicializar vista
    updatePreview();
    section.append(subtitle, preview, controls, triggerSpan);
    container.append(title, section);
    
    return container;
}