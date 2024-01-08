// familias.js

import { createProxyMiddleware } from '@http-proxy-middleware/with-styles';

// Configurar el proxy para las solicitudes a la API
export function setupProxy(app) {
    app.use(
        '/fama-market/api',
        createProxyMiddleware({
            target: 'http://localhost:8090',
            changeOrigin: true,
        })
    );
}

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
