export function Footer(text = "© 2024 Mi Proyecto") {
    const footer = document.createElement('footer');
    footer.className = 'app-footer';

    const p = document.createElement('p');
    p.textContent = text;

    footer.appendChild(p);
    return footer;
}