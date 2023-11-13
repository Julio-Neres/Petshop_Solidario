const btnSubscribe = document.querySelector('.btn-login-subscribe');
const boxFlutuante = document.getElementById('subscribe-box');

btnSubscribe.addEventListener('mouseenter', () => {
    boxFlutuante.style.opacity = '1';
    boxFlutuante.style.display = 'block';
});

btnSubscribe.addEventListener('mouseleave', () => {
    setTimeout(() => {
        boxFlutuante.style.opacity = '0';
    }, 9500); 
});

btnSubscribe.addEventListener('mouseleave', () => {
    setTimeout(() => {
        boxFlutuante.style.opacity = '0';
    }, 9500); 
});

boxFlutuante.addEventListener('mouseleave', () => {
    setTimeout(() => {
        boxFlutuante.style.opacity = '1';
    }, 500); 
});
