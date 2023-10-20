var searchSocioInput = document.getElementById("searchSocioInput");

searchSocioInput.addEventListener("input", function() {
    var NroSocio = searchSocioInput.value; 

    if (NroSocio) {
        realizarBusquedaSocio(NroSocio); 
    }
});

function realizarBusquedaSocio(NroSocio) {
    var urlBusqueda = `http://localhost:5201/api/cliente/guid?nroSocio=${NroSocio}`;
    var propiedadesMostradas = ["nombre", "apellido", "direccion", "telefono", "dni"];

    fetch(urlBusqueda, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        var tablaResultados = document.getElementById("tablaResultadosSocio");
        tablaResultados.innerHTML = "";

        var encabezado = document.createElement("tr");

        propiedadesMostradas.forEach(function(propiedad) {
            var th = document.createElement("th");
            th.textContent = propiedad.toUpperCase();
            encabezado.appendChild(th);
        });

        tablaResultados.appendChild(encabezado);

        if (data) {
            var fila = document.createElement("tr");

            propiedadesMostradas.forEach(function(propiedad) {
                var td = document.createElement("td");
                td.textContent = data[propiedad]; 
                fila.appendChild(td);
            });

            tablaResultados.appendChild(fila);
        } else {

            var sinResultados = document.createElement("tr");
            var mensaje = document.createElement("td");
            mensaje.colSpan = propiedadesMostradas.length;
            mensaje.textContent = "No se encontraron resultados.";
            sinResultados.appendChild(mensaje);
            tablaResultados.appendChild(sinResultados);
        }
    })
    .catch(error => {
        console.error(error);
    });
}
