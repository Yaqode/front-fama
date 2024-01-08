// Función para cargar las familias, categorías y subcategorías desde la API
async function cargarFamiliasCategoriasSubcategorias() {
    try {
        const response = await fetch('http://localhost:8090/fama-market/api/subcategories/all');
        const subcategorias = await response.json();
        console.log('Subcategorías cargadas:', subcategorias);

        const familiasMenu = document.getElementById('familiasMenu');

        // Objeto para almacenar las referencias a las familias, categorías y subcategorías
        const familiasCategoriasSubcategorias = {};

        // Recorrer las subcategorías y agregarlas al menú
        subcategorias.forEach(subcategoria => {
            const familiaId = subcategoria.category.family.familyId;
            const categoryId = subcategoria.category.categoryId;

            // Crear la estructura del menú si no existe
            if (!familiasCategoriasSubcategorias[familiaId]) {
                familiasCategoriasSubcategorias[familiaId] = {
                    familiaItem: null,
                    categoriasMenu: {},
                    subcategoriasMenu: null
                };

                // Crear el elemento de menú para la familia
                const familiaItem = document.createElement('li');
                familiaItem.classList.add('dropdown-submenu');
                familiaItem.innerHTML = `<a class="trigger right-caret">${subcategoria.category.family.nameFamily}</a><ul class="dropdown-menu sub-menu"></ul>`;
                familiasMenu.appendChild(familiaItem);

                familiasCategoriasSubcategorias[familiaId].familiaItem = familiaItem;
            }

            // Crear la estructura del menú para la categoría si no existe
            if (!familiasCategoriasSubcategorias[familiaId].categoriasMenu[categoryId]) {
                const categoriaItem = document.createElement('li');
                categoriaItem.classList.add('dropdown-submenu');
                categoriaItem.innerHTML = `<a class="trigger right-caret">${subcategoria.category.nameCategory}</a><ul class="dropdown-menu sub-menu"></ul>`;
                familiasCategoriasSubcategorias[familiaId].familiaItem.querySelector('.sub-menu').appendChild(categoriaItem);

                familiasCategoriasSubcategorias[familiaId].categoriasMenu[categoryId] = {
                    categoriaItem: categoriaItem,
                    subcategoriasMenu: categoriaItem.querySelector('.sub-menu')
                };
            }

            // Crear el elemento de menú para las subcategorías solo si la categoría está seleccionada
            if (familiasCategoriasSubcategorias[familiaId].categoriasMenu[categoryId].seleccionada) {
                // Verificar si el menú de subcategorías ya ha sido creado
                if (!familiasCategoriasSubcategorias[familiaId].subcategoriasMenu) {
                    const subcategoriasMenu = document.createElement('ul');
                    subcategoriasMenu.classList.add('dropdown-menu', 'sub-menu');
                    familiasCategoriasSubcategorias[familiaId].categoriasMenu[categoryId].categoriaItem.appendChild(subcategoriasMenu);

                    familiasCategoriasSubcategorias[familiaId].subcategoriasMenu = subcategoriasMenu;
                }

                // Agregar la subcategoría al menú
                const subcategoriaItem = document.createElement('li');
                subcategoriaItem.innerHTML = `<a href="#">${subcategoria.nameSubCategory}</a>`;
                familiasCategoriasSubcategorias[familiaId].subcategoriasMenu.appendChild(subcategoriaItem);
            }
        });

        // Añadir eventos para mostrar/ocultar los submenús de categorías y subcategorías
        const dropdownCategorias = familiasMenu.querySelectorAll('.dropdown-submenu');

        dropdownCategorias.forEach(categoria => {
            const trigger = categoria.querySelector('.trigger');
            const subcategoriaMenu = categoria.querySelector('.sub-menu');

            // Evento para mostrar las subcategorías cuando el ratón entra en la categoría
            trigger.addEventListener('mouseenter', () => {
                subcategoriaMenu.classList.add('show');
            });

            // Evento para ocultar las subcategorías cuando el ratón sale de la categoría
            categoria.addEventListener('mouseleave', () => {
                subcategoriaMenu.classList.remove('show');
            });
        });

        // Evento para marcar una categoría como seleccionada y mostrar las subcategorías asociadas
        dropdownCategorias.forEach(categoria => {
            const trigger = categoria.querySelector('.trigger');

            trigger.addEventListener('click', () => {
                // Marcar la categoría como seleccionada
                dropdownCategorias.forEach(categoria => {
                    categoria.classList.remove('seleccionada');
                });
                categoria.classList.add('seleccionada');

                // Ocultar todos los menús de subcategorías
                dropdownCategorias.forEach(categoria => {
                    const subcategoriaMenu = categoria.querySelector('.sub-menu');
                    subcategoriaMenu.classList.remove('show');
                });

                // Mostrar las subcategorías de la categoría seleccionada
                const subcategoriaMenu = categoria.querySelector('.sub-menu');
                subcategoriaMenu.classList.add('show');

                // Marcar la categoría como seleccionada
                const familiaId = categoria.id.replace('familia_', '');
                const categoryId = categoria.id.replace('categoria_', '');
                familiasCategoriasSubcategorias[familiaId].categoriasMenu[categoryId].seleccionada = true;

                // Actualizar el menú de subcategorías
                const subcategoriasMenu = familiasCategoriasSubcategorias[familiaId].subcategoriasMenu;
                if (subcategoriasMenu) {
                    // Limpiar el menú de subcategorías
                    subcategoriasMenu.innerHTML = '';

                    // Obtener las subcategorías de la categoría seleccionada
                    const subcategoriasSeleccionadas = subcategorias.filter(subcategoria =>
                        subcategoria.category.family.familyId == familiaId &&
                        subcategoria.category.categoryId == categoryId
                    );

                    // Agregar las subcategorías al menú
                    subcategoriasSeleccionadas.forEach(subcategoria => {
                        const subcategoriaItem = document.createElement('li');
                        subcategoriaItem.innerHTML = `<a href="#">${subcategoria.nameSubCategory}</a>`;
                        subcategoriasMenu.appendChild(subcategoriaItem);
                    });
                }
            });
        });

    } catch (error) {
        console.error('Error al cargar las familias, categorías y subcategorías:', error);
    }
}

// Ejecutar la función después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', cargarFamiliasCategoriasSubcategorias);
