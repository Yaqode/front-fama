// Capturamos el evento de cambio en el ComboBox
document.getElementById("frutas").addEventListener("change", function() {
    // Obtenemos el valor seleccionado
    var seleccion = document.getElementById("frutas").value;
    
    // Mostramos el valor seleccionado en la consola (puedes realizar otras acciones aquí)
    console.log("Seleccionaste: " + seleccion);
  });