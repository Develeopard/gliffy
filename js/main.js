const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu-list li')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    links.forEach(link =>{
        link.classList.toggle('li-action');
    })
});