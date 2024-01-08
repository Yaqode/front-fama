$(function () {
    // Llama a la función para obtener y mostrar las submarcas al cargar la página
    obtenerListaSubmarcas();
});

function obtenerListaSubmarcas() {
    // Realiza una solicitud GET para obtener la lista de submarcas desde la API
    fetch("http://localhost:8090/fama-market/api/subbrands/all")
        .then((response) => response.json())
        .then((submarcas) => {
            // Filtra las submarcas para obtener solo la de "Truper_kids"
            var submarcaTruperKids = submarcas.find(submarca => submarca.nameSubBrand === "Truper_kids");

            // Llama a la función para mostrar la submarca en el contenedor
            mostrarSubmarca(submarcaTruperKids);
        })
        .catch((error) => {
            console.error('Error al obtener la lista de submarcas:', error);
        });
}

function mostrarSubmarca(submarca) {
    // Obtén la referencia al contenedor
    var contenedor = document.getElementById("submarcaContainer");

    if (submarca) {
        // Si se encuentra la submarca, agrega su imagen al contenedor
        var img = document.createElement("img");
        img.src = "data:image/jpeg;base64," + submarca.linkImageSubbrand;
        img.alt = submarca.nameSubBrand;
        img.className = "rounded-circle img-fluid border";
        img.style.cursor = "pointer";
        img.onclick = function () {
            redirigirAProductos(submarca.nameSubBrand);
        };

        contenedor.appendChild(img);
    } else {
        console.error('No se encontró la submarca "Truper_kids"');
    }
}

function redirigirAProductos(submarcaNombre) {
    // Implementa la lógica para redirigir a productos según la submarca seleccionada
    console.log("Redirigir a productos de la submarca:", submarcaNombre);
}



function redirigirAProductos(submarcaNombre) {
    // Implementa la lógica para redirigir a productos según la submarca seleccionada
    console.log("Redirigir a productos de la submarca:", submarcaNombre);
}