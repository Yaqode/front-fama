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

    // Obtiene los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    const usuario = document.getElementById('usuario').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

        // Datos para la API de personas
        const personaData = {
            "personName" : nombre,
            "lastName": apellidoPaterno,
            "secondLastName" : apellidoMaterno,
            "personPhone" : telefono
        };
    
    fetch('http://localhost:8090/fama-market/api/users/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personaData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario guardado exitosamente:', data);
    
        //Eviar a otro 
        guardarUsu(data.productId, data.codeInternalProduct);
        // Puedes agregar lógica adicional después de guardar el producto, como cerrar el modal, actualizar la tabla, etc.
    })
    .catch(error => {
        console.error('Error al guardar el producto:', error);
    });
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    


    // Realiza la primera solicitud a la API de personas
    registrarPersona(datosPersona)
        .then(response => {
            
            // Obtiene el ID de la persona creada y lo agrega a los datos del usuario
                // Datos para la API de usuarios
            var datosUsuario = {
                userId: 0,
                userEmail: correo,
                userName: usuario,
                userPassword: contrasena,
                profileId: 1,
                personId: response.personId
            };
            console.log(datosUsuario);
            // Realiza la segunda solicitud a la API de usuarios
            return registrarUsuario(datosUsuario);
        })
        .then(persona => {
            // Maneja la respuesta de la API de usuarios si es necesario
            console.log('Usuario registrado exitosamente:', usuario);

            // Puedes agregar lógica adicional después de registrar el usuario, si es necesario

            // Por ejemplo, redirigir a otra página o mostrar un mensaje de éxito
        })
        .catch(error => {
            console.error('Error al registrar usuario:', error);
        });
});
