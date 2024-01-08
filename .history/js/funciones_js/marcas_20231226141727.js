$(function () {
    // Llama a la función para obtener y mostrar las marcas al cargar la página
    obtenerListaMarcas();
});

function obtenerListaMarcas() {
    // Realiza una solicitud GET para obtener la lista de marcas desde la API
    fetch("http://localhost:8090/fama-market/api/brands/all")
        .then((response) => response.json())
        .then((marcas) => {
            // Llama a la función para mostrar las marcas en la tabla
            mostrarMarcasEnTabla(marcas);
        })
        .catch((error) => {
            console.error('Error al obtener la lista de marcas:', error);
        });
}

function mostrarMarcasEnTabla(marcas) {
    // Obtén la referencia a la tabla
    var tabla = document.getElementById("marcasTabla");

    // Limpiar el contenido actual de la tabla
    tabla.getElementsByTagName('tbody')[0].innerHTML = '';

    // Itera sobre las marcas y agrega filas a la tabla
    marcas.forEach((marca) => {
        var fila = tabla.insertRow();

        // Inserta las celdas con los datos de la marca
        fila.insertCell(0).innerText = marca.brandId;
        fila.insertCell(1).innerText = marca.nameBrand;
        // Puedes agregar más celdas según la estructura de tu API, como la imagen

        // Agrega un botón para acciones (editar, eliminar, etc.)
        var celdaAcciones = fila.insertCell(2);
        celdaAcciones.innerHTML =   '<button type="button" class="btn btn-editar btn-sm" data-bs-toggle="modal" data-bs-target="#modalEditarMarcas">Editar</button>' +
                                    '<button type="button" class="btn btn-eliminar btn-sm" data-bs-toggle="modal" data-bs-target="#modalEliminarMarcas">Eliminar</button>';
    });
}

function mostrarImagenesSeleccionadas() {
    // Obtener el campo de entrada de archivos y el contenedor de previsualización
    var logoInput = document.getElementById('logoInput');
    var previewContenedor = document.getElementById('previewImagenes');
    
    // Limpiar el contenedor de previsualización antes de mostrar nuevas imágenes
    previewContenedor.innerHTML = '';

    // Iterar a través de los archivos seleccionados y mostrar miniaturas
    for (var i = 0; i < logoInput.files.length; i++) {
        var archivo = logoInput.files[i];
        var imagen = document.createElement('img');
        imagen.src = URL.createObjectURL(archivo);
        imagen.alt = 'Imagen ' + (i + 1);
        imagen.style.width = '100px'; // Ajusta el tamaño según sea necesario
        imagen.style.height = '100px';
        previewContenedor.appendChild(imagen);
    }
}


function guardarMarca() {
    // Obtener los valores del formulario
    var nombreMarca = document.getElementById('marcaNombre').value;
    var imagenBase64 = obtenerImagenBase64();

    // Comprobar que se ha seleccionado un nombre de marca
    if (!nombreMarca) {
        alert('Por favor, ingrese el nombre de la marca.');
        return;
    }

    // Comprobar que se ha seleccionado una imagen
    if (!imagenBase64) {
        alert('Por favor, seleccione una imagen.');
        return;
    }

    // Crear un objeto con los datos de la marca
    var marcaData = {
        nameBrand: nombreMarca,
        linkImageBrand: imagenBase64
    };

    // Realizar la llamada a la API para guardar la marca
    $.ajax({
        url: 'http://localhost:8090/fama-market/api/brands/save',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(marcaData),
        success: function (response) {
            // Procesar la respuesta de la API (puede ser necesario ajustar según la respuesta esperada)
            console.log('Marca guardada exitosamente:', response);

            // Cerrar el modal después de guardar
            $('#modalMarca').modal('hide');
        },
        error: function (error) {
            console.error('Error al guardar la marca:', error);
        }
    });
}

// Función para obtener la imagen en formato base64 y imprimir en consola
function obtenerImagenBase64() {
    const input = document.getElementById('fileInput');
    
    if (input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function () {
            const base64String = reader.result.split(',')[1];
            // Imprimir el código base64 en la consola
            console.log(base64String);
        };
    }
}

// Agregar un evento al cambio en el input para llamar a la función
const input = document.getElementById('fileInput');
input.addEventListener('change', obtenerImagenBase64);

