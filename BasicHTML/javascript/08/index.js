const poema = "Hagamos un tratoCompañera, usted sabe que puede contar conmigo No hasta dos o hasta diez, sino contar conmigo Si alguna vez advierte que la miro a los ojos Y una veta de amor reconoce en los míos No alerte sus fusiles, ni piense: ¡qué delirio! A pesar de la veta, o tal vez porque existe Usted puede contar conmigo Si otras veces me encuentra huraño, sin motivo No piense que es flojera, igual puede contar conmigo Pero hagamos un trato: yo quisiera contar con usted Es tan lindo saber que usted existe Uno se siente vivo Y cuando digo esto, quiero decir contar Aunque sea hasta dos, aunque sea hasta cinco No ya para que acuda, presurosa, en mi auxilio Sino para saber, a ciencia cierta Que usted sabe que puede contar conmigo"

// aqui creamos una expresion regular para buscar la palabra "usted" en el poema
const palabraRemplazar = "usted"
const reemplazo = "tu"

// aqui creamos una expresion regular para buscar la palabra "cinco" en el poema
const replay = new RegExp(palabraRemplazar, "gi") 

// aqui reemplazamos la palabra "usted" por "tu" en el poema
const resultado = poema.replace(replay, reemplazo)

// console.log(resultado)

// lamamos a la k-word y luego llamo a la clase de la expresion regular
// paso la palabra que tiene que buscar y luego esta es una palabra clave para indicar que la busqueda debe ser global 


// OTROS METODOS PARA LA MANIPULACION DE STRINGS

// trim

const texto = "   un texto con espacios en blanco   "

console.log(texto.trim() + "***")   
console.log(texto.trimStart() + "***")
console.log(texto.trimEnd() + "***")


const numero = "5"

console.log(numero.padStart(4, "0"))
console.log(numero.padEnd(4, "0"))


const textoPrueba = "Quiero vivir la vida loca"

console.log(textoPrueba.charAt(2)) // esto lo que hace es devolver el caracter que se encuentra en la posicion 0

// CONVERTIR STRING A INT

const numeroString = "5"
const numeroInt = parseInt(numeroString)
const numeroINT2 = +numeroString
console.log(typeof numeroInt)
console.log(typeof numeroINT2)

// CONVERTIR DE NUMERO A STRING

const numeroString2 = 5
const numeroString3 = numeroString2.toString()
const numerostring4 = `${numeroString2}`
console.log(typeof numeroString3)
console.log(typeof numerostring4)

















