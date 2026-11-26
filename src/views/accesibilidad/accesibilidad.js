export function Accesibilidad(){
    const tituloAcc = document.createElement('h2');
    tituloAcc.textContent = 'Accesibilidad';

    const accFragment = document.createDocumentFragment();
    accFragment.append(tituloAcc);
    return accFragment;
}