function redirigirAccion() {
    var seleccion = document.getElementById("agregarDropdown").value;

    if (seleccion !== "Seleccionar acción") {
        // Redirige automáticamente a la página correspondiente
        window.location.href = "./../" + seleccion;
    }
}
