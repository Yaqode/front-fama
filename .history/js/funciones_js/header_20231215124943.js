 // Función para cargar las subcategorías desde la API
 async function cargarSubcategorias() {
    try {
        const response = await fetch('http://localhost:8090/fama-market/api/subcategories/all');
        const subcategorias = await response.json();

        const familiasMenu = document.getElementById('familiasMenu');

        // Objeto para almacenar las referencias a las categorías y subcategorías
        const categoriasSubcategorias = {};

        // Recorrer las subcategorías y agregarlas al menú
        subcategorias.forEach(subcategoria => {
            const familiaId = subcategoria.category.family.familyId;
            const categoryId = subcategoria.category.categoryId;

            // Crear la estructura del menú si no existe
            if (!categoriasSubcategorias[familiaId]) {
                categoriasSubcategorias[familiaId] = {};
            }
            if (!categoriasSubcategorias[familiaId][categoryId]) {
                categoriasSubcategorias[familiaId][categoryId] = {
                    categoriaItem: null,
                    subcategoriaMenu: null
                };

                // Crear el elemento de menú para la categoría
                const categoriaItem = document.createElement('li');
                categoriaItem.classList.add('dropdown-submenu');
                categoriaItem.innerHTML = `<a class="trigger right-caret">${subcategoria.category.nameCategory}</a><ul class="dropdown-menu sub-menu"></ul>`;
                familiasMenu.appendChild(categoriaItem);

                categoriasSubcategorias[familiaId][categoryId].categoriaItem = categoriaItem;
                categoriasSubcategorias[familiaId][categoryId].subcategoriaMenu = categoriaItem.querySelector('.sub-menu');
            }

            // Agregar la subcategoría al menú
            const subcategoriaItem = document.createElement('li');
            subcategoriaItem.innerHTML = `<a href="#">${subcategoria.nameSubCategory}</a>`;
            categoriasSubcategorias[familiaId][categoryId].subcategoriaMenu.appendChild(subcategoriaItem);
        });
    } catch (error) {
        console.error('Error al cargar las subcategorías:', error);
    }
}

// Cargar las subcategorías al cargar la página
cargarSubcategorias();