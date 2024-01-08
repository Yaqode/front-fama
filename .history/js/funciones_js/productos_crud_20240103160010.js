function mostrarImagenesSeleccionadas() {
    // Obtener el campo de entrada de archivos y el contenedor de previsualización
    var inputImagenes = document.getElementById('fileInput');
    var previewContenedor = document.getElementById('previewImagenes');
    
    // Limpiar el contenedor de previsualización antes de mostrar nuevas imágenes
    previewContenedor.innerHTML = '';

    // Iterar a través de los archivos seleccionados y mostrar miniaturas
    for (var i = 0; i < inputImagenes.files.length; i++) {
        var archivo = inputImagenes.files[i];
        var imagen = document.createElement('img');
        imagen.src = URL.createObjectURL(archivo);
        imagen.alt = 'Imagen ' + (i + 1);
        imagen.style.width = '100px'; // Ajusta el tamaño según sea necesario
        imagen.style.height = '100px';
        previewContenedor.appendChild(imagen);
    }
}

$(document).ready(function () {
    // Llenar el menú desplegable de subcategorías al cargar la página
    cargarSubcategorias();
    $('#subcategoriaCombo').select2();
    // Función para cargar subcategorías desde la API
    function cargarSubcategorias() {
        $.ajax({
            url: 'http://localhost:8090/fama-market/api/subcategories/all',
            type: 'GET',
            success: function (data) {
                // Limpiar opciones existentes en el menú desplegable
                $('#subcategoriaCombo').empty();

                // Iterar sobre los datos recibidos de la API y agregar cada opción al select
                $.each(data, function (index, subcategoria) {
                    $('#subcategoriaCombo').append($('<option>', {
                        value: subcategoria.id,  // Ajusta el valor según tus necesidades
                        text: subcategoria.nameSubCategory
                    }));
                });

                // Activar select2 con funcionalidad de búsqueda
                $('#subcategoriaCombo').select2({
                    placeholder: 'Buscar subcategoría...',
                    width: '100%'
                });
            },
            error: function (error) {
                console.error('Error al cargar subcategorías:', error);
            }
        });
    }
});

// Llama a la función para obtener y mostrar los productos al cargar la página
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

function mostrarProductosEnTabla(productos) {
    // Obtén la referencia a la tabla
    var tabla = document.querySelector(".table tbody");

    // Limpiar el contenido actual de la tabla
    tabla.innerHTML = '';

    // Itera sobre los productos y agrega filas a la tabla
    productos.forEach((producto) => {
        var fila = tabla.insertRow();

        // Inserta las celdas con los datos del producto
        fila.insertCell(0).innerText = producto.productId;
        fila.insertCell(1).innerText = producto.nameProduct;
        fila.insertCell(2).innerText = producto.descriptionProduct;
        fila.insertCell(3).innerText = producto.unitMeasurement;
        fila.insertCell(4).innerText = `$${producto.priceProduct.toFixed(2)}`;
        fila.insertCell(5).innerText = `$${producto.priceDiscountProduct.toFixed(2)}`;
        fila.insertCell(6).innerText = producto.barcodeProduct;
        fila.insertCell(7).innerText = producto.codeInternalProduct;
        fila.insertCell(8).innerText = producto.amountProduct;
        fila.insertCell(9).innerText = producto.subcategory ? producto.subcategory.nameSubCategory : 'N/A';
        fila.insertCell(10).innerText = producto.subbrand ? producto.subbrand.nameSubBrand : 'N/A';

        // Muestra las imágenes utilizando la estructura proporcionada
        var celdaImagenes = fila.insertCell(11);
        var contenedorImagenes = document.createElement("div");
        contenedorImagenes.className = "imagen-container";

        // Itera sobre las imágenes del producto y crea elementos de imagen
        producto.imagens.forEach((imagen, index) => {
            var imagenElement = document.createElement("img");
            imagenElement.src = imagen; // Ajusta el campo según la estructura de tu API
            imagenElement.alt = `Imagen ${index + 1}`;
            imagenElement.className = "imagen-thumbnail";
            contenedorImagenes.appendChild(imagenElement);
        });

        celdaImagenes.appendChild(contenedorImagenes);

        // Agrega un botón para acciones (editar, eliminar, etc.)
        var celdaAcciones = fila.insertCell(12);
        celdaAcciones.innerHTML = '<button type="button" class="btn btn-editar btn-sm" data-bs-toggle="modal" data-bs-target="#modalEditarProducto">Editar</button>' +
            '<button type="button" class="btn btn-eliminar btn-sm" data-bs-toggle="modal" data-bs-target="#modalEliminarProducto">Eliminar</button>';
    });
}
