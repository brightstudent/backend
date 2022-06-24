const slider = document.querySelector("#images");
const previousBtn = document.querySelector("#option .previous");
const nextBtn = document.querySelector("#option .next");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", (e) => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", (e) => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; // stop function from running.
  e.preventDefault;
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

window.addEventListener('load', () => {
  nextBtn.classList.add('jsactive')
  previousBtn.classList.add('jsactive')
})

nextBtn.addEventListener("click", () => {
  slider.scrollLeft += 200;
  console.log('next')
});
previousBtn.addEventListener("click", () => {
  slider.scrollLeft -= 200;
  console.log('back')
});
