
function obtenerLista() {
    fetch("http://localhost:8090/fama-market/api/families/all")
        .then((response) => response.json())
        .then((elementos) => {
            console.log('e', elementos);
        })
        .catch((error) => {
            console.error('Error al obtener la lista:', error);
        });
}
