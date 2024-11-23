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
        const star = document.createElement('i');
        star.className = 'fa-solid fa-asterisk'; // FontAwesome star icon
        const size = Math.random() * 15 + 5; // Random star size
        const x = Math.random() * 100; // Random horizontal position
        const y = Math.random() * 100; // Random vertical position
  
        // Apply styles dynamically
        star.style.position = 'absolute';
        star.style.fontSize = `${size}px`;
        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;
        star.style.color = 'white';
        star.style.textShadow = '0 0 10px white';
  
        document.querySelector('.night-sky').appendChild(star);
      }
    }, 100);
  }  

  function clearTwinkling() {
    const stars = document.querySelectorAll('.night-sky i');
    stars.forEach((star) => star.remove()); // Remove all stars
  }  