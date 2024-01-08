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
    <link rel="stylesheet" href="./../css/fontawesome.min.css" >

</head>

<style>
        body {
            background-color: #f8f9fa;
            font-family: 'Georgia', serif;
        }

        .container {
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

        .btn-editar, .btn-eliminar {
            background-color: #28a745;
            color: #ffffff;
            border-radius: 20px;
            font-size: 25px;
        }

        .btn-eliminar {
            background-color: #dc3545; /* Cambiado a rojo */
        }

        /* Aumentar el tamaño de la letra en la tabla */
        table {
            font-size: 28px;
        }
</style>

<body>


<div class="container">
    <h2 class="mb-4">CRUD de Submarcas</h2>

    <!-- Botón para abrir el modal de agregar submarca -->
    <button type="button" class="btn btn-agregar mb-3" data-toggle="modal" data-target="#modalAgregarSubmarca">
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
                    <button type="button" class="btn btn-editar btn-sm" data-toggle="modal" data-target="#modalEditarSubmarca">
                        Editar
                    </button>
                    <button type="button" class="btn btn-eliminar btn-sm" data-toggle="modal" data-target="#modalEliminarSubmarca">
                        Eliminar
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<!-- Modal para agregar submarca -->
<div class="modal fade" id="modalAgregarSubmarca" tabindex="-1" role="dialog" aria-labelledby="modalAgregarSubmarcaLabel" aria-hidden="true">
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
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" onclick="guardarSubcategoria()">Guardar</button>
                        </div>
            </div>
        </div>
</div>

<!-- Modal para editar submarca -->
<div class="modal fade" id="modalEditarSubmarca" tabindex="-1" role="dialog" aria-labelledby="modalEditarSubmarcaLabel" aria-hidden="true">
    <!-- Contenido del modal aquí -->
</div>

<!-- Modal para eliminar submarca -->
<div class="modal fade" id="modalEliminarSubmarca" tabindex="-1" role="dialog" aria-labelledby="modalEliminarSubmarcaLabel" aria-hidden="true">
    <!-- Contenido del modal aquí -->
</div>

<!-- Agrega los enlaces a Bootstrap JS y Popper.js -->
<script src="./../js/jquery-1.11.0.min.js"></script>
    <script src="./../js/jquery-migrate-1.2.1.min.js"></script>
    <script src="./../js/bootstrap.bundle.min.js"></script>
    <script src="./../js/templatemo.js"></script>
    <script src="./../js/custom.js"></script>
    

</body>
</html>
