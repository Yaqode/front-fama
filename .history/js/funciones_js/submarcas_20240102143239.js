$(function () {
    // Llama a la función para obtener y mostrar las marcas al cargar la página
    obtenerListaSubarcas();
});

function obtenerListaMarcas() {
    // Realiza una solicitud GET para obtener la lista de marcas desde la API
    fetch("http://localhost:8090/fama-market/api/subbrands/all")
        .then((response) => response.json())
        .then((marcas) => {
            // Llama a la función para mostrar las marcas en la tabla
            mostrarSubmarcasEnTabla(submarcas);
        })
        .catch((error) => {
            console.error('Error al obtener la lista de marcas:', error);
        });
}

function mostrarSubmarcasEnTabla(marcas) {
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
                                    '<button type="button" class="btn btn-eliminar btn-sm" data-bs-toggle="modal" data-bs-target="#modalEliminarMarcas">Eliminar</button>';
    });
}

