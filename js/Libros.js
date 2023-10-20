// URL de la API que devuelve todos los libros
var urlLibros = "http://localhost:5201/api/libro/all";

// Elemento contenedor donde se mostrarán los libros
const contenedorLibros = document.querySelector("#contenedorLibros");

// Realizar la solicitud a la API para obtener todos los libros
fetch(urlLibros)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // Crear un contenedor para las tarjetas
    const tarjetasContainer = document.createElement("div");
    tarjetasContainer.classList.add("row");

    // Iterar a través de cada libro y crear tarjetas para ellos
    data.forEach(libro => {
      const libroElement = document.createElement("div");
      libroElement.classList.add("col-md-3", "mb-3"); // Cada tarjeta ocupa 3 columnas en un total de 12

      const tarjeta = document.createElement("div");
      tarjeta.classList.add("card");

      const imagen = document.createElement("img");
      imagen.src = libro.imagen;
      imagen.alt = "Imagen del libro: " + libro.nombre;
      imagen.classList.add("card-img-top");

      const cuerpoTarjeta = document.createElement("div");
      cuerpoTarjeta.classList.add("card-body");

      const titulo = document.createElement("h5");
      titulo.classList.add("card-title");
      titulo.innerText = libro.nombre;

      const autor = document.createElement("p");
      autor.classList.add("card-text");
      autor.innerText = "Autor: " + libro.autor;

      const descripcion = document.createElement("p");
      descripcion.classList.add("card-text");
      descripcion.innerText = "Género: " + libro.clasificacion;

      const ISBN = document.createElement("p");
      ISBN.classList.add("card-text");
      ISBN.innerText = "ISBN: " + libro.isbn;

      const paginas = document.createElement("p");
      paginas.classList.add("card-text");
      paginas.innerText = "Paginas: " + libro.paginas;

      const fechaPublicacion = document.createElement("p");
      fechaPublicacion.classList.add("card-text");
      const fechaOriginal = libro.fechaPublicacion;
      const fechaFormateada = new Date(fechaOriginal).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
      fechaPublicacion.innerText = "Fecha Publicacion: " + fechaFormateada;

      const idioma = document.createElement("p");
      idioma.classList.add("card-text");
      idioma.innerText = "Idioma: " + libro.idioma;

      const disponible = document.createElement("p");
      disponible.classList.add("card-text");
      if (libro.disponible) {
        disponible.innerText = "Disponible para reservar";
      } else {
        disponible.innerText = "No disponible para reservar";
      }


      const reservarButton = document.createElement("button");
      reservarButton.classList.add("btn", "btn-primary");
      if (libro.disponible) {
        reservarButton.innerText = "Reservar";
        reservarButton.classList.add("pointer-cursor"); 
        reservarButton.addEventListener("click", function () {
            const isbn = libro.isbn;
            window.location.href = "reservar.html?isbn=" + isbn;
        });
      } else {
        reservarButton.innerText = "Reservar";
        reservarButton.disabled = true; 
      }

      cuerpoTarjeta.appendChild(titulo);
      cuerpoTarjeta.appendChild(autor);
      cuerpoTarjeta.appendChild(descripcion);
      cuerpoTarjeta.appendChild(ISBN);
      cuerpoTarjeta.appendChild(paginas);
      cuerpoTarjeta.appendChild(fechaPublicacion);
      cuerpoTarjeta.appendChild(idioma);
      cuerpoTarjeta.appendChild(disponible);
      cuerpoTarjeta.appendChild(reservarButton);

      tarjeta.appendChild(imagen);
      tarjeta.appendChild(cuerpoTarjeta);

      libroElement.appendChild(tarjeta);
      tarjetasContainer.appendChild(libroElement);
    });

    // Agregar el contenedor de tarjetas al contenedor principal
    contenedorLibros.appendChild(tarjetasContainer);
  })
  .catch(error => {
    console.error("Error al cargar los libros:", error);
  });



