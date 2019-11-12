const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu-list a')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});