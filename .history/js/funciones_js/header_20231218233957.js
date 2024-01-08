// Obtén el elemento del enlace "Ver productos"
var dropdownLink = document.getElementById('dropdownMenuLink');

// Agrega un evento para mostrar el menú desplegable al hacer clic
dropdownLink.addEventListener('click', function () {
    // Abre el menú desplegable
    this.nextElementSibling.classList.toggle('show');
});

// Función para manejar la selección de opciones
function seleccionarOpcion(opcion) {
    // Aquí puedes realizar acciones adicionales con la opción seleccionada
    alert('Opción seleccionada: ' + opcion);

    // Cierra el menú desplegable después de la selección
    dropdownLink.nextElementSibling.classList.remove('show');
}