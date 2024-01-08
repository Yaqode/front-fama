function mostrarOpciones() {
    // Mostrar las opciones al pasar el ratón sobre el contenedor
    document.getElementById("opciones").style.display = "block";
  }

  function ocultarOpciones() {
    // Ocultar las opciones al salir del contenedor
    document.getElementById("opciones").style.display = "none";
  }

  function seleccionarOpcion(opcion) {
    // Realizar acciones con la opción seleccionada
    console.log("Seleccionaste: " + opcion);
    // Puedes agregar más acciones según tus necesidades
  }