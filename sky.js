const themeSwitch = document.getElementById('theme-switch');

// Check and toggle dark mode
themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('darkmode'); // Toggle the dark mode class
  const isDarkMode = document.body.classList.contains('darkmode');

  if (isDarkMode) {
    document.querySelector('.night-sky').style.display = 'block'; // Show the night sky
    startTwinkling(); // Start creating stars
  } else {
    document.querySelector('.night-sky').style.display = 'none'; // Hide the night sky
    clearTwinkling(); // Remove stars
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
        const wh = Math.floor(Math.random() * 15) + 5; // Random star size
        const $x = Math.floor(Math.random() * 100); // Random horizontal position
        const $y = Math.floor(Math.random() * 100); // Random vertical position
  
        // Style the star dynamically
        starCounts.style.position = 'absolute';
        starCounts.style.fontSize = wh + 'px';
        starCounts.style.left = $x + 'vw';
        starCounts.style.top = $y + 'vh';
        starCounts.style.color = 'white';
  
        // Append the star to the night-sky container
        document.querySelector('.night-sky').appendChild(starCounts);
      }
    }, 100);
  }
  

  function clearTwinkling() {
    const stars = document.querySelectorAll('.night-sky i');
    stars.forEach((star) => star.remove()); // Remove all stars from the DOM
  }
  