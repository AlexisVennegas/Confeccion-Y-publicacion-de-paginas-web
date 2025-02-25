

window.addEventListener('scroll', (e) => {
    const button = document.getElementById('scroll-to-top');
    if (window.scrollY > 50) {
        document.getElementsByClassName("header_style_01")[0].classList.add("fixed-menu");
        button.classList.add('show');
    } else {
        document.getElementsByClassName("header_style_01")[0].classList.remove("fixed-menu");
        button.classList.remove('show');
    }
});



const buttonSlider = document.getElementById("buttonprevcarro")
const primerDiv = document.getElementById("primerDiv")
const segundoDiv = document.getElementById("segundoDiv")
const tercerDiv = document.getElementById("tercerDiv")

buttonSlider.addEventListener('click', () => {
// logica de cuando le des click al button de la izquierda cambiar de div

    if(primerDiv.classList.contains("estamosactivos")){
        primerDiv.classList.remove("estamosactivos")
        tercerDiv.classList.add("estamosactivos")
    }else if(segundoDiv.classList.contains("estamosactivos")){
        segundoDiv.classList.remove("estamosactivos")
        primerDiv.classList.add("estamosactivos")
    }else if(tercerDiv.classList.contains("estamosactivos")){
        tercerDiv.classList.remove("estamosactivos")
        segundoDiv.classList.add("estamosactivos")
    }
}
);

// lo mismo pero con el click derecho
const buttonSlider2 = document.getElementById("buttonnextcarro")

buttonSlider2.addEventListener('click', () => {
    if(primerDiv.classList.contains("estamosactivos")){
        primerDiv.classList.remove("estamosactivos")
        segundoDiv.classList.add("estamosactivos")
    }else if(segundoDiv.classList.contains("estamosactivos")){
        segundoDiv.classList.remove("estamosactivos")
        tercerDiv.classList.add("estamosactivos")
    }else if(tercerDiv.classList.contains("estamosactivos")){
        tercerDiv.classList.remove("estamosactivos")
        primerDiv.classList.add("estamosactivos")
    }
}
);