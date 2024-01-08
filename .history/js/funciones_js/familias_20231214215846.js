$(function () {
    //$('[data-toggle="tooltip"]').tooltip();
    obtenerLista()
});

function obtenerLista() {
    fetch("http://localhost:8090/fama-market/api/families/all")
        .then((response) => response.json())
        .then((elementos) => {
            console.log(elementos);
        })
        .catch((error) => {
            console.error('Error al obtener la lista:', error);
        });
}
