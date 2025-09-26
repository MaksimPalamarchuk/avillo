console.clear()
console.log("Це сайт для зміни теми")

document.addEventListener('DOMContentLoaded', () => {
  const lightThemeBtn = document.getElementById('lightTheme');
  const darkThemeBtn = document.getElementById('darkTheme');
  const customThemeBtn = document.getElementById('customTheme');
  const body = document.body;

  lightThemeBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#000';
  });

  darkThemeBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#000';
    body.style.color = '#fff';
  });

  customThemeBtn.addEventListener('click', () => {
    body.style.backgroundColor = 'red';
    body.style.color = '#fff';
  });
});

