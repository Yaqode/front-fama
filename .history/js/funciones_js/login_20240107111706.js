document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const data = {
            username: username,
            password: password,
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch("http://localhost:8090/fama-market/api/auth/login", options);

            if (!response.ok) {
                console.error("Error en la solicitud:", response.status);
                // Puedes agregar más detalles de error según sea necesario
                return;
            }

            const json = await response.json();
            const token = json.Authorization;

            // Almacena el token en sessionStorage
            sessionStorage.setItem("Authorization", token);

            // Redirige a la página después del inicio de sesión
            window.location.href = "index.html";
        } catch (error) {
            console.error("Error al procesar la respuesta:", error);
            // Puedes manejar el error de manera específica aquí
            showErrorMessage("Error al procesar la respuesta del servidor");
        }
    });
});
