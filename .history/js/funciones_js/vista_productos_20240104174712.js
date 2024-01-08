// Llama a la función para obtener y mostrar la lista de productos
obtenerListaProductos();
mostrarProductos();

function obtenerListaProductos() {
    // Realiza una solicitud GET para obtener la lista de productos desde la API
    fetch("http://localhost:8090/fama-market/api/products/all")
        .then((response) => response.json())
        .then((productos) => {
            // Llama a la función para mostrar los productos en el contenedor
            mostrarProductos(productos);
            console.log(productos)
        })
        .catch((error) => {
            console.error('Error al obtener la lista de productos:', error);
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

