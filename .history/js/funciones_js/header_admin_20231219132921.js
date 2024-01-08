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


      // Agregar eventos para mostrar/ocultar submenús al pasar el ratón
      const menuItems = document.querySelectorAll(".nav > li");
      menuItems.forEach((item) => {
        item.addEventListener("mouseover", function () {
          const submenu = this.querySelector("ul");
          if (submenu) {
            const rect = submenu.getBoundingClientRect();
            const viewportHeight =
              window.innerHeight || document.documentElement.clientHeight;
            const shouldFlip = rect.bottom > viewportHeight;

            if (shouldFlip) {
              submenu.style.top = "auto";
              submenu.style.bottom = "100%";
            } else {
              submenu.style.top = "100%";
              submenu.style.bottom = "auto";
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

$(document).ready(function () {
  // Obtiene el ancho del primer submenú
  var primerSubmenuAncho = $("#familiasMenu > li > ul").first().width();

  // Aplica el ancho a todos los submenús
  $("#familiasMenu > li > ul").width(primerSubmenuAncho);
});
