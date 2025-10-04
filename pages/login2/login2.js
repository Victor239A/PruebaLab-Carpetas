export function createLoginSection() {
    const container = document.createElement('div');
    container.className = 'login-container';

    
    const topSection = document.createElement('div');
    topSection.className = 'login-top';

   
    const backArrow = document.createElement('img');
    backArrow.src = '../../assets/BackButton.png'; 
    backArrow.className = 'back-arrow';
    backArrow.addEventListener('click', async () => {
        const app = document.getElementById('app');
        app.innerHTML = '';

       
        const module = await import('../login1/login1.js');
        if (module && module.banner2) {
            app.appendChild(module.banner2());
        } else if (module && module.default) {
            app.appendChild(module.default());
        } else {
            console.error("No se encontró banner2 en login1.js");
        }
    });
    topSection.appendChild(backArrow);

    
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

   
    const girlImg = document.createElement('img');
    girlImg.src = "../../assets/Vector.png";
    girlImg.className = 'girl-img';
    topSection.appendChild(girlImg);

    container.appendChild(topSection);

   
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

  
    const loginBtn = document.createElement('button');
    loginBtn.type = 'submit';
    loginBtn.className = 'btn-login';
    loginBtn.textContent = 'LOG IN';

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
