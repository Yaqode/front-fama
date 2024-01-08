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

function getBase64Image (img) {
    var canvas = document.createElement
}