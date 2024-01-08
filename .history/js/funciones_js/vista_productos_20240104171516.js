agregarAlCarrito();
obtenerListaProductos();




function obtenerListaProductos() {
    // Realiza una solicitud GET para obtener la lista de productos desde la API
    fetch("http://localhost:8090/fama-market/api/products/all")
        .then((response) => response.json())
        .then((productos) => {
            // Llama a la función para mostrar los productos en la tabla
            mostrarProductosEnTabla(productos);
        })
        .catch((error) => {
            console.error('Error al obtener la lista de productos:', error);
        });
}