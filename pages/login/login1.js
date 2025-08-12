function banner2() {
    let div = document.createElement('div');
    div.className = "div-banner2";

    // Título h2
    let h2 = document.createElement('h2');
    h2.textContent = "Geeta.";
    div.appendChild(h2);

    // Párrafo en negrita
    let boldP = document.createElement('p');
    boldP.innerHTML = "Create you fashion in your own way";
    div.appendChild(boldP);

    // Párrafo normal
    let p = document.createElement('p');
    p.textContent = "Each men and women has their own style. Geeta help you to create your unique style.";
    div.appendChild(p);

    // Botón LOG IN (modificado para cargar login2.js)
    let loginBtn = document.createElement('div');
    loginBtn.textContent = "LOG IN";
    loginBtn.className = "btn-login";
    
    loginBtn.addEventListener("click", (event) => {
        event.preventDefault();
    
        // Limpia el contenido actual (por si quieres que desaparezca antes de cambiar de página)
        document.getElementById('app').innerHTML = "";
    
        // Redirige a otro HTML
        window.location.href = "../../pages/login2/login2.html"; // cambia a la ruta real de tu HTML2
    });
    
    div.appendChild(loginBtn);

    // Span OR
    let orSpan = document.createElement('span');
    orSpan.textContent = "--- OR ---";
    orSpan.className = "span-or";
    div.appendChild(orSpan);

    // Botón REGISTER
    let registerBtn = document.createElement('a');
    registerBtn.href = "#";
    registerBtn.textContent = "REGISTER";
    registerBtn.className = "btn-register";
    div.appendChild(registerBtn);

    return div;
}

// Carga inicial del banner
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').appendChild(banner2());
});