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
};

// Disable dark mode
const disableDarkmode = () => {
  document.body.classList.remove('darkmode'); // Remove dark mode class
  localStorage.setItem('darkmode', null); // Save state in localStorage
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