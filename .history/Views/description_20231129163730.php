<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pagina Producto</title>
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
</style>
</head>

<body>
    <header>
        <h1>Logo</h1>
    </header>

    <div class="container-title">Zapatos</div>

    <main>
        <div class="container-img">
            <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt="imagen-producto" />
        </div>
        <div class="container-info-product">
            <div class="container-price">
                <span>$95.00</span>
                <i class="fa-solid fa-angle-right"></i>
            </div>

            <div class="container-details-product">
                <div class="form-group">
                    <label for="colour">Color</label>
                    <select name="colour" id="colour">
                        <option disabled selected value="">
                            Escoge una opción
                        </option>
                        <option value="rojo">Rojo</option>
                        <option value="blanco">Blanco</option>
                        <option value="beige">Beige</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="size">Talla</label>
                    <select name="size" id="size">
                        <option disabled selected value="">
                            Escoge una opción
                        </option>
                        <option value="40">40</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                    </select>
                </div>
                <button class="btn-clean">Limpiar</button>
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
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="text-description">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Laboriosam iure provident atque voluptatibus
                        reiciendis quae rerum, maxime placeat enim cupiditate
                        voluptatum, temporibus quis iusto. Enim eum qui delectus
                        deleniti similique? Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Sint autem magni earum est
                        dolorem saepe perferendis repellat ipsam laudantium cum
                        assumenda quidem quam, vero similique? Iusto officiis
                        quod blanditiis iste?
                    </p>
                </div>
            </div>

            <div class="container-additional-information">
                <div class="title-additional-information">
                    <h4>Información adicional</h4>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="text-additional-information hidden">
                    <p>-----------</p>
                </div>
            </div>

            <div class="container-reviews">
                <div class="title-reviews">
                    <h4>Reseñas</h4>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="text-reviews hidden">
                    <p>-----------</p>
                </div>
            </div>

            <div class="container-social">
                <span>Compartir</span>
                <div class="container-buttons-social">
                    <a href="#"><i class="fa-solid fa-envelope"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-pinterest"></i></a>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <p>Footer</p>
    </footer>

    <script src="https://kit.fontawesome.com/81581fb069.js" crossorigin="anonymous"></script>
    <script src="./index.js"></script>
</body>

</html>