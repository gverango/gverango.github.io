// Select all the list items in the sidebar navigation
const navLinks = document.querySelectorAll('.sidebar nav ul li a');

// Add click event listeners to each list item
navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    // Remove the "active" class from all links
    navLinks.forEach((nav) => nav.classList.remove('active'));
    // Add the "active" class to the clicked link
    this.classList.add('active');
  });
});

// Select the theme switch button
const themeSwitch = document.getElementById('theme-switch');

// Get dark mode state from localStorage
let darkmode = localStorage.getItem('darkmode');

// Enable dark mode
const enableDarkmode = () => {
  document.body.classList.add('darkmode'); // Add dark mode class to body
  localStorage.setItem('darkmode', 'active'); // Save state in localStorage
  document.querySelector('.night-sky').style.display = 'block'; // Show night sky
  startTwinkling(); // Start stars
};

// Disable dark mode
const disableDarkmode = () => {
  document.body.classList.remove('darkmode'); // Remove dark mode class
  localStorage.setItem('darkmode', null); // Save state in localStorage
  document.querySelector('.night-sky').style.display = 'none'; // Hide night sky
  clearTwinkling(); // Clear stars
};

// Apply dark mode on page load if active
if (darkmode === 'active') {
  enableDarkmode();
} else {
  disableDarkmode();
}

// Toggle dark mode on button click
themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  if (darkmode !== 'active') {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});

// Create twinkling stars
function startTwinkling() {
  console.log('Start Twinkling Called');
  const nightSky = document.querySelector('.night-sky');
  if (!nightSky) {
    console.error('Error: .night-sky element not found');
    return;
  }

  let timesRun = 0;
  const stopinterv = setInterval(() => {
    timesRun += 1;
    if (timesRun === 50) {
      clearInterval(stopinterv);
    }
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('i');
      star.className = 'fa-solid fa-asterisk'; // FontAwesome star icon
      const size = Math.random() * 15 + 5; // Random size
      const x = Math.random() * window.innerWidth; // Constrain to viewport width
      const y = Math.random() * window.innerHeight; // Constrain to viewport height

      // Apply styles dynamically
      star.style.position = 'absolute';
      star.style.fontSize = `${size}px`;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.color = 'white';
      star.style.textShadow = '0 0 10px white';

      nightSky.appendChild(star);
      console.log('Star created'); // Debugging log
    }
  }, 100);
}

// Clear stars
function clearTwinkling() {
  const stars = document.querySelectorAll('.night-sky i');
  stars.forEach((star) => star.remove());
  console.log('Stars cleared');
}
