/*

let boton = document.getElementById("btnPrincipal")

boton.addEventListener("click", respuestaClick)

function respuestaClick() {
	alert("Respuesta evento");
}

let secundario = document.getElementById("btnSecundario")

secundario.addEventListener("click", respuestaSecundario)

function respuestaSecundario() {
	alert("Este botón no era")
}

// WHILE

/*

let i=0; // inicializo el contador

// condición

while (i <= 7){
	
	//actualización

	console.log("El contador es: " + i);
	i = i + 1;
}

console.log("Terminó el bucle");

*/

// DO WHILE

/*

let i = 0; // inicializo el contador

do{

	//actualización

	console.log("El contador es: "+ i);
	i = i + 1;
}

// condición

while (i <= 7);

console.log("Terminó el bucle");
*/

// ACTIVIDAD

/*

let i = 100;

do {
	document.write("Solo faltan: " + i + " pasos por caminar. ");
	i = i - 1;
}

while(i > 0);

document.write("Terminamos");

*/

// FOR

for (let i = 0; i < 4; i++) {
	console.log(i);
}

/*

++ incrementa valor en 1 (es decir funciona como un "x+1")
---
i++ --> i = i + 1
i+=3 --> i = i + 3

*/

/*

// ACTIVIDAD

// multiplicación de números en arrays

// 1ra. iteración: array de arrays
let numeros = [
	[2,4],
	[1,5],
	[6,2],
	[3,5]
]

//  2da. iteración: bucle
for (let i = 0; i < numeros.length; i++){
	console.log(numeros[i][0] * numeros[i][1])
}

*/

	let productos = ["jabón", "shampoo", "gel", "papel higiénico", "dentífrico"];

	let stock = [48, 25, 90, 120, 40];

	let catalogo = [];

for (let i = 0; i < productos.length; i++ /*porque hablo de posiciones*/){
	catalogo = productos[i] + ": " + stock[i];
	console.log(catalogo);
}