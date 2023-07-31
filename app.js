let hamburgerMenu = document.querySelector('#hamburger');
let menu = document.querySelector('.menu');
let nav = document.querySelector('.nav');
let main = document.querySelector('main')
hamburgerMenu.addEventListener('click', function() {
    // nav.classList.toggle('open')
    nav.style.display = 'flex';
    nav.style.gap = 0;
    // nav.style.flexDirection = 'column';
    // nav.style.marginTop = '50px';
    // nav.style.justifyContent = 'right';
    // nav.style.backgroundColor = 'red';
    console.log('hello')
})

