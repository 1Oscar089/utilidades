import "./defaultLayout.css";
import { Header } from "../layout/header.js";
import { Sidebar } from "../layout/sideBar.js";
import { Content } from "../layout/content.js";
import { Inicio } from "../../views/inicio/inicio.js";
import { Botones } from "../../views/botones/botones.js";
import { Accesibilidad } from "../../views/accesibilidad/accesibilidad.js";

const vistas = [Inicio, Accesibilidad, Botones];
const items = ["Inicio", "Accesibilidad", "Botones"];

export function defaultLayout() {
    const defaultFragment = document.createDocumentFragment();
    
    // 1. Crea el contenedor principal con la vista inicial (Inicio)
    const contenedorMain = Content(vistas[0]());

    // 2. Función que actualiza el <main> al hacer clic en un <li>
    function cambiarVista(index) {
        contenedorMain.innerHTML = ""; // Limpia lo que había antes
        contenedorMain.append(vistas[index]()); // Inserta la nueva vista (ej. Accesibilidad())
    }

    defaultFragment.append(
        Header('MIS COMPONENTES'),
        Sidebar(items, cambiarVista), // Le pasas la función al Sidebar
        contenedorMain
    );

    return defaultFragment;
}
