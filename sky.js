const themeSwitch = document.getElementById('theme-switch');
let isDarkMode = false;

// Add a click event listener to the theme switch button
themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('darkmode'); // Toggle the dark mode class on the body
  isDarkMode = document.body.classList.contains('darkmode');

  if (isDarkMode) {
    startTwinkling(); // Start creating stars
  } else {
    clearTwinkling(); // Remove stars when leaving dark mode
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
      const wh = Math.floor(Math.random() * 15) + 5; // Star size
      const $x = Math.floor(Math.random() * 100); // Random horizontal position
      const $y = Math.floor(Math.random() * 100); // Random vertical position

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
  stars.forEach((star) => star.remove()); // Remove all stars
}
