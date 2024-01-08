 // Obtén el elemento del enlace "Ver productos" y el menú desplegable
    var dropdownLink = document.getElementById('dropdownMenuLink');
    var dropdownMenu = dropdownLink.nextElementSibling;

    // Agrega eventos para mostrar el menú desplegable al pasar el ratón
    dropdownLink.addEventListener('mouseover', function () {
        // Abre el menú desplegable
        dropdownMenu.classList.add('show');
    });

    

    // Función para manejar la selección de opciones
    function seleccionarOpcion(opcion) {
        // Aquí puedes realizar acciones adicionales con la opción seleccionada
        alert('Opción seleccionada: ' + opcion);

        // Cierra el menú desplegable después de la selección
        dropdownMenu.classList.remove('show');
    }