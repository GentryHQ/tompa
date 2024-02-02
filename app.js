const menuToggle = document.querySelector('.menuToggle');
const menu = document.querySelector('.nav_links');


menuToggle.addEventListener('click', ()=>{
    console.log('works');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
})

//Slider
const wrapper = document.querySelector('.conatiner')

let pressed = false;
let startX = 0;

wrapper.addEventListener('mousedown', function (e) {
    pressed = true;
    startX = e.clientX
})