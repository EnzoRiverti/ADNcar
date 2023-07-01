

function validar() {
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");
    var ndocumento = document.getElementById("ndocumento");
    var direccion = document.getElementById("direccion");
    var localidad = document.getElementById("localidad");
    var codigoPostal = document.getElementById("codigoPostal");
    var nroTarjeta = document.getElementById("nroTarjeta");
    var nombreTarget = document.getElementById("nombreTarget");
    var CVV = document.getElementById("CVV");
    var mesVen = document.getElementById("mesVen");
    var anioVen = document.getElementById("anioVen");
    var direccionP = document.getElementById("direccionP");
    var localidadT = document.getElementById("localidadT");

    var esValido = true;

    if (nombre.value === "" || !validarString(nombre.value)) {
        invalido(nombre);
        esValido = false;
    } else {
        valido(nombre);
    }

    if (apellido.value === "" || !validarString(apellido.value)) {
        invalido(apellido);
        esValido = false;
    } else {
        valido(apellido);
    }

    if (email.value === "" || !validarEmail(email.value)) {
        invalido(email);
        esValido = false;
    } else {
        valido(email);
    }

    if (ndocumento.value === "" || !validarNumerosEntero(ndocumento)) {
        invalido(ndocumento);
        esValido = false;
    } else {
        valido(ndocumento);
    }

    if (direccion.value === "") {
        invalido(direccion);
        esValido = false;
    } else {
        valido(direccion);
    }

    if (localidad.value === "" || !validarString(localidad.value)) {
        invalido(localidad);
        esValido = false;
    } else {
        valido(localidad);
    }

    if (codigoPostal.value === "" || !validarNumerosEntero(codigoPostal)) {
        invalido(codigoPostal);
        esValido = false;
    } else {
        valido(codigoPostal);
    }

    if (nroTarjeta.value === "" || !validarNumerosEntero(nroTarjeta)) {
        invalido(nroTarjeta);
        esValido = false;
    } else {
        valido(nroTarjeta);
    }

    if (nombreTarget.value === "" || !validarString(nombreTarget.value)) {
        invalido(nombreTarget);
        esValido = false;
    } else {
        valido(nombreTarget);
    }

    if (CVV.value === "" || !validarNumerosEntero(CVV)) {
        invalido(CVV);
        esValido = false;
    } else {
        valido(CVV);
    }

    if (mesVen.value === "" || anioVen.value === "" || !validarFecha(mesVen.value, anioVen.value)) {
        invalido(mesVen);
        invalido(anioVen);
        esValido = false;
    } else {
        valido(mesVen);
        valido(anioVen);
    }
    if (direccionP.value === "") {
        invalido(direccionP);
        esValido = false;
    } else {
        valido(direccionP);
    }

    if (localidadT.value === "" || !validarString(localidadT.value)) {
        invalido(localidadT);
        esValido = false;
    } else {
        valido(localidadT);
    }
    if(esValido){
        mostrarAlert();
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

  function validarFecha(mes, anio) {
    var esValido = true;
    if (!validarNumerosEnterosPositivos(mes) || !validarNumerosEnterosPositivos(anio)) {
        esValido = false; 
    }
  
    mes = parseInt(mes, 10);
    anio = parseInt(anio, 10);
  
    if (mes < 1 || mes > 12 || anio < 1 || anio > 99) {
        esValido = false; 
    }
  
    var fechaActual = new Date();
    var anioActual = fechaActual.getFullYear() % 100; // Obtiene los dos últimos dígitos del año actual
  
    if (anio < anioActual) {
        esValido = false;
    } else if (anio === anioActual && mes < (fechaActual.getMonth() + 1)) {
        esValido = false;
    }

    return esValido;
}

  function validarDiaSemana(event) {
    var fechaSeleccionada = new Date(event.target.value);
    var diaSemana = fechaSeleccionada.getDay();
  
    
    if (diaSemana === 0 || diaSemana === 6) {
      event.target.value = ''; 
      alert('Por favor, selecciona una fecha de lunes a viernes.');
    }
  }

  
  
  function mostrarAlert() {
    alert("Compra realizada.Los comprobantes fueron enviados a su email");
  }
  

  
  


  
  

  