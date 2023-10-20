// URL de la API que crea el alquiler del libro
var urlAlquiler = "http://localhost:5201/api/alquiler/create";

document.addEventListener("DOMContentLoaded", function() {
    const reservarButton = document.getElementById("reservarButton");
    const reservarForm = document.getElementById("reservarForm");
  
    reservarButton.addEventListener("click", function() {
      const numeroSocio = document.getElementById("numeroSocio").value;
      const isbn = document.getElementById("isbn").value;
      const observaciones = document.getElementById("observaciones").value;
  
      // Crear un objeto con los datos del formulario
      const formData = new FormData();
      formData.append("numeroSocio", numeroSocio);
      formData.append("isbn", isbn);
      if (observaciones.trim() === "") {
        formData.append("observaciones", "Ninguna");
      } else {
        formData.append("observaciones", observaciones);
      }
  
      fetch(urlAlquiler, {
        method: "POST",
        body: formData,
      })
        .then(response => {
          if (response.status === 201) {
            const modalExito = new bootstrap.Modal(document.getElementById("modalExito"));
            modalExito.show();
            reservarForm.reset();
          } else if (response.status === 400) {
            console.error("Error en la reserva");
          } else {
            console.error("Error desconocido");
          }
        })
        .catch(error => {
          console.error("Error al enviar la solicitud a la API:", error);
        });
    });
  });
  
  