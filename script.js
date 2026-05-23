const video = document.getElementById("storyVideo");
const playPauseBtn = document.getElementById("playPauseBtn");

if (video && playPauseBtn) {
  // Обробник події для кнопки
  playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playPauseBtn.style.opacity = "0"; // Ховаємо кнопку, коли відео грає
      playPauseBtn.style.pointerEvents = "none"; // Щоб кнопка не заважала клікати по відео
    } else {
      video.pause();
      playPauseBtn.style.opacity = "1"; // Показуємо кнопку, якщо відео на паузі
      playPauseBtn.style.pointerEvents = "auto";
    }
  });

  // Обробник події для кліку по самому відео (пауза/старт)
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playPauseBtn.style.opacity = "0";
      playPauseBtn.style.pointerEvents = "none";
    } else {
      video.pause();
      playPauseBtn.style.opacity = "1";
      playPauseBtn.style.pointerEvents = "auto";
    }
  });
}