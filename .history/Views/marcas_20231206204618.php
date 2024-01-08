<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD de Submarcas</title>
    <!-- Agrega los enlaces a Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-5">
    <h2 class="mb-4">CRUD de Submarcas</h2>

    <!-- Botón para abrir el modal de agregar submarca -->
    <button type="button" class="btn btn-success mb-3" data-toggle="modal" data-target="#modalAgregarSubmarca">
        Agregar Submarca
    </button>

    <!-- Tabla para mostrar las submarcas -->
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <!-- Aquí se agregarán las filas de submarcas dinámicamente desde el servidor -->
            <tr>
                <td>1</td>
                <td>Submarca 1</td>
                <td>
                    <!-- Botones para editar y eliminar cada submarca -->
                    <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalEditarSubmarca">
                        Editar
                    </button>
                    <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modalEliminarSubmarca">
                        Eliminar
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<!-- Modal para agregar submarca -->
<div class="modal fade" id="modalAgregarSubmarca" tabindex="-1" role="dialog" aria-labelledby="modalAgregarSubmarcaLabel" aria-hidden="true">
    <!-- Contenido del modal aquí -->
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
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

</body>
</html>
