$(function () {
    obtenerLista();
});

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
                    data-bs-target="#modalEliminarFamilias" onclick="mostrarModalEliminar(${elemento.familyId})">
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
        familyId: 0,
        nameFamily: nombreFamilia
    };

    // Realizar la solicitud POST usando Fetch
    fetch("http://localhost:8090/fama-market/api/families/save", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(resultado => {
        console.log('Familia agregada exitosamente:', resultado);


        // Cerrar el modal
        $('#modalFamilias').modal('hide');
    })
    .catch(error => {
        console.error('Error al agregar familia:', error);
    });
}

// ID de la familia que se eliminará
var familiaIdAEliminar;

// Función para mostrar el modal de eliminación de familias
function mostrarModalEliminar(idFamilia) {
    // Guardar el ID de la familia que se eliminará
    familiaIdAEliminar = idFamilia;

    // Mostrar el modal
    $('#modalEliminarFamilias').modal('show');
}

// Función para eliminar la familia
function eliminarFamilia() {
    // Realizar la solicitud DELETE usando Fetch
    fetch(`http://localhost:8090/fama-market/api/families/delete/${familiaIdAEliminar}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // Puedes agregar otros encabezados según las necesidades de tu API
        },
    })
    .then(response => {
        if (response.ok) {
            console.log('Familia eliminada exitosamente.');
            // Puedes realizar otras acciones aquí, como cerrar el modal o actualizar la tabla
            // ...

            // Cerrar el modal
            $('#modalEliminarFamilias').modal('hide');
        } else {
            console.error('Error al eliminar familia:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error al eliminar familia:', error);
        // Puedes manejar el error de alguna manera, como mostrar un mensaje al usuario
    });
}

function filtrarTablaFamilias() {
    // Obtener el valor del buscador
    var input = document.getElementById('buscadorFamiliasInput');
    var filtro = input.value.toUpperCase();

    // Obtener la tabla y las filas
    var tabla = document.getElementById('tablaFamilias');
    var filas = tabla.getElementsByTagName('tr');

    // Iterar sobre las filas y mostrar u ocultar según el filtro
    for (var i = 0; i < filas.length; i++) {
        var celdaNombre = filas[i].getElementsByTagName('td')[1]; // Ajusta el índice según tu estructura de la tabla
        if (celdaNombre) {
            var textoCelda = celdaNombre.textContent || celdaNombre.innerText;
            if (textoCelda.toUpperCase().indexOf(filtro) > -1) {
                filas[i].style.display = '';
            } else {
                filas[i].style.display = 'none';
            }
        }
    }
}

// Obtener el elemento del menú
const familiasDropdown = document.getElementById('familiasDropdown');

// Función para cargar familias desde la API
function cargarFamilias() {
    // Aquí deberías realizar una solicitud a la API de subcategorías para obtener la información
    // Puedes usar fetch o cualquier otra biblioteca para realizar solicitudes HTTP

    // Ejemplo: 
    
}

// Función para cargar categorías por familia
function obtenerCategoriasPorFamilia(familiaId) {
    // Realizar una solicitud a la API para obtener categorías por familia
    // Aquí deberías usar la URL adecuada para obtener las categorías de la familia específica
    return fetch(`http://localhost:8090/fama-market/api/categories/byFamily/${familiaId}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error al obtener categorías por familia:', error);
            return [];
        });
}

// Función para mostrar categorías en el menú
function mostrarCategorias(categorias) {
    // Limpiar el contenido actual del menú
    familiasDropdown.innerHTML = '';

    // Iterar sobre las categorías y agregarlas al menú
    categorias.forEach(categoria => {
        const categoriaItem = document.createElement('li');
        categoriaItem.classList.add('dropdown-item');

        const trigger = document.createElement('a');
        trigger.textContent = categoria.nameCategory;
        trigger.classList.add('trigger', 'right-caret');
        trigger.addEventListener('mouseover', () => {
            // Aquí deberías cargar las subcategorías de la categoría y mostrarlas
            const subcategorias = obtenerSubcategoriasPorCategoria(categoria.categoryId);
            mostrarSubcategorias(subcategorias);
        });

        categoriaItem.appendChild(trigger);
        familiasDropdown.appendChild(categoriaItem);
    });
}

// Función para cargar subcategorías por categoría
function obtenerSubcategoriasPorCategoria(categoriaId) {
    // Realizar una solicitud a la API para obtener subcategorías por categoría
    // Aquí deberías usar la URL adecuada para obtener las subcategorías de la categoría específica
    return fetch(`http://localhost:8090/fama-market/api/subcategories/byCategory/${categoriaId}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error al obtener subcategorías por categoría:', error);
            return [];
        });
}

// Función para mostrar subcategorías en el menú
function mostrarSubcategorias(subcategorias) {
    // Limpiar el contenido actual del menú
    familiasDropdown.innerHTML = '';

    // Iterar sobre las subcategorías y agregarlas al menú
    subcategorias.forEach(subcategoria => {
        const subcategoriaItem = document.createElement('li');
        subcategoriaItem.classList.add('dropdown-item');

        const trigger = document.createElement('a');
        trigger.textContent = subcategoria.nameSubCategory;
        subcategoriaItem.appendChild(trigger);
        familiasDropdown.appendChild(subcategoriaItem);
    });
}

// Llamar a la función para cargar familias cuando la página se carga
document.addEventListener('DOMContentLoaded', cargarFamilias);
