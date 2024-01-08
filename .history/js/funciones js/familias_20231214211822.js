
$(function () {
    $('[data-toogle="tooltip"]').tooltip()
})

function obtenerLista(){
    (fetch("http://localhost:8090/fama-market/api/families/all"
        .then((response) => response.json())
        .then((element) => {
            console.log(elementos);
        })
    ))
}

