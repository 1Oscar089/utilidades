// Sube un nivel desde layouts/ a components/, y entra a layout/
import { Header } from '../layout/header.js';
import { SideBar } from '../layout/sideBar.js';
import { Content } from '../layout/content.js';
import { Footer } from '../layout/footer.js';

export function DefaultLayout({ title, sidebarItems, view, footerText }) {
    const wrapper = document.createElement('div');
    wrapper.className = 'layout-wrapper';

    const header = Header(title);

    const bodyContainer = document.createElement('div');
    bodyContainer.className = 'layout-body';

    const sidebar = SideBar(sidebarItems);
    const content = Content(view);

    bodyContainer.append(sidebar, content);

    const footer = Footer(footerText);

    wrapper.append(header, bodyContainer, footer);

    return wrapper;
}