document.addEventListener("DOMContentLoaded", function() {
    const isbnInput = document.getElementById("isbn");
    
    // Obtén el ISBN de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const isbn = urlParams.get("isbn");
  
    // Si se encontró un ISBN en la URL, agrégalo al campo de entrada
    if (isbn) {
      isbnInput.value = isbn;
    }
  });
  