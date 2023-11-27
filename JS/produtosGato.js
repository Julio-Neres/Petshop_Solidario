const btnCadastro = document.querySelector('.btn-login-subscribe');

const subscribeBox  = document.getElementById('subscribe-box');

btnCadastro.addEventListener('mouseenter', () => {
    subscribeBox.style.display = 'block';
});
//Evento para fechar o balão flutuante
subscribeBox.addEventListener('mouseleave', () => {
        subscribeBox.style.display = 'none';
});

// criando produtos da loja via JS usando DOM

document.addEventListener('DOMContentLoaded', function () {
    const listaProdutos = document.getElementById('listaProdutos');


    const produto1 = {
        imagem: '../imagens/raçãogatofranplus.png',
        nome: 'Ração GranPlus Menu Salmão <br>e Arroz para Gatos Castrados Adultos',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 169.90,
        tipo: 'Ração Seca',
    };

    const produto2 = {
        imagem: '../imagens/premium-para-gatos-adultos-castrados.png',
        nome: 'Ração Royal Canin Premium Cat<br> para Gatos Adultos Castrados',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 249.90,
        tipo: 'Ração Seca',
    };

    const produto3 = {
        imagem: '../imagens/Gato-Adulto-Castrado.png',
        nome: 'Ração Royal Canin Sterilised para<br> Gatos Adultos Castrados',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 389.90,
        tipo: 'Cama e outros',
    };

    const produto4 = {
        imagem: '../imagens/Gran-Plus-Menu-Gato-Filhote-Sabor-Frango-e-Arroz.png',
        nome: 'Ração GranPlus Frango e Arroz<br> para Gatos Filhotes',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 164.90,
        tipo: 'Ração Seca',
    };

    const produto5 = {
        imagem: '../imagens/wiskaracao.png',
        nome: 'Ração Úmida Whiskas Sachê<br> Frango ao Molho para Gatos Adultos',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 2.90,
        tipo: 'Ração Úmida',
    };

    const produto6 = {
        imagem: '../imagens/raclatacat.png',
        nome: 'Ração Úmida Whiskas Lata Patê<br> de Frango para Gatos Adultos',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 11.90,
        tipo: 'Ração Úmida',
    };

    const produto7 = {
        imagem: '../imagens/Bandeja-Higienica-Furba-Preta-Furacao.png',
        nome: 'Bandeja Furacão Pet Furba<br> Preta para Gatos',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 159.90,
        tipo: 'Caixa de Areia',
    };

    const produto8 = {
        imagem: '../imagens/Bandeja-Higienica-Classic-Preta.png',
        nome: 'Bandeja Higiênica Furacão<br> Pet Classic Preta para Gatos',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 30.00,
        tipo: 'Caixa de Areia',
    };

    const produto9 = {
        imagem: '../imagens/caixa-areia-pin.png',
        nome: 'Bandeja Sanitária Furba<br> Cinza para Gatos',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 165.00,
        tipo: 'Caixa de Areia',
    };

    const produto10 = {
        imagem: '../imagens/papreta.png',
        nome: 'Pá Higiênica <br>Durapets Preta',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 4.50,
        tipo: 'Pá coletora',
    };

    const produto11 = {
        imagem: '../imagens/ervacat.png',
        nome: 'Catnip Chalesco<br> Erva de Gato',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 19.90,
        tipo: 'Brinquedos',
    };

    const produto12 = {
        imagem: '../imagens/Varinha-Cat-Fishing-LCM-Azu.png',
        nome: 'Brinquedo LCM Varinha<br> Cat Fishing Azul para Gato',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 17.90,
        tipo: 'Brinquedos',
    };  

    const produto13 = {
        imagem: '../imagens/arvorecatbrinq.png',
        nome: 'Brinquedo Arranhador The<br> Pets Brasil Poli Bolinhas',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 190.00,
        tipo: 'Brinquedos',
    };

    const produto14 = {
        imagem: '../imagens/areiacatcat.png',
        nome: 'Areia Higiênica Meau Biodegradável<br> Grãos Finos para Gatos',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 164.90,
        tipo: 'Areia',
    };

    const produto15 = {
        imagem: '../imagens/pipcat.png',
        nome: 'Areia Sanitária Kelco<br> Pipicat Floral',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 19.90,
        tipo: 'Areia',
    };

    function criarProdutos(produto) {
        const eleProduto = document.createElement('div');
        eleProduto.className = 'porduct-containers';
        eleProduto.dataset.tipo = produto.tipo.toLowerCase();
        eleProduto.innerHTML = `
        <div class="cart">
            <div class="product">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <div class="barra-baixo-item"></div>
                <div class="product-info">
                    <p class="value1">${produto.nome}</p>
                    <div class="quanti">
                        <button class="diminuir">${produto.diminuir}</button>
                        <span class="quantidade">${produto.quantidade}</span>
                        <button class="adicionar">${produto.adicionar}</button>
                    </div>
                    <p class="value2">$${(produto.preco * produto.quantidade).toFixed(2)}</p>
                </div>
                <button class="add-to-cart">
                    <p>Adicionar ao Carrinho</p>
                </button>
            </div>
        </div>
        `;

        const diminuirBtn = eleProduto.querySelector('.diminuir');
        const adicionarBtn = eleProduto.querySelector('.adicionar');
        const quantidadeNum = eleProduto.querySelector('.quantidade');
        const value2 = eleProduto.querySelector('.value2');

        diminuirBtn.addEventListener('click', function () {
            if (produto.quantidade > 0) {
                produto.quantidade--;
                quantidadeNum.textContent = produto.quantidade;
                value2.textContent = `$${(produto.preco * produto.quantidade).toFixed(2)}`;
            }
        });

        adicionarBtn.addEventListener('click', function () {
            produto.quantidade++;
            quantidadeNum.textContent = produto.quantidade;
            value2.textContent = `$${(produto.preco * produto.quantidade).toFixed(2)}`;
        });

        return eleProduto;
    }

    listaProdutos.appendChild(criarProdutos(produto1));
    listaProdutos.appendChild(criarProdutos(produto2));
    listaProdutos.appendChild(criarProdutos(produto3));
    listaProdutos.appendChild(criarProdutos(produto4));
    listaProdutos.appendChild(criarProdutos(produto5));
    listaProdutos.appendChild(criarProdutos(produto6));
    listaProdutos.appendChild(criarProdutos(produto7));
    listaProdutos.appendChild(criarProdutos(produto8));
    listaProdutos.appendChild(criarProdutos(produto9));
    listaProdutos.appendChild(criarProdutos(produto10));
    listaProdutos.appendChild(criarProdutos(produto11));
    listaProdutos.appendChild(criarProdutos(produto12));
    listaProdutos.appendChild(criarProdutos(produto13));
    listaProdutos.appendChild(criarProdutos(produto14));
    listaProdutos.appendChild(criarProdutos(produto15));
});



