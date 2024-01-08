const btn = document.querySelector("#btnSubmit");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const feedback = document.querySelector("#feedback");
const alert = document.querySelector(".alert");
const fields = document.querySelectorAll(".validate");

function validate(errors) {
    fields.forEach(function (field) {
        if (field.value == "") {
            field.classList.add("errorField");
            errors.push(field.id);
        }
    });
}
function showErrorMessage(message) {
    alert.style.display = "block";
    feedback.innerHTML = message;
    setTimeout(function () {
        alert.style.display = "none";
    }, 3000);
}
btn.addEventListener("click", async function (event) {
    let errors = [];
    event.preventDefault();
    alert.style.display = "none";
    feedback.innerHTML = ``;
    validate(errors);
    if (errors.length > 0) {
        showErrorMessage(`Los campos ${errors.toString()} no pueden estar vacíos`);
        return false;
    }
    const data = {
        email: username.value,
        password: password.value,
    };
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    const response = await fetch("http://localhost:8090/fama-market/api/auth/login", options);

    // Verificar si la respuesta es exitosa (código de estado 2xx)
if (response.ok) {
    // Intentar analizar el JSON solo si la respuesta es exitosa
    const json = await response.json();

    // Resto del código aquí...
    if (json?.error) {
        showErrorMessage(`El login ha fallado: ${json.error}`);
        return false;
    }

    sessionStorage.setItem("Authorization", json.token);
    window.location = "index.html";
} else {
    // Mostrar un mensaje de error si la respuesta no es exitosa
    showErrorMessage(`Error en la solicitud: ${response.status}`);
}
});

fields.forEach(function (field) {
    field.addEventListener("keyup", function () {
        field.classList.remove("errorField");
    });
});
