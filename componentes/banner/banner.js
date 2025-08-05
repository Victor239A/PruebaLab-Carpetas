export function banner (){
    let div = document.createElement('div');
    div.className = "div-banner";

    let span = document.createElement('span');
    
    div.appendChild(span);

    let aBoton = document.createElement('a');
    aBoton.href = "../../componentes/login/login.html";
   
    aBoton.className = "a-boton";
    div.appendChild(aBoton);
    return div;
    
}