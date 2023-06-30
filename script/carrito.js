document.addEventListener('DOMContentLoaded', function() {
  //inicializo las variables donde voy a guardar los elementos del carrito(Botones de añadir,lista de items y el total)
  const addCarrito = document.querySelectorAll('.añadir-carr');
  const itemsCarrito = document.getElementById('carr-items');
  const carrTotal = document.getElementById('carr-total');

  let carrItems = [];
  let total = 0;
  
  //Itero en el boton de añadir para obtener nombre y precio
  addCarrito.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const producto = this.parentNode;
      const nombreProducto = producto.querySelector('h3').textContent;
      const precioProducto = parseFloat(producto.querySelector('p').textContent.replace('$', '').replace('.', '').trim());

      //Creo la variable del item con su nombre y el precio para despues hacer un push al carrItems
      const item = {
        name: nombreProducto,
        price: precioProducto
      };

      carrItems.push(item);
      total += precioProducto;


      const carrItem = document.createElement('li');
      carrItem.textContent = `${nombreProducto} - $${precioProducto}`;

      //funciones para crear y agregar el boton de eliminar articulo
      const btnEliminar = document.createElement('button');
      btnEliminar.classList.add('eliminar-articulo');
      btnEliminar.textContent = 'Eliminar';
      carrItem.appendChild(btnEliminar);

      
      btnEliminar.addEventListener('click', function() {
        const index = Array.from(itemsCarrito.children).indexOf(carrItem);
        carrItems.splice(index, 1);
        total -= precioProducto;
        itemsCarrito.removeChild(carrItem);
        carrTotal.textContent = `Total: $${total.toFixed(2)}`;
      });

      itemsCarrito.appendChild(carrItem);
      carrTotal.textContent = `Total: $${total.toFixed(2)}`;
    });
  });

  //le da la funcion al boton de checkout (te lleva al form de pago)
  const checkoutBtn = document.getElementById('checkout-btn');
  checkoutBtn.addEventListener('click', function() {
    if (carrItems.length > 0) {
      const consulta = `carrItems=${JSON.stringify(carrItems)}&total=${total.toFixed(2)}`;
      const checkoutUrl = `formFinalizar.html?${consulta}`;
      window.location.href = checkoutUrl;
    } else {
      alert('No hay productos en el carrito');
    }
  });
});
