$(function () {
    //$('[data-toggle="tooltip"]').tooltip();
    obtenerLista();
});

function obtenerLista() {
    fetch("http://localhost:8090/fama-market/api/families/all")
        .then((response) => response.json())
        .then((elementos) => {
            
        })
        .catch((error) => {
            console.error('Error al obtener la lista:', error);
        });
}


function obtenerLista() {
    fetch("http://localhost:8090/fama-market/api/families/all")
        .then((response) => response.json())
        .then((elementos) => {
            console.log(elementos);
            // Obtener la referencia de la tabla
            var tabla = document.querySelector('.table tbody');

            // Limpiar filas existentes (si las hay)
            tabla.innerHTML = '';

            // Iterar sobre los elementos y agregar filas a la tabla
            elementos.forEach((elemento) => {
                var fila = tabla.insertRow();

                // Puedes ajustar las siguientes líneas según la estructura de tu JSON
                var celda1 = fila.insertCell(0);
                celda1.textContent = elemento.id;

                var celda2 = fila.insertCell(1);
                celda2.textContent = elemento.nombre;

                var celda3 = fila.insertCell(2);
                // Puedes personalizar la columna de acciones según tus necesidades
                celda3.innerHTML = `
                    <button type="button" class="btn btn-editar btn-sm" data-bs-toggle="modal"
                        data-bs-target="#modalEditarFamilias">
                        Editar
                    </button>
                    <button type="button" class="btn btn-eliminar btn-sm" data-bs-toggle="modal"
                        data-bs-target="#modalEliminarFamilias">
                        Eliminar
                    </button>
                `;
            });
        })
        .catch((error) => {
            console.error('Error al obtener la lista:', error);
        });
}



