const container_boxs = document.querySelector('.container_box');
const boxs = Array.from(container_boxs.children);

container_boxs.innerHTML = '';
boxs.sort(() => Math.random() - 0.5).forEach(box => container_boxs.appendChild(box));
// cambiar cada boxs con un color distino cada uno
boxs.forEach((box, index) => {
    box.style.backgroundColor = `hsl(${index * 30}, 100%, 50%)`;
});