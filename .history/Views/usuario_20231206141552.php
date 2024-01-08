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
    <link rel="stylesheet" href="./../css/fontawesome.min.css" </head>

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
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Apock web design</title>
        <link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossorigin="anonymous" />
    </head>

    <body>



<style type="text/css">
        .modal-below {
            top: 100%;
            transform: translate(0, -100%);
        }

        html {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            text-size-adjust: 100%;
            line-height: 1.4;
        }


        * {
            margin: 0;
            padding: 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        body {
            color: #404040;
            font-family: "Arial", Segoe UI, Tahoma, sans-serifl, Helvetica Neue, Helvetica;
        }

        /*=====================================
    estilos de la utilidad
    Copiar esto
    =====================================*/
        .seccion-perfil-usuario .perfil-usuario-body,
        .seccion-perfil-usuario {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
        }

        .seccion-perfil-usuario .perfil-usuario-header {
            width: 100%;
            display: flex;
            justify-content: center;
            background: linear-gradient(#B873FF, transparent);
            margin-bottom: 1.25rem;
        }

        .seccion-perfil-usuario .perfil-usuario-portada {
            display: block;
            position: relative;
            width: 90%;
            height: 17rem;
            background-image: linear-gradient(45deg, #BC3CFF, #317FFF);
            border-radius: 0 0 20px 20px;
            /*
        background-image: url('http://localhost/multimedia/png/user-portada-3.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        */
        }

        .seccion-perfil-usuario .perfil-usuario-portada .boton-portada {
            position: absolute;
            top: 1rem;
            right: 1rem;
            border: 0;
            border-radius: 8px;
            padding: 12px 25px;
            background-color: rgba(0, 0, 0, .5);
            color: #fff;
            cursor: pointer;
        }

        .seccion-perfil-usuario .perfil-usuario-portada .boton-portada i {
            margin-right: 1rem;
        }

        .seccion-perfil-usuario .perfil-usuario-avatar {
            display: flex;
            width: 180px;
            height: 180px;
            align-items: center;
            justify-content: center;
            border: 7px solid #FFFFFF;
            background-color: #DFE5F2;
            border-radius: 50%;
            box-shadow: 0 0 12px rgba(0, 0, 0, .2);
            position: absolute;
            bottom: -40px;
            left: calc(50% - 90px);
            z-index: 1;
        }

        .seccion-perfil-usuario .perfil-usuario-avatar img {
            width: 100%;
            position: relative;
            border-radius: 50%;
        }

        .seccion-perfil-usuario .perfil-usuario-avatar .boton-avatar {
            position: absolute;
            left: -2px;
            top: -2px;
            border: 0;
            background-color: #fff;
            box-shadow: 0 0 12px rgba(0, 0, 0, .2);
            width: 45px;
            height: 45px;
            border-radius: 50%;
            cursor: pointer;
        }

        .seccion-perfil-usuario .perfil-usuario-body {
            width: 70%;
            position: relative;
            max-width: 750px;
        }

        .seccion-perfil-usuario .perfil-usuario-body .titulo {
            display: block;
            width: 100%;
            font-size: 1.75em;
            margin-bottom: 0.5rem;
        }

        .seccion-perfil-usuario .perfil-usuario-body .texto {
            color: #848484;
            font-size: 0.95em;
        }

        .seccion-perfil-usuario .perfil-usuario-footer,
        .seccion-perfil-usuario .perfil-usuario-bio {
            display: flex;
            flex-wrap: wrap;
            padding: 1.5rem 2rem;
            box-shadow: 0 0 12px rgba(0, 0, 0, .2);
            background-color: #fff;
            border-radius: 15px;
            width: 100%;
        }

        .seccion-perfil-usuario .perfil-usuario-bio {
            margin-bottom: 1.25rem;
            text-align: center;
        }

        .seccion-perfil-usuario .lista-datos {
            width: 50%;
            list-style: none;
        }

        .seccion-perfil-usuario .lista-datos li {
            padding: 5px 0;
        }

        .seccion-perfil-usuario .lista-datos li>.icono {
            margin-right: 1rem;
            font-size: 1.2rem;
            vertical-align: middle;
        }

        .seccion-perfil-usuario .redes-sociales {
            position: absolute;
            right: calc(0px - 50px - 1rem);
            top: 0;
            display: flex;
            flex-direction: column;
        }

        .seccion-perfil-usuario .redes-sociales .boton-redes {
            border: 0;
            background-color: #fff;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            color: #fff;
            box-shadow: 0 0 12px rgba(0, 0, 0, .2);
            font-size: 1.3rem;
        }

        .seccion-perfil-usuario .redes-sociales .boton-redes+.boton-redes {
            margin-top: .5rem;
        }

        .seccion-perfil-usuario .boton-redes.facebook {
            background-color: #5955FF;
        }

        .seccion-perfil-usuario .boton-redes.twitter {
            background-color: #35E1BF;
        }

        .seccion-perfil-usuario .boton-redes.instagram {
            background: linear-gradient(45deg, #FF2DFD, #40A7FF);
        }

        /* adactacion a dispositivos */
        @media (max-width: 750px) {
            .seccion-perfil-usuario .lista-datos {
                width: 100%;
            }

            .seccion-perfil-usuario .perfil-usuario-portada,
            .seccion-perfil-usuario .perfil-usuario-body {
                width: 95%;
            }

            .seccion-perfil-usuario .redes-sociales {
                position: relative;
                flex-direction: row;
                width: 100%;
                left: 0;
                text-align: center;
                margin-top: 1rem;
                margin-bottom: 1rem;
                align-items: center;
                justify-content: center
            }

            .seccion-perfil-usuario .redes-sociales .boton-redes+.boton-redes {
                margin-left: 1rem;
                margin-top: 0;
            }
        }
</style>
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
                        <!-- Columna para la imagen -->
                        <div class="col-md-6">
                            <!-- Logo como botón para agregar imágenes -->
                            <img src="./../img/productos-icono.png" alt="Logo Imagen" onclick="alert('Agregar Imágenes')" style="cursor: pointer; width: 400px; height: 400px;">
                        </div>
                        <!-- Columna para los datos del producto -->
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label for="nombreProducto" class="form-label">Nombre del Producto:</label>
                                <input type="text" class="form-control" id="nombreProducto" required>
                            </div>
                            <div class="mb-3">
                                <label for="descripcion" class="form-label">Descripción:</label>
                                <textarea class="form-control" id="descripcion" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="precio" class="form-label">Precio:</label>
                                <input type="text" class="form-control" id="precio" required>
                            </div>
                            <div class="mb-3">
                                <label for="precioDescuento" class="form-label">Precio con Descuento:</label>
                                <input type="text" class="form-control" id="precioDescuento">
                            </div>
                            <div class="mb-3">
                                <label for="codigoBarras" class="form-label">Código de Barras:</label>
                                <input type="text" class="form-control" id="codigoBarras">
                            </div>
                            <div class="mb-3">
                                <label for="codigoInterno" class="form-label">Código Interno:</label>
                                <input type="text" class="form-control" id="codigoInterno">
                            </div>
                            <div class="mb-3">
                                <label for="submarcaCombo" class="form-label">Submarca:</label>
                                <select class="form-select" id="submarcaCombo" required>
                                    <!-- Opciones de submarcas -->
                                    <option value="submarca1">Submarca 1</option>
                                    <option value="submarca2">Submarca 2</option>
                                    <!-- Agrega más opciones según sea necesario -->
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="subcategoriaCombo" class="form-label">Subcategoría:</label>
                                <select class="form-select" id="subcategoriaCombo" required>
                                    <!-- Opciones de subcategorías -->
                                    <option value="subcategoria1">Subcategoría 1</option>
                                    <option value="subcategoria2">Subcategoría 2</option>
                                    <!-- Agrega más opciones según sea necesario -->
                                </select>
                            </div>

                            <!-- Nuevo bloque para las características -->
                            <div class="mb-3">
                                <h5>Características del Producto</h5>
                                <div class="mb-3">
                                    <label for="nombreCaracteristica" class="form-label">Nombre Característica:</label>
                                    <input type="text" class="form-control" id="nombreCaracteristica">
                                </div>
                                <div class="mb-3">
                                    <label for="descripcionCaracteristica" class="form-label">Descripción Característica:</label>
                                    <input type="text" class="form-control" id="descripcionCaracteristica">
                                </div>
                                <!-- Puedes duplicar estos campos según sea necesario -->
                            </div>
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
    <script src="./../js/jquery-1.11.0.min.js"></script>
    <script src="./../js/jquery-migrate-1.2.1.min.js"></script>
    <script src="./../js/bootstrap.bundle.min.js"></script>
    <script src="./../js/templatemo.js"></script>
    <script src="./../js/custom.js"></script>
</body>

</html>