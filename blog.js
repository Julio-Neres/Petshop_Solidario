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


let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},5000)


function nextImage(){
    count++;
    if(count>4){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;

}




function toogleTexto1() {
    var adocaoresponsavel = document.getElementById("adocaoresponsavel");

    
    var isExpanded = adocaoresponsavel.style.maxHeight === "none" || adocaoresponsavel.style.maxHeight === "";

  
    if (isExpanded) {
        adocaoresponsavel.style.maxHeight = "100px"; 
    } else {
        adocaoresponsavel.style.maxHeight = null; 
    }
    var botao =document.getElementById("botao1");
    botao.innerText = isExpanded? "Ver mais" : "Ver menos";
}

function toogleTexto2() {
    var castracaopediatrica = document.getElementById("castracaopediatrica");

    
    var isExpanded = castracaopediatrica.style.maxHeight === "none" || castracaopediatrica.style.maxHeight === "";

  
    if (isExpanded) {
        castracaopediatrica.style.maxHeight = "100px"; 
    } else {
        castracaopediatrica.style.maxHeight = null; 
    }
    var botao = document.getElementById("botao2");
            botao.innerText = isExpanded ? "Ver mais" : "Ver menos";
}
