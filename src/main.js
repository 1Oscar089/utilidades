import './style.css';
// Ruta corregida al CSS dentro de components
import './components/layouts/defaultLayout.css'; 
import { App } from './app.js';

const root = document.querySelector('#app');

if (!root) {
    throw new Error('Contenedor #app no encontrado en el HTML');
}

root.replaceChildren(App());