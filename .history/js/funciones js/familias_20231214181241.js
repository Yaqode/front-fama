// src/familias.js

// URL de tu API
const apiUrl = 'http://localhost:8090/fama-market/api/families/all';

// Realizar solicitud GET
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Imprimir los datos en la consola
        console.log('Datos de la API:', data);

        // Puedes realizar otras acciones con los datos aquí
    })
    .catch(error => {
        // Manejar errores
        console.error('Error al conectar con la API:', error);
    });

// Exportar la URL
export { apiUrl };
