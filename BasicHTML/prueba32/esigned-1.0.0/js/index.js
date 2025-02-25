const buttonUser = document.getElementById('userIcon');

const boxContact1 = document.getElementById("box-1-contact")

const video = document.querySelector('.sourceVideo');

// cambiar el src dependiendo el responsive por debajo de 768px
function changeVideoSrc() {
    if (window.innerWidth < 768) {
        video.src = 'video/hero-mobile.mp4';
    } else {
        video.src = 'video/hero-desktop.mp4';
    }
}


const iconUser = document.getElementById('userIcon');
const divUser = document.querySelector('.iniciar-sesion');

iconUser.addEventListener('click', () => {
    divUser.classList.toggle('show-modal');
}
)


const buttonSearch = document.getElementById('buttonSearch');
const inputSearchHeader = document.getElementById('inputSearchShow');


buttonSearch.addEventListener('click', () => {
    inputSearchHeader.classList.toggle('show-input');
}  
)
