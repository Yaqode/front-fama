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

// Función para cargar familias y categorías desde la API
function cargarFamilias() {
    // Realizar la solicitud a la API para obtener familias y categorías
    fetch('http://localhost:8090/fama-market/api/subcategories/all')
        .then(response => response.json())
        .then(data => {
            // Iterar sobre las familias y agregarlas al menú
            data.forEach(subcategoria => {
                const familiaItem = document.createElement('li');
                familiaItem.classList.add('dropdown-item');

                const trigger = document.createElement('a');
                trigger.textContent = subcategoria.category.family.name;
                trigger.classList.add('trigger', 'right-caret');
                trigger.addEventListener('mouseover', () => {
                    // Al pasar el ratón sobre una familia, mostrar las categorías
                    mostrarCategorias(subcategoria.category.family.familyId);
                });

                familiaItem.appendChild(trigger);
                familiasDropdown.appendChild(familiaItem);
            });
        })
        .catch(error => console.error('Error al cargar familias y categorías:', error));
}

// Función para mostrar categorías en el menú
function mostrarCategorias(familiaId) {
    // Realizar la solicitud a la API para obtener categorías por familia
    fetch(`http://localhost:8090/fama-market/api/categories/byFamily/${familiaId}`)
        .then(response => response.json())
        .then(categorias => {
            // Limpiar el contenido actual del menú
            familiasDropdown.innerHTML = '';

            // Iterar sobre las categorías y agregarlas al menú
            categorias.forEach(categoria => {
                const categoriaItem = document.createElement('li');
                categoriaItem.classList.add('dropdown-item');

                const trigger = document.createElement('a');
                trigger.textContent = categoria.nameCategory;
                categoriaItem.appendChild(trigger);
                familiasDropdown.appendChild(categoriaItem);
            });
        })
        .catch(error => console.error('Error al cargar categorías por familia:', error));
}

// Llamar a la función para cargar familias cuando la página se carga
document.addEventListener('DOMContentLoaded', cargarFamilias);
