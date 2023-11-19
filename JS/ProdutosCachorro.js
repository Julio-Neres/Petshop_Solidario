const btnCadastro = document.querySelector('.btn-login-subscribe');

const subscribeBox = document.getElementById('subscribe-box');

btnCadastro.addEventListener('mouseenter', () => {
    subscribeBox.style.display = 'block';
});

subscribeBox.addEventListener('mouseleave', () => {
    subscribeBox.style.display = 'none';
});

// criando produtos da loja via JS usando DOM

document.addEventListener('DOMContentLoaded', function () {
    const listaProdutos = document.getElementById('listaProdutos');

    const produto1 = {
        imagem: '../img_ProdutosCachorro/Almofada Retangular Meau Cinza.png',
        nome: 'Almofada Retangular<br>Meau Cinza',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 79.90,
        tipo: 'Cama e outros',
    };

    const produto2 = {
        imagem: '../img_ProdutosCachorro/Brinquedo_Jambo_Mordedor_Pelúcia_Macaco_Kelev_Preto.png',
        nome: 'Brinquedo Jambo Mordedor Pelúcia Macaco Kelev Preto',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 39.90,
        tipo: 'Brinquedos',
    };

    const produto3 = {
        imagem: '../img_ProdutosCachorro/Cama_Luppet_Iglu_3_em_1_com_Estampa_Cachorr.png',
        nome: 'Cama Luppet Iglu 3 em 1 com Estampa Cachorro',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 189.90,
        tipo: 'Cama e outros',
    };

    const produto4 = {
        imagem: '../img_ProdutosCachorro/Osso_Snack_Show_para_Cães_Adultos_Kr.png',
        nome: 'Osso Snack Show para <br>Cães Adultos Kr',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 34.90,
        tipo: 'Petiscos',
    };

    const produto5 = {
        imagem: '../img_ProdutosCachorro/Pelúcia_Future_Pet_Netflix_Login.png',
        nome: 'Pelúcia Future Pet<br>Netflix Login',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 109.90,
        tipo: 'Brinquedos',
    };

    const produto6 = {
        imagem: '../img_ProdutosCachorro/Ração_GranPlus_Choice_Frango_e_Carne_para_Cães_Adultos.png',
        nome: 'Ração GranPlus Choice<br>Frango e Carne para Cães Adultos',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 204.90,
        tipo: 'Ração Seca',
    };

    const produto7 = {
        imagem: '../img_ProdutosCachorro/Ração_Royal_Canin_Mini_Indoor_Junior_para_Cães_Filhotes.png',
        nome: 'Ração Royal Canin Mini Indoor<br>Junior para Cães Filhotes',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 134.90,
        tipo: 'Ração Seca',
    };

    const produto8 = {
        imagem: '../img_ProdutosCachorro/Ração_Royal_Canin_para_Cães_Adultos_da_Raça_Golden_Retriever.png',
        nome: 'Ração Royal Canin para Cães Adultos<br>da Raça Golden Retriever',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 344.90,
        tipo: 'Ração Seca',
    };

    const produto9 = {
        imagem: '../img_ProdutosCachorro/Ração_Seca_PremieR_Pet_Golden_Seleção_Natural_para_Cães_Filhote.png',
        nome: 'Ração Seca Premier Pet Golden Seleção Natural para Cães Filhotes',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 156.90,
        tipo: 'Ração Seca',
    };

    const produto10 = {
        imagem: '../img_ProdutosCachorro/Ração_Úmida_Pedigree_Sachê_Cordeiro_ao_Molho_para_Cães_Adultos_de_Raças_Pequenas.png',
        nome: 'Ração Pedigree Sachê Cordeiro ao Molho para Cães Adultos de Raças Pequenas',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 2.90,
        tipo: 'Ração Úmida',
    };

    const produto11 = {
        imagem: '../img_ProdutosCachorro/True.png',
        nome: 'Ração Úmida True Mixer Frango,<br>Cenoura e Brócolis para Cães',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 19.90,
        tipo: 'Ração Úmida',
    };

    const produto12 = {
        imagem: '../img_ProdutosCachorro/Shampoo_Sanol_Dog_Antipulgas_para_Cãe.png',
        nome: 'Shampoo Sanol Dog<br>Antipulgas para Cães',
        diminuir: '-',
        adicionar: '+',
        quantidade: 1,
        preco: 24.90,
        tipo: 'Shampoos e cosméticos',
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
