const customSelect = document.querySelector('.custom-select');
const selectOptions = document.querySelector('.select-options');

customSelect.addEventListener('click', () => {
    customSelect.classList.toggle('active');
});

const diminuirBotao = document.getElementById('diminuir')
const adicionarBotao = document.getElementById('adicionar')
const quantidadeTela = document.getElementById('quantidade')

let quantidade = 0;

diminuirBotao.addEventListener('click', () => {
    if (quantidade > 0) {
        quantidade--;
        quantidadeTela.textContent = quantidade;
    }
});

adicionarBotao.addEventListener('click', () => {
        quantidade++;
        quantidadeTela.textContent = quantidade;
});