var arrayImages = [];

document.addEventListener("DOMContentLoaded", function () {
    $('#subcategoriaCombo').select2();


    const input = document.getElementById('fileInput');
    arrayImages = [];

    input.addEventListener('change', function () {
        const files = input.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = function () {
                const base64String = reader.result;
                arrayImages.push(base64String);
                console.log(base64String);
            };

            reader.readAsDataURL(file);

            
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Llenar el menú desplegable de subcategorías al cargar la página
    cargarSubcategorias();
    // Llenar el menú desplegable de submarcas al cargar la página
    cargarSubmarcas();
    
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
                        value: subcategoria.subCategoryId,  // Ajusta el valor según tus necesidades
                        text: subcategoria.nameSubCategory,
                        'data-id': subcategoria.id
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
    // Función para cargar submarcas desde la API
    function cargarSubmarcas() {
        $.ajax({
            url: 'http://localhost:8090/fama-market/api/subbrands/all',
            type: 'GET',
            success: function (data) {
                // Limpiar opciones existentes en el menú desplegable de submarcas
                $('#submarcaCombo').empty();

                // Iterar sobre los datos recibidos de la API y agregar cada opción al select
                $.each(data, function (index, submarca) {
                    $('#submarcaCombo').append($('<option>', {
                        value: submarca.subBrandId,  // Ajusta el valor según tus necesidades
                        text: submarca.nameSubBrand,
                        'data-id': submarca.id
                    }));
                });

                // Puedes ajustar el estilo del combo box si lo necesitas
                $('#submarcaCombo').select2({
                    placeholder: 'Buscar submarca...',
                    width: '100%'
                });
            },
            error: function (error) {
                console.error('Error al cargar submarcas:', error);
            }
        });
    }
    

});

function guardarProducto() {
    // Obtener los valores del formulario
    const nombreProducto = $('#nombreProducto').val();
    const descripcion = $('#descripcion').val();
    const unidadMedida = $('#unidad_medida').val();
    const precio = parseFloat($('#precio').val());
    const precioDescuento = parseFloat($('#precioDescuento').val()) || 0;
    const codigoBarras = $('#codigoBarras').val();
    const codigoInterno = $('#codigoInterno').val();
    const cantidadInventario = parseInt($('#cantidadInventario').val());
    // Obtener el ID de la subcategoría seleccionada
    const subcategoriaId = $('#subcategoriaCombo').val();
    const submarcaId = $('#submarcaCombo').val();

    const productoData = {
        "nameProduct": nombreProducto,
        "descriptionProduct": descripcion,
        "priceProduct": precio,
        "priceDiscountProduct": precioDescuento,
        "barcodeProduct": codigoBarras,
        "codeInternalProduct": codigoInterno,
        "amountProduct": cantidadInventario,
        "subcategoryId": subcategoriaId,
        "subbrandId": submarcaId,
        "unitMeasurement": unidadMedida
    };

    console.log('Objeto JSON a enviar:', productoData);

    // Realizar la llamada a la API para guardar el producto
    fetch('http://localhost:8090/fama-market/api/products/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productoData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Producto guardado exitosamente:', data);
    
        //Eviar a otro 
        guardarImagenes(data.productId, data.codeInternalProduct);
        // Puedes agregar lógica adicional después de guardar el producto, como cerrar el modal, actualizar la tabla, etc.
    })
    .catch(error => {
        console.error('Error al guardar el producto:', error);
    });
}

function guardarImagenes(productId, codeInternalProduct){
    var arrayImagesForSends = [];
    arrayImages.forEach(image => {
        imageProduct = {
            "imageId": 0,
            "imageRoute": image,
            "productId": productId,
            "ordenNo": codeInternalProduct
        };
        arrayImagesForSends.push(imageProduct);
    });

    console.log(arrayImagesForSends);

    // Realizar la llamada a la API para guardar el producto
    fetch('http://localhost:8090/fama-market/api/images/save/product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(arrayImagesForSends),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Imagenes guardado exitosamente:', data);
    })
    .catch(error => {
        console.error('Error al guardar el producto:', error);
    });
}


function obtenerListaMarcas() {
    // Realiza una solicitud GET para obtener la lista de marcas desde la API
    fetch("http://localhost:8090/fama-market/api/products/all")
        .then((response) => response.json())
        .then((productos) => {
            // Llama a la función para mostrar las marcas en la tabla
            mostrarProductosEnTabla(productos);
        })
        .catch((error) => {
            console.error('Error al obtener la lista de marcas:', error);
        });
}

function mostrarProductosEnTabla(marcas) {
    // Obtén la referencia a la tabla
    var tabla = document.getElementById("productosTabla");

    // Limpiar el contenido actual de la tabla
    tabla.getElementsByTagName('tbody')[0].innerHTML = '';

    // Itera sobre las marcas y agrega filas a la tabla
    productos.forEach((producto) => {
        var fila = tabla.insertRow();

        // Inserta las celdas con los datos de la marca
        fila.insertCell(0).innerText = producto.brandId;
        fila.insertCell(1).innerText = producto.nameBrand;
        // Puedes agregar más celdas según la estructura de tu API, como la imagen

         // Muestra la imagen utilizando la etiqueta <img>
        var celdaImagen = fila.insertCell(2);
        var imagen = document.createElement("img");
        imagen.src = "data:image/jpeg;base64,"+marca.linkImageBrand;
        console.log("Ruta de la imagen:", marca.linkImageBrand); // Agrega un log para depurar
        imagen.alt = marca.nameBrand; 
        imagen.style.width = "50px"; 
        celdaImagen.appendChild(imagen);

        // Agrega un botón para acciones (editar, eliminar, etc.)
        var celdaAcciones = fila.insertCell(3);
        celdaAcciones.innerHTML =   '<button type="button" class="btn btn-editar btn-sm" data-bs-toggle="modal" data-bs-target="#modalEditarMarcas">Editar</button>' +
                                    '<button type="button" class="btn btn-eliminar btn-sm" data-bs-toggle="modal" data-bs-target="#modalEliminarMarca">Eliminar</button>';
    });
}