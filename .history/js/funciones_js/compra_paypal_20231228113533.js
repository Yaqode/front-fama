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
                        currency_code: 'MXN'
                    }
                }]
            });
        },
        onApprove: function (data, actions) {
            actions.order.capture().then(function (detalles) {
                console.log('Transaction completed by ' + details);
            });
        }
    }).render('#paypal-button-container');
}
