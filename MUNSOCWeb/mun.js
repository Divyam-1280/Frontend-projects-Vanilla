let formbtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navlist');
menu.addEventListener('click', () =>{
    console.log(menu)
    // menu.classList.toggle(`fa-solid fa-bars`);
    navbar.classList.toggle('active');
});
formbtn.addEventListener('click', () =>{
    loginform.classList.add('active');
});
formclose.addEventListener('click', () =>{
    loginform.classList.remove('active');
});

// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Code for Vercel

app.use(express.static(__dirname + "/public/"));

