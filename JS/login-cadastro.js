document.addEventListener('DOMContentLoaded', function () {
    const cadastroPage = document.getElementById('cadastroPage');
    const loginPage = document.getElementById('loginPage');
    const cadastroButton = document.getElementById('cadastroButton');
    const loginButton = document.getElementById('loginButton');
    const jumpLogin = document.getElementById('jumpLogin');

    cadastroButton.addEventListener('click', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if(!username || !email || !password) {
            alert('Por favor, preencha todos os campos antes de finalizar o cadastro.');
            return;
        }

        if (localStorage.getItem(username)) {
            alert('Usuário já cadastrado. Escolha outro nome de usuário.');
            return;
        }

        localStorage.setItem(username, JSON.stringify({ email, password}));

        
        alert('Cadastro realizado com sucesso! Faça login para continuar.');
        
        setTimeout(function () {
        cadastroPage.style.display = 'none';
        loginPage.style.display = 'block';
        }, 2000);
    });

    jumpLogin.addEventListener('click', function (event) {
        event.preventDefault();

        cadastroPage.style.display = 'none';
        loginPage.style.display = 'block';
    });
    
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const cadastroPage = document.getElementById('cadastroPage');
    const loginPage = document.getElementById('loginPage');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;

        const userData = localStorage.getItem(loginUsername);

        if (!userData) {
            alert('Usuário não encontrado. Realize o cadastro.');
            return;
        }

        const { password } = JSON.parse(userData);

        if (loginPassword === password) {
            alert('Login bem-sucedido!');

            setTimeout(function () {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            alert('Senha incorreta. Tente novamente.');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const jumpLogin1 = document.getElementById('jumpLogin');

    const jumpLoginApert = localStorage.getItem('jumpLogin');

    if (jumpLoginApert) {
        jumpLogin1.click();

        localStorage.removeItem('jumpLoginApert');
    }
});