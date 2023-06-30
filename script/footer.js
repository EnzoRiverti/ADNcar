document.addEventListener('DOMContentLoaded', function() {
    //creo las variables donde van a estar el footer y la altura de la pagina
    var footer = document.getElementById('footer');
    var windowHeight = window.innerHeight;
    //creo un evento que reacciona al scroll de la pagina
    window.addEventListener('scroll', function() {
        
        var scroll = window.pageYOffset + windowHeight;
        var documentHeight = document.documentElement.scrollHeight;

        if (scroll >= documentHeight) {
            footer.style.display = 'block'; // Mostrar el footer al hacer scroll hasta el final
        } else {
            footer.style.display = 'none'; // Ocultar el footer cuando no esta al final
        }
    });
});

function mostrarAlert() {
    alert("Formulario enviado con éxito.");
  }
