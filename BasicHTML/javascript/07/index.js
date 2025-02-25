// # FUNCIONES

function sumaNumeros(num1, num2) {
    return num1 + num2
}

// console.log(sumaNumeros(5, 3))

function potencia(num) {
//    return Math.sqrt(num)
    return num * num
}

// //  console.log(raizCuadrada(9))
// for (let i = 0; i < 5; i++) {
//     let resultado = potencia(i)
//     console.log(resultado)
// }


function multiplicaNumero(num1, num2) {
    return num1 * num2
}

function ejecutarOPeracion(num1, num2) {
    let suma = sumaNumeros(num1, num2)
    let producto = multiplicaNumero(num1, num2)
    console.log(`La suma de ${num1} y ${num2} es ${suma}`)
    console.log(`El producto de ${num1} y ${num2} es ${producto}`)
}

//ejecutarOPeracion(2, 5)

// # FUNCIONES ANONIMAS

let suma = function(num1, num2) {
    return num1 + num2
}

function incrementar(num) {
    num++;
    return num;
}

// # PARAMETROS POR DEFECTO
let numero = 5;
let resultado = incrementar(numero)
// console.log(resultado)

function agregarArray(arr, valor) {
    arr.push(valor)
    return arr
}   

let miarray = [1, 2, 3]
let nuevoArray = agregarArray(miarray, 4)

//console.log(nuevoArray) 

function saludo(nombre = 'Invitado') {
    console.log(`Hola ${nombre}`)
}

// saludo('Juan')

// # EXPRESIONES DE FUNCIONES EN JS
const saludo2 = function(nombre) {
    console.log(`Hola, ${nombre}`)
}

// # PERMITE PASAR LA FUNCION COMO PARAMETRO
function generarSaludo(fn) {
    const nombres = ['Juan', 'Pedro', 'Maria']
    for (const nombre of nombres) {
        fn(nombre)
    }
}
// generarSaludo(saludo2)
  

// FUNCIONES DE TIPO FLECHA, EXPLICACIO
// SON una de las formas más modernas de escribir funciones en JavaScript
// Son más cortas y más legibles
// No tienen su propio this, arguments, super o new.target
// explicacion: son funciones anonimas que se pueden asignar a una variable

let sumar = (x, y) => x + y
let resultadoSumar = sumar(5, 3)
//console.log(resultadoSumar)

// # FUNCIONES DE TIPO FLECHA sin parametros

let decirHola = () => console.log('Hola')

//decirHola()


// # FUNCIONES DE TIPO FLECHA con objeto

let crearPersona = (nombre, edad) => ({nombre: nombre, edad: edad})

let nuevaPersona = crearPersona('Juan', 25)
// console.log(nuevaPersona)


// # la palabra clave this 
// EL objeto this hace referencia al objeto que invoca la función

// console.log(this) // hace referencia a la window cuando hablamos de 


// en un objeto
const miObjeto = {
    mensaje : 'mensaje del objeto',
    functionRegular : function () {
        console.log(this.mensaje)
    }
}

// miObjeto.functionRegular()


// # MANIPULACION DE TEXTO

const textoEnMinuscula = "tranquildad que ya queda poquito, ya casi terminamos"

const textoEnMayuscula = textoEnMinuscula.toUpperCase()
// console.log(textoEnMayuscula)
//console.log(textoEnMinuscula.toLowerCase())

// concatenar cadenas 
const texto1 = "Hola"
const texto2 = "Mundo"

//primer metodo
const primerMetodo = texto1 + ' ' + texto2
// console.log(primerMetodo)
// segundo metodo
const segundoMetodo = `${texto1} ${texto2}` 
// console.log(segundoMetodo)
// tercer metodo
const tercerMetodo = texto1.concat(' ', texto2)
// console.log(tercerMetodo)
// cuarto metodo
const arrayTexto = [texto1, texto2]
const cuartoMetodo = arrayTexto.join(' ')
//console.log(cuartoMetodo) 


// convertir cadena de texto en array

const texto = "esto sigue siendo como trabajar con strings"
const arrayTexto1 = texto.split(' ')
const arrayTexto2 = texto.split('o')
const arrayTexto3 = texto.split('')
arrayTexto3[3] = 'PALAABRA'
// console.log(arrayTexto1)
// console.log(arrayTexto2)
// console.log(arrayTexto3.join(' '))



// # Extraer texto de un strings
const texto4 = "Seguimos con los strings"
const lorem = texto4.substring(0, 8) // aqui da guim porque 
const ignorarLasPrimerasLetras = texto4.slice(2)

console.log(ignorarLasPrimerasLetras)















