document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos con la clase "quantity-btn"
    var quantityButtons = document.querySelectorAll(".quantity-btn");

    // Iterar sobre cada botón
    quantityButtons.forEach(function (button) {
        // Agregar un evento de clic a cada botón
        button.addEventListener("click", function () {
            // Obtener el elemento padre del botón (cart-item)
            var cartItem = this.closest(".cart-item");
            // Obtener el elemento de cantidad dentro del cart-item
            var quantityElement = cartItem.querySelector(".quantity");
            // Obtener la cantidad actual
            var currentQuantity = parseInt(quantityElement.textContent);

            // Incrementar o decrementar la cantidad según el botón presionado
            if (this.classList.contains("increment-btn")) {
                currentQuantity++;
            } else if (this.classList.contains("decrement-btn") && currentQuantity > 1) {
                currentQuantity--;
            }

            // Actualizar la cantidad en el elemento de cantidad
            quantityElement.textContent = currentQuantity;
        });
    });
});
