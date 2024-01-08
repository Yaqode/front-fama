<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marcas</title>
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

        <a class="navbar-brand text-success logo h1 align-self-center" href="index.html">
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


<div class="container">
    <h2 class="mb-4">CRUD de Submarcas</h2>

    <!-- Botón para abrir el modal de agregar submarca -->
    <button type="button" class="btn btn-success text-white mt-4" data-bs-toggle="modal"
        data-bs-target="#modalSubmarca">
        Agregar Submarca
    </button>

    <!-- Tabla para mostrar las submarcas -->
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <!-- Aquí se agregarán las filas de submarcas dinámicamente desde el servidor -->
            <tr>
                <td>1</td>
                <td>Submarca 1</td>
                <!-- La columna de la imagen puede contener una etiqueta img -->
                <td><img src="ruta_de_la_imagen/submarca1.jpg" alt="" style="width: 50px; height: 50px;"></td>
                <td>
                    <!-- Botones para editar y eliminar cada submarca -->
                    <button type="button" class="btn btn-editar btn-sm" data-bs-toggle="modal"
                        data-bs-target="#modalEditarSubmarca">
                        Editar
                    </button>
                    <button type="button" class="btn btn-eliminar btn-sm" data-bs-toggle="modal"
                        data-bs-target="#modalEliminarSubmarca">
                        Eliminar
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<!-- Modal para agregar submarca -->
<div class="modal fade" id="modalSubmarca" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar Submarca</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Formulario para agregar submarca -->
                <form id="submarcaForm">
                    <div class="mb-3 d-flex justify-content-center align-items-center">
                        <label for="marcaSelect" class="form-label me-3">Marca:</label>
                        <select class="form-select me-3" id="marcaSelect" required>
                            <option value="marca1">Marca 1</option>
                            <option value="marca2">Marca 2</option>
                            <!-- Agrega más opciones según sea necesario -->
                        </select>
                        <a href="marcas.php" class="btn btn-success">Agregar Modal Marca</a>

                    </div>
                    <div class="mb-3">
                        <label for="submarcaInput" class="form-label">Nombre de la Submarca:</label>
                        <input type="text" class="form-control" id="submarcaInput" required>
                    </div>
                    <div class="mb-3">
                        <label for="logoInput" class="form-label">Agregar Logo:</label>
                        <input type="file" class="form-control" id="logoInput" accept="image/*">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" onclick="guardarSubmarca()">Guardar</button>
            </div>
        </div>
    </div>
</div>

<!-- Modal para editar submarca -->
<div class="modal fade" id="modalEditarSubmarca" tabindex="-1" role="dialog" aria-labelledby="modalEditarSubmarcaLabel"
    aria-hidden="true">
    <!-- Contenido del modal aquí -->
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar Submarca</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Formulario para agregar submarca -->
                <form id="submarcaForm">
                    <div class="mb-3 d-flex justify-content-center align-items-center">
                        <label for="marcaSelect" class="form-label me-3">Marca:</label>
                        <select class="form-select me-3" id="marcaSelect" required>
                            <option value="marca1">Marca 1</option>
                            <option value="marca2">Marca 2</option>
                            <!-- Agrega más opciones según sea necesario -->
                        </select>
                        <button type="button" class="btn btn-success" data-bs-toggle="modal"
                            data-bs-target="#modalAgregarMarca">
                            Agregar Modal Marca
                        </button>
                    </div>
                    <div class="mb-3">
                        <label for="submarcaInput" class="form-label">Nombre de la Submarca:</label>
                        <input type="text" class="form-control" id="submarcaInput" required>
                    </div>
                    <div class="mb-3">
                        <label for="logoInput" class="form-label">Agregar Logo:</label>
                        <input type="file" class="form-control" id="logoInput" accept="image/*">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" onclick="guardarSubmarca()">Guardar</button>
            </div>
        </div>
    </div>

</div>

<!-- Modal para eliminar submarca -->
<div class="modal fade" id="modalEliminarSubmarca" tabindex="-1" role="dialog" aria-labelledby="modalEliminarSubmarcaLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalEliminarSubmarcaLabel">Eliminar Submarca</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                
            </div>
            <div class="modal-body">
                <p>¿Deseas eliminar esta submarca?</p>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-danger">Eliminar</button>
            </div>
        </div>
    </div>
</div>
</div>







<!-- Agrega los enlaces a Bootstrap JS y Popper.js -->
<script src="./../js/jquery-1.11.0.min.js"></script>
<script src="./../js/jquery-migrate-1.2.1.min.js"></script>
<script src="./../js/bootstrap.bundle.min.js"></script>
<script src="./../js/templatemo.js"></script>
<script src="./../js/custom.js"></script>


</body>

</html>