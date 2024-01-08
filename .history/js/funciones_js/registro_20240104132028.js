document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe normalmente

  // Obtiene los valores del formulario
  var nombre = document.getElementById('nombre').value;
  var apellidoPaterno = document.getElementById('apellidoPaterno').value;
  var apellidoMaterno = document.getElementById('apellidoMaterno').value;
  var usuario = document.getElementById('usuario').value;
  var telefono = document.getElementById('telefono').value;
  var correo = document.getElementById('correo').value;
  var contrasena = document.getElementById('contrasena').value;

  // Realiza la primera solicitud a la API de personas
  fetch('URL_API_PERSONAS', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      personName: nombre,
      lastName: apellidoPaterno,
      secondLastName: apellidoMaterno,
      personPhone: telefono
    })
  })
  .then(response => response.json())
  .then(persona => {
    // Obtiene el ID de la persona creada
    var personId = persona.id;

    // Realiza la segunda solicitud a la API de usuarios
    return fetch('http://localhost:8090/fama-market/api/users/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userEmail: correo,
        userName: usuario,
        userPassword: contrasena,
        profileId: 1, // El valor fijo de profileId
        personId: personId
      })
    });
  })
  .then(response => response.json())
  .then(usuario => {
    // Maneja la respuesta de la API de usuarios si es necesario
    console.log('Usuario registrado exitosamente:', usuario);
  })
  .catch(error => {
    console.error('Error al registrar usuario:', error);
  });
});
