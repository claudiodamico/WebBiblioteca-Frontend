// URL de la API que crea el nuevo cliente
var urlClienteNuevo = "http://localhost:5201/api/cliente/create";

document.addEventListener("DOMContentLoaded", function() {
    const hacermeSocioForm = document.getElementById("hacermeSocioForm");
  
    hacermeSocioForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const direccion = document.getElementById("direccion").value;
      const telefono = document.getElementById("telefono").value;
      const dni = document.getElementById("dni").value;
      const usuario = document.getElementById("usuario").value;
      const password = document.getElementById("password").value;
  
      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("apellido", apellido);
      formData.append("direccion", direccion);
      formData.append("telefono", telefono);
      formData.append("dni", dni);
      formData.append("usuario", usuario);
      formData.append("password", password);
  
      fetch(urlClienteNuevo, {
        method: "POST",
        body: formData,
      })
        .then(response => {
          if (response.status === 201) {
            const modalExito = new bootstrap.Modal(document.getElementById("modalExitoSocio"));
            modalExito.show();
            hacermeSocioForm.reset();
          } else if (response.status === 400) {
            alert("Error en la creación del socio");
          } else {
            alert("Error desconocido");
          }
        })
        .catch(error => {
          console.error("Error al enviar la solicitud a la API:", error);
        });
    });
  });
  