// src/familias.js
// src/index.js

import { proxy } from './familias';  // Importa el proxy

// Añade el proxy al objeto de configuración de Create React App
const { createProxyMiddleware } = require('http-proxy-middleware');
const setupProxy = app => app.use('/fama-market/api', proxy);

export { setupProxy };

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
