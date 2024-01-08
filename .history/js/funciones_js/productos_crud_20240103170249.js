document.addEventListener("DOMContentLoaded", function () {
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

    const input = document.getElementById('fileInput');
    const imageContainer = document.getElementById('fileInput');  // Cambiado de 'imagenes' a 'fileInput'

    input.addEventListener('change', function () {
        const files = input.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = function () {
                const base64String = reader.result;
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
                        text: submarca.nameSubBrand
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
    const nombreProducto = document.getElementById('nombreProducto').value;
    const descripcion = document.getElementById('descripcion').value;
    const unidadMedida = document.getElementById('unidad_medida').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const precioDescuento = parseFloat(document.getElementById('precioDescuento').value) || 0;
    const codigoBarras = document.getElementById('codigoBarras').value;
    const codigoInterno = document.getElementById('codigoInterno').value;
    const cantidadInventario = parseInt(document.getElementById('cantidadInventario').value);
    const subcategoriaId = document.getElementById('subcategoriaCombo').value;
    const submarcaId = document.getElementById('submarcaCombo').value;


    
    const productoData = {
        "productId": 0,
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
        // Puedes agregar lógica adicional después de guardar el producto, como cerrar el modal, actualizar la tabla, etc.
    })
    .catch(error => {
        console.error('Error al guardar el producto:', error);
    });
}

