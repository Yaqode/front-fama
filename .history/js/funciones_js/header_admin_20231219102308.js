function mostrarOpciones(id, parent) {
    // Mostrar las opciones al pasar el ratón sobre el contenedor
    var opciones = document.getElementById(id);
    opciones.style.display = "block";

    // Si hay un elemento padre, ajustar la posición del menú anidado
    if (parent) {
      var rect = parent.getBoundingClientRect();
      opciones.style.left = rect.left + rect.width + "px";
      opciones.style.top = rect.top + "px";
    }
  }

  function ocultarOpciones(id) {
    // Ocultar las opciones al salir del contenedor
    document.getElementById(id).style.display = "none";
  }

  function seleccionarOpcion(opcion) {
    // Realizar acciones con la opción seleccionada
    console.log("Seleccionaste: " + opcion);
    // Puedes agregar más acciones según tus necesidades
  }

  function seleccionarOpcionAnidada(opcion) {
    // Realizar acciones con la opción anidada seleccionada
    console.log("Seleccionaste anidada: " + opcion);
    // Puedes agregar más acciones según tus necesidades
  }