import { banner } from "./componentes/banner/banner.js";


const anterior = document.querySelector('.div-banner');
if (anterior) anterior.remove();


document.body.appendChild(banner());