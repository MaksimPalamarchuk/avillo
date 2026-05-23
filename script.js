const video = document.getElementById("storyVideo");
const playPauseBtn = document.getElementById("playPauseBtn");

if (video && playPauseBtn) {
  playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playPauseBtn.style.opacity = "0"; // Ховаємо кнопку, коли відео грає
    } else {
      video.pause();
      playPauseBtn.style.opacity = "1"; // Показуємо кнопку, коли відео на паузі
    }
  });

  // Також можна зупиняти/запускати по кліку на саме відео
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playPauseBtn.style.opacity = "0";
    } else {
      video.pause();
      playPauseBtn.style.opacity = "1";
    }
  });
}
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 5v14l11-7z" />
</svg>

