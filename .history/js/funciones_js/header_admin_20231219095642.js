function mostrarOpciones() {
    // Mostramos las opciones cuando el mouse pasa sobre el ComboBox
    document.getElementById("familias").style.display = "block";
  }

  function ocultarOpciones() {
    // Ocultamos las opciones cuando el mouse sale del ComboBox
    document.getElementById("familias").style.display = "none";
  }

  // Capturamos el evento de cambio en el ComboBox
  document.getElementById("familias").addEventListener("change", function() {
    // Obtenemos el valor seleccionado
    var seleccion = document.getElementById("familias").value;
    
    // Mostramos el valor seleccionado en la consola (puedes realizar otras acciones aquí)
    console.log("Seleccionaste: " + seleccion);
  });

