console.log('hi, im working!')

const slider = document.querySelector('#option #images');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', () => {
    isDown = true;
});

slider.addEventListener('mouseleave', () => {
    isDown = flase;
});

slider.addEventListener('mouseup', () => {
    isDown = flase;
});

slider.addEventListener('mousemove', () => {
    // isDown = flase;
    console.log(isDown)
});

