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

// Función para guardar la marca con la imagen en base64
function guardarSubcategoria() {
    // Obtener los elementos del formulario
    const nombreInput = document.getElementById('marcaNombre');
    const fileInput = document.getElementById('fileInput');

    // Verificar que se haya ingresado un nombre y se haya seleccionado un archivo
    if (nombreInput.value.trim() === '') {
        alert('Por favor, ingresa el nombre de la marca.');
        return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
        alert('Por favor, selecciona una imagen para la marca.');
        return;
    }

    // Obtener el archivo seleccionado
    const file = fileInput.files[0];
    const reader = new FileReader();

    // Leer el archivo como base64
    reader.readAsDataURL(file);

    reader.onload = async function () {
        // Obtener el resultado (base64) y el nombre de la marca
        const base64String = reader.result.split(',')[1]; // Eliminar el prefijo 'data:image/png;base64,'
        const nombreMarca = nombreInput.value;

        // Datos a enviar al servidor
        const datos = {
            name: nombreMarca,
            logo: base64String,
        };

        try {
            // Enviar los datos al servidor
            const response = await fetch('http://localhost:8090/fama-market/api/brands/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datos),
            });

            if (response.ok) {
                alert('Marca guardada exitosamente.');
                // Puedes restablecer el formulario o cerrar el modal aquí
                // ...
            } else {
                alert('Error al guardar la marca. Por favor, intenta de nuevo.');
            }
        } catch (error) {
            console.error('Error al enviar los datos al servidor:', error);
            alert('Error al guardar la marca. Por favor, intenta de nuevo.');
        }
    };
}

    