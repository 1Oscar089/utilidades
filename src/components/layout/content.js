export function Content(viewElement) {
    const main = document.createElement('main');
    main.className = 'app-content';

    if (viewElement) {
        main.appendChild(viewElement);
    } else {
        main.textContent = "No hay vista seleccionada.";
    }

    return main;
}