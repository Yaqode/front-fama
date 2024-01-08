// Llama a la función para obtener y mostrar la lista de productos
obtenerListaProductos();
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
    // Obtén el contenedor donde se mostrarán los productos
    const contenedorProductos = document.getElementById('contenedorProductos');

    // Itera sobre la lista de productos y crea un div para cada uno
    productos.forEach((producto, index) => {
        // Crea un nuevo div con la clase 'item'
        const nuevoProducto = document.createElement('div');
        nuevoProducto.className = 'item';

        // Crea un contenedor para la imagen
        const contenedorImagenes = document.createElement('div');
        contenedorImagenes.className = 'contenedor-foto';

        // Crea una imagen y configúrala con la ruta de la primera imagen del producto
        const imagenProducto = document.createElement('img');
        imagenProducto.src = `data:image/jpeg;base64,${producto.imagens[0].imageRoute}`;
        imagenProducto.alt = `Producto ${index + 1}`;
        imagenProducto.id = `producto${index + 1}-imagen`;

        // Agrega la imagen al contenedor de imágenes
        contenedorImagenes.appendChild(imagenProducto);

        // Crea un párrafo para la descripción
        const descripcionProducto = document.createElement('p');
        descripcionProducto.className = 'descripcion';
        descripcionProducto.textContent = producto.nameProduct;

        // Crea un span para el precio
        const precioProducto = document.createElement('span');
        precioProducto.className = 'precio';
        precioProducto.textContent = `$ ${producto.priceProduct}`;

        // Crea un enlace para ver la descripción (puedes ajustar la URL según sea necesario)
        const enlaceDescripcion = document.createElement('a');
        enlaceDescripcion.href = `descripcion_producto.html?productId=${producto.productId}`;
        enlaceDescripcion.className = 'agregar-carrito-btn';
        enlaceDescripcion.textContent = 'Ver descripción';

        // Crea un botón para agregar al carrito
        const botonCarrito = document.createElement('button');
        botonCarrito.className = 'btn-azul';
        botonCarrito.textContent = 'Agregar al carrito';
        // Usa la función agregarAlCarrito pasando el ID del producto
        botonCarrito.onclick = function() {
            agregarAlCarrito(`producto${index + 1}`);
        };

        // Agrega los elementos al nuevo producto
        nuevoProducto.appendChild(contenedorImagenes);
        nuevoProducto.appendChild(descripcionProducto);
        nuevoProducto.appendChild(precioProducto);
        nuevoProducto.appendChild(enlaceDescripcion);
        nuevoProducto.appendChild(botonCarrito);

        // Agrega el nuevo producto al contenedor principal
        contenedorProductos.appendChild(nuevoProducto);
    });
}


// Asegúrate de obtener los datos almacenados en sessionStorage
const productoSeleccionado = JSON.parse(sessionStorage.getItem('productoSeleccionado'));

// Verifica si hay datos almacenados
if (productoSeleccionado) {
    // Actualiza la fuente de las imágenes del carrusel
    const carouselInner = document.querySelector('.carousel-inner');
    productoSeleccionado.imagens.forEach((imagen, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        const imagenElement = document.createElement('img');
        imagenElement.src = `data:image/jpeg;base64,${imagen.imageRoute}`;
        imagenElement.alt = `Imagen ${index + 1}`;
        imagenElement.className = 'd-block w-100';

        carouselItem.appendChild(imagenElement);
        carouselInner.appendChild(carouselItem);
    });

    // Actualiza el título, precio y descripción
    document.querySelector('.product-title').textContent = productoSeleccionado.nameProduct;
    document.querySelector('.product-price').textContent = `$ ${productoSeleccionado.priceProduct}`;
    document.querySelector('.description-text p').textContent = productoSeleccionado.descriptionProduct;
    document.querySelector('.quantity-container span').textContent = `Piezas: ${productoSeleccionado.amountProduct}`;
    document.querySelector('.quantity-container span').textContent = `Marca: ${productoSeleccionado.subbrand.nameSubBrand}`;
}

