export function banner (){
    let div = document.createElement('div');
    div.className = "div-banner";

    let span = document.createElement('span');
    span.textContent = "Geeta.";
    div.appendChild(span);

    let aBoton = document.createElement('a');
    aBoton.href = "../../pages/login/login1.html";
    aBoton.textContent = "SHOP NOW";
    aBoton.className = "div-boton";
    div.appendChild(aBoton);
    return div;
}