
function redirigir() {
    var seleccion = document.getElementById("acciones");
    var opcionSeleccionada = seleccion.options[seleccion.selectedIndex].value;

    // Definir las rutas para cada opción del menú
    var rutas = {
        agregarFamilias: "familias.html#",
        agregarCategorias: "categoria.html",
        agregarSubcategorias: "subcategoria.html",
        agregarMarcas: "Views/marcas.html",
        agregarSubmarcas: "Views/submarcas.html",
        agregarProductos: "Views/productos-crud.html",
    };

    // Redireccionar a la URL correspondiente
    window.location.href = rutas[opcionSeleccionada];
    }
