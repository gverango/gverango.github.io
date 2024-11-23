// Select all the list items in the sidebar navigation
const navLinks = document.querySelectorAll('.sidebar nav ul li a');

// Add click event listeners to each list item
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Remove the "active" class from all links
    navLinks.forEach(nav => nav.classList.remove('active'));

    // Add the "active" class to the clicked link
    this.classList.add('active');
  });
});

// THEME SWITCH FUNCTIONALITY

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode',null)
}

if (darkmode==="active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode(): disableDarkmode()
})