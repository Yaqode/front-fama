<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="apple-touch-icon" href="img/apple-icon.png">
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
    <link rel="stylesheet" href="./../css/bootstrap.min.css">
    <link rel="stylesheet" href="./../css/templatemo.css">
    <link rel="stylesheet" href="./../css/style.css">
    <!-- Load fonts style after rendering the layout styles -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap">
    <link rel="stylesheet" href="./../css/fontawesome.min.css">
</head>
<body>

<style>
    body {
        background-color: #f8f9fa;
        font-family: 'Georgia', serif;
    }

    .containerr {
        margin-top: 50px;
        background-color: #ffffff;
        padding: 30px;
        border-radius: 10px;
    }

    h2 {
        text-align: center;
        color: #007bff;
        font-size: 28px;
    }

    .btn-agregar {
        background-color: #28a745;
        color: #ffffff;
    }

    .btn-editar,
    .btn-eliminar {
        background-color: #28a745;
        color: #ffffff;
        border-radius: 20px;
        font-size: 25px;
    }

    .btn-eliminar {
        background-color: #dc3545;
        /* Cambiado a rojo */
    }

    /* Aumentar el tamaño de la letra en la tabla */
    table {
        font-size: 28px;
    }
</style>


<!-- Header -->
<nav class="navbar navbar-expand-lg navbar-light shadow">
    <div class="container d-flex justify-content-between align-items-center">

        <a class="navbar-brand text-danger logo h1 align-self-center" href="index.html">
            FERRE-FAMA
        </a>

        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav">
            <div class="flex-fill">
                <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Familias</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="navbar align-self-center d-flex">
                <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                    <div class="input-group">
                        <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ...">
                        <div class="input-group-text">
                            <i class="fa fa-fw fa-search"></i>
                        </div>
                    </div>
                </div>
                <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal"
                    data-bs-target="#templatemo_search">
                    <i class="fa fa-fw fa-search text-dark mr-2"></i>
                </a>
                <a class="nav-icon position-relative text-decoration-none" href="">
                    <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                    <span
                        class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                </a>
                <a class="nav-icon position-relative text-decoration-none" href="Views/login.php">
                    <i class="fa fa-fw fa-user text-dark mr-3"></i>
                    <span
                        class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                </a>
            </div>
        </div>

    </div>
</nav>
<!-- Close Header -->
    
</body>
</html>