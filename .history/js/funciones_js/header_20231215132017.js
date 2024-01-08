// Función para cargar las familias y categorías desde la API
async function cargarFamiliasCategoriasSubcategorias() {
    try {
        const response = await fetch('http://localhost:8090/fama-market/api/subcategories/all');
        const subcategorias = await response.json();
        console.log('Subcategorías cargadas:', subcategorias);

        const familiasMenu = document.getElementById('familiasMenu');

        // Objeto para almacenar las referencias a las familias y categorías
        const familiasCategorias = {};

        // Recorrer las subcategorías y agregarlas al menú
        subcategorias.forEach(subcategoria => {
            const familiaId = subcategoria.category.family.familyId;
            const categoryId = subcategoria.category.categoryId;

            // Crear la estructura del menú si no existe
            if (!familiasCategorias[familiaId]) {
                familiasCategorias[familiaId] = {
                    familiaItem: null,
                    categoriasMenu: {},
                    subcategoriasMenu: null
                };

                // Crear el elemento de menú para la familia
                const familiaItem = document.createElement('li');
                familiaItem.classList.add('dropdown-submenu');
                familiaItem.innerHTML = `<a class="trigger right-caret">${subcategoria.category.family.nameFamily}</a><ul class="dropdown-menu sub-menu"></ul>`;
                familiasMenu.appendChild(familiaItem);

                familiasCategorias[familiaId].familiaItem = familiaItem;
            }

            // Crear la estructura del menú para la categoría si no existe
            if (!familiasCategorias[familiaId].categoriasMenu[categoryId]) {
                const categoriaItem = document.createElement('li');
                categoriaItem.innerHTML = `<a href="#">${subcategoria.category.nameCategory}</a>`;
                familiasCategorias[familiaId].familiaItem.querySelector('.sub-menu').appendChild(categoriaItem);

                familiasCategorias[familiaId].categoriasMenu[categoryId] = {
                    categoriaItem: categoriaItem
                };
            }

            // Crear el elemento de menú para las subcategorías
            if (!familiasCategorias[familiaId].subcategoriasMenu) {
                const subcategoriasMenu = document.createElement('ul');
                subcategoriasMenu.classList.add('dropdown-menu', 'sub-menu');
                familiasCategorias[familiaId].familiaItem.appendChild(subcategoriasMenu);

                familiasCategorias[familiaId].subcategoriasMenu = subcategoriasMenu;
            }

            const subcategoriaItem = document.createElement('li');
            subcategoriaItem.innerHTML = `<a href="#">${subcategoria.nameSubCategory}</a>`;
            familiasCategorias[familiaId].subcategoriasMenu.appendChild(subcategoriaItem);
        });

        // Añadir eventos para mostrar/ocultar los submenús de categorías y subcategorías
        const dropdownCategorias = familiasMenu.querySelectorAll('.dropdown-submenu');

        dropdownCategorias.forEach(categoria => {
            const trigger = categoria.querySelector('.trigger');

            trigger.addEventListener('mouseenter', () => {
                categoria.classList.add('show');
            });

            trigger.addEventListener('mouseleave', () => {
                categoria.classList.remove('show');
            });
        });
    } catch (error) {
        console.error('Error al cargar las familias, categorías y subcategorías:', error);
    }
}

// Ejecutar la función después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', cargarFamiliasCategoriasSubcategorias);
