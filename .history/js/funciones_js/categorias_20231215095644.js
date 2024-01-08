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
                        data-bs-target="#modalEliminarCategorias">
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
