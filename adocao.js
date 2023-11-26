let currentSlides = [0, 0, 0];

function showSlide(carouselIndex, index) {
    const carouselId = `carousel${carouselIndex + 1}`;
    const slides = document.querySelector(`.faixa-${carouselId}`);
    const slideWidth = slides.children[0].offsetWidth;

    if (index >= 0 && index < slides.children.length) {
        currentSlides[carouselIndex] = index;
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }
}

function prevSlide(carouselIndex) {
    showSlide(carouselIndex, currentSlides[carouselIndex] - 1);
}

function nextSlide(carouselIndex) {
    showSlide(carouselIndex, currentSlides[carouselIndex] + 1);
}


for (let i = 0; i < 3; i++) {
    const prevButton = document.getElementById(`anterior${i + 1}`);
    const nextButton = document.getElementById(`proximo${i + 1}`);

    prevButton.addEventListener('click', () => prevSlide(i));
    nextButton.addEventListener('click', () => nextSlide(i));
}

const coracao1 = document.querySelector('#coracao1');
const coracao2 = document.querySelector('#coracao2');
const coracao3 = document.querySelector('#coracao3');

let coracaoClicado1 = false;
let coracaoClicado2 = false;
let coracaoClicado3 = false;

coracao1.addEventListener('click', function () {
  coracaoClicado1 = !coracaoClicado1;
  atualizarCor(coracao1, coracaoClicado1);
});

coracao2.addEventListener('click', function () {
  coracaoClicado2 = !coracaoClicado2;
  atualizarCor(coracao2, coracaoClicado2);
});

coracao3.addEventListener('click', function () {
  coracaoClicado3 = !coracaoClicado3;
  atualizarCor(coracao3, coracaoClicado3);
});

function atualizarCor(coracao, clicado) {
  if (clicado) {
    coracao.style.color = 'red';
  } else {
    coracao.style.color = 'white';
  }
}

function mostrarPopup() {
  var popup = document.getElementById('popup-container');
  popup.style.display = 'flex'; // ou 'block', dependendo do estilo do seu popup
}

function fecharPopup() {
  var popup = document.getElementById('popup-container');
  popup.style.display = 'none';
}

function prosseguirParaFormulario() {
  
  window.location.href = "questionario-doacao.html";
}