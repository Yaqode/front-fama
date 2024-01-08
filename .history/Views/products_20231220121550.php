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