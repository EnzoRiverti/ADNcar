document.addEventListener('DOMContentLoaded', function() {
  const addCarrito = document.querySelectorAll('.añadir-carr');
  const itemsCarrito = document.getElementById('carr-items');
  const carrTotal = document.getElementById('carr-total');

  let carrItems = JSON.parse(localStorage.getItem('carrItems')) || [];
  let total = parseFloat(localStorage.getItem('total')) || 0;

  function actualizarCarrito() {
    itemsCarrito.innerHTML = '';
    carrItems.forEach(function(item) {
      const carrItem = document.createElement('li');
      carrItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

      const btnEliminar = document.createElement('button');
      btnEliminar.classList.add('eliminar-articulo');
      btnEliminar.textContent = 'Eliminar';
      carrItem.appendChild(btnEliminar);

      btnEliminar.addEventListener('click', function() {
        const index = carrItems.indexOf(item);
        carrItems.splice(index, 1);
        total -= item.price;
        localStorage.setItem('carrItems', JSON.stringify(carrItems));
        localStorage.setItem('total', total.toFixed(2));
        actualizarCarrito();
      });

      itemsCarrito.appendChild(carrItem);
    });

    carrTotal.textContent = `Total: $${total.toFixed(2)}`;
  }

  actualizarCarrito();

  addCarrito.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const producto = this.parentNode;
      const nombreProducto = producto.querySelector('h3').textContent;
      const precioProducto = parseFloat(producto.querySelector('p').textContent.replace('$', '').replace('.', '').trim());

      const item = {
        name: nombreProducto,
        price: precioProducto
      };

      carrItems.push(item);
      total += precioProducto;

      localStorage.setItem('carrItems', JSON.stringify(carrItems));
      localStorage.setItem('total', total.toFixed(2));

      actualizarCarrito();
    });
  });

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
