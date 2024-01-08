$(function () {
    obtenerCategorias();
});

function obtenerCategorias() {
    fetch("http://localhost:8090/fama-market/api/categories/all")
        .then((response) => response.json())
        .then((categorias) => {
            // Obtener la referencia de la tabla
            var tabla = document.getElementById('tablaCategorias').getElementsByTagName('tbody')[0];

            // Limpiar filas existentes (si las hay)
            tabla.innerHTML = '';

            // Iterar sobre las categorías y agregar filas a la tabla
            categorias.forEach((categoria) => {
                var fila = tabla.insertRow();

                // Ajustar las siguientes líneas según la estructura de tu JSON
                var celda1 = fila.insertCell(0);
                celda1.textContent = categoria.categoryId;

                var celda2 = fila.insertCell(1);
                celda2.textContent = categoria.nameCategory;

                var celda3 = fila.insertCell(2);
                celda3.textContent = categoria.family ? categoria.family.nameFamily : ''; // Verificar si family es nulo antes de acceder a nameFamily

                var celda4 = fila.insertCell(3);
                // Puedes personalizar la columna de acciones según tus necesidades
                celda4.innerHTML = `
                    <button type="button" class="btn btn-editar btn-sm" data-bs-toggle="modal"
                        data-bs-target="#modalEditarCategorias">
                        Editar
                    </button>
                    <button type="button" class="btn btn-eliminar btn-sm" data-bs-toggle="modal"
                        data-bs-target="#modalEliminarCategorias" onclick="mostrarModalEliminar(${categoria.categoryId})">
                        Eliminar
                    </button>

                `;
            });
        })
        .catch((error) => {
            console.error('Error al obtener las categorías:', error);
        });
}

// Nueva función para preparar el modal antes de mostrarse
function prepararModalCategorias() {
    // Llamar a la función para obtener las familias
    obtenerFamiliasParaCombo();

    // Mostrar el modal
    $('#modalCategorias').modal('show');
}

// Función para obtener las familias y llenar el combo box
function obtenerFamiliasParaCombo() {
    fetch("http://localhost:8090/fama-market/api/families/all")
        .then((response) => response.json())
        .then((familias) => {
            // Obtener el elemento select del combo box
            var familiaSelect = document.getElementById('familiaSelect');

            // Limpiar opciones existentes (si las hay)
            familiaSelect.innerHTML = '';

            // Iterar sobre las familias y agregar opciones al combo box
            familias.forEach((familia) => {
                var opcion = document.createElement('option');
                opcion.value = familia.familyId;
                opcion.textContent = familia.nameFamily;
                familiaSelect.appendChild(opcion);
            });
        })
        .catch((error) => {
            console.error('Error al obtener las familias:', error);
        });
}

function guardarCategorias() {
    // Obtener el valor del nombre de la categoría desde el formulario
    var nombreCategoria = document.getElementById('categoriaInput').value;

    // Obtener el valor seleccionado del combo box (ID de la familia)
    var familiaId = document.getElementById('familiaSelect').value;

    // Construir el objeto de datos para enviar en la solicitud
    var data = {
        nameCategory: nombreCategoria,
        familyId: familiaId
        // Agrega más campos según la estructura de tu API
    };

    // Realizar la solicitud POST usando Fetch
    fetch("http://localhost:8090/fama-market/api/categories/save", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Puedes agregar otros encabezados según las necesidades de tu API
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(resultado => {
        console.log('Categoría agregada exitosamente:', resultado);

        // Actualizar la tabla después de agregar la categoría
        obtenerListaCategorias();

        // Puedes realizar otras acciones aquí, como cerrar el modal
        // ...

        // Cerrar el modal
        $('#modalCategorias').modal('hide');
    })
    .catch(error => {
        console.error('Error al agregar categoría:', error);
        // Puedes manejar el error de alguna manera, como mostrar un mensaje al usuario
    });
}

// ID de la categoría que se eliminará
var categoriaIdAEliminar;

// Función para mostrar el modal de eliminación de categorías
function mostrarModalEliminar(idCategoria) {
    // Guardar el ID de la categoría que se eliminará
    categoriaIdAEliminar = idCategoria;

    // Mostrar el modal
    $('#modalEliminarCategorias').modal('show');
}

// Función para eliminar la categoría y actualizar la tabla
function eliminarCategoria() {
    // Realizar la solicitud DELETE usando Fetch
    fetch(`http://localhost:8090/fama-market/api/categories/delete/${categoriaIdAEliminar}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // Puedes agregar otros encabezados según las necesidades de tu API
        },
    })
    .then(response => {
        if (response.ok) {
            console.log('Categoría eliminada exitosamente.');

            // Actualizar la tabla después de eliminar la categoría
            obtenerListaCategorias();

            // Cerrar el modal
            $('#modalEliminarCategorias').modal('hide');
        } else {
            console.error('Error al eliminar categoría:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error al eliminar categoría:', error);
        // Puedes manejar el error de alguna manera, como mostrar un mensaje al usuario
    });
}

// Función para obtener la lista de categorías y actualizar la tabla
function obtenerListaCategorias() {
    fetch("http://localhost:8090/fama-market/api/categories/all")
        .then((response) => response.json())
        .then((categorias) => {
            // Obtener la referencia de la tabla
            var tablaCategorias = document.getElementById('tablaCategorias').getElementsByTagName('tbody')[0];

            // Limpiar filas existentes (si las hay)
            tablaCategorias.innerHTML = '';

            // Iterar sobre las categorías y agregar filas a la tabla
            categorias.forEach((categoria) => {
                var fila = tablaCategorias.insertRow();

                // Ajustar las siguientes líneas según la estructura de tu JSON
                var celda1 = fila.insertCell(0);
                celda1.textContent = categoria.categoryId;

                var celda2 = fila.insertCell(1);
                celda2.textContent = categoria.nameCategory;

                var celda3 = fila.insertCell(2);
                // Verificar si la categoría tiene una familia asociada antes de acceder a su nombre
                if (categoria.family) {
                    celda3.textContent = categoria.family.nameFamily;
                } else {
                    celda3.textContent = 'N/A'; // O cualquier valor por defecto si no hay una familia asociada
                }

                var celda4 = fila.insertCell(3);
                // Puedes personalizar la columna de acciones según tus necesidades
                celda4.innerHTML = `
                    <button type="button" class="btn btn-editar btn-sm" data-bs-toggle="modal"
                        data-bs-target="#modalEditarCategorias">
                        Editar
                    </button>
                    <button type="button" class="btn btn-eliminar btn-sm" data-bs-toggle="modal"
                        data-bs-target="#modalEliminarCategorias" onclick="mostrarModalEliminar(${categoria.categoryId})">
                        Eliminar
                    </button>
                `;
            });
        })
        .catch((error) => {
            console.error('Error al obtener la lista de categorías:', error);
        });
}
