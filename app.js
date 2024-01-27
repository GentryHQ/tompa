const menuToggle = document.querySelector('.menuToggle');
const menu = document.querySelector('.nav_links');


menuToggle.addEventListener('click', ()=>{
    console.log('works');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
})