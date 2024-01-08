fetch("http://localhost:8090/fama-market/api/families/all", { mode: 'no-cors' })
  .then(response => {
    console.log('Respuesta sin CORS:', response);
  })
  .catch(error => {
    console.error('Error al obtener la lista:', error);
  });
