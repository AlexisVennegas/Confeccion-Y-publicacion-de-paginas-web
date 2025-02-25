// tipos primitivos

// numero
let valorNumero = 10;

// strings: 0 cadenas que representan texto
const valorString = "Hola mundo";

// booleanos: true o false+
const valorBooleano = true;

// symbol, son un tipo espcial que representa valores unicos y son inmutables+
const valorSymbol = Symbol('mi-simbolo');

// Indefinidos esto es un valor que se asigna a una variable que no tiene valor
const valorIndefinido = undefined;

// null: representa un valor nulo
const valorNull = null;

// tipos no primitivos

// objetos: son colecciones de datos
// en este ejemplo se crea un objeto con dos propiedades: nombre y apellido y se asigna a la variable valorObjeto
const valorObjeto = {nombre: 'Alexis', apellido: 'Venegas'};

// arreglos: son colecciones de datos o arrays 
// son objetos para crear listas de valores y se pueden acceder a ellos por medio de un indice

const array = [1, 2, 3, "hola", true ];



// tippos de number y bigint
// los tipos de numerales los utilizamos para hacer operaciones matematicas en el codigo

// valor numeral int 
const numeroInt = 10; // <- he creado una constante con un valor de 10
console.log(numeroInt)

// tipo string
const stringEjemplo1 = "hola mundo";
console.log(stringEjemplo1) // <- he creado una constante con un valor de "hola mundo"

const stringEjemplo2 = 'este es un valor de string';
console.log(stringEjemplo2) // <- he creado una constante con un valor de 'este es un valor de string'1

const stringEjemplo3 = `este es un valor de string "hola como estamos"` ;
console.log(stringEjemplo3) // <- he creado una constante con un valor de `este es un valor de string "hola como estamos"

const a = 10;
const b = 20;

let suma = `\nla suma de ${a} + ${b} es ${a + b}`;
console.log(suma) 

// tipo boolean
const tienePermiso = true;
const estaLogeado = true;

let tieneAcceso = tienePermiso && estaLogeado;
console.log(tieneAcceso) 

// cuando yo croe una instancia de un symbol, este valor va a ser unico a nivel de memoria. Esto es util cuando necesitemos tener une referencia un valor que va ser unico a travez de toda la plicacion y 
// que no va a haber otro proceso igual que lo sobreescriba o lo cambie. 

// los simbolos son unicos cuando necesitamos tener llaves unicas para acceder a propiedades por dentro de un objeto, En este ejemplo tenemos garantia de que nadie va a sobre escribir esta llave

const miSimbolo = Symbol("buenosdias"); // <- la salida que da es un objeto de tipo simbol
console.log(typeof miSimbolo)

// con Descripcion

const miSimboloConDescripcion = Symbol("algun nombre o descripción")
console.log(miSimboloConDescripcion)


const llaveUnica = Symbol("llave unica")
const unObjetoNuevo = {
	[llaveUnica] : "Valor Asociado a la llave Unica"
}
console.log(unObjetoNuevo)

// tipo NULL y Undefine
// asignacion explicita de NULL a una variable
// vamos a asignar el valor NULL a una variable

const miVariableUno = null; // <- hemos creado una variable y le estamos asignando un valor nulo
console.log(miVariableUno)


// variables sin un valor asignado
let miVariableDos;          // <- creamos una variable pero sin darle valor
console.log(miVariableDos) 



// tengo una varaible que no tiene valor y cuando dijo que me lo muestre por consola, me devolvera undefine porque no se lo he dicho y en la funtion
// por lo cual tambien me saldria undefined

const numeroUno = 	"30"
const numeroDos = "20"
console.log(`la suma de ${numeroUno} y ${numeroDos} es ${numeroUno + numeroDos}`)


