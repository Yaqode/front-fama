$(document).ready(function () {
    // ...

    console.log("Antes de Select2:", $('#subcategoriaCombo'));

    // Inicializar Select2 para el elemento con ID 'subcategoriaCombo'
    $('#subcategoriaCombo').select2();

    console.log("Después de Select2:", $('#subcategoriaCombo'));

    // Resto de tu código...

    // ...
});


function mostrarImagenesSeleccionadas() {
    // Obtener el campo de entrada de archivos y el contenedor de previsualización
    var inputImagenes = document.getElementById('imagenes');
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
