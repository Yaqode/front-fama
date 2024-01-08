// Obtén el elemento del enlace "Ver productos" y el menú desplegable
var dropdownLink = document.getElementById('dropdownMenuLink');
var dropdownMenu = dropdownLink.nextElementSibling;

// Agrega eventos para mostrar el menú desplegable al pasar el ratón
dropdownLink.addEventListener('mouseover', function () {
    // Abre el menú desplegable
    dropdownMenu.classList.add('show');
});

// Agrega eventos para cerrar el menú desplegable al salir del enlace
dropdownLink.addEventListener('mouseout', function () {
    // Cierra el menú desplegable solo si no se hizo clic en una opción
    if (!dropdownMenu.dataset.clicked) {
        dropdownMenu.classList.remove('show');
    }
});

// Función para manejar la selección de opciones
function seleccionarOpcion(opcion) {
    // Aquí puedes realizar acciones adicionales con la opción seleccionada
    alert('Opción seleccionada: ' + opcion);

    // Cierra el menú desplegable después de la selección
    dropdownMenu.classList.remove('show');
}

// Agrega un evento para marcar que se hizo clic en el menú desplegable
dropdownMenu.addEventListener('click', function () {
    this.dataset.clicked = true;
});

// Agrega un evento para cerrar el menú desplegable al hacer clic en cualquier parte de la página
document.addEventListener('click', function (event) {
    if (!dropdownLink.contains(event.target)) {
        dropdownMenu.classList.remove('show');
        dropdownMenu.dataset.clicked = false;
    }
});