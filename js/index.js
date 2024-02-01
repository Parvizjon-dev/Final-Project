const html = document.querySelector('body')


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

const findBtn = document.getElementById("find-btn");
findBtn.onclick = function () {  
    findBtn.innerHTML = `<div class="spinner-border" role="status">
    <span class="visually-hidden">Загрузка...</span>
  </div>`

    setTimeout(()=>{
      findBtn.innerHTML = 'Найти программу'
      alert('text')
    },1500)

}



const subscriptionBtn = document.getElementById('subscribe-btn')


subscriptionBtn.onclick=()=>{
    subscriptionBtn.innerHTML = `<div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Загрузка...</span>
  </div>`

    setTimeout(()=>{
        subscriptionBtn.innerHTML = 'Вы подписаны'
    },1500)
    const emailValue = document.getElementById('email').value;
    localStorage.setItem('email',emailValue)
}