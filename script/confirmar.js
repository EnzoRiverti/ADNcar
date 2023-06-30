function validar()
{
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");
    var textArea = document.getElementById("textArea");

    if(nombre.value === "" || !validarString(nombre.value)){
        invalido(nombre);
        esValido = false;
    }else{
        valido(nombre);
    }

    if(apellido.value === "" || !validarString(apellido.value)){
        invalido(apellido);
        esValido = false;
    }else{
        valido(apellido);
    }
    
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