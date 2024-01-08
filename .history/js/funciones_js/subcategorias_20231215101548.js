

// Función para obtener la lista de subcategorías y actualizar la tabla
function obtenerListaSubcategorias() {
    fetch("http://localhost:8090/fama-market/api/subcategories/all")
        .then((response) => response.json())
        .then((subcategorias) => {
            // Obtener la referencia de la tabla
            var tablaSubcategorias = document.getElementById('tablaSubcategorias').getElementsByTagName('tbody')[0];

            // Limpiar filas existentes (si las hay)
            tablaSubcategorias.innerHTML = '';

            // Iterar sobre las subcategorías y agregar filas a la tabla
            subcategorias.forEach((subcategoria) => {
                var fila = tablaSubcategorias.insertRow();

                // Ajustar las siguientes líneas según la estructura de tu JSON
                var celda1 = fila.insertCell(0);
                celda1.textContent = subcategoria.subCategoryId;

                var celda2 = fila.insertCell(1);
                celda2.textContent = subcategoria.nameSubCategory;

                var celda3 = fila.insertCell(2);
                celda3.textContent = subcategoria.nameCategory; // Suponiendo que nameCategory es el nombre de la categoría asociada

                var celda4 = fila.insertCell(3);
                // Puedes personalizar la columna de acciones según tus necesidades
                celda4.innerHTML = `
                    <button type="button" class="btn btn-editar btn-sm" data-bs-toggle="modal"
                        data-bs-target="#modalEditarSubcategorias">
                        Editar
                    </button>
                    <button type="button" class="btn btn-eliminar btn-sm" data-bs-toggle="modal"
                        data-bs-target="#modalEliminarSubcategorias" onclick="mostrarModalEliminarSubcategoria(${subcategoria.subCategoryId})">
                        Eliminar
                    </button>
                `;
            });
        })
        .catch((error) => {
            console.error('Error al obtener la lista de subcategorías:', error);
        });
}

// Función para mostrar el modal de eliminación de subcategorías
function mostrarModalEliminarSubcategoria(idSubcategoria) {
    // Guardar el ID de la subcategoría que se eliminará
    subcategoriaIdAEliminar = idSubcategoria;

    // Mostrar el modal
    $('#modalEliminarSubcategorias').modal('show');
}

// Función para eliminar la subcategoría y actualizar la tabla
function eliminarSubcategoria() {
    // Realizar la solicitud DELETE usando Fetch
    fetch(`http://localhost:8090/fama-market/api/subcategories/delete/${subcategoriaIdAEliminar}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // Puedes agregar otros encabezados según las necesidades de tu API
        },
    })
    .then(response => {
        if (response.ok) {
            console.log('Subcategoría eliminada exitosamente.');

            // Actualizar la tabla después de eliminar la subcategoría
            obtenerListaSubcategorias();

            // Cerrar el modal
            $('#modalEliminarSubcategorias').modal('hide');
        } else {
            console.error('Error al eliminar subcategoría:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error al eliminar subcategoría:', error);
        // Puedes manejar el error de alguna manera, como mostrar un mensaje al usuario
    });
}
