$(function () {
    // Llama a la función para obtener y mostrar las submarcas al cargar la página
    obtenerListaSubmarcas();
});
function obtenerListaSubmarcas() {
    // Realiza una solicitud GET para obtener la lista de submarcas desde la API
    fetch("http://localhost:8090/fama-market/api/subbrands/all")
        .then((response) => response.json())
        .then((submarcas) => {
            // Filtra las dos primeras submarcas
            var submarcasAMostrar = submarcas.slice(0, 2);

            // Llama a la función para mostrar las submarcas en el contenedor
            mostrarSubmarcas(submarcasAMostrar);
        })
        .catch((error) => {
            console.error('Error al obtener la lista de submarcas:', error);
        });
}

function mostrarSubmarcas(submarcas) {
    // Obtén la referencia al contenedor
    var contenedor = document.getElementById("submarcaContainer");

    // Crea un div para contener las imágenes y el botón
    var contenedorImagenes = document.createElement("div");
    contenedorImagenes.className = "d-flex justify-content-center"; // Agrega la clase para centrar horizontalmente

    // Itera sobre las dos primeras submarcas y agrega imágenes al contenedor
    submarcas.forEach((submarca) => {
        var img = document.createElement("img");
        img.src = "data:image/jpeg;base64," + submarca.linkImageSubbrand;
        img.alt = submarca.nameSubBrand;
        img.className = "rounded-circle img-fluid border mr-3"; // Agrega margen derecho

        img.onclick = function () {
            redirigirAProductos(submarca.nameSubBrand);
        };

        contenedorImagenes.appendChild(img);
    });

    // Agrega un botón para redirigir a la página correspondiente
    var botonRedireccion = document.createElement("button");
    botonRedireccion.innerText = "Redirigir a productos";
    botonRedireccion.className = "btn btn-primary mt-3";

    botonRedireccion.onclick = function () {
        // Redirige a la página correspondiente (puedes ajustar la lógica según sea necesario)
        console.log("Redirigiendo a productos...");
    };

    // Agrega el contenedor de imágenes y el botón al contenedor principal
    contenedor.appendChild(contenedorImagenes);
    contenedor.appendChild(botonRedireccion);
}

setTimeout(function(){

}, 500)
document.getElementById('usuario').value = localStorage.usuario;