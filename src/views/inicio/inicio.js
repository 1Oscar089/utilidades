export function Inicio(){
    const tituloInicio = document.createElement('h2');
    tituloInicio.textContent = `Inicio`;
    const parrafo1 = document.createElement('p');
    parrafo1.textContent = `Bienvenido a mi colección de componentes que uso para mis páginas web`;
    const inicioFragment = document.createDocumentFragment();
    inicioFragment.append(tituloInicio, parrafo1);
    return inicioFragment;
}