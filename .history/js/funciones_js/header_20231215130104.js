// Función para cargar las subcategorías desde la API
async function cargarSubcategorias() {
    try {
        const response = await fetch('http://localhost:8090/fama-market/api/subcategories/all');
        const subcategorias = await response.json();
        console.log('Subcategorías cargadas:', subcategorias);

        const familiasMenu = document.getElementById('familiasMenu');

        // Objeto para almacenar las referencias a las categorías y subcategorías
        const categoriasSubcategorias = {};

        // Recorrer las subcategorías y agregarlas al menú
        subcategorias.forEach(subcategoria => {
            const familiaId = subcategoria.category.family.familyId;
            const categoryId = subcategoria.category.categoryId;

            // Crear la estructura del menú si no existe
            if (!categoriasSubcategorias[familiaId]) {
                categoriasSubcategorias[familiaId] = {
                    familiaItem: null,
                    categoriasMenu: {}
                };

                // Crear el elemento de menú para la familia
                const familiaItem = document.createElement('li');
                familiaItem.classList.add('dropdown-submenu');
                familiaItem.innerHTML = `<a class="trigger right-caret">${subcategoria.category.family.nameFamily}</a><ul class="dropdown-menu sub-menu"></ul>`;
                familiasMenu.appendChild(familiaItem);

                categoriasSubcategorias[familiaId].familiaItem = familiaItem;
            }

            // Crear la estructura del menú para la categoría si no existe
            if (!categoriasSubcategorias[familiaId].categoriasMenu[categoryId]) {
                const categoriaItem = document.createElement('li');
                categoriaItem.classList.add('dropdown-submenu');
                categoriaItem.innerHTML = `<a class="trigger right-caret">${subcategoria.category.nameCategory}</a><ul class="dropdown-menu sub-menu"></ul>`;
                categoriasSubcategorias[familiaId].familiaItem.querySelector('.sub-menu').appendChild(categoriaItem);

                categoriasSubcategorias[familiaId].categoriasMenu[categoryId] = {
                    categoriaItem: categoriaItem,
                    subcategoriaMenu: categoriaItem.querySelector('.sub-menu')
                };
            }

            // Agregar la subcategoría al menú
            const subcategoriaItem = document.createElement('li');
            subcategoriaItem.innerHTML = `<a href="#">${subcategoria.nameSubCategory}</a>`;
            categoriasSubcategorias[familiaId].categoriasMenu[categoryId].subcategoriaMenu.appendChild(subcategoriaItem);
        });
    } catch (error) {
        console.error('Error al cargar las subcategorías:', error);
    }
}

// Ejecutar la función después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', cargarSubcategorias);
