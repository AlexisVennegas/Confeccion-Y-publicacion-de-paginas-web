let numeroDni = "01834791";
let letraDNI = "R"
let arrayLetras = "TRWAGMYFPDXBNJZSQVHLCKET";
let array = arrayLetras.split('');


if (numeroDni < 0 || numeroDni > 99999999){
	console.log("error, verifica tu dni")
} 
else
{	
// aqui primer convertimos de string a enteor para quedarnos solo con los numeros
	let posicion = numeroDni % 23;
// aqui despues hacemos el calculo de la posicion y eso es con el 
// division entera del numero del dino y el numero 23 apartir del resto
	let letra = arrayLetras[posicion];
//	console.log(letra);
}


// clausula condicional swtich 
// las declaraciones nos permiten ejecutar codigo basado en el valor que tenga una variable
// o una constante

let diaSemana = 3;
let nombreDia;

switch (diaSemana){
	case 1:
	nombreDia = "Lunes";
	break;
	
	case 2:
	nombreDia = "Martes";
	break;	

	case 3:
	nombreDia = "Miercoles";
	break;	

	case 4:
	nombreDia = "Jueves"
	break;

	case 5:
	nombreDia = "Viernes";
	break;
}


// console.log(`hoy es ${nombreDia}`)

let fruta = "manzana"
let color;

switch (fruta) {
	case "manzana":
	color = "verde "
	break;

	case "naranja":
	color = "naranja"
	break;

	case "platano":
	color = "amarillo"
	break;

	default:
	color = "blanco"
	
}
// console.log(`el color de la fruta es ${color}`)



// Bucles usando declaraciones for 
let numeros = [10, 20, 30, 40, 50]

for (let i = 0; i < numeros.length; i++){
//	console.log(`el elemento en el indice ${i} es el numero ${numeros[i]}`)
}

for (let i = 0; i < 3; i++){
	for(let j = 0; j < 2; j++){
		//console.log(`i: ${i}, j: ${j} --- `)
	}
}



// for in 

let persona = {nombre: "Elena", apellido: "Cardona", edad: 50}

for (let llave in persona){
	// console.log(` ${llave}: ${persona[llave]} `)
}


let colores=  ["rojo", "verde", "azul"]


for (let indice in colores){
	//console.log(`indice ${indice}: ${colores[indice]}`)
}


// for or 
let colores2 = ["rojo", "verde", "azul"]

for (let color of colores2){
	//console.log(color)
}



let saludo = "buenos dias"
for (let caracter of saludo){
	//console.log(`caracter: ${caracter} `)
}


// while

let cuenta = 0;

while(cuenta <= 5){
	//console.log(`cuenta: ${cuenta}`)
	cuenta++;
}


let numero = 10;

while(numero > 0){
	//nsole.log(`el numero es ${numero} ,`);
	numero-=2;
}


let numerosAleatorios;
while (numerosAleatorios !== 5){
	numerosAleatorios = Math.floor(Math.random() * 10) + 1
	//console.log(` ${numerosAleatorios} `)
}

// do while


let numeroAleaatorio;

do {
	numeroAleaatorio = Math.floor(Math.random() * 10) + 1;
	//console.log(`el numero es ${numeroAleaatorio} `)
} while (numeroAleaatorio !== 5)



// un script que escriba los numeros del 1 al 500, > check 
// que indique cual es miltiplos de 4 y de 9  > check
// y que cada 5 lineas muestre una linea > check


let x = 1;
while(x <= 500){

	if (x % 4 === 0  && x !== 0){
		console.log(`${x}:  es multiplo de 4`)
		document.write(`${x}:  es multiplo de 4 <br>`)
	}
	else if(x % 9 === 0 && x !== 0){
		console.log(`${x}:  es multiplo de 9`)
		document.write(`${x}:  es multiplo de 9 <br>`)
	}
	else {
		console.log(x)
		document.write(x + "<br>")
	}
	if (x % 5 === 0 && x !== 0 && x !== 500){
		console.log("-----------")
		document.write("<hr>")
	}
	x++;
}











