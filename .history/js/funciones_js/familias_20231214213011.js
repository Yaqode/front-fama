function obtenerLista() {
    fetch("http://localhost:8090/fama-market/api/families/all")
        .then((response) => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
        })
        .then((elementos) => {
            console.log(''elementos);
        })
        .catch((error) => {
            console.error('Error al obtener la lista:', error);
        });
}
