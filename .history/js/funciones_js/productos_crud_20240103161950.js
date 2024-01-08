
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

const input = document.getElementById('fileInput');
        const imageContainer = document.getElementById('imagenes');

        input.addEventListener('change', function () {
            const files = input.files;

            // Limpiar el contenedor de imágenes antes de mostrar nuevas imágenes
            imageContainer.innerHTML = '';

            // Iterar sobre cada archivo seleccionado
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();

                reader.readAsDataURL(file);

                reader.onload = function () {
                    const base64String = reader.result;

                    // Crear un elemento de imagen y mostrarlo en el contenedor
                    const imgElement = document.createElement('img');
                    imgElement.src = base64String;
                    imgElement.alt = 'Imagen ' + (i + 1);

                    // Agregar la imagen al contenedor
                    imageContainer.appendChild(imgElement);
                };
            }
        });
