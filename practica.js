/*

1. condicionales (if, else, else-if)
2. variables, definición (var o let)
3. palabras reservadas
4. operadores: matemáticos (+, -, *, /), condicionales (<,>,=,==,===), lógicos (and &&,or ||, not !, !=, !==)
5. arrays: length, índices
6. otros condicionales (switch) (alternativa a if y else)
7. métodos (prompt, alert)

. console.log me muestra lo que hice

*/

let edad = prompt("Escriba su edad")

if (edad < 16) {
	alert("Usted no puede ingresar.");
}

const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola Mundo!';

let nombre = "Facundo";
let apellido = "Vacotti";
let edadF = "22"
let tieneMascota = true;

// le pregunto al usuario cuál es su nombre

let nombreUser = prompt("Escriba su nombre: ");
let apellidoUser = prompt("Escriba su apellido: ");
let edadUser = prompt("Escriba su edad: ");
let mascotaUser = prompt("¿Tiene mascota?");

if (mascotaUser == "si") {
	mascotaUser = true;
}

else {
	mascotaUser = false;
}

// arrays

let listaDeCompras = [];

let item1 = prompt("escriba item");

listaDeCompras[0] = item1;
console.log(listaDeCompras);

let item2 = prompt("escriba item");

listaDeCompras [1] = item2;
console.log(listaDeCompras);