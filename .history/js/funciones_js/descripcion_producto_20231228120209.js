function agregarAlCarrito() {
    // Aquí debes verificar si el usuario ha iniciado sesión
    var usuarioIniciadoSesion = true; // Aquí deberías implementar tu lógica real

    if (usuarioIniciadoSesion) {
        // Si el usuario ha iniciado sesión, puedes agregar el producto al carrito
        alert("Producto agregado al carrito");
    } else {
        // Si el usuario no ha iniciado sesión, redirige a la página de inicio de sesión
        window.location.href = "/"; // Reemplaza con la URL real
    }
}
