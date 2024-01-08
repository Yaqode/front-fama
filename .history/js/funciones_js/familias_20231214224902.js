$(function () {
    obtenerLista();
});

function obtenerLista() {
    fetch("http://localhost:8090/fama-market/api/families/all")
        .then((response) => response.json())
        .then((elementos) => {
            // Obtener la referencia de la tabla
            var tabla = document.querySelector('.table tbody');

            // Limpiar filas existentes (si las hay)
            tabla.innerHTML = '';

            // Iterar sobre los elementos y agregar filas a la tabla
            elementos.forEach((elemento) => {
                var fila = tabla.insertRow();

                // Puedes ajustar las siguientes líneas según la estructura de tu JSON
                var celda1 = fila.insertCell(0);
                celda1.textContent = elemento.familyId;

                var celda2 = fila.insertCell(1);
                celda2.textContent = elemento.nameFamily;

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

function guardarFamilia() {
    // Obtener el valor del nombre de la familia desde el formulario
    var nombreFamilia = document.getElementById('familiaInput').value;

    // Construir el objeto de datos para enviar en la solicitud
    var data = {
        nameFamily: nombreFamilia
        // Agrega más campos según la estructura de tu API
    };

    // Realizar la solicitud POST usando Fetch
    fetch("http://localhost:8090/fama-market/api/families/save", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Puedes agregar otros encabezados según las necesidades de tu API
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(resultado => {
        console.log('Familia agregada exitosamente:', resultado);
        // Puedes realizar otras acciones aquí, como cerrar el modal o actualizar la tabla
        // ...

        // Cerrar el modal
        $('#modalFamilias').modal('hide');
    })
    .catch(error => {
        console.error('Error al agregar familia:', error);
        // Puedes manejar el error de alguna manera, como mostrar un mensaje al usuario
    });
}