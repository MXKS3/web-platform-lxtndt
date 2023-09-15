// Get references to the button and the navigation menu
const button = document.querySelector('.menu-button');
const navigationMenu = document.querySelector('.navigation__nav');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation menu to show/hide it
    navigationMenu.classList.toggle('active');
});

// Close the navigation menu when a navigation item is clicked (optional)
const navigationItems = document.querySelectorAll('.navigation__item');
navigationItems.forEach((item) => {
    item.addEventListener('click', () => {
        navigationMenu.classList.remove('active');
    });
});
