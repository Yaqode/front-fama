function obtenerListaProductos() {
    // Realiza una solicitud GET para obtener la lista de productos desde la API
    fetch("http://localhost:8090/fama-market/api/products/all")
        .then((response) => response.json())
        .then((productos) => {
            // Llama a la función para mostrar los productos en el diseño
            mostrarProductos(productos);
        })
        .catch((error) => {
            console.error('Error al obtener la lista de productos:', error);
        });
}

function mostrarProductos(productos) {
    // Recorre la lista de productos y muestra cada uno
    productos.forEach((producto, index) => {
        // Obtén los elementos HTML correspondientes al producto
        const contenedorFoto = document.getElementById(`producto${index + 1}-imagen`);
        
        // Limpia el contenedor de imágenes
        contenedorFoto.innerHTML = "";

        // Crea un nuevo contenedor de imágenes
        const contenedorImagenes = document.createElement("div");
        contenedorImagenes.className = "imagen-container";

        // Agrega imágenes al contenedor si existen
        if (producto.imagens && producto.imagens.length > 0) {
            producto.imagens.forEach((imagen) => {
                // Crea un elemento <img> para cada imagen
                const img = document.createElement("img");
                img.src = "data:image/jpeg;base64," + imagen.imageRoute;
                img.alt = `Imagen ${imagen.imageId}`;
                img.className = "imagen-thumbnail";
                img.style.width = "50px"; // Modifica el tamaño según tus necesidades
                img.style.height = "50px";
                
                // Agrega la imagen al contenedor de imágenes
                contenedorImagenes.appendChild(img);
            });
        }

        // Agrega el contenedor de imágenes al contenedor de foto del producto
        contenedorFoto.appendChild(contenedorImagenes);
    });
}

// Llama a la función para obtener y mostrar la lista de productos
obtenerListaProductos();
