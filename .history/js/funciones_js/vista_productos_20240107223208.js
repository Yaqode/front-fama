obtenerListaProductos();

function obtenerListaProductos() {
    const token = sessionStorage.getItem("jwt"); // Nombre del token en sessionStoreNg
    console.log(token);
    // Verificar si se encontró un token
    if (!token) {
        console.error("No se encontró un token en sessionStoreNg");
        return;
    }

    // Configurar los encabezados con el token
    const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    });

    // Realiza una solicitud GET para obtener la lista de productos desde la API
    fetch("http://localhost:8090/fama-market/api/products/all", { headers })
        .then((response) => response.json())
        .then((productos) => {
            // Llama a la función para mostrar los productos en la tabla
            mostrarProductosEnTabla(productos);
        })
        .catch((error) => {
            console.error("Error al obtener la lista de productos:", error);
        });
}

function mostrarProductos(productos) {
    // Itera sobre la lista de productos
    productos.forEach((producto, index) => {
        // Obtiene el elemento del producto por su ID
        const elementoProducto = document.getElementById(`producto${index + 1}`);

        // Verifica si el elemento existe
        if (elementoProducto) {
            // Obtiene los elementos hijos del producto
            const contenedorFoto = elementoProducto.querySelector('.contenedor-foto');
            const nombreProducto = elementoProducto.querySelector('.descripcion');
            const precioProducto = elementoProducto.querySelector('.precio');

            // Verifica si los elementos hijos existen
            if (contenedorFoto && nombreProducto && precioProducto) {
                // Agrega las imágenes al contenedor de fotos si existen
                if (producto.imagens && producto.imagens.length > 0) {
                    producto.imagens.forEach((imagen) => {
                        const img = document.createElement('img');
                        img.src = "data:image/jpeg;base64," + imagen.imageRoute;
                        img.alt = "Imagen " + imagen.imageId;
                        img.className = "imagen-thumbnail";
                        img.style.width = "50px"; // Modifica el tamaño según tus necesidades
                        img.style.height = "50px";
                        contenedorFoto.appendChild(img);
                    });
                }

                // Agrega el nombre del producto al elemento correspondiente
                nombreProducto.textContent = producto.nameProduct;

                // Agrega el precio del producto al elemento correspondiente
                precioProducto.textContent = `$ ${producto.priceProduct}`;
            }
        }
    });
}


