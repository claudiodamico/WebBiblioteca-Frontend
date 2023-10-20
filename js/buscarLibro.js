var searchInput = document.getElementById("searchISBNInput");

searchISBNInput.addEventListener("input", function() {
    var ISBN = searchISBNInput.value; 

    if (ISBN) {
        realizarBusquedaISBN(ISBN); 
    }
});

function realizarBusquedaISBN(ISBN) {
    var urlBusqueda = `http://localhost:5201/api/libro/ISBN?ISBN=${ISBN}`;
    var propiedadesMostradas = ["nombre", "autor", "fechaPublicacion", "isbn", "paginas", "clasificacion", "idioma", "stock"];

    fetch(urlBusqueda, {
        method: "GET"
    })
    .then(response => response.json())

    .then(data => {
        var tablaResultados = document.getElementById("tablaResultadosISBN");
        tablaResultados.innerHTML = "";

        var encabezado = document.createElement("tr");

        propiedadesMostradas.forEach(function(propiedad) {
            var th = document.createElement("th");
            if (propiedad === "fechaPublicacion") {
                th.textContent = "PUBLICACION"; 
            } else {
                th.textContent = propiedad.toUpperCase(); 
            }
            encabezado.appendChild(th);
        });

        tablaResultados.appendChild(encabezado);

        var fila = document.createElement("tr");

        propiedadesMostradas.forEach(function(propiedad) {
            var td = document.createElement("td");

            if (propiedad === "fechaPublicacion") {
                var fecha = new Date(data[propiedad]);
                var dia = fecha.getDate();
                var mes = fecha.getMonth() + 1; 
                var año = fecha.getFullYear();
                var fechaFormateada = dia + "/" + (mes < 10 ? '0' : '') + mes + "/" + año;
                td.textContent = fechaFormateada;
            } else {
                td.textContent = data[propiedad];
            }

            fila.appendChild(td);
        });

        tablaResultados.appendChild(fila);
    })
    .catch(error => {
        console.error(error);
    });
}
