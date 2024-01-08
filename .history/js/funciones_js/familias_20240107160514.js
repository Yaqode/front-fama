$(function () {
    obtenerLista();
});

function obtenerLista() {
    // Obtener el token desde sessionStoreNg
    const token = sessionStorage.getItem('jwt'); // Nombre del token en sessionStoreNg
    console.log(token);
    // Verificar si se encontró un token
    if (!token) {
        console.error('No se encontró un token en sessionStoreNg');
        return;
    }

    // Configurar los encabezados con el token
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    fetch("http://localhost:8090/fama-market/api/families/all", { headers })
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
            })
        })
        .catch((error) => {
            console.error('Error al obtener la lista:', error);
        });
}

function guardarFamilia() {
    const token = sessionStorage.getItem("jwt"); // Nombre del token en sessionStoreNg
    console.log(token);
    // Verificar si se encontró un token
    if (!token) {
        console.error("No se encontró un token en sessionStoreNg");
        return;
    }
    // Configurar los encabezados con el token
    const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    });
    
    // Obtener el valor del nombre de la familia desde el formulario
    var nombreFamilia = document.getElementById('familiaInput').value;

    // Construir el objeto de datos para enviar en la solicitud
    var data = {
        familyId: 0,
        nameFamily: nombreFamilia
    };

    console.log(token)

    // Realizar la solicitud POST usando Fetch
    fetch("http://localhost:8090/fama-market/api/families/save", {
        method: 'POST',
        headers: headers,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    },{headers})
    .then(response => response.json())
    .then(resultado => {
        console.log('Familia agregada exitosamente:', resultado);


        // Cerrar el modal
        $('#modalFamilias').modal('hide');
        obtenerLista();
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
            obtenerLista();
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


    $(document).ready(function () {
        $('.dropdown-submenu a.trigger').on('mouseenter', function (e) {
            $(this).next('.dropdown-menu').toggle();
            e.stopPropagation();
        }).on('mouseleave', function (e) {
            $(this).next('.dropdown-menu').toggle();
            e.stopPropagation();
        });
    });

