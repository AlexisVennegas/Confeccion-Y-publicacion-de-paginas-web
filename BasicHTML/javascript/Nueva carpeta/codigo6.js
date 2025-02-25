//Recorrer elementos hijos de un elemento DOM
//Tenemos varios métodos para recorrer los nodos hijos o elementos dentro del body de un documento HTML.
//Tenemos varias etiquetas en el HTMl y una de ellas es un div con imagenes. Y luego tenemos varios divs anidados uno dentro del otro hasta llegar al nivel 10. Para recorrer las imagenes necesito obtener la lista de las imagenes utilizando la función getElementsByTagName. Cone sto tengo un array de las imágenes y uso un for para recorrerlas

function obtenerColorAleatorio() {
    let letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function cambiarImagenes() {
    for(const imagen of imagenes) {
        imagen.style.border = `${obtenerColorAleatorio()} solid 3px`;
    }
}
//
const imagenes = document.getElementsByTagName('img');
cambiarImagenes();

//Tenemos dos maneras para recorrer los elementos
//1-Usando recursión:
function recorrerElementos(elemento) {
    //Procesa el elemento actual
    console.log(elemento.tagName);

    //Recorre los elementos hijos de manera recursiva
    for(let i = 0;i < elemento.children.length; i++) {
        recorrerElementos(elemento.children[i]);
    }
}
//Recursión es una técnica en programación donde una función se llama a sí misma. en este caso, hemos crado una función que se llama recorrerElementos la cual recibe como parámetro un elemento HTML. Lo primero que hace es un console.log del nombre de la etiqueta del elemento. Y luego utiliza un for para recorrer todfos los elementos hijos del elemento que se recibió como parátro. Luego la función se llama otra vez,y se pasa como parámetro al elemento hijo. 

//2-Empieza el recorrido desde el elemento raiz (document.body)
recorrerElementos(document.body);
//Luego, para empezar la recursión llamamos la función recorrer elementos y vemos que estamos enviando el nodo raiz osea el nodo body. Esta función lo que va a hacer es ir recorriendo cada uno de los nosods anidados dentro del nodo padre. Que quiere decir que la función se va a ejecutar por cada uno de stos dvs. Y cuando la función se ejecute se va a llamar otra vez nuevamente pasando como prarátro el nodo hijo hasta llegar al nivel diez. En este momento es cuando la función se detendrá.