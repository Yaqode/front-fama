function mostrarOpciones(id, parent) {
    // Mostrar las opciones al pasar el ratón sobre el contenedor
    document.getElementById(id).style.display = "block";

    // Si hay un elemento padre, ajustar la posición del menú anidado
    if (parent) {
      var rect = parent.getBoundingClientRect();
      document.getElementById(id).style.left = rect.width + "px";
      document.getElementById(id).style.top = "0";
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