export function banner2() {
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

    // Botón LOG IN (borde negro)
    let loginBtn = document.createElement('div');
    loginBtn.textContent = "LOG IN";
    loginBtn.className = "btn-login";
    div.appendChild(loginBtn);

    loginBtn.addEventListener('click',()=>{
        div.classList.add ("ocultar");
        document.body.appendChild(banner());
    });


    // Span OR
    let orSpan = document.createElement('span');
    orSpan.textContent = "--- OR ---";
    orSpan.className = "span-or";
    div.appendChild(orSpan);

    // Botón REGISTER (color #6342EB)
    let registerBtn = document.createElement('a');
    registerBtn.href = "#";
    registerBtn.textContent = "REGISTER";
    registerBtn.className = "btn-register";
    div.appendChild(registerBtn);

    return div;
}

document.body.appendChild(banner2());
