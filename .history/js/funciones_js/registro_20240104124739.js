<script>
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

    // Realiza la solicitud para obtener el ID del perfil (profileId)
    return fetch('http://localhost:8090/fama-market/api/profiles/all')
  })
  .then(response => response.json())
  .then(profiles => {
    // Busca el perfil con nombre 'nombreDeseado' (ajusta según tus datos reales)
    var desiredProfile = profiles.find(profile => profile.name === 'nombreDeseado');

    // Usa el ID del perfil deseado en la solicitud a la API de usuarios
    return fetch('URL_API_USUARIOS', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userEmail: correo,
        userName: usuario,
        userPassword: contrasena,
        profileId: desiredProfile.id, // Utiliza el ID del perfil deseado
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
</script>
