const input = document.getElementById('fileInput');
const imageContainer = document.getElementById('imagenes');

input.addEventListener('change', function () {
    // Limpiar el contenedor de imágenes antes de mostrar nuevas imágenes
    imageContainer.innerHTML = '';

    for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function () {
            const base64String = reader.result;
            console.log(base64String);

            // Mostrar la imagen en el contenedor
            const imagen = document.createElement('img');
            imagen.src = base64String;
            imagen.alt = 'Imagen ' + (i + 1);
            imagen.style.width = '100px'; // Ajusta el tamaño según sea necesario
            imagen.style.height = '100px';
            imageContainer.appendChild(imagen);
        };
    }
});

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
            const file = input.files[0];
            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = function () {
                const base64String = reader.result;
                console.log(base64String);
            };
        });
