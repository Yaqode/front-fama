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

// Función para cargar las familias y categorías desde la API
function cargarFamilias() {
    // Simulamos la respuesta de la API para propósitos de ejemplo
    const familiasMock = [
        { id: 1, nameFamily: 'Familia 1' },
        { id: 2, nameFamily: 'Familia 2' },
        // ... otras familias ...
    ];

    // Selecciona el elemento del menú desplegable
    const dropdownMenu = document.getElementById('miDropdownMenu');

    // Limpiar el contenido actual del menú
    dropdownMenu.innerHTML = '';

    // Itera sobre las familias
    familiasMock.forEach(familia => {
        // Crea un elemento de lista para la familia
        const familiaItem = document.createElement('li');
        familiaItem.innerHTML = `<a class="trigger right-caret">${familia.nameFamily}</a>`;

        // Agrega un evento para cargar las categorías al hacer clic en la familia
        familiaItem.addEventListener('click', () => cargarCategorias(familia.id));

        // Agrega el elemento de familia al menú
        dropdownMenu.appendChild(familiaItem);
    });
}

// Función para cargar las categorías desde la API basado en la familia seleccionada
function cargarCategorias(familiaId) {
    // Simulamos la respuesta de la API para propósitos de ejemplo
    const categoriasMock = [
        { id: 1, nameCategory: 'Categoría 1', familyId: 1 },
        { id: 2, nameCategory: 'Categoría 2', familyId: 1 },
        // ... otras categorías ...
    ];

    // Selecciona el elemento del menú desplegable
    const dropdownMenu = document.getElementById('miDropdownMenu');

    // Busca el elemento de la familia en el menú
    const familiaItem = dropdownMenu.querySelector(`[data-familia-id="${familiaId}"]`);

    // Verifica si la familia tiene un menú de categorías asociado
    const categoriasMenu = familiaItem.querySelector('.dropdown-menu.sub-menu');
    if (!categoriasMenu) {
        // Si no hay un menú de categorías, créalo y agrégalo
        const categoriasSubMenu = document.createElement('ul');
        categoriasSubMenu.classList.add('dropdown-menu', 'sub-menu');
        familiaItem.appendChild(categoriasSubMenu);

        // Itera sobre las categorías
        categoriasMock
            .filter(categoria => categoria.familyId === familiaId)
            .forEach(categoria => {
                // Crea un elemento de lista para la categoría
                const categoriaItem = document.createElement('li');
                categoriaItem.innerHTML = `<a href="#">${categoria.nameCategory}</a>`;
                categoriasSubMenu.appendChild(categoriaItem);
            });
    }
}

// Llama a la función para cargar las familias al cargar la página
cargarFamilias();



    // Hacer la solicitud a la API para obtener las subcategorías
fetch('http://localhost:8090/fama-market/api/subcategories/all')
.then(response => response.json())
.then(subcategorias => {
    // Obtener familias únicas
    const familiasUnicas = [...new Set(subcategorias.map(subcategoria => subcategoria.category.family.nameFamily))];

    // Obtener el elemento del menú desplegable
    const menuDesplegable = document.getElementById('familiasMenu');

    // Agregar las familias al menú desplegable
    familiasUnicas.forEach(familia => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#" class="trigger right-caret">${familia}</a>`;
        menuDesplegable.appendChild(listItem);
    });
})
.catch(error => console.error('Error al cargar las familias:', error));
