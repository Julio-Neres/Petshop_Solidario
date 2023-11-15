const btnCadastro = document.querySelector('.btn-login-subscribe');

const subscribeBox  = document.getElementById('subscribe-box');

btnCadastro.addEventListener('mouseenter', () => {
    subscribeBox.style.display = 'block';
});
//Evento para fechar o balão flutuante
subscribeBox.addEventListener('mouseleave', () => {
        subscribeBox.style.display = 'none';
});
