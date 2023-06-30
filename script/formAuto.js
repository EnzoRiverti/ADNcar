function validarPersona()
{
    var marca = document.getElementById("marca");
    var modelo = document.getElementById("modelo");
    var anioAuto = document.getElementById("anioAuto");
    var kilometraje = document.getElementById("kilometraje");
    var motor = document.getElementById("motor");
    var version = document.getElementById("version");
    

    var esValido = true;

    if(marca.value === "" || !validarString(marca.value)){
        invalido(marca);
        esValido = false;
    }else{
        valido(marca);
    }

    if(modelo.value === "" || !validarString(modelo.value)){
        invalido(modelo);
        esValido = false;
    }else{
        valido(modelo);
    }
    
    if(!validarNumerosEntero(anioAuto.value)){
        invalido(anioAuto);
        esValido = false;
    }else{
        valido(anioAuto);
    }

    if(!validarNumerosEntero(kilometraje.value)){
        invalido(kilometraje);
        esValido = false;
    }else{
        valido(kilometraje);
    }
    
    if(motor.value === ""){
        invalido(motor);
        esValido = false;
    }else{
        valido(motor);
    }
    if(!validarString(version)){
        invalido(version);
        esValido = false;
    }else{
        valido(version);
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
function validarNumerosEntero(valor) {
    var regex = /^\d+$/;
    return regex.test(valor);
  }