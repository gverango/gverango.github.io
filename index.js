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
