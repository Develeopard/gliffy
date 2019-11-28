//MENU variables
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu-list a')

//VIDEO variables
const videoTrigger = document.querySelector('.video-silent-wrapper');
const videoDisplay = document.querySelector('.video-display');
const videoPlay = document.querySelector('.screen');
const closeVideo = document.querySelector('.video-close-btn');


//MENU code
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});


//VIDEO code
videoTrigger.addEventListener('click', () => {
    videoDisplay.classList.add('video-display-show');
});

closeVideo.addEventListener('click', () =>{
    videoPlay.pause(true);
    videoPlay.currentTime = 0;
    videoDisplay.classList.remove('video-display-show');
});