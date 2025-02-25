// // propiedades, metodos, atributos, funciones(metodos)
// // en programacion las clases son plantillas que podemos utilizar para crear objetos similares en javascript para declarar una clase debemos utilizar la palabra clave CLASS y luego le agregamos el nombre 

// class Persona {
//     constructor(nombre, apellido) { 
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }
//     NombreCompleto() {
//         return `${this.nombre} ${this.apellido}`;
//     }
// }

// class Persona2 {
//     constructor(nombre, apellido) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.tamaño = this.obtenerNombreCompleto().length;
//     }
//     obtenerNombreCompleto() {
//         return `${this.nombre} ${this.apellido}`;
//     }
// }

// const persona1 = new Persona('Alexis', "Venegas"); 
// // console.log(persona1.nombre)
// // console.log(persona1.NombreCompleto())

// const persona2 = new Persona('Samuel', "Quintero");
// // console.log(persona2.nombre)
// //console.log(persona2.NombreCompleto())

// const persona3 = new Persona2('Alexis', "Venegas");
// // console.log(persona3.tamaño)
// // console.log(persona3.obtenerNombreCompleto())

// // clase sin constructor
// class Auto {
//     marca = undefined

// }

// const auto = new Auto();
// auto.marca = 'Toyota';
// //console.log(auto.marca)

// class Persona3 {
    
//     static especie = "homo sapiens sapiens"

//     constructor(nombre, apellido) {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.largoNombre = this.obtenerNombre().length
    
//     }  

//     obtenerNombre(){
//         return `${this.nombre} ${this.apellido}`;
//     }

//     obtenerSaludo(hora) {
//         if (hora === "mañana"){
//             return `buenos dias mi nombre es ${this.obtenerNombreCompleto}`
//            }
//         else {
//             return `buenas tardes, mi nombre es ${this.obtenerNombreCompleto}`
//         }
//     }
// }

// const pepito = new Persona3("Pepito", "Gorgorito")
// // console.log(pepito.nombre)
// // console.log(pepito.apellido)
// // console.log(pepito.largoNombre)
// // console.log(Persona3.especie)
// // console.log(Persona3.obtenerSaludo("mañana"))


class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar(){
        console.log(`${this.nombre} hace ruido`)
    }
}
class Perro extends Animal { 
    constructor(nombre, raza){
        super(nombre) 
        this.raza = raza;
    }
    ladra(){
        console.log(`${this.nombre} ladra muy fuerte`)
    }
}


let miPerro = new Perro("Firulais", "Pastor Aleman")
console.log(miPerro.nombre)
console.log(miPerro.hablar())
console.log(miPerro.ladra())
