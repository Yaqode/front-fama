// Llama a la función para obtener y mostrar la lista de productos
obtenerListaProductos();

function obtenerListaProductos() {
    // Realiza una solicitud GET para obtener la lista de productos desde la API
    fetch("http://localhost:8090/fama-market/api/products/all")
        .then((response) => response.json())
        .then((productos) => {
            // Llama a la función para mostrar los productos en el contenedor
            mostrarProductos(productos);
        })
        .catch((error) => {
            console.error('Error al obtener la lista de productos:', error);
        });
}

function mostrarProductos(productos) {
    // Obtiene el contenedor de productos
    const contenedorProductos = document.getElementById('contenedorProductos');

    // Itera sobre la lista de productos
    productos.forEach((producto, index) => {
        // Crea un nuevo elemento de producto
        const nuevoProducto = document.createElement('div');
        nuevoProducto.className = 'item';

        // Crea un contenedor de fotos para el producto
        const contenedorFoto = document.createElement('div');
        contenedorFoto.className = 'contenedor-foto';

        // Crea una imagen para el producto
        const imagenProducto = document.createElement('img');
        imagenProducto.src = '';  // Establece la ruta de la imagen (deberías proporcionar la lógica para obtener la ruta correcta)
        imagenProducto.alt = `Producto ${index + 1}`;
        imagenProducto.id = `producto${index + 1}-imagen`;

        // Añade la imagen al contenedor de fotos
        contenedorFoto.appendChild(imagenProducto);

        // Crea un párrafo para la descripción del producto
        const descripcionProducto = document.createElement('p');
        descripcionProducto.className = 'descripcion';
        descripcionProducto.textContent = producto.nameProduct;

        // Crea un span para el precio del producto
        const precioProducto = document.createElement('span');
        precioProducto.className = 'precio';
        precioProducto.textContent = `$ ${producto.priceProduct}`;

        // Crea un enlace para ver la descripción del producto
        const enlaceDescripcion = document.createElement('a');
        enlaceDescripcion.href = 'descripcion_producto.html';  // Establece la URL correcta
        enlaceDescripcion.className = 'agregar-carrito-btn';
        enlaceDescripcion.textContent = 'Ver descripción';

        // Crea un botón para agregar al carrito
        const botonAgregarCarrito = document.createElement('button');
        botonAgregarCarrito.className = 'btn-azul';
        botonAgregarCarrito.textContent = 'Agregar al carrito';
        botonAgregarCarrito.addEventListener('click', () => agregarAlCarrito(`producto${index + 1}`));

        // Agrega los elementos al nuevo producto
        nuevoProducto.appendChild(contenedorFoto);
        nuevoProducto.appendChild(descripcionProducto);
        nuevoProducto.appendChild(precioProducto);
        nuevoProducto.appendChild(enlaceDescripcion);
        nuevoProducto.appendChild(botonAgregarCarrito);

        // Agrega el nuevo producto al contenedor de productos
        contenedorProductos.appendChild(nuevoProducto);

        // Muestra las imágenes utilizando la etiqueta <div> y <img>
        const contenedorImagenes = document.getElementById('contenedorImagenes');

        // Crea un contenedor de imágenes para el producto
        const contenedorImagenesProducto = document.createElement('div');
        contenedorImagenesProducto.className = 'imagen-container';

        // Agrega imágenes al contenedor si existen
        if (producto.imagens && producto.imagens.length > 0) {
            producto.imagens.forEach((imagen) => {
                const img = document.createElement('img');
                img.src = "data:image/jpeg;base64," + imagen.imageRoute;
                img.alt = "Imagen " + imagen.imageId;
                img.className = "imagen-thumbnail";
                img.style.width = "50px"; // Modifica el tamaño según tus necesidades
                img.style.height = "50px";
                contenedorImagenesProducto.appendChild(img);
            });
        }

        // Agrega el contenedor de imágenes del producto al contenedor general de imágenes
        contenedorImagenes.appendChild(contenedorImagenesProducto);
    });
}

function agregarAlCarrito(idProducto) {
    // Lógica para agregar el producto al carrito
    console.log(`Producto ${idProducto} agregado al carrito.`);
}
