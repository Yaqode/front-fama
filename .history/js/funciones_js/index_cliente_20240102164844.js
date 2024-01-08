$(function () {
    // Llama a la función para obtener y mostrar las submarcas al cargar la página
    obtenerListaSubmarcas();
});

function obtenerListaSubmarcas() {
    // Realiza una solicitud GET para obtener la lista de submarcas desde la API
    fetch("http://localhost:8090/fama-market/api/subbrands/all")
        .then((response) => response.json())
        .then((submarcas) => {
            // Llama a la función para mostrar las submarcas en el contenedor
            mostrarSubmarcas(submarcas);
        })
        .catch((error) => {
            console.error('Error al obtener la lista de submarcas:', error);
        });
}

function mostrarSubmarcas(submarcas) {
    // Obtén la referencia al contenedor
    var contenedor = document.getElementById("submarcaContainer");

    // Itera sobre las submarcas y agrega imágenes al contenedor
    submarcas.forEach((submarca) => {
        var img = document.createElement("img");
        img.src = "data:image/jpeg;base64," + submarca.linkImageSubbrand;
        img.alt = submarca.nameSubBrand;
        img.className = "rounded-circle img-fluid border";
        img.style.cursor = "pointer";
        img.onclick = function () {
            redirigirAProductos(submarca.nameSubBrand);
        };

        contenedor.appendChild(img);
    });
}

function redirigirAProductos(submarcaNombre) {
    // Implementa la lógica para redirigir a productos según la submarca seleccionada
    console.log("Redirigir a productos de la submarca:", submarcaNombre);
}