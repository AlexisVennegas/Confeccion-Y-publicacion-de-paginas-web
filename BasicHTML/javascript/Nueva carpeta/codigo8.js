//Método callback
//Una función callback es una función que se pasa como argumento a otra función y se ejecuta después de completar esa función. 
function hacerAlgoAsincrono(callback) {
    setTimeout(function() {
        const resultado = Math.random();
        callback(resultado);
    },1000);
}

const procesarResultado = (datos) => {
    console.log(`El resultado obtenido: ${datos}`);
}

hacerAlgoAsincrono(procesarResultado);
//Aquí tenemos una función que recibe una función como parámetro. Luego, dentro de esa función tenemos setTimeout. En este caso, cuando el setTimeout se termine se va a obtener un valor aleatorio y luego se va a llamar la función que se pasó como parámtro y pasar el resultado.
//Esta técnica es la técnica de función callback. Esto significa que podemos pasar cualquier función a la función padre. En este caso tenemos una función que se llama procesarResultado que recibe el resultado del callback y lo muestra en la consola. Entonces, a la hora de l lamar hacerAlgoAsincrono pasamos esta función como parámetro.


