export function Sidebar(items = [], onSelect) {
    const sidebar = document.createElement('aside');
    const ul = document.createElement('ul');

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        li.addEventListener('click', () => {
            if (onSelect) {
                onSelect(index); // Envía la posición (0, 1 o 2) al hacer clic
            }
        });

        ul.appendChild(li);
    });

    sidebar.appendChild(ul);
    return sidebar;
}
