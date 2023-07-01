function validar()
{
   
    var email = document.getElementById("email");
    var textArea = document.getElementById("textArea");
    esValido = true;
    if(!validarEmail(email.value)){
        invalido(email);
        esValido = false;
    }else{
        valido(email);
    }
    if(textArea.value === "" || !validarString(textArea.value)){
        invalido(textArea);
        esValido = false;
    }else{
        valido(textArea);
    }
    if(esValido){
        mostrarAlert();
        document.getElementById('form').reset();
    }

    return esValido;
}


function invalido(campo){
    campo.style.borderColor = "red";
}
function valido(campo){
    campo.style.borderColor = "green";
}

function validarString(valor) {
    var expresionRegular = /^[a-zA-Z\s]*$/;
    return expresionRegular.test(valor);
}

function validarEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  function mostrarAlert() {
    alert("El reclamo fue enviado.");
  }
