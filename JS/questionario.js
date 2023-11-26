
function validarSomenteLetras(input) {
    
    input.value = input.value.replace(/[^a-zA-ZÀ-ú]/g, '');
}


function validarCampo(campo) {
    if (campo.value.trim() === "") {
        campo.classList.add('campo-invalido');
        campo.classList.remove('campo-valido');
    } else {
        campo.classList.remove('campo-invalido');
        campo.classList.add('campo-valido');
    }
}

function validarFormulario() {
    var campos = document.forms["formulario"].getElementsByTagName("input");
    for (var i = 0; i < campos.length; i++) {
        validarCampo(campos[i]);
    }

    var camposInvalidos = document.forms["formulario"].getElementsByClassName("campo-invalido");
    if (camposInvalidos.length > 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return false; 
    }
    var checkbox = document.getElementById("checkbox");
    if (!checkbox.checked) {
        alert("Você deve concordar com a declaração para enviar o formulário.");
        return false;
    }
    return true;7
}

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validarFormulario()) {
        alert("Formulário enviado com sucesso! Boa sorte!!!");
       
    }
});
