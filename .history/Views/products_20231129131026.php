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
    <link rel="stylesheet" href="./../css/fontawesome.min.css" </head>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans';
    }

    .contenido {
        max-width: 1200px;
        width: 100%;
        margin: 40px auto;
        display: flex;
    }

    .mostrador {
        width: 100%;
        transition: .5s ease;
    }

    .mostrador .fila {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .mostrador .fila .item {
        max-width: 210px;
        padding: 30px;
        height: 250px;
        /*border: 2px solid red;*/
        text-align: center;
        margin: 0 10px;
        cursor: pointer;
        border-radius: 5px;
        transition: .3s;
    }

    .mostrador .fila .item:hover {
        background-color: #e6e6e6;
    }

    .mostrador .fila .item img {
        width: 100%;
        margin: 30px 0;
    }

    .mostrador .fila .item .descripcion {
        color: #707070;
        font-weight: bold;
    }

    .mostrador .fila .item .precio {
        color: #f85151;
        font-weight: bold;
        font-size: 20px;
    }

    .seleccion {
        transition: .5s ease;
        opacity: 0;
        width: 0%;
        border: 1px solid #ccc;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
    }

    .cerrar {
        position: absolute;
        right: 0;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }

    .info {
        padding: 20px;
    }

    .info img {
        display: block;
        margin: 30px auto;
        width: 80%;
    }

    .info h2 {
        color: #707070;
        margin-bottom: 10px;
    }

    .info p {
        font-size: 14px;
        color: #707070;
        margin-bottom: 10px;
    }

    .info .precio {
        font-size: 30px;
        font-weight: bold;
        color: #f85151;
        margin-bottom: 10px;
        display: block;
    }

    .info .fila {
        display: flex;
        align-items: flex-end;
    }

    .info .fila label {
        display: block;
        margin-bottom: 10px;
    }

    .info .fila select {
        width: 100px;
        font-size: 18px;
        padding: 6px;
        margin-right: 30px;
    }

    .info .fila button {
        height: 40px;
        border: none;
        padding: 0 10px;
        color: #fff;
        background-color: #f85151;
    }
    .agregar-carrito-btn {
    background-color: #4caf50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease-in-out;
}

   .agregar-carrito-btn:hover {
    background-color: #45a049;
}

    </style>

<body>
    <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">

            <a class="navbar-brand text-success logo h1 align-self-center" href="./../index.html">
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
    <html lang="es">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="estilo.css">
        <title>CALZADO DEPORTIVO</title>
    </head>

    <body>
        <section class="contenido">
            <div class="mostrador" id="mostrador">
                <div class="fila">
                    <div class="item" onclick="cargar(this)">
                        <div class="contenedor-foto">
                            <img src="img/1.png" alt="">
                        </div>
                        <p class="descripcion">NIKE AIR 97</p>
                        <span class="precio">$ 1.300</span>
                        <button class="agregar-carrito-btn" onclick="agregarAlCarrito()">Agregar al carrito</button>
                    </div>

                    <div class="item" onclick="cargar(this)">
                        <div class="contenedor-foto">
                            <img src="img/2.png" alt="">
                        </div>
                        <p class="descripcion" id>NIKE RUNNING TERRA </p>
                        <span class="precio">$ 1.800</span>
                    </div>
                    <div class="item" onclick="cargar(this)">
                        <div class="contenedor-foto">
                            <img src="img/3.png" alt="">
                        </div>
                        <p class="descripcion">NIKE WINFLO 8
                        </p>
                        <span class="precio">$ 3.600</span>
                    </div>
                    <div class="item" onclick="cargar(this)">
                        <div class="contenedor-foto">
                            <img src="img/4.png" alt="">
                        </div>
                        <p class="descripcion">NIKE LOW-TOP</p>
                        <span class="precio">$ 1.800</span>
                    </div>
                </div>
                <div class="fila">
                    <div class="item" onclick="cargar(this)">
                        <div class="contenedor-foto">
                            <img src="img/5.png" alt="">
                        </div>
                        <p class="descripcion">NIKE BLAZER 97</p>
                        <span class="precio">$ 130</span>
                    </div>
                    <div class="item" onclick="cargar(this)">
                        <div class="contenedor-foto">
                            <img src="img/6.png" alt="">
                        </div>
                        <p class="descripcion">NIKE LEGEND ESENTIAL</p>
                        <span class="precio">$ 2.000</span>
                    </div>
                    <div class="item" onclick="cargar(this)">
                        <div class="contenedor-foto">
                            <img src="img/7.png" alt="">
                        </div>
                        <p class="descripcion">NIKE AIR ZOOM</p>
                        <span class="precio">$ 2.500</span>
                    </div>
                    <div class="item" onclick="cargar(this)">
                        <div class="contenedor-foto">
                            <img src="img/8.png" alt="">
                        </div>
                        <p class="descripcion">NIKE TERRA KING</p>
                        <span class="precio">$ 1.800</span>
                    </div>
                </div>
            </div>
            <!-- CONTENEDOR DEL ITEM SELECCIONADO -->
            <div class="seleccion" id="seleccion">
                <div class="cerrar" onclick="cerrar()">
                    &#x2715
                </div>
                <div class="info">
                    <img src="img/1.png" alt="" id="img">
                    <h2 id="modelo">NIKE MODEL 1</h2>
                    <p id="descripcion">Descripción Modelo 1</p>

                    <span class="precio" id="precio">$ 130</span>

                    <div class="fila">
                        <div class="size">
                            <label for="">SIZE</label>
                            <select name="" id="">
                                <option value="">40</option>
                                <option value="">42</option>
                                <option value="">44</option>
                                <option value="">46</option>
                            </select>
                        </div>
                        <button>AGREGAR AL CARRITO</button>
                    </div>
                </div>
            </div>
        </section>

        <script src="script.js"></script>
    </body>

    </html>

    <!-- Start Script -->
    <script src="./../js/jquery-1.11.0.min.js"></script>
    <script src="./../js/jquery-migrate-1.2.1.min.js"></script>
    <script src="./../js/bootstrap.bundle.min.js"></script>
    <script src="./../js/templatemo.js"></script>
    <script src="./../js/custom.js"></script>
    <!-- End Script -->

</body>

</html>