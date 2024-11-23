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

// Declare themeSwitch only once
const themeSwitch = document.getElementById('theme-switch');

// Ensure localStorage works correctly
let darkmode = localStorage.getItem('darkmode');

const enableDarkmode = () => {
  document.body.classList.add('darkmode'); // Add darkmode class to body
  localStorage.setItem('darkmode', 'active'); // Save darkmode state in localStorage

  const nightSky = document.querySelector('.night-sky');
  nightSky.style.display = 'block'; // Show the night sky
  startTwinkling(); // Start creating stars
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode'); // Remove darkmode class from body
  localStorage.setItem('darkmode', null); // Remove darkmode state from localStorage

  const nightSky = document.querySelector('.night-sky');
  nightSky.style.display = 'none'; // Hide the night sky
  clearTwinkling(); // Clear stars
};

// Check localStorage and apply dark mode on page load
if (darkmode === 'active') {
  enableDarkmode();
} else {
  disableDarkmode();
}

// Add event listener to themeSwitch button
themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode'); // Get current darkmode state

  if (darkmode !== 'active') {
    enableDarkmode(); // Enable dark mode if not already active
  } else {
    disableDarkmode(); // Disable dark mode if currently active
  }
});

// Start creating stars
function startTwinkling() {
  console.log('Start Twinkling Called'); // Debugging log
  let timesRun = 0;
  const stopinterv = setInterval(() => {
    timesRun += 1;
    if (timesRun === 50) {
      clearInterval(stopinterv); // Stop after 50 intervals
    }
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('i');
      star.className = 'fa-solid fa-asterisk'; // FontAwesome star icon
      const size = Math.random() * 15 + 5; // Random size
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
      console.log('Star created'); // Debugging log
    }
  }, 100);
}

// Clear all stars
function clearTwinkling() {
  const stars = document.querySelectorAll('.night-sky i');
  stars.forEach((star) => star.remove()); // Remove all stars
  console.log('Stars cleared'); // Debugging log
}
