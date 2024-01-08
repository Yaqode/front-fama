function obtenerListaProductos() {
    // Realiza una solicitud GET para obtener la lista de productos desde la API
    fetch("http://localhost:8090/fama-market/api/products/all")
        .then((response) => response.json())
        .then((productos) => {
            // Actualiza dinámicamente los elementos HTML con los datos del primer producto
            const primerProducto = productos[0];
            document.getElementById('producto1-imagen').src = primerProducto.imageRoute; // Cambia esto según la estructura real de tus datos
            document.getElementById('producto1-nombre').textContent = primerProducto.nameProduct;
            document.getElementById('producto1-precio').textContent = '$ ' + primerProducto.priceProduct.toFixed(2);
            document.getElementById('producto1-enlace').href = 'descripcion_producto.html?id=' + primerProducto.productId;
        })
        .catch((error) => {
            console.error('Error al obtener la lista de productos:', error);
        });
}

// Llama a la función para obtener y mostrar la lista de productos
obtenerListaProductos();