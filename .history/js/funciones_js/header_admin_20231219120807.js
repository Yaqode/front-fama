document.addEventListener("DOMContentLoaded", function () {
    const familiasMenu = document.getElementById("familiasMenu");

    // Hacer la solicitud a la API
    fetch("http://localhost:8090/fama-market/api/subcategories/all")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("Datos recibidos de la API:", data);

            const familiasMap = new Map();

            // Agrupar subcategorías por familias y categorías
            data.forEach((subcategoria) => {
                const familiaName = subcategoria.category.family.nameFamily;
                const categoriaName = subcategoria.category.nameCategory;
                const subcategoriaName = subcategoria.nameSubCategory;

                if (!familiasMap.has(familiaName)) {
                    familiasMap.set(familiaName, new Map());
                }

                const categoriasMap = familiasMap.get(familiaName);

                if (!categoriasMap.has(categoriaName)) {
                    categoriasMap.set(categoriaName, []);
                }

                const subcategoriasArray = categoriasMap.get(categoriaName);
                subcategoriasArray.push(subcategoriaName);
            });

            // Construir el menú
            familiasMap.forEach((categoriasMap, familiaName) => {
                const familiaItem = document.createElement("li");
                familiaItem.innerHTML = `<a href="#">${familiaName}</a>`;

                const categoriasList = document.createElement("ul");

                categoriasMap.forEach((subcategoriasArray, categoriaName) => {
                    const categoriaItem = document.createElement("li");
                    categoriaItem.innerHTML = `<a href="#">${categoriaName}</a>`;

                    if (subcategoriasArray.length > 0) {
                        const subcategoriasList = document.createElement("ul");

                        subcategoriasArray.forEach((subcategoriaName) => {
                            const subcategoriaItem = document.createElement("li");
                            subcategoriaItem.innerHTML = `<a href="#">${subcategoriaName}</a>`;
                            subcategoriasList.appendChild(subcategoriaItem);
                        });

                        categoriaItem.appendChild(subcategoriasList);
                    }

                    categoriasList.appendChild(categoriaItem);
                });

                familiaItem.appendChild(categoriasList);
                familiasMenu.appendChild(familiaItem);
            });

            // Agregar eventos para mostrar/ocultar submenús al pasar el ratón
            const menuItems = document.querySelectorAll(".nav > li");
            menuItems.forEach((item) => {
                item.addEventListener("mouseover", function () {
                    const submenu = this.querySelector("ul");
                    if (submenu) {
                        const rect = submenu.getBoundingClientRect();
                        const shouldFlip = rect.bottom > window.innerHeight && rect.top > window.innerHeight / 2;

                        if (shouldFlip) {
                            submenu.style.top = "auto";
                            submenu.style.bottom = "100%";
                            submenu.style.maxHeight = `${rect.bottom}px`; // Ajustar la altura si es necesario
                        } else {
                            submenu.style.top = "100%";
                            submenu.style.bottom = "auto";
                            submenu.style.maxHeight = "none";
                        }

                        submenu.style.display = "block";
                    }
                });

                item.addEventListener("mouseout", function () {
                    const submenu = this.querySelector("ul");
                    if (submenu) {
                        submenu.style.display = "none";
                    }
                });
            });
        })
        .catch((error) =>
            console.error("Error al obtener datos desde la API:", error)
        );
});
