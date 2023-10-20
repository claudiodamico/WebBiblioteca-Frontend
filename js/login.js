document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    const urlLogin = `http://localhost:5201/api/auth/login?username=${username}&password=${password}`;

    fetch(urlLogin, {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            window.location.href = "catalogo.html";
        } else {
            alert("Inicio de sesión fallido. Verifica tus credenciales.");
            window.location.href = "login.html";
        }
    })
    .catch(error => {
        console.error(error);
    });
});

