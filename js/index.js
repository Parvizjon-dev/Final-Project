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

const findBtn = document.getElementById('find-btn');
const body = document.querySelector('body')

const modal = document.createElement('div');

const closeModal = () => {
  body.removeChild(modal)
}

findBtn.onclick = () => {
  findBtn.innerHTML = `<div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>`

  setTimeout(() => {
    findBtn.innerHTML = 'Найти програму'
    modal.innerHTML = `<div class="modal show" style="display: block" tabindex="-1">
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title">Рузультат поиска:</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <p>По вашему запросу ничего не найдено.</p>
                              </div>
                              <div class="modal-footer">
                               <button type="button" onclick="closeModal()" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>`

    body.appendChild(modal)

  }, 1500)

}

const subscriptionBtn = document.getElementById('subscribe-btn')


subscriptionBtn.onclick = () => {
  subscriptionBtn.innerHTML = `<div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Загрузка...</span>
  </div>`

  setTimeout(() => {
    subscriptionBtn.innerHTML = 'Вы подписаны'
  }, 1500)
  const emailValue = document.getElementById('email').value;
  const emails = localStorage.getItem('email') || [emailValue];
  localStorage.setItem('email', emails)
}

const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
  circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
  circlePlayButton.style.opacity = 1;
});