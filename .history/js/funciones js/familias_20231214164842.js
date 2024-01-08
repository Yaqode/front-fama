 // URL de tu API
 const apiUrl = 'https://api.ejemplo.com/data';

 // Datos para enviar en la solicitud POST
 const postData = {
     key1: 'value1',
     key2: 'value2'
 };

 // Realizar solicitud POST
 fetch(apiUrl, {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify(postData)
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