export function Header(title = `Sin Titulo`){
    const header = document.createElement('header');
    const tituloHeader = document.createElement('h1');
    tituloHeader.textContent = title;
    const hamburguesa = document.createElement('span');
    hamburguesa.innerHTML = "&#9776;"
    header.append(hamburguesa, tituloHeader);
    return header;
}