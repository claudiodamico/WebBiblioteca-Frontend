// URL de la API que proporciona los datos de los socios
const urlClientes = "http://localhost:5201/api/cliente/all";

// Función para cargar los datos de los socios desde la API
function cargarDatosDeSocios() {
    fetch(urlClientes)
        .then(response => response.json())
        .then(data => {
            const tablaSocios = document.getElementById("tablaSocios");
            const tbody = tablaSocios.querySelector("tbody");

            data.forEach(socio => {
                const fila = document.createElement("tr");

                // Columna "Número de Socio"
                const numeroSocioCell = document.createElement("td");
                numeroSocioCell.innerText = socio.numeroSocio;
                fila.appendChild(numeroSocioCell);

                // Columna "Nombre"
                const nombreCell = document.createElement("td");
                nombreCell.innerText = socio.nombre;
                fila.appendChild(nombreCell);

                // Columna "Apellido"
                const apellidoCell = document.createElement("td");
                apellidoCell.innerText = socio.apellido;
                fila.appendChild(apellidoCell);

                // Columna "Dirección"
                const direccionCell = document.createElement("td");
                direccionCell.innerText = socio.direccion;
                fila.appendChild(direccionCell);

                // Columna "Teléfono"
                const telefonoCell = document.createElement("td");
                telefonoCell.innerText = socio.telefono;
                fila.appendChild(telefonoCell);

                // Columna "DNI"
                const dniCell = document.createElement("td");
                dniCell.innerText = socio.dni;
                fila.appendChild(dniCell);

                tbody.appendChild(fila);
            });
        })
        .catch(error => {
            console.error("Error al cargar los datos de los socios:", error);
        });
}

// Llama a la función para cargar los datos de los socios cuando se cargue la página
document.addEventListener("DOMContentLoaded", cargarDatosDeSocios);

