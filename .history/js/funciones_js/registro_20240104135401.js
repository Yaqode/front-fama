function registrarPersona(datosPersona) {
    return fetch('http://localhost:8090/fama-market/api/persons/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosPersona)
    })
    .then(response => response.json())
    .then(persona => persona.id);
}

function registrarUsuario(datosUsuario) {
    return fetch('http://localhost:8090/fama-market/api/users/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosUsuario)
    })
    .then(response => response.json());
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Obtiene los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellidoPaterno = document.getElementById('apellidoPaterno').value;
    var apellidoMaterno = document.getElementById('apellidoMaterno').value;
    var usuario = document.getElementById('usuario').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    // Datos para la API de personas
    var datosPersona = {
        personName: nombre,
        lastName: apellidoPaterno,
        secondLastName: apellidoMaterno,
        personPhone: telefono
    };

    // Datos para la API de usuarios
    var datosUsuario = {
        userId: 0,
        userEmail: correo,
        userName: usuario,
        userPassword: contrasena,
        profileId: 1
    };

    // Realiza la primera solicitud a la API de personas
    registrarPersona(datosPersona)
        .then(personId => {
            // Obtiene el ID de la persona creada y lo agrega a los datos del usuario
            datosUsuario.personId = personId;

            // Realiza la segunda solicitud a la API de usuarios
            registrarUsuario(datosUsuario);
        })
        .then(usuario => {
            // Maneja la respuesta de la API de usuarios si es necesario
            console.log('Usuario registrado exitosamente:', usuario);

            // Puedes agregar lógica adicional después de registrar el usuario, si es necesario

            // Por ejemplo, redirigir a otra página o mostrar un mensaje de éxito
        })
        .catch(error => {
            console.error('Error al registrar usuario:', error);
        });
});
