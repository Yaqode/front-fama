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
            return false;
        }

        const json = await response.json(); // Extraer la respuesta como JSON
        const token = json.Authorization;

        sessionStorage.setItem("Authorization", token);
        window.location = "index.html";
    } catch (error) {
        console.error("Error al procesar la respuesta:", error);
        // Puedes manejar el error de manera específica aquí
        showErrorMessage("Error al procesar la respuesta del servidor");
    }
});
