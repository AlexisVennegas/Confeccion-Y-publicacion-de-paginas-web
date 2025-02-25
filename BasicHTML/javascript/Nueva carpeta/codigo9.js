//Promesas en Javascript
//las promesas son un objeto especial que podemos utilizar para ejecutar código asíncrono. Estas tienen una particularidad y es que podemos utilizar las promesas para indicar si una operación asíncrona terminó exitosamente o no. 
//Para crear una promesa utilizamos la keyword new y llamamos la clase Promise. El constructor de esta clase recibe como parámetro una función. Esta función recibe dos funciones como parámetro. El primer parámetro o función la utilizamos para resolver la promesa de una manera exitosa y la segunda la utilizamos para fallar la promesa osea para indicar de que hubo un error dentro de la ejecución del código.

function hacerAlgoAsincrono() {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
            const hecho = Math.random() < 0.5;
            if (hecho) {
                resolver('La operación fue un éxito');
            } else {
                rechazar('La operación falló');
            }
        }, 1000);
    });
}

hacerAlgoAsincrono()
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });

//Llamamos a la función recordando que el objeto promesa se va a devolver. La función then es una función dentro de la clase Promise que se utiliza para recibir la respuesta del código asíncrono. Significa que then se va a ejecutar hasta cuando este se haya terminado o hasta cuando la promesa haya sido resuelta exitosamente. Entonces el mensaje que recibiríamos es el mismo mensaje que se pasa a la hora de resolver la promesa.
//La función catch es otra función disponible dentro de la clase promesa. Esta función se encarga de detectar errores.