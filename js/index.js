const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./imgs/1page/close_icon.svg"
    } else {
navBtnImg.src = "./imgs/1page/open-icon.svg"
    }
}