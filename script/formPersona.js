

function validar()
{
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");
    var dia = document.getElementById("dia");
    var mes = document.getElementById("mes");
    var anio = document.getElementById("anio");
    var telefono = document.getElementById("nTelefono");
    var localidad = document.getElementById("localidad");
    var marca = document.getElementById("marca");
    var modelo = document.getElementById("modelo");
    var anioAuto = document.getElementById("anioAuto");
    var kilometraje = document.getElementById("kilometraje");
    var motor = document.getElementById("motor");
    var version = document.getElementById("version");
    var servicio = document.getElementById("servicios");
    
    var fecha = document.getElementById("fecha");
    var hora = document.getElementById("hora");

    var esValido = true;

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

    if(!validarFecha(dia.value, mes.value, anio.value)){
        invalido(dia);
        esValido = false;
    }else{
        valido(dia);
    }
    
    if(!validarFecha(dia.value, mes.value, anio.value)){
        invalido(mes);
        esValido = false;
    }else{
        valido(mes);
    }

    if(!validarFecha(dia.value, mes.value, anio.value)){
        invalido(anio);
        esValido = false;
    }else{
        valido(anio);
    }

    if(!validarNumerosEntero(telefono)){
        invalido(telefono);
        esValido = false;
    }else{
        valido(telefono);
    }
    if(!validarString(localidad.value)){
        invalido(localidad);
        esValido = false;
    }else{
        valido(localidad);
    }
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
    
    if(!validarNumerosEntero(anioAuto)){
        invalido(anioAuto);
        esValido = false;
    }else{
        valido(anioAuto);
    }

    if(!validarNumerosEntero(kilometraje)){
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
    if(!validarString(version.value)){
        invalido(version);
        esValido = false;
    }else{
        valido(version);
    }
    if(servicio.value === ""){
        invalido(servicio);
        esValido = false;
    }else{
        valido(servicio);
    }

    if(hora.value === ""){
        invalido(hora);
        esValido = false;
    }else{
        valido(hora);
    }
    if(fecha.value === ""){
        invalido(fecha);
        esValido = false;
    }else{
        valido(fecha);
    }
    if(esValido){
        document.getElementById('fomulario').reset();
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
  
  function validarNumerosEntero(valor) {
    var regex = /^\d+$/;
    return regex.test(valor.value);
  }

  function validarNumerosEnterosPositivos(valor) {
    var regex = /^\d+$/;
    return regex.test(valor);
  }

  function validarFecha(dia, mes, anio) {
    var esValido = true;
    if (!validarNumerosEnterosPositivos(dia) || !validarNumerosEnterosPositivos(mes) || !validarNumerosEnterosPositivos(anio)) {
      esValido = false; 
    }
  
    dia = parseInt(dia, 10);
    mes = parseInt(mes, 10);
    anio = parseInt(anio, 10);
  
    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || anio < 1 || anio > 2023) {
      esValido = false; 
    }
  
    var diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (mes === 2 && ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0)) {
      diasPorMes[1] = 29; 
    }
  
    if (dia > diasPorMes[mes - 1]) {
      esValido = false; 
    }
    return esValido; 

  }
  function validarDiaSemana(event) {
    var fechaSeleccionada = new Date(event.target.value);
    var diaSemana = fechaSeleccionada.getDay();
  
    
    if (diaSemana === 0) {
      event.target.value = ''; 
      alert('Por favor, selecciona una fecha de lunes a sabado.');
    }else if( diaSemana === 6){
        alert('Por favor, selecciona una fecha de lunes a sabado.');
    }
  }

  function mostrarOpcion(){

    var opcionTelefono = document.getElementById("opcion-telefono");
    var opcionSeleccionada = document.querySelector('input[name="contactar"]:checked').value;

    if(opcionSeleccionada === "telefono"){
        opcionTelefono.style.display = "block";
    }else{
        opcionTelefono.style.display = "none";
    }
  }
  
  function mostrarAlert() {
    alert("Formulario enviado con éxito.");
  }
  
  


  
  

  