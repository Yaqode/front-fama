}

 // Obtén el elemento del enlace "Ver productos"
 var dropdownLink = document.getElementById('dropdownMenuLink');

 // Agrega un evento para mostrar el menú desplegable al pasar el ratón
 dropdownLink.addEventListener('mouseover', function () {
     // Abre el menú desplegable
     this.nextElementSibling.classList.add('show');
 });

 // Agrega un evento para ocultar el menú desplegable al salir del enlace
 dropdownLink.addEventListener('mouseout', function () {
     // Cierra el menú desplegable
     this.nextElementSibling.classList.remove('show');
 });