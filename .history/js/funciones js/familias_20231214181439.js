const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/fama-market/api/families/all', async (req, res) => {
  try {
    const response = await fetch('http://localhost:8090/fama-market/api/families/all');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error al conectar con la API:', error);
    res.status(500).json({ error: 'Error al conectar con la API' });
  }
});

app.listen(8080, () => {
  console.log('Servidor intermedio escuchando en el puerto 8080');
});
