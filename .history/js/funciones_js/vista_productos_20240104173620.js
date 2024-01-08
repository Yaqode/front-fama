// Llama a la función para obtener y mostrar la lista de productos
obtenerListaProductos();

function obtenerListaProductos() {
    // Realiza una solicitud GET para obtener la lista de productos desde la API
    fetch("http://localhost:8090/fama-market/api/products/all")
        .then((response) => response.json())
        .then((productos) => {
            // Llama a la función para mostrar los productos en el contenedor
            mostrarProductos(productos);
            console.log()
        })
        .catch((error) => {
            console.error('Error al obtener la lista de productos:', error);
        });
}

    function mostrarProductos(productos) {
    
}

function agregarAlCarrito(idProducto) {
    // Lógica para agregar el producto al carrito
    console.log(`Producto ${idProducto} agregado al carrito.`);
}
