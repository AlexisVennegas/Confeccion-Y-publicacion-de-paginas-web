// CONDICIONES
// EN programacion las causulas nos permiten controlar el flujo de una aplicacion

// IF 
let temperatura = 25;

if (temperatura < 30){
 	//console.log("entre al if")
}

// if - else
let horaActual = 18;

if (horaActual < 12){console.log("Buenos dias")}
//else {console.log("buenas tardes")}


// if - if-else
let nota = 3;

if (nota >= 9){console.log("Sobresaliente")}
else if (nota >= 7){console.log("Notable")}
else if (nota >= 6){console.log("bien")}
else if (nota >= 5){console.log("suficiente")}
//else {console.log("Insuficiente")}


// anidados
let estaLloviendo = true
let haceFrio = false

if (estaLloviendo){
	if(haceFrio){
		console.log("trae sueter y un paraguas")
	}
	else
		console.log("solo paraguas")
}
else {
	if(haceFrio){
		console.log("traer sueter")
	}
	else {
		console.log("Disfruta del dia ")
	}
}














