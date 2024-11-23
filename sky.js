const themeSwitch = document.getElementById('theme-switch');
let isDarkMode = false;

themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('darkmode');
  isDarkMode = !isDarkMode;

  // Start or stop the star animation based on dark mode state
  if (isDarkMode) {
    startTwinkling();
  } else {
    clearTwinkling();
  }
});

function startTwinkling() {
  let timesRun = 0;
  const stopinterv = setInterval(function twinkling() {
    timesRun += 1;
    if (timesRun === 50) {
      clearInterval(stopinterv);
    }
    for (let i = 0; i < 5; i++) {
      const starCounts = document.createElement('i');
      starCounts.className = 'fa-solid fa-asterisk';
      const wh = Math.floor(Math.random(1, 10) * 15);
      const $x = Math.floor(Math.random(0, 4) * 100);
      const $y = Math.floor(Math.random(0, 4) * 100);

      starCounts.style.position = 'absolute';
      starCounts.style.fontSize = wh + 'px';
      starCounts.style.left = $x + 'vw';
      starCounts.style.top = $y + 'vh';
      starCounts.style.color = 'white';

      document.querySelector('.night-sky').appendChild(starCounts);
    }
  }, 100);
}

function clearTwinkling() {
  const stars = document.querySelectorAll('.night-sky i');
  stars.forEach((star) => star.remove());
}

