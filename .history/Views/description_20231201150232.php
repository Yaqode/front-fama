<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pagina Producto</title>
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
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .carousel-inner img {
        width: 50%;
        /* Establece el ancho al 100% para que todas las imágenes ocupen el mismo ancho */
        height: auto;
        /* Mantiene la proporción original de la imagen */
    }

    #carouselExampleInterval {
        width: 50%;
        /* Ajusta el ancho del contenedor del carrusel según tus preferencias */
        margin: auto;
        /* Centra el contenedor horizontalmente en la página */
    }


    body {
        font-family: 'Ubuntu';
        max-width: 1200px;
        margin: 0 auto;
    }

    img {
        max-width: 100%;
    }

    header {
        display: flex;
        align-items: center;
        padding: 30px;
        justify-content: center;
    }

    .container-title {
        padding: 30px;
        background-color: #eee;
        margin-bottom: 50px;
        color: #222;
    }

    main {
        display: flex;
        gap: 30px;
        margin-bottom: 80px;
    }

    .container-img {
        background-color: #f7f7f9;
        flex: 1;
    }

    .container-info-product {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .container-price {
        padding-bottom: 20px;
        border-bottom: 1px solid #e4e4e4;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .container-price span {
        font-size: 24px;
        font-weight: 300;
    }

    .container-details-product {
        padding: 30px 0;
    }

    .form-group {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 15px;
    }

    .form-group label {
        width: 100px;
        color: #222;
        font-weight: 700;
    }

    .form-group select {
        width: 300px;
        border: none;
        padding: 12px 15px;
        background-color: #f7f7f7;
        outline: none;
        color: #666;
    }

    .btn-clean {
        border: none;
        background: none;
        color: #666;
        margin-left: 120px;
        cursor: pointer;
    }

    .btn-clean:hover {
        color: #1bbeb4;
    }

    .container-add-cart {
        display: flex;
        gap: 20px;
        padding-bottom: 30px;
        border-bottom: 1px solid #e4e4e4;
    }

    .container-quantity {
        position: relative;
    }

    .input-quantity {
        background-color: #f7f7f7;
        border: none;
        padding: 10px;
        width: 60px;
        height: 100%;
        color: #666;
        font-weight: 500;
        line-height: 0;
    }

    .input-quantity:focus {
        outline: none;
    }

    .input-quantity::-webkit-inner-spin-button,
    .input-quantity::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
    }

    .btn-increment-decrement {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 7px;
        right: 7px;
    }

    .btn-increment-decrement i {
        font-size: 11px;
        color: #666;
        cursor: pointer;
    }

    .fa-chevron-down:hover {
        color: #1bbeb4;
    }

    .fa-chevron-up:hover {
        color: #1bbeb4;
    }

    .btn-add-to-cart {
        border: none;
        background-color: #252525;
        padding: 10px;
        color: #f7f7f7;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-weight: 700;
        cursor: pointer;
    }

    .btn-add-to-cart:hover {
        color: #1bbeb4;
    }

    .hidden {
        display: none;
    }

    .container-description,
    .container-additional-information,
    .container-reviews {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e4e4e4;
        padding: 10px 0;
    }

    .title-description,
    .title-additional-information,
    .title-reviews {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }

    .title-description h4,
    .title-additional-information h4,
    .title-reviews h4 {
        font-weight: 300;
        color: #666;
        font-size: 14px;
    }

    .text-description,
    .text-additional-information,
    .text-reviews {
        font-size: 13px;
        color: #252525;
        line-height: 22px;
        margin-top: 25px;
    }

    .container-social {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        align-items: center;
        border-bottom: 1px solid #e4e4e4;
    }

    .container-social span {
        font-weight: 300;
        color: #252525;
    }

    .container-buttons-social {
        display: flex;
        gap: 15px;
        align-items: center;
    }

    .container-buttons-social a:link,
    .container-buttons-social a:visited {
        color: #666;
        font-size: 15px;
    }

    .container-buttons-social a:hover {
        color: #1bbeb4;
    }

    .container-related-products h2 {
        text-align: center;
        margin-bottom: 30px;
    }

    .card-list-products {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;
    }

    .card {
        cursor: pointer;
    }

    .card-img {
        background: transparent;
        margin-bottom: 15px;
    }

    .card-img img {
        height: 400px;
        object-fit: cover;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    }

    .info-card {
        display: flex;
        justify-content: space-between;
    }

    .text-product {
        color: #252525;
        font-weight: 300;
        line-height: 1.4;
    }

    .text-product h3 {
        color: inherit;
        font-weight: inherit;
        font-size: 15px;
    }

    .text-product h3:hover {
        color: #1bbeb4;
    }

    .text-product p {
        color: #666;
        font-size: 13px;
    }

    .text-product p:hover {
        color: #1bbeb4;
    }

    footer {
        padding: 30px;
        background-color: #eee;
        margin-top: 50px;
        color: #222;
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
                    <a class="nav-icon position-relative text-decoration-none" href="login.php">
                        <i class="fa fa-fw fa-user text-dark mr-3"></i>
                        <span
                            class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                    </a>
                </div>
            </div>

        </div>
    </nav>
    <!-- Close Header -->

    <div class="container-title">Candado de sobreponer sencillo sin tierra</div>

    <main>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="./../img/products/candado de hierro.jpg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="./../img/products/candado2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./../img/products/candado3.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="container-info-product">
            <div class="container-price">
                <span>$11.00</span>

            </div>

            <div class="container-add-cart">
                <div class="container-quantity">
                    <input type="number" placeholder="1" value="1" min="1" class="input-quantity" />
                    <div class="btn-increment-decrement">
                        <i class="fa-solid fa-chevron-up" id="increment"></i>
                        <i class="fa-solid fa-chevron-down" id="decrement"></i>
                    </div>
                </div>
                <button class="btn-add-to-cart">
                    <i class="fa-solid fa-plus"></i>
                    Añadir al carrito
                </button>
            </div>

            <div class="container-description">
                <div class="title-description">
                    <h4>Descripción</h4>

                </div>
                <div class="text-description">
                    <p>
                        Cuerpo construído en latón que resiste la corrosión y cualquier tipo de clima 
                        Doble cerrojo para resistencia extrema a ataques con barreta y martillo
                        Ideal para patios
                        Anti-segueta
                        Clindro de 12 pernos
                        3 llaves tetras
                    </p>
                </div>
            </div>

            <div class="container-additional-information">
                <div class="title-additional-information">
                    <h4>Marca: Truper</h4>
                    
                </div>
                <div class="text-additional-information hidden">
                    <p>-----------</p>
                </div>
                <div class="title-additional-information">
                    <h4>CODIGO:  Truper</h4>
                    
                </div>
                <div class="text-additional-information hidden">
                </div>
            </div>

            
        </div>
    </main>


    <script src="https://kit.fontawesome.com/81581fb069.js" crossorigin="anonymous"></script>
    <script src="/js/"></script>
    <!-- Start Script -->
    <script src="./../js/jquery-1.11.0.min.js"></script>
    <script src="./../js/jquery-migrate-1.2.1.min.js"></script>
    <script src="./../js/bootstrap.bundle.min.js"></script>
    <script src="./../js/templatemo.js"></script>
    <script src="./../js/custom.js"></script>
    <!-- End Script -->
</body>

</html>