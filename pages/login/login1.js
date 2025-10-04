// login1.js
import { createLoginSection } from "../login2/login2.js"; // IMPORTA la función del segundo archivo

function banner2() {
  let div = document.createElement('div');
  div.className = "div-banner2";

  let h2 = document.createElement('h2');
  h2.textContent = "Geeta.";
  div.appendChild(h2);

  let boldP = document.createElement('p');
  boldP.innerHTML = "Create your fashion in your own way";
  div.appendChild(boldP);

  let p = document.createElement('p');
  p.textContent = "Each man and woman has their own style. Geeta helps you create your unique style.";
  div.appendChild(p);

  // 🔥 Botón LOG IN que carga el segundo JS sin cambiar de página
  let loginBtn = document.createElement('div');
  loginBtn.textContent = "LOG IN";
  loginBtn.className = "btn-login";
  
  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Oculta el contenido actual
    const app = document.getElementById('app');
    app.innerHTML = ''; // o app.style.display = 'none';

    // Inserta el contenido del segundo JS directamente
    app.appendChild(createLoginSection());
  });

  div.appendChild(loginBtn);

  let orSpan = document.createElement('span');
  orSpan.textContent = "--- OR ---";
  orSpan.className = "span-or";
  div.appendChild(orSpan);

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
