const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/fama-market/api',
    createProxyMiddleware({
      target: 'http://localhost:8090',
      changeOrigin: true,
    })
);
};
// script.js

// URL de tu API
const apiUrl = 'http://localhost:8090/fama-market/api/families/all';

// Realizar solicitud GET
fetch(apiUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(data => {
    // Procesar la respuesta de la API
    console.log(data);
})
.catch(error => {
    // Manejar errores
    console.error('Error al conectar con la API:', error);
});
