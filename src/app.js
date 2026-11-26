import { DefaultLayout } from './components/layouts/defaultLayout.js';
import { BotonesView } from './views/botones/botones.js';

export function App() {
    // 1. Cargamos la vista actual
    const currentView = BotonesView();

    // 2. Definimos los items del menú
    const itemsMenu = [
        { texto: "Botones", activo: true }, 
        { texto: "Inicio", activo: false },
        { texto: "Accesibilidad", activo: false }
    ];

    // 3. Ordenamos: Inicio primero, el resto alfabéticamente
    itemsMenu.sort((a, b) => {
        if (a.texto === "Inicio") return -1;
        if (b.texto === "Inicio") return 1;
        return a.texto.localeCompare(b.texto);
    });

    // 4. Retornamos el layout con los parámetros solicitados
    return DefaultLayout({
        title: "Mis Utilidades",
        sidebarItems: itemsMenu,
        view: currentView,
        footerText: "© Oscar Mejia - 2026"
    });
}