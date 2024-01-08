document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al elemento de familias en el DOM
    const menuFamilias = document.getElementById("menuFamilias");

    // Hacer la solicitud a la API
    fetch("http://localhost:8090/fama-market/api/subcategories/all")
      .then(response => response.json())
      .then(data => {
        // Procesar los datos y construir el menú
        data.forEach(familia => {
          const familiaItem = document.createElement("li");
          familiaItem.innerHTML = `<a href="#">${familia.family.nameFamily}</a>`;
          
          if (familia.categories && familia.categories.length > 0) {
            const categoriasList = document.createElement("ul");
            familia.categories.forEach(categoria => {
              const categoriaItem = document.createElement("li");
              categoriaItem.innerHTML = `<a href="#">${categoria.category.nameCategory}</a>`;
              
              if (categoria.subcategories && categoria.subcategories.length > 0) {
                const subcategoriasList = document.createElement("ul");
                categoria.subcategories.forEach(subcategoria => {
                  const subcategoriaItem = document.createElement("li");
                  subcategoriaItem.innerHTML = `<a href="#">${subcategoria.nameSubCategory}</a>`;
                  subcategoriasList.appendChild(subcategoriaItem);
                });
                categoriaItem.appendChild(subcategoriasList);
              }
              
              categoriasList.appendChild(categoriaItem);
            });
            familiaItem.appendChild(categoriasList);
          }

          menuFamilias.appendChild(familiaItem);
        });
      })
      .catch(error => console.error("Error al obtener datos desde la API:", error));
  });