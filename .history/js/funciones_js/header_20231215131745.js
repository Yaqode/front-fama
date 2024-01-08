// Función para cargar las familias y categorías desde la API
async function cargarFamiliasCategorias() {
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
                    categoriasMenu: {}
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
        });

        // Añadir eventos para mostrar/ocultar los submenús de categorías
        const dropdownFamilias = familiasMenu.querySelectorAll('.dropdown-submenu');

        dropdownFamilias.forEach(familia => {
            const trigger = familia.querySelector('.trigger');

            trigger.addEventListener('mouseenter', () => {
                familia.classList.add('show');
            });

            trigger.addEventListener('mouseleave', () => {
                familia.classList.remove('show');
            });
        });
    } catch (error) {
        console.error('Error al cargar las familias y categorías:', error);
    }
}

// Ejecutar la función después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', cargarFamiliasCategorias);
