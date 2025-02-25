
// --> OPERADORES DE ASIGNACION DE VALORES 


// RESTA
	 let z = 15
	z -= 7;
	// console.log(z);

// SUMA 
	let x = 10
	x += 10;
	// console.log(z);

// MULTIPLICACION
	let w = 20
	w *= 2;
	// console.log(w)

// DIVISION
	let a = 50
	a /= 5;
	//console.log(a)

// MODULO 
	let b = 17
	b %= 5
	// console.log(b)


	let h = 2
	h **= 3;
	// console.log(h)

// --> OPERADORES ARITMETICOS

	// SUMA 
	let suma = 5 + 3;
	// console.log(suma)
	
	// RESTA
	let diferencia = 10 - 4
	// console.log(diferencia)

	// MULTIPLICACION
	let producto = 7 * 2;
	// console.log(producto)

	// DIVISION
	let cociente = 20 / 4;
	// console.log(cociente)

	// MODULO
	let resto = 17 % 5;
	//console.log(resto)

	// EXPONENCIAL
	let expo = 2 ** 3
	// console.log(expo)

	// INCREMENTO 
	let incre = 5;
	incre++;
	//  

	let dis = 5
	dis--;
	// sole.log(dis)



	// SIGNOS DE COMPARACION 

	let ax = 5;
	let bx = "5"
	// console.log(ax ===  bx)	


	// OPERADOR DE NO IGUALDAD
	// console.log(ax != bx) -> FALSE
	// console.log(ax !== bx) -> TRUE	


	// OPERADOR MENOR QUE
	
	let ay = 10;
	let by = 5;
	let cy = 5;
	// console.log()>= by)


	// OPERADORES DE CADENA DE CARACTERES
	// OPERADORES que se pueden usar en strings

	// CONCATENACION

	let nombre = "Elena"
	let apellido = "Cardona"
	let nombreCompleto = nombre + " " + apellido

	// console.log(nombreCompleto)
	
	// CONCATENACION Y ASIGNACION
	
	let saludo = "hola, "
	let usuario = "Cardona"
	saludo += usuario;
	// console.log(saludo)




	// ---> OPERADORES LOGICOS

 	const exe = true
 	const eye = false

	// -> && 
	
	let resultado = exe && eye && true

	// -> or 
	let resultado2 = exe || eye || true
	// console.log(resultado2)
	
    let resultado3 = false || false || false
    // console.log(resultado3)

	// -> not 
	let resultado4 = !exe
	//	console.log(resultado4)

	let ayy = 5
	let byy = 6
	let cyy = 7

	const resultado5 = !(ayy <= cyy) && ((ayy > cyy) || (byy < cyy))
	// console.log(resultado5)


	// OPERADORES DE TIPO

	// --> EL OPERADOR typeof

	// console.log(typeof())
	let ahora = new Date()
	//nsole.log(ahora instanceof Date)




	// OPERADOR SPREAD	


	let arregloOriginal = [1, 2, 3]
	let copia = [...arregloOriginal]
	let copia2 = arregloOriginal


	// UNIR ARRAY

	let array1 = [1, 2, 3]
	let array2 = [4, 5, 6]

	let unidos = [...array1, ...array2]
	//console.log(unidos)

			


	// PASAR ARGUMENTOS A UNA FUNCION 

	function ft_suma(a,b,c){
		return a + b +c
	}
	
	let numeros = [1, 2, 3]
	let resultados = ft_suma(...numeros)
	//console.log(resultados)

	// CONVERTIR UN STRING EN UN ARRAY

	let str = "hola"
	let caracteres = {...str}
	console.log(caracteres)



	






