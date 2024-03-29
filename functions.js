document.querySelector(".c-nav__burger").addEventListener("click", () => {
  const navInner = document.querySelector(".c-nav__inner");
  navInner.classList.toggle("c-nav__inner--active");
});

const nav = document.querySelector(".c-nav");

window.addEventListener("scroll", () => {
  window.scrollY >= 20
    ? nav.classList.add("c-nav--alt")
    : nav.classList.remove("c-nav--alt");
});

const pageVideo = document.querySelector(".video-player");

document.querySelector(".play-button").addEventListener("click", () => {
  pageVideo.paused ? pageVideo.play() : pageVideo.pause();
});

function fullScreenToggle() {
  const videoSize = document.querySelector(".video-player");
  if (videoSize.mozRequestFullScreen) {
    videoSize.mozRequestFullScreen();
  } else if (videoSize.webkitRequestFullScreen) {
    videoSize.webkitRequestFullScreen();
  }
}
