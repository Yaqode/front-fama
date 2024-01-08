function registrarPersona() {
    
    // Obtiene los valores del formulario
    const nombre = $("#nombre").val;
    const apellidoPaterno = $("#apellidoPaterno").val();
    const apellidoMaterno = $("#apellidoMaterno").val();
    const telefono = document.getElementById("#telefono').val();
    

        // Datos para la API de personas
        const personaData = {
            "personName" : nombre,
            "lastName": apellidoPaterno,
            "secondLastName" : apellidoMaterno,
            "personPhone" : telefono
        };

    return fetch('http://localhost:8090/fama-market/api/persons/save', {
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
        registrarUsuario(data.personId);
        // Puedes agregar lógica adicional después de guardar el producto, como cerrar el modal, actualizar la tabla, etc.
    })
    .catch(error => {
        console.error('Error al guardar la persona', error);
    });
}

function registrarUsuario(personId) {
    const usuario = document.getElementById('#usuario').val();
    const correo = document.getElementById('#correo').val();
    const contrasena = document.getElementById('#contrasena').val();
    const dataUser = {
        "userId" : 0,
        "userEmail" : correo,
        "userName" : usuario,
        "userPassword": contrasena,
        "profileId" : 1,
        "personId" : personId
    }
    
    fetch('http://localhost:8090/fama-market/api/users/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Imagenes guardado exitosamente:', data);
    })
    .catch(error => {
        console.error('Error al guardar el producto:', error);
    });
}