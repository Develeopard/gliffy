//MENU variables
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu-list a')

//VIDEO variables
const videoTrigger = document.querySelector('.video-silent-wrapper');
const videoDisplay = document.querySelector('.video-display');
const videoPlay = document.querySelector('.screen');
const closeVideo = document.querySelector('.video-close-btn');

//TOGGLE CONTENT variables
const toggleHls = document.querySelectorAll('.toggle-hls');
const mask = document.querySelectorAll('.mask')


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

//TOGGLE CONTENT code
function selectMask(e){
    removeBorder();
    removeShow();
    this.classList.add('add-border');
    // grab item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-app`);
    //add show class
    tabContentItem.classList.add('show');
    
}

function removeBorder(){
    toggleHls.forEach(item => item.classList.remove('add-border'));
}

function removeShow(){
    mask.forEach(item => item.classList.remove('show'));
}

toggleHls.forEach(item => item.addEventListener('mouseover', selectMask));
toggleHls.forEach(item => item.addEventListener('click', selectMask));