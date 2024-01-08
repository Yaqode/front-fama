// src/familias.js

// Importa el módulo 'http-proxy-middleware'
import { createProxyMiddleware } from 'http-proxy-middleware';

// Configura el proxy para las solicitudes a la API
const proxy = createProxyMiddleware({
    target: 'http://localhost:8090',
    changeOrigin: true,
});

export { proxy };

// URL de tu API
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
