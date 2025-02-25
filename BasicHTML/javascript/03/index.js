// Objetos y tipos no primitivos

// --->  Objetos: son los elementos principales de los tipos de datos no primitivos. Con los objetos podemos crear constantes o variables que pueden contener vario valores.
// nosotros podemos acceder a las propiedades de un objeto llamando el nombre del objeto
// o el nombre de la variable o constante y luego agregamos un . y hacemos referencia 
// a alguna de las propiedades 


const persona = {nombre: "Alexis", apellidos: "Venegas", edad: 30, esAutorizado: true}


// console.log(persona.nombre) // <-- el resultado es : Alexis 



// se pueden utilizar estas propiedades dentro de expresiones para generar nuevos valores
const nombreCompleto = persona.nombre + " " + persona.apellidos

persona.edad = 40


// dentro de las propiedades de un objeto yo puedo tener otro objeto
// Esto se llama objetos anidados y no tiene un limite de anidación.

const persona2 = {
	nombre: "Pedro",
	apellido: "Ruiz",
	direccion: {
		calle: "Gran Via",
		numero: 7,
		CP: 28026
	}
}

// Arrays los arrays son un tipo de objeto que nos permite agregar varios valores
// dentro del mismo. Estos valores se acomodan en un tipo de lista dentro del objeto para poder
// definir un array, primero debemos declarar el nombre de la variable y con llaves cuadradas
// asignamos los valores

// tenemos 5 numeros en este array, cada valor dentro del array se separa por una coma 
// para poder acceder a los valores utilizo lo que se llama indice que indica su posicion dentro
// del array (acordarse que empiezan por 0)
// que pasa si hacemos referencia a un indice que va mas alla del numero de valores que tengo
// que javascript me va a devolver undefined

const numeros = [1, 2, 3, 4, 5];

const frutas = ["manzana", "platano", "piña","naranja"]


// los arrays tambien pueden contener elementos mixtos osea, elementos de diferentes tipos de 
// datos
let arregloMixto = [1, "manzana", true, null, {nombre: "Alexis", apellidos: "venegas"}]

// console.log(arregloMixto)


// DESTRUCTURACION DE ARRAYS	

// la destructuracion es un termino es un termino muy importante en javascript, es un metodo 
// que podemos utilizar para extraer los valores de un array o un objeto de una manera 
// mas rapida y con un codigo mas limpio 

const numeross = [1, 2, 3, 4, 5];
const [primero, segundo, ,cuarto] = numeross;

// aqui tenemos un arrray con cinco numeros, para destructurar este array primero debo 
// definir una constante utilizando keyword const, y luego llaves, voy a definir los valores, 
// (primero, segundo, cuarto), va a hacer el nombre de las variables que van a tomar los valores
// a la hora de salir del array, ya que primero esta posicionado el primero lugar dentro de esta
// definicion primero va atomar el valor de 1 
// segundo el valor de dos,Luego tengo un espacio en blanco, pero yo no voy a sacar el valor,
// por lo que no defino el valor, cuarto va a tomar el valor de cuarto y el valor de 5 lo va a ignorar
// para estructurarlo tendriamos utilizo llaves cuadradas y despues del cierre asigno a array de 
// numeros

const usuario = {nombre: "Samuel", edad: 26, esAdmin: true}
const {nombre, edad, esAdmin} = usuario
// console.log(nombre, edad, esAdmin)

// es muy similar al array, tengo un objeto usuario que tiene tres propiedades: nombre, edad y un valor, cooleano
// que indica si es admin o no, primero defino las variables utilizando const o let, y lueog abro
// llaves y ponemos los nombres que las propiedades que quiero extraer, es importante tener en cuenta que el nombre 
// de las variables debe concidir con el nombre de las propiedades dentro del objeto, luego hacemos la signacion
// para indicar que esta destructuracion proviene de este objeto, cuando ejecutamos este comando
// podemos hacer referencia a las constantes o las variables que fueron creadas a travez de destructuracion


// la clase Math contiene varios metodos que a casarmiten hacer operaciones matematicas
// es decir hacemos refenea la misma clkase y vemoas el ejemoasdpk



// OBTENER LA RAIZ CUADRADA
let numero = 16
let raizCuadrada = Math.sqrt(numero)

// NUMERO ALEATORIO
let numeroAleatorio = Math.random()

// REDONDEAD NUMERO
let numeroDecimal = 3.7;

let numeroRedondeado = Math.round(numeroDecimal);

// LA CLASE OBJECT: ofrece varios metodos que nos permite extraer informacion para poder manupular los datos
// dentro de un objeto 
// tenemos un objeto con 3 propiedades, nombre, edad, y ciudad, 

const persona5 = {
	nombre: "Juan",
	edad: 30,
	ciudad: "Madrid"
}

// OBJETCT.KEYS.()
let llaves = Object.keys(persona5)
// console.log(llaves)


// OBJECT.values()
// esta funcion hace un trabajo similar a objects.keys con la diferencia que en lugar de sustraer los nombres
// de las propiedades, substrae los valores, igual que el anterior lo devuelve en forma de array
const valores = Object.values(persona5)
 // console.log(valores)


// OBJECT.ENTRIES()
// es tambien muy similar pero la diferencia es que los nombres de las propiedades y los valores se devuelven
// como otros arrays 
const entradas = Object.entries(persona5)


// OBJECT ASSIGN()
// este metodo se utiliza para funcionar objectos, en este objceto tengo dos objectos de origen
// sus propiedades osn similares, destino tiene una propiedad llamada a y otra b, pero con valores
// diferentes, ahora cuando llamamos la funcion assign, primero debo pasar un contenedor el cual se va a utilizar para 
// rellenar los valores y luego paso a ambos objetos, el resultado de llamar, a esta funcion, el objecto 
// va a tener una propiedad que es uno b que es y una c que es 4, el valor que se tomo para b es la propiedad
// ya que el objeto que le paso como segundo parametro en la llamada de la funcion.


const destino = {a:1, b: 2}
const origen = {b:3, c: 4};

const objetoFuncionado = Object.assign({}, destino, origen)
//console.log(objetoFuncionado)


// OBJETOS DE TIPO FECHA o date como 
// se permite obtener valores de tipo fecha y hora para manipular estos valores
// quiero la fecha y hora actual en el momento en que se ejecuta el codigo entonces creo una 
// constante a la cual le asignouna una nueva instancia del objecto date, a la hora de ejcutar el codigo el 
// objecto contiene primero la fecha actual, una referencia a la zona horaria donde me ubico y luego un valor
// de hora que es la hora actual en le momento en que ejecuto el codigo

const fechaHoraActual = new Date();
// console.log(fechaHoraActual)



// como obtener informacion sobre la fecha 

const ahora = new Date();
const anno = ahora.getFullYear();
const mes = ahora.getMonth();
const dia = ahora.getDate()
const horas = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();

console.log(`Año: ${anno},
			 Mes: ${mes + 1},
			 dia: ${dia}, 
			 hora:${horas},
			 min: ${minutos},
			 sec: ${segundos}`);

// este tipo de objetos contiene muchos metodos que nos ayudan a manipular un objeto de tipo fecha
// estoy obteniendo la fecha y la hora en un formato diferente, para ello utilizo diferentes metodos como 
// fullyear
