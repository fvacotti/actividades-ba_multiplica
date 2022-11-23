function saludar(){
    alert("Hola");
}

let botonSaludo = document.getElementById("saludo");
botonSaludo.addEventListener("click", saludar, false);

// setInterval(saludar,100);

// setInterval(nombreFuncion, delayEnMs); *lo repite*