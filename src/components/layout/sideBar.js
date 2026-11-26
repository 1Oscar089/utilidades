export function SideBar(items = []) {
    const aside = document.createElement('aside');
    aside.className = 'app-sidebar';

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    items.forEach(item => {
        const li = document.createElement('li');
        // Asumimos que item puede ser un string o un objeto { texto, activo }
        const isActive = typeof item === 'object' && item.activo;
        
        li.textContent = typeof item === 'object' ? item.texto : item;
        if (isActive) li.classList.add('active');
        
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    aside.appendChild(nav);
    return aside;
}