let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.faixa-carousel');
    const slideWidth = document.querySelector('.slide-carousel').offsetWidth;

    if (index >= 0 && index < slides.children.length) {
        currentSlide = index;
        slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

const coracao = document.getElementById('coracao');

let coracaoClicado = false;

coracao.addEventListener('click', function () {
  coracaoClicado = !coracaoClicado;

  if (coracaoClicado) {
    coracao.style.color = 'red';
  } else {
    coracao.style.color = 'white';
  }
});