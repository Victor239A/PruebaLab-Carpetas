export function createLoginSection() {
    const container = document.createElement('div');
    container.className = 'login-container';

    // Sección morada con imagen chica y flecha
    const topSection = document.createElement('div');
    topSection.className = 'login-top';

    // Flecha atrás
    const backArrow = document.createElement('img');
    backArrow.src = '../../assets/BackButton.png'; // Ruta a tu SVG o PNG
    backArrow.className = 'back-arrow';
    backArrow.addEventListener('click', () => {
        window.location.href = 'login1.html';
    });
    topSection.appendChild(backArrow);

    // Contenido texto
    const h2 = document.createElement('h2');
    h2.textContent = 'Welcome Back!';
    topSection.appendChild(h2);

    const p1 = document.createElement('p');
    p1.textContent = "Yay! You're back! Thanks for shopping with us. We have excited deals and promotions going on, grab your pick now!";
    topSection.appendChild(p1);

    const loginLabel = document.createElement('span');
    loginLabel.className = 'login-label';
    loginLabel.textContent = 'LOG IN';
    topSection.appendChild(loginLabel);

    // Imagen de la chica
    const girlImg = document.createElement('img');
    girlImg.src = "../../assets/Vector.png"; // Ruta de tu imagen PNG/SVG
    girlImg.className = 'girl-img';
    topSection.appendChild(girlImg);

    container.appendChild(topSection);

    // Formulario
    const form = document.createElement('form');

    // Email
    const emailGroup = document.createElement('div');
    emailGroup.className = 'input-group';
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email address';
    const emailWrapper = document.createElement('div');
    emailWrapper.className = 'input-wrapper';
    const emailIcon = document.createElement('img');
    emailIcon.src = "../../assets/EnvelopeSimple.png";
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter your email';
    emailWrapper.appendChild(emailIcon);
    emailWrapper.appendChild(emailInput);
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailWrapper);

    // Password
    const passGroup = document.createElement('div');
    passGroup.className = 'input-group';
    const passLabel = document.createElement('label');
    passLabel.textContent = 'Password';
    const passWrapper = document.createElement('div');
    passWrapper.className = 'input-wrapper';
    const passIcon = document.createElement('img');
    passIcon.src = '../../assets/Lock.png';
    const passInput = document.createElement('input');
    passInput.type = 'password';
    passInput.placeholder = 'Enter your password';
    passWrapper.appendChild(passIcon);
    passWrapper.appendChild(passInput);
    passGroup.appendChild(passLabel);
    passGroup.appendChild(passWrapper);

    // Opciones (remember / forgot)
    const optionsRow = document.createElement('div');
    optionsRow.className = 'options-row';
    const rememberLabel = document.createElement('label');
    const rememberCheck = document.createElement('input');
    rememberCheck.type = 'checkbox';
    rememberCheck.checked = true;
    rememberLabel.appendChild(rememberCheck);
    rememberLabel.appendChild(document.createTextNode(' Remember me'));
    const forgotLink = document.createElement('a');
    forgotLink.href = '#';
    forgotLink.textContent = 'Forgot Password?';
    optionsRow.appendChild(rememberLabel);
    optionsRow.appendChild(forgotLink);

    // Botón login
    const loginBtn = document.createElement('button');
    loginBtn.type = 'submit';
    loginBtn.className = 'btn-login';
    loginBtn.textContent = 'LOG IN';

    // Link de registro
    const registerText = document.createElement('p');
    registerText.className = 'register-text';
    registerText.innerHTML = 'Not registered yet? <a href="#">Create an Account</a>';

    // Añadir todo al formulario
    form.appendChild(emailGroup);
    form.appendChild(passGroup);
    form.appendChild(optionsRow);
    form.appendChild(loginBtn);
    form.appendChild(registerText);

    container.appendChild(form);

    return container;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').appendChild(createLoginSection());
});
