//funcion para obtener los datos
function obtenerLista() {
    fetch("http://localhost:8090/fama-market/api/families/all")
    
}

//obtener los datos al cargar la pagina y mostrar la lista
obtenerLista();