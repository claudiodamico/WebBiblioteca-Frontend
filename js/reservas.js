// URL de la API para obtener las reservas
var urlReservas = "http://localhost:5201/api/alquiler/all"; 

fetch(urlReservas)
  .then(response => response.json())
  .then(data => {
    const reservasTable = document.getElementById("reservasTable");
    const tbody = reservasTable.querySelector("tbody");

    data.forEach(reserva => {
      const row = document.createElement("tr");

      // Columna "Número de Socio"
      const numeroSocioCell = document.createElement("td");
      numeroSocioCell.innerText = reserva.numeroSocio;
      row.appendChild(numeroSocioCell);

      // Columna "Fecha de Alquiler"
      const fechaAlquilerCell = document.createElement("td");
      const fechaAlquiler = new Date(reserva.fechaAlquiler).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
      fechaAlquilerCell.innerText = fechaAlquiler;
      row.appendChild(fechaAlquilerCell);

      // Columna "Fecha de Devolución"
      const fechaDevolucionCell = document.createElement("td");
      const fechaDevolucion = new Date(reserva.fechaDevolucion).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
      fechaDevolucionCell.innerText = fechaDevolucion;
      row.appendChild(fechaDevolucionCell);
      // Columna "ISBN del Libro"
      const isbnLibroCell = document.createElement("td");
      isbnLibroCell.innerText = reserva.isbn;
      row.appendChild(isbnLibroCell);

      // Columna "Observaciones"
      const observacionesCell = document.createElement("td");
      observacionesCell.innerText = reserva.observaciones;
      row.appendChild(observacionesCell);

      // Agregar la fila a la tabla
      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error al obtener las reservas:", error);
  });

