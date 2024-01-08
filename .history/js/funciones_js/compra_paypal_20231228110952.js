// paypal.js
function iniciarPaypal() {
    paypal.Buttons({
        style: {
            color: 'blue',
            shape: 'pill',
            label: 'pay'
        },
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '100.00',
                        currency_code: 'USD'
                    }
                }]
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                console.log('Transaction completed by ' + details.payer.name.given_name);
                enviarDatosAPITransaccion(details);
            });
        }
    }).render('#paypal-button-container');
}


// api.js
function enviarDatosAPITransaccion(details) {
    var datosTransaccion = {
        idTransaccion: details.id,
        nombreCliente: details.payer.name.given_name,
        // Agrega más datos según sea necesario
    };

    fetch('http://tu-api.com/pagar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosTransaccion)
    })
    .then(response => response.json())
    .then(resultado => {
        console.log('Respuesta de la API:', resultado);
        // Puedes realizar acciones adicionales según la respuesta de tu API
    })
    .catch(error => {
        console.error('Error al enviar datos a la API:', error);
    });
}
