// function registrarPersona() {
    
//     // Obtiene los valores del formulario
//     const nombre = $("#nombre").val();
//     const apellidoPaterno = $("#apellidoPaterno").val();
//     const apellidoMaterno = $("#apellidoMaterno").val();
//     const telefono = $("#telefono").val();
    
//     // Datos para la API de personas
//     const personaData = {
//         "personName" : nombre,
//         "lastName": apellidoPaterno,
//         "secondLastName" : apellidoMaterno,
//         "personPhone" : telefono
//     };

//     fetch('http://localhost:8090/fama-market/api/persons/save', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(personaData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Usuario guardado exitosamente:', data);
    
//         // Enviar a otro
//         registrarUsuario(data.personId);
//         // Puedes agregar lógica adicional después de guardar el usuario, como cerrar el modal, actualizar la tabla, etc.
//     })
//     .catch(error => {
//         console.error('Error al guardar la persona', error);
//     });
// }

// function registrarUsuario(personId) {
//     const usuario = $("#usuario").val();
//     const correo = $("#correo").val();
//     const contrasena = $("#contrasena").val();
//     const dataUser = {
//         "userId" : 0,
//         "userEmail" : correo,
//         "userName" : usuario,
//         "userPassword": contrasena,
//         "profileId" : 1,
//         "personId" : personId
//     }
    
//     fetch('http://localhost:8090/fama-market/api/users/save', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dataUser)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Usuario guardado exitosamente:', data);
//         // Puedes agregar lógica adicional después de guardar el usuario
//     })
//     .catch(error => {
//         console.error('Error al guardar el usuario:', error);
//     });
// }



document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Obtiene los valores del formulario
    var nombre = $("#nombre").val();
    var apellidoPaterno = $("#apellidoPaterno").val();
    var apellidoMaterno = $("#apellidoMaterno").val();
    var usuario = $("#usuario").val();
    var telefono = $("#telefono").val();
    var correo = $("#correo").val();
    var contrasena = $("#contrasena").val();

    console.log('Datos del formulario:', nombre, apellidoPaterno, apellidoMaterno, usuario, telefono, correo, contrasena);

    // Realiza la primera solicitud a la API de personas
    fetch('http://localhost:8090/fama-market/api/persons/save', {
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
                    userId: 0,
                    userEmail: correo,
                    userName: usuario,
                    userPassword: contrasena,
                    profileId: 1,
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
