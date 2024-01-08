<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="img/apple-icon.png">
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
    <link rel="stylesheet" href="./../css/bootstrap.min.css">
    <link rel="stylesheet" href="./../css/templatemo.css">
    <link rel="stylesheet" href="./../css/style.css">
    <!-- Load fonts style after rendering the layout styles -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap">
    <link rel="stylesheet" href="./../css/fontawesome.min.css" >
</head>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

    .contenedor-productos {
        display: flex;
        justify-content: space-around;
        width: 100%;
        flex-wrap: nowrap;
        overflow-x: auto;
    }

    .item {
        border: 1px solid #ddd;
        margin: 10px;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        transition: transform 0.3s ease-in-out;
        max-width: 200px; /* Ajusta el ancho según tus necesidades */
        flex: 0 0 auto; /* No permitir que los productos se encogieran */
    }

    .item:hover {
        transform: scale(1.05);
    }

    .contenedor-foto {
        position: relative;
        overflow: hidden;
        height: 150px; /* Ajusta la altura según tus necesidades */
    }

    .contenedor-foto img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .descripcion {
        margin: 10px 0;
        font-size: 16px;
        font-weight: bold;
    }

    .precio {
        color: #4caf50; /* Color verde para ferretería */
        font-size: 18px;
        font-weight: bold;
    }

    .agregar-carrito-btn {
        display: block;
        background-color: #4caf50;
        color: #fff;
        text-decoration: none;
        padding: 8px 16px;
        border-radius: 5px;
        margin-top: 10px;
    }

    .titulo-productos {
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
    }
    iframe {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
    }

    .nav {
        list-style: none;
        margin: 0;
        /* Agregado para evitar el espacio predeterminado del margen */
    }

    .nav>li {
        float: left;
        position: relative;
    }

    .nav li a {
        background-color: #ffffff;
        color: #000000;
        text-decoration: none;
        padding: 10px 12px;
        display: block;
    }

    .nav li a:hover {
        background-color: #b46239;
    }

    .nav li ul {
        display: none;
        position: absolute;
        min-width: 200px;
        /* Tamaño fijo para los submenús */
        height: 300px;
        /* Altura fija para los submenús */
        top: 300%;
        left: 0;
        z-index: 1000;
    }

    .nav li ul li {
        width: 100%;
        /* Ocupar todo el ancho del submenú */
        text-align: left;
        /* Alinear el texto a la izquierda */
    }

    .nav li ul li ul {
        left: 100%;
        top: 0;
    }

    .nav li:hover>ul {
        display: block;
    }

    .nav li ul li:hover>ul {
        display: block;
        left: 100%;
        top: 0;
    }

    /* Alineación de submenús hacia arriba */
    .nav li ul li ul {
        left: 100%;
        top: 0;
    }
</style>

<body>
    <!-- Topbar Start -->
    <div class="container-fluid">
        <div class="row align-items-center py-3 px-xl-5">
            <div class="col-lg-3 d-none d-lg-block">
                <a href="" class="text-decoration-none">
                    <h1 class="m-0 display-5 font-weight-semi-bold"><span
                            class="text-primary font-weight-bold border px-3 mr-1">FERRE - FAMA</span></h1>
                </a>
            </div>
            <div class="col-lg-6 col-6 text-left">
                <form action="">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for products">
                        <div class="input-group-append">
                            <span class="input-group-text bg-transparent text-primary">
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-3 col-6 text-right">
                <a href="" class="btn border">
                    <i class="fas fa-shopping-cart text-primary"></i>
                </a>
                <a href="Views/login.html" class="btn border">
                    <i class="fa fa-user" aria-hidden="true">Iniciar sesion</i>
                </a>
                <a href="Views/register.html" class="btn border">
                    <i class="fa fa-user" aria-hidden="true">Registrarse</i>
                </a>
            </div>
        </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <div class="container-fluid mb-5">
        <div class="row border-top px-xl-5">
            <div class="col-lg-9">
                <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a href="" class="text-decoration-none d-block d-lg-none">
                        <h1 class="m-0 display-5 font-weight-semi-bold"><span
                                class="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <!-- Dropdown Start -->
                            <div class="nav-item dropdown">
                                <div>
                                    <ul class="nav">
                                        <li><a href="#">Familias</a>
                                            <ul id="familiasMenu">
                                                <!-- Familias se llenará dinámicamente -->
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </div>
            <div class="col-lg-3 d-flex justify-content-end align-items-center">
                
            </div>
        </div>
        <hr class="my-8">
    </div>
    <!-- Navbar End -->
        


    <!-- Start Script -->
    <script src="script.js"></script>
    <script src="./../js/jquery-1.11.0.min.js"></script>
    <script src="./../js/jquery-migrate-1.2.1.min.js"></script>
    <script src="./../js/bootstrap.bundle.min.js"></script>
    <script src="./../js/templatemo.js"></script>
    <script src="./../js/custom.js"></script>
    <!-- End Script -->

</body>

</html>