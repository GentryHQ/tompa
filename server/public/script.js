const menuToggle = document.querySelector('.menuToggle');
const menu = document.querySelector('.nav_links');


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
})

// Link Click - Close
const links = menu.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        menuToggle.classList.remove('active');
        menu.classList.remove('active');
    })
};

//Slider
const wrapper = document.querySelector('.products_card');

let pressed = false;
let startX = 0;

wrapper.addEventListener('mousedown', function (e) {
    pressed = true;
    startX = e.clientX
    this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mousedown', function (e) {
    pressed = true;
    startX = e.clientX
    this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function (e) {
    pressed = false;
})

window.addEventListener('mouseup', function (e) {
    pressed = false;
    wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function (e) {
    if (!pressed) {
        return;
    }

    this.scrollleft += startX + e.clientX;
})

// =======================  FORM HANDLER =======================================


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
    })
        .then((response) => {
            console.log(response);
            if (response.ok) {
                console.log('Email sent successfully');
                this.reset();
            } else {
                console.error('Failed to send email');
            }
        })
        .catch((error) => console.error('Error:', error));
});
