// const buttonColor = document.querySelector('.button-color');
const buttonImgs = document.querySelector('.button-imgs');

function colorRandom() {
    // `* 16
    return Math.floor(Math.random() * 256);
}

buttonColor.addEventListener('click', () => {
    const color = `rgb(${colorRandom()}, ${colorRandom()}, ${colorRandom()})`;
    const wrapper = document.querySelector('.wrap');
    wrapper.style = "background-color: " + color;   
    
});


buttonImgs.addEventListener('click', () => {
    const firstImgSrc = document.querySelector('.images-0');
    const secondImgSrc = document.querySelector('.images-1');
    const thirdImgSrc = document.querySelector('.images-2');

    // extraer el src de la primera imagen
    const srcFirst = firstImgSrc.src;
    const srcSecond = secondImgSrc.src;
    const srcThird = thirdImgSrc.src;

    // cambiar el src de la primera imagen por el de la segunda
    firstImgSrc.src = srcSecond;
    secondImgSrc.src = srcThird;
    thirdImgSrc.src = srcFirst;
});

// funciones asincronas

function mostrarTiempo() {

}