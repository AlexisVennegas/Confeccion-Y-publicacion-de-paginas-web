//Manipulando el CSS
//Esta página tiene dos botones, uno lo que hace es que cambia los eestilos del borde de las imagenes y el fondo de la página. Y el otro botón lo que hace es que reinicia los estilos a su estado original. 


const botonCambiar = document.getElementsByClassName('boton-redondo')[0];
const botonReiniciar = document.getElementsByClassName('boton-redondo')[1];
const imagenes = document.getElementsByTagName('img');
//Primero recobro la referencia a cada uno de los botones y a la lista de imágenes de este código

function cambiarColorFondo() {
    const color = obtenerColorAleatorio();
    console.log(`Color generado: ${color}`);
    document.body.style.backgroundColor = color;
}
//Luego tenemos varias funciones, una ser encarga de generar un color aleatorio y otra función que cambiar el fonde de la página. la función llama a obtenerColorAleatorio y luego accede al body de la página para poder cambiar el color de fondo. Hay que fijarse en que pone style que pertenece al body. Con esto podemos cambiar los estilos de un elemento. 

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
//Aquí tengo otra función que se encarga tambien de cambiar el borde de las imágenes. Se genera un color aleatorio y luego se pasa a  las propiedades CSS del borde. Tengo la propiedad style igualmente para poder acceder al CSS

botonCambiar.addEventListener('click', event => {
    cambiarColorFondo();
    cambiarImagenes();
});
botonReiniciar.addEventListener('click', event => {
    document.body.style = {};
    for(const imagen of imagenes){
        imagen.style = {};
    }
});

//Tengo dos eventos de clic de cada uno de los botones. El de cambiar color llama a las dos funciones.
//Y el botón reiniciar lo que hace es que elimina los estilos agregados al body de la página