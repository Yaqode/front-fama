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

        data.forEach(subcategoria => {
          const subcategoriaItem = document.createElement("li");

          // Verificar que 'nameSubCategory' esté definido antes de intentar acceder a sus propiedades
          if (subcategoria.nameSubCategory) {
            subcategoriaItem.innerHTML = `<a href="#">${subcategoria.nameSubCategory}</a>`;
          } else {
            console.error("Datos incompletos para 'nameSubCategory':", subcategoria);
            return; // Saltar a la siguiente iteración del bucle si los datos son incompletos
          }

          if (subcategoria.category && subcategoria.category.nameCategory) {
            const categoriaItem = document.createElement("li");
            categoriaItem.innerHTML = `<a href="#">${subcategoria.category.nameCategory}</a>`;

            if (subcategoria.category.family && subcategoria.category.family.nameFamily) {
              const familiaItem = document.createElement("li");
              familiaItem.innerHTML = `<a href="#">${subcategoria.category.family.nameFamily}</a>`;
              familiaItem.appendChild(categoriaItem);
              subcategoriaItem.appendChild(familiaItem);
            }

            categoriaItem.appendChild(subcategoriaItem);
          }

          menuFamilias.appendChild(subcategoriaItem);
        });
      })
      .catch(error => console.error("Error al obtener datos desde la API:", error));
  });