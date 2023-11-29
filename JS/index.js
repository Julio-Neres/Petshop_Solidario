const btnCadastro = document.querySelector('.btn-login-subscribe');

const subscribeBox  = document.getElementById('subscribe-box');

btnCadastro.addEventListener('mouseenter', () => {
    subscribeBox.style.display = 'block';
});
//Evento para fechar o balão flutuante
subscribeBox.addEventListener('mouseleave', () => {
        subscribeBox.style.display = 'none';
});

document.querySelector('.logo').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = '/index.html'; 
});

//main container

const carrosselContainer = document.getElementById('carrosselContainer');

    carrosselContainer.innerHTML += carrosselContainer.innerHTML; 

    function resetCarrossel() {
        const firstImageWidth = carrosselContainer.firstElementChild.clientWidth;
        carrosselContainer.style.transition = 'none';
        carrosselContainer.style.transform = `translateX(-${firstImageWidth}px)`;
        setTimeout(() => {
            carrosselContainer.style.transition = '';
        });
    }

    carrosselContainer.addEventListener('transitionend', () => {
        if (carrosselContainer.style.transform === 'translateX(0px)') {
            resetCarrossel();
        }
    });

    resetCarrossel();


//animação promotion zoom passando o mouse em cima

const zoomEspaco1 = document.querySelector('.promotion-one');

const zoomAlvo1 = document.querySelector('.botom');


zoomEspaco1.addEventListener('mouseenter', () => {
    zoomAlvo1.style.transform = 'scale(1.1)';
});

zoomEspaco1.addEventListener('mouseleave', () => {
    zoomAlvo1.style.transform = 'scale(1)';
});


//zoom botão de compra

const zoomABuy1 = document.querySelector('.bottom-buy');

zoomEspaco1.addEventListener('mouseenter', () => {
    zoomABuy1.style.transform = 'scale(1.3)';
});

zoomEspaco1.addEventListener('mouseleave', () => {
    zoomABuy1.style.transform = 'scale(1)';
});

//animação promotion zoom passando o mouse em cima

const zoomEspaco2 = document.querySelector('.promotion-two');

const zoomAlvo2 = document.querySelector('.botom2');


zoomEspaco2.addEventListener('mouseenter', () => {
    zoomAlvo2.style.transform = 'scale(1.1)';
});

zoomEspaco2.addEventListener('mouseleave', () => {
    zoomAlvo2.style.transform = 'scale(1)';
});


//zoom botão de compra

const zoomBuy2 = document.querySelector('.bottom-buy2');

zoomEspaco2.addEventListener('mouseenter', () => {
    zoomBuy2.style.transform = 'scale(1.3)';
});

zoomEspaco2.addEventListener('mouseleave', () => {
    zoomBuy2.style.transform = 'scale(1)';
});

//animação promotion zoom passando o mouse em cima

const zoomEspaco3 = document.querySelector('.promotion-tree');

const zoomAlvo3 = document.querySelector('.botom3');


zoomEspaco3.addEventListener('mouseenter', () => {
    zoomAlvo3.style.transform = 'scale(1.05)';
});

zoomEspaco3.addEventListener('mouseleave', () => {
    zoomAlvo3.style.transform = 'scale(1)';
});


//zoom botão de compra

const zoomBuy3 = document.querySelector('.bottom-buy3');

zoomEspaco3.addEventListener('mouseenter', () => {
    zoomBuy3.style.transform = 'scale(1.3)';
});

zoomEspaco3.addEventListener('mouseleave', () => {
    zoomBuy3.style.transform = 'scale(1)';
});

//animação promotion zoom passando o mouse em cima

const zoomEspaco4 = document.querySelector('.promotion-four');

const zoomAlvo4 = document.querySelector('.botom4');


zoomEspaco4.addEventListener('mouseenter', () => {
    zoomAlvo4.style.transform = 'scale(1.05)';
});

zoomEspaco4.addEventListener('mouseleave', () => {
    zoomAlvo4.style.transform = 'scale(1)';
});


//zoom botão de compra

const zoomBuy4 = document.querySelector('.bottom-buy4');

zoomEspaco4.addEventListener('mouseenter', () => {
    zoomBuy4.style.transform = 'scale(1.3)';
});

zoomEspaco4.addEventListener('mouseleave', () => {
    zoomBuy4.style.transform = 'scale(1)';
});

// função de envio no botão da newslleter

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('inscricaoForm');
    const mensagemSucesso = document.getElementById('mensagemSucesso');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        showSuccessMessage('Inscrição realizada com sucesso!');
    });

    function showSuccessMessage(message) {
        mensagemSucesso.textContent = message;
        mensagemSucesso.style.display = 'block';

        setTimeout(function () {
            mensagemSucesso.style.display = 'none';
        }, 3000); 
    }

});

document.getElementById('entrar-but').addEventListener('click', function() {
    localStorage.setItem('jumpLogin', true);

    window.location.href = 'login-cadastro.html';
})



