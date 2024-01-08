<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
<style>
    .login-page-body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #E5EDC3;
        color: #333;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .login-container {
        background-color: #EAF1EF;
        border: 1px solid #ddd;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        max-width: 300px;
        width: 100%;
        text-align: center;
        transition: transform 0.3s ease-in-out;
    }

    .login-container:hover {
        transform: scale(1.02);
    }

    .login-container h2 {
        margin-bottom: 20px;
        color: #333;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        font-size: 14px;
        margin-bottom: 8px;
        color: #555;
    }

    .form-group input {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: border-color 0.3s ease-in-out;
    }

    .form-group input:focus {
        border-color: #3498db;
    }

    .login-btn {
        background-color: #3498db;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s ease-in-out;
    }

    .login-btn:hover {
        background-color: #2980b9;
    }

    .logo img {
        max-width: 100%;
        height: auto;
        margin-bottom: 20px;
    }
</style>

</head>

<body class="login-page-body">

    <div class="login-container">
        <div class="logo">
            <img src="" alt="Logo">
        </div>
        <h2>Iniciar Sesión</h2>
        <form>
            <div class="form-group">
                <label for="username">Usuario:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="login-btn">Iniciar Sesión</button>
            <button class="button" href="">Registrarse</button>
        </form>
    </div>

</body>

</html>