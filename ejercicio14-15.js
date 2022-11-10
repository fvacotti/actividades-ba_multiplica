// Ejercicio 14

let titulos = prompt("Aclará la cantidad de títulos");

if (titulos > 10) {
    document.write("¡Felicidades! Tu equipo es grande");
}

else if (titulos <= 10) {
    document.write("Lamentablemente tu equipo no es grande");
}

else {
    document.write("Solo se aceptan números")
}

// Ejercicio 15

/* Arrancar por estructura gral:

ejemplo:

function esNumeroDeLaSuerte(num){

}

---

1. se debe poner && porque debe cumplir las condiciones dadas si o si. Además se agrega || (o) porque debe cumplir esas dos condiciones dentro de la misma condición.

2. % "numero" es para que sea múltiplo. Recordar poner == 0.

3. != significa "no es igual".
 
*/

function esNumeroDeLaSuerte(num) {

    if ((num > 0) && (num % 2 == 0 || num % 3 == 0) && (num != 15)) {
        alert("Es un número de la suerte");
    }

    else {
        alert("No es un número de la suerte");
    }
}