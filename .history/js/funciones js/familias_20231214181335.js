// URL de tu API
const apiUrl = 'http://localhost:8090/fama-market/api/families/all';

// Realizar solicitud GET con modo 'no-cors'
fetch(apiUrl, { mode: 'no-cors' })
    .then(response => {
        // El contenido de la respuesta no estará disponible
        console.log('Solicitud exitosa, pero el contenido no está disponible debido a CORS');
    })
    .catch(error => {
        // Manejar errores
        console.error('Error al conectar con la API:', error);
    });

// Exportar la URL
export { apiUrl };
