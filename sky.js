const themeSwitch = document.getElementById('theme-switch');

// Check and toggle dark mode
themeSwitch.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('darkmode'); // Toggle dark mode
    const nightSky = document.querySelector('.night-sky');
  
    if (isDarkMode) {
      nightSky.style.display = 'block'; // Show the night sky
      startTwinkling(); // Start creating stars
    } else {
      nightSky.style.display = 'none'; // Hide the night sky
      clearTwinkling(); // Remove stars
    }
  });  

  function startTwinkling() {
    let timesRun = 0;
    const stopinterv = setInterval(() => {
      timesRun += 1;
      if (timesRun === 50) {
        clearInterval(stopinterv);
      }
      for (let i = 0; i < 5; i++) {
        const starCounts = document.createElement('i');
        starCounts.className = 'fa-solid fa-asterisk';
        const wh = Math.random() * 15 + 5; // Random size between 5px and 20px
        const $x = Math.random() * 100; // Random horizontal position
        const $y = Math.random() * 100; // Random vertical position
  
        starCounts.style.fontSize = `${wh}px`;
        starCounts.style.left = `${$x}vw`;
        starCounts.style.top = `${$y}vh`;
  
        document.querySelector('.night-sky').appendChild(starCounts);
      }
    }, 100);
  }  

  function clearTwinkling() {
    const stars = document.querySelectorAll('.night-sky i');
    stars.forEach((star) => star.remove()); // Remove all stars from the DOM
  }
  