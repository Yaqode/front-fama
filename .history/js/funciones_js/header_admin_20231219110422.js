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

        data.forEach(familia => {
          const familiaItem = document.createElement("li");

          // Verificar que 'family' esté definido antes de intentar acceder a sus propiedades
          if (familia.family && familia.family.nameFamily) {
            familiaItem.innerHTML = `<a href="#">${familia.family.nameFamily}</a>`;
          } else {
            console.error("Datos incompletos para 'family':", familia);
            return; // Saltar a la siguiente iteración del bucle si los datos son incompletos
          }

          if (familia.categories && familia.categories.length > 0) {
            const categoriasList = document.createElement("ul");
            familia.categories.forEach(categoria => {
              const categoriaItem = document.createElement("li");

              // Verificar que 'category' esté definido antes de intentar acceder a sus propiedades
              if (categoria.category && categoria.category.nameCategory) {
                categoriaItem.innerHTML = `<a href="#">${categoria.category.nameCategory}</a>`;
              } else {
                console.error("Datos incompletos para 'category':", categoria);
                return; // Saltar a la siguiente iteración del bucle si los datos son incompletos
              }

              if (categoria.subcategories && categoria.subcategories.length > 0) {
                const subcategoriasList = document.createElement("ul");
                categoria.subcategories.forEach(subcategoria => {
                  const subcategoriaItem = document.createElement("li");

                  // Verificar que 'subcategoria' esté definido antes de intentar acceder a sus propiedades
                  if (subcategoria.nameSubCategory) {
                    subcategoriaItem.innerHTML = `<a href="#">${subcategoria.nameSubCategory}</a>`;
                  } else {
                    console.error("Datos incompletos para 'subcategoria':", subcategoria);
                    return; // Saltar a la siguiente iteración del bucle si los datos son incompletos
                  }

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
