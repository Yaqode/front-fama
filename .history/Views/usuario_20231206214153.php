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
    <link rel="stylesheet" href="./../css/fontawesome.min.css" >
</head>

<body>
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
    <body>




<!--==========================
=            html            =
===========================-->
        <section class="seccion-perfil-usuario">
            <div class="perfil-usuario-header">
                <div class="perfil-usuario-portada">
                    <div class="perfil-usuario-avatar">
                        <img src="http://localhost/multimedia/relleno/img-c9.png" alt="img-avatar">
                        <button type="button" class="boton-avatar">
                            <i class="far fa-image"></i>
                        </button>
                    </div>
                    <button type="button" class="boton-portada">
                        <i class="far fa-image"></i> Cambiar fondo
                    </button>
                </div>
            </div>
            <div class="perfil-usuario-body">
                <div class="perfil-usuario-bio">
                    <h3 class="titulo">Maria Alejandra De la Cruz</h3>
                    <p class="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="perfil-usuario-footer">
                    <ul class="lista-datos">
                        <li><i class="icono fas fa-map-signs"></i> Direccion de usuario:</li>
                        <li><i class="icono fas fa-phone-alt"></i> Telefono:</li>
                        <li><i class="icono fas fa-briefcase"></i> Trabaja en.</li>
                        <li><i class="icono fas fa-building"></i> Cargo</li>
                    </ul>

                </div>
            </div>
        </section>
        <!--====  End of html  ====-->


        <div class="container d-flex align-items-center justify-content-center" style="height: auto;">
            <button type="button" class="btn bg-danger text-white mt-4" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Agregar Subcategorias
            </button>
            <button type="button" class="btn btn-success text-white mt-4" data-bs-toggle="modal"
                data-bs-target="#modalSubmarca">
                Agregar Submarca
            </button>
            <button type="button" class="btn btn-primary text-white mt-4" data-bs-toggle="modal" data-bs-target="#modalAgregarProducto">
                Agregar Producto
            </button>
        </div>

        <!-- Primer Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar Subcategoría</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Formulario para agregar subcategoría -->
                        <form id="subcategoriaForm">
                            <div class="mb-3 d-flex justify-content-center align-items-center">
                                <label for="familiaSelect" class="form-label me-3">Familia:</label>
                                <select class="form-select me-3" id="familiaSelect" required>
                                    <option value="familia1">Familia 1</option>
                                    <option value="familia2">Familia 2</option>
                                    <!-- Agrega más opciones según sea necesario -->
                                </select>
                                <button type="button" class="btn btn-success" data-bs-toggle="modal"
                                    data-bs-target="#modalFamilia">
                                    Agregar Modal Familia
                                </button>
                            </div>
                            <div class="mb-3 d-flex justify-content-center align-items-center">
                                <label for="categoriaSelect" class="form-label me-3">Categoría:</label>
                                <select class="form-select me-3" id="categoriaSelect" required>
                                    <option value="categoria1">Categoría 1</option>
                                    <option value="categoria2">Categoría 2</option>
                                    <!-- Agrega más opciones según sea necesario -->
                                </select>
                                <button type="button" class="btn btn-success" data-bs-toggle="modal"
                                    data-bs-target="#modalCategoria">
                                    Agregar Modal Categoría
                                </button>
                            </div>
                            <div class="mb-3">
                                <label for="subcategoriaInput" class="form-label">Nombre de la Subcategoría:</label>
                                <input type="text" class="form-control" id="subcategoriaInput" required>
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

        <!-- Segundo Modal -->
        <div class="modal fade modal-below" id="modalFamilia" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal Familia</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Formulario para el nombre de la familia -->
                        <form id="familiaForm">
                            <div class="mb-3">
                                <label for="nombreFamilia" class="form-label">Nombre de la Familia:</label>
                                <input type="text" class="form-control" id="nombreFamilia" required>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" onclick="guardarFamilia()">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tercer Modal -->
        <div class="modal fade modal-below" id="modalCategoria" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal Categoría</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Formulario para la categoría -->
                        <form id="categoriaForm">
                            <div class="mb-3">
                                <label for="familiaSelectCategoria" class="form-label">Familia:</label>
                                <select class="form-select" id="familiaSelectCategoria" required>
                                    <option value="familia1">Familia 1</option>
                                    <option value="familia2">Familia 2</option>
                                    <!-- Agrega más opciones según sea necesario -->
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="nombreCategoria" class="form-label">Nombre de la Categoría:</label>
                                <input type="text" class="form-control" id="nombreCategoria" required>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary" onclick="guardarCategoria()">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Cuarto Modal (Agregar Submarca) -->
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

        <!-- Modal para agregar Marca -->
        <div class="modal fade" id="modalAgregarMarca" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Agregar Marca</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Contenido del formulario para agregar marca -->
                        <form>
                            <div class="mb-3">
                                <label for="marcaNombre" class="form-label">Nombre de la Marca:</label>
                                <input type="text" class="form-control" id="marcaNombre" required>
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



    </body>

    </html>
    <script src="./../js/tabla_dinamica.js"></script>
    <script src="./../js/jquery-1.11.0.min.js"></script>
    <script src="./../js/jquery-migrate-1.2.1.min.js"></script>
    <script src="./../js/bootstrap.bundle.min.js"></script>
    <script src="./../js/templatemo.js"></script>
    <script src="./../js/custom.js"></script>
</body>

</html>