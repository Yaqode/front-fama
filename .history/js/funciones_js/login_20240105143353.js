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
        username: username.value,
        password: password.value,
    };

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };

    try {
        const response = await fetch("http://localhost:8090/fama-market/api/auth/login", options);
    
        if (!response.ok) {
            console.error("Error en la solicitud:", response.status);
            // Puedes agregar más detalles de error según sea necesario
            return;
        }
    
        const contentType = response.headers.get("content-type");
        
        if (contentType && contentType.includes("application/json")) {
            // Solo intentar parsear si la respuesta es de tipo JSON
            const json = await response.json();
            console.log("Respuesta JSON:", json); // Agregado para imprimir en la consola
            sessionStorage.setItem("Authorization", json.Authorization);
            window.location = "index.html";
        } else {
            console.error("Error: La respuesta no es de tipo JSON");
            // Manejar el caso en que la respuesta no es de tipo JSON
            showErrorMessage("Error: La respuesta del servidor no es de tipo JSON");
        }
    } catch (error) {
        console.error("Error al procesar la respuesta:", error);
        // Puedes manejar el error de manera específica aquí
        showErrorMessage("Error al procesar la respuesta del servidor");
    }
    
});

fields.forEach(function (field) {
    field.addEventListener("keyup", function () {
        field.classList.remove("errorField");
    });
});