document.addEventListener('DOMContentLoaded', function () {
    const listaProdutos = document.getElementById('listaProdutos');
    const customSelect = document.querySelector('.custom-select');
    const customOption = document.querySelector('.select-options');

    const produtos = Array.from(listaProdutos.children);

    function ordenarProdutosPorMenorPreco() {
        produtos.sort((a, b) => {
            const precoA = parseFloat(a.querySelector('.value2').textContent.replace('$', ''));
            const precoB = parseFloat(b.querySelector('.value2').textContent.replace('$', ''));
            return precoA - precoB;
        });

        produtos.forEach(produto => listaProdutos.appendChild(produto));
    }

    function ordenarProdutosPorMaiorPreco() {
        produtos.sort((a, b) => {
            const precoA = parseFloat(a.querySelector('.value2').textContent.replace('$', ''));
            const precoB = parseFloat(b.querySelector('.value2').textContent.replace('$', ''));
            return precoB - precoA;
        });

        produtos.forEach(produto => listaProdutos.appendChild(produto));
    }

    customSelect.addEventListener('click', () => {
        customOption.style.display = 'block';
    });

    customOption.addEventListener('mouseleave', () => {
        customOption.style.display = 'none';
    });

    const botaoMaiorPreco = document.querySelector('[value="maior-preco"]');
    const botaoMenorPreco = document.querySelector('[value="menor-preco"]');

    botaoMaiorPreco.addEventListener('click', () => {
        ordenarProdutosPorMaiorPreco();
        customOption.style.display = 'none';
    });

    botaoMenorPreco.addEventListener('click', () => {
        ordenarProdutosPorMenorPreco();
        customOption.style.display = 'none';
    });


});



//filtro lateral por tipo de produto

document.addEventListener('DOMContentLoaded', function () {
    const listaProdutos = document.getElementById('listaProdutos');
    const produtos = Array.from(listaProdutos.children);

    function mostrarTodosOsProdutos() {
        produtos.forEach(produto => (produto.style.display = 'flex'));
    }

    function filtrarPorTipo(tipo) {
        produtos.forEach(produto => {
            const tipoDoProduto = produto.dataset.tipo.toLowerCase();
            if (tipo === 'todos' || tipoDoProduto === tipo.toLowerCase()) {
                produto.style.display = 'flex';
            } else {
                produto.style.display = 'none';
            }
        });
    }

    const botoesFiltro = document.querySelectorAll('.filtroLateral button');
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function () {
            const tipo = this.dataset.tipo;
            if (tipo === 'todos') {
                mostrarTodosOsProdutos();
            } else {
                filtrarPorTipo(tipo);
            }
        });
    });

    document.getElementById('mostrarTodos').addEventListener('click', mostrarTodosOsProdutos);
});
