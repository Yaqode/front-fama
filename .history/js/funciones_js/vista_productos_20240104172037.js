obtenerListaProductos();

function obtenerListaProductos() {
    // Realiza una solicitud GET para obtener la lista de productos desde la API
    fetch("http://localhost:8090/fama-market/api/products/all")
        .then((response) => response.json())
        .then((productos) => {
            // Llama a la función para mostrar los productos en la tabla
            mostrarProductos(productos);
        })
        .catch((error) => {
            console.error('Error al obtener la lista de productos:', error);
        });
}

function mostrarProductos(productos) {
    // Verifica si hay al menos un producto
    if (productos.length > 0) {
        const primerProducto = productos[0];

        // Muestra las propiedades del primer producto en el diseño
        document.getElementById('producto1-nombre').textContent = primerProducto.nameProduct || 'Nombre no disponible';
        document.getElementById('producto1-precio').textContent = `$ ${primerProducto.priceProduct.toFixed(2)}` || 'Precio no disponible';

        // Muestra las imágenes utilizando la etiqueta <div> y <img>
        const contenedorImagenes = document.getElementById('producto1-imagen');
        contenedorImagenes.innerHTML = '';  // Limpia el contenedor de imágenes antes de agregar nuevas

        if (primerProducto.imagens && primerProducto.imagens.length > 0) {
            primerProducto.imagens.forEach((imagen) => {
                const img = document.createElement('img');
                img.src = 'data:image/jpeg;base64,' + imagen.imageRoute;
                img.alt = 'Imagen ' + imagen.imageId;
                img.className = 'imagen-thumbnail';
                img.style.width = '50px'; // Modifica el tamaño según tus necesidades
                img.style.height = '50px';
                contenedorImagenes.appendChild(img);
            });
        }

        // Actualiza el enlace con el ID del producto (si está disponible)
        document.getElementById('producto1-enlace').href = 'descripcion_producto.html?id=' + (primerProducto.productId || '');
    }
}
