import { createProxyMiddleware } from 'http-proxy-middleware';

export const apiUrl = '/fama-market/api/families/all'; 

// Realizar solicitud GET
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Procesar la respuesta de la API
        console.log(data);
    })
    .catch(error => {
        // Manejar errores
        console.error('Error al conectar con la API:', error);
    });
