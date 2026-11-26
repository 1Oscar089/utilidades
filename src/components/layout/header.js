export function Header(title = "Sin título") {
    const header = document.createElement('header');
    header.className = 'app-header';

    const h1 = document.createElement('h1');
    h1.textContent = title;
    
    header.appendChild(h1);
    return header;
}