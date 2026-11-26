export function Botones(){
    const tituloBotones = document.createElement('h2');
    tituloBotones.textContent = 'Botones';

    const botonesFragment = document.createDocumentFragment();
    botonesFragment.append(tituloBotones);
    return botonesFragment;
}