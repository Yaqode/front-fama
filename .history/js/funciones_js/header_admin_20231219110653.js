document.addEventListener("DOMContentLoaded", function() {
    const menuFamilias = document.getElementById("menuFamilias");

    // Hacer la solicitud a la API
    fetch("http://localhost:8090/fama-market/api/subcategories/all")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Datos recibidos de la API:", data);

        const familiasMap = new Map();

        // Agrupar subcategorías por familias y categorías
        data.forEach(subcategoria => {
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

              subcategoriasArray.forEach(subcategoriaName => {
                const subcategoriaItem = document.createElement("li");
                subcategoriaItem.innerHTML = `<a href="#">${subcategoriaName}</a>`;
                subcategoriasList.appendChild(subcategoriaItem);
              });

              categoriaItem.appendChild(subcategoriasList);
            }

            categoriasList.appendChild(categoriaItem);
          });

          familiaItem.appendChild(categoriasList);
          menuFamilias.appendChild(familiaItem);
        });
      })
      .catch(error => console.error("Error al obtener datos desde la API:", error));
  });