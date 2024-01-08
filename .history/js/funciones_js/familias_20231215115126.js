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

// Llama a la función para obtener y mostrar las familias al cargar la página
obtenerListaFamiliasParaDropdown();

function obtenerListaFamiliasParaDropdown() {
    // Realiza una solicitud GET para obtener la lista de familias desde la API
    fetch("http://localhost:8090/fama-market/api/families/all")
        .then((response) => response.json())
        .then((familias) => {
            // Llama a la función para mostrar las familias en el menú desplegable
            mostrarFamiliasEnDropdown(familias);
        })
        .catch((error) => {
            console.error('Error al obtener la lista de familias:', error);
        });
}

function mostrarFamiliasEnDropdown(familias) {
    // Obtén la referencia al menú desplegable
    var menuDesplegable = document.getElementById("familiasMenu");

    // Itera sobre las familias y agrega opciones al menú desplegable
    familias.forEach((familia) => {
        var opcion = document.createElement("a");
        opcion.classList.add("dropdown-item");
        opcion.href = "#";  // Puedes proporcionar el enlace correcto según tus necesidades
        opcion.innerText = familia.nameFamily;

        // Agrega un evento para manejar la selección de la familia
        opcion.addEventListener("click", function() {
            // Puedes agregar acciones adicionales aquí, como redireccionar a la página de la familia
            console.log("Familia seleccionada:", familia.nameFamily);
        });

        // Agrega la opción al menú desplegable
        menuDesplegable.appendChild(opcion);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Llama a la función para obtener y mostrar las familias al cargar la página
    obtenerListaFamiliasParaDropdown();

    // Agrega eventos a cada elemento con la clase 'familia-dropdown'
    var familiaDropdowns = document.querySelectorAll('.familia-dropdown');
    familiaDropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("mouseover", function () {
            var familiaId = dropdown.getAttribute('data-familia-id');
            obtenerCategoriasPorFamilia(familiaId, dropdown);
        });
    });
});

function obtenerCategoriasPorFamilia(familiaId, dropdown) {
    // Realiza la solicitud para obtener las categorías asociadas a la familia
    fetch(`http://localhost:8090/fama-market/api/categories/byFamily/${familiaId}`)
        .then(response => response.json())
        .then(categorias => {
            // Muestra las categorías en el menú desplegable
            actualizarCategoriasDropdown(categorias, dropdown);
        })
        .catch(error => {
            console.error('Error al obtener categorías:', error);
        });
}

function actualizarCategoriasDropdown(categorias, dropdown) {
    // Obtén la lista de categorías
    var categoriasDropdown = dropdown.querySelector('.categorias-dropdown');

    // Limpia las categorías anteriores
    categoriasDropdown.innerHTML = '';

    // Agrega las nuevas categorías
    categorias.forEach(function (categoria) {
        var categoriaItem = document.createElement('li');
        categoriaItem.textContent = categoria.nameCategory;
        categoriasDropdown.appendChild(categoriaItem);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Llama a la función para obtener y mostrar las familias al cargar la página
    obtenerListaFamilias();
});

function obtenerListaFamilias() {
    // Realiza la solicitud para obtener la lista de familias
    fetch('http://localhost:8090/fama-market/api/families/all')
        .then(response => response.json())
        .then(familias => {
            // Muestra las familias en el primer menú desplegable
            actualizarMenuDesplegable('familiasMenu', familias, 'Seleccionar familia', 'obtenerCategoriasPorFamilia');
        })
        .catch(error => {
            console.error('Error al obtener familias:', error);
        });
}

function obtenerCategoriasPorFamilia(familiaId) {
    // Realiza la solicitud para obtener las categorías asociadas a la familia
    fetch(`http://localhost:8090/fama-market/api/categories/byFamily/${familiaId}`)
        .then(response => response.json())
        .then(categorias => {
            // Muestra las categorías en el segundo menú desplegable
            actualizarMenuDesplegable('categoriasMenu', categorias, 'Seleccionar categoría', 'obtenerSubcategoriasPorCategoria');
        })
        .catch(error => {
            console.error('Error al obtener categorías:', error);
        });
}

function obtenerSubcategoriasPorCategoria(categoriaId) {
    // Realiza la solicitud para obtener las subcategorías asociadas a la categoría
    fetch(`http://localhost:8090/fama-market/api/subcategories/byCategory/${categoriaId}`)
        .then(response => response.json())
        .then(subcategorias => {
            // Muestra las subcategorías en el tercer menú desplegable
            actualizarMenuDesplegable('subcategoriasMenu', subcategorias, 'Seleccionar subcategoría', null);
        })
        .catch(error => {
            console.error('Error al obtener subcategorías:', error);
        });
}

function actualizarMenuDesplegable(menuId, items, defaultText, nextFunction) {
    // Obtén la lista del menú desplegable
    var menu = document.getElementById(menuId);

    // Limpia los elementos anteriores
    menu.innerHTML = '';

    // Agrega el elemento predeterminado
    var defaultItem = document.createElement('li');
    defaultItem.textContent = defaultText;
    menu.appendChild(defaultItem);

    // Agrega los nuevos elementos
    items.forEach(function (item) {
        var menuItem = document.createElement('li');
        menuItem.textContent = item.name; // Ajusta según la estructura real de tu objeto
        menuItem.addEventListener("mouseover", function () {
            // Llama a la función siguiente (si existe) al pasar el ratón sobre un elemento
            if (nextFunction) {
                nextFunction(item.id);
            }
        });
        menu.appendChild(menuItem);
    });
}
