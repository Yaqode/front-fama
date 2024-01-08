<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos</title>
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
            font-size: 16px;
        }

        .btn-eliminar {
            background-color: #dc3545;
        }

        table {
            font-size: 14px;
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

<div class="container">
        <h2 class="mb-4">CRUD de Productos</h2>

        <!-- Botón para abrir el modal de agregar submarca -->
        <button type="button" class="btn btn-success text-white mt-4" data-bs-toggle="modal"
            data-bs-target="#modalAgregarProducto">
            Agregar Productos
        </button>

        <!-- Tabla para mostrar la a subcategoria -->
        <table class="table mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Precio con descuento</th>
                    <th>Codigo de barras</th>
                    <th>Codigo interno</th>
                    <th>Cantidad de inventario</th>
                    <th>Subcategoria</th>
                    <th>Submarca</th>
                    <th>Imagenes</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <!-- Aquí se agregarán las filas de categorias dinámicamente desde el servidor -->
                <tr>
                    <td>1</td>
                    <td>Producto 1</td>
                    <td>Descripcion 1</td>
                    <td>$100.00</td>
                    <td>$90.00</td>
                    <td>123456789</td>
                    <td>ABC123</td>
                    <td>50</td>
                    <td>Subcategoria 1</td>
                    <td>Submarca 1</td>
                    <td>
                        <img src="ruta_de_la_imagen/imagen1.jpg" alt="Imagen 1" style="width: 50px; height: 50px;">
                    </td>
                    <td>
                        <!-- Botones para editar y eliminar cada subcategoria -->
                        <button type="button" class="btn btn-editar btn-sm" data-bs-toggle="modal"
                            data-bs-target="#modalEditarSubcategorias">
                            Editar
                        </button>
                        <button type="button" class="btn btn-eliminar btn-sm" data-bs-toggle="modal"
                            data-bs-target="#modalEliminarSubcategorias">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
</div>

<!-- Modal para agregar Producto -->
<div class="modal fade" id="modalAgregarProducto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Agregar Producto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Contenido del formulario para agregar producto -->
                        <form>
                            <div class="row">
                                <!-- Columna para la imagen y la tabla -->
                                <div class="col-md-6">
                                    <!-- Logo como botón para agregar imágenes -->
                                    <img src="./../img/productos-icono.png" alt="Logo Imagen" onclick="alert('Agregar Imágenes')" style="cursor: pointer; width: 400px; height: 400px;">
                                    <!-- Tabla de características -->
                                    <table class="table" id="tablaCaracteristicas">
                                        <thead>
                                            <tr>
                                                <th>Nombre de la Característica</th>
                                                <th>Descripción de la Característica</th>
                                                <th>Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <!-- Las filas de características se agregarán dinámicamente mediante JavaScript -->
                                        </tbody>
                                    </table>
                                    <!-- Botón para agregar nueva fila de características -->
                                    <button type="button" class="btn btn-primary" onclick="agregarCaracteristica()">Agregar Especificacion</button>
                                </div>
                                <!-- Columna para los datos del producto -->
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="nombreProducto" class="form-label">Nombre del Producto:</label>
                                        <input type="text" class="form-control" id="nombreProducto" required style="border: 1px solid #343541;">
                                    </div>
                                    <div class="mb-3">
                                        <label for="descripcion" class="form-label">Descripción:</label>
                                        <textarea class="form-control" id="descripcion" rows="3" style="border: 1px solid #343541;"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="precio" class="form-label">Precio:</label>
                                        <input type="text" class="form-control" id="precio" required style="border: 1px solid #343541;">
                                    </div>
                                    <div class="mb-3">
                                        <label for="precioDescuento" class="form-label">Precio con Descuento:</label>
                                        <input type="text" class="form-control" id="precioDescuento" style="border: 1px solid #343541;">
                                    </div>
                                    <div class="mb-3">
                                        <label for="codigoBarras" class="form-label">Código de Barras:</label>
                                        <input type="text" class="form-control" id="codigoBarras" style="border: 1px solid #343541;">
                                    </div>
                                    <div class="mb-3">
                                        <label for="codigoInterno" class="form-label">Código Interno:</label>
                                        <input type="text" class="form-control" id="codigoInterno" style="border: 1px solid #343541;">
                                    </div>
                                    <div class="mb-3">
                                        <label for="Cantidad de inventario" class="form-label">Cantidad de inventario:</label>
                                        <input type="text" class="form-control" id="canitdad" style="border: 1px solid #343541;">
                                    </div>
                                    <div class="mb-3">
                                        <label for="submarcaCombo" class="form-label">Submarca:</label>
                                        <select class="form-select" id="submarcaCombo" required style="border: 1px solid #343541;">
                                            <!-- Opciones de submarcas -->
                                            <option value="submarca1">Submarca 1</option>
                                            <option value="submarca2">Submarca 2</option>
                                            <!-- Agrega más opciones según sea necesario -->
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="subcategoriaCombo" class="form-label">Subcategoría:</label>
                                        <select class="form-select" id="subcategoriaCombo" required style="border: 1px solid #343541;">
                                            <!-- Opciones de subcategorías -->
                                            <option value="subcategoria1">Subcategoría 1</option>
                                            <option value="subcategoria2">Subcategoría 2</option>
                                            <!-- Agrega más opciones según sea necesario -->
                                        </select>
                                    </div>
                                    <!-- Tabla de características -->
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>











    <script src="./../js/tabla_dinamica.js"></script>
    <script src="./../js/jquery-1.11.0.min.js"></script>
    <script src="./../js/jquery-migrate-1.2.1.min.js"></script>
    <script src="./../js/bootstrap.bundle.min.js"></script>
    <script src="./../js/templatemo.js"></script>
    <script src="./../js/custom.js"></script>

</body>

</html>
