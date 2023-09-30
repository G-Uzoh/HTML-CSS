// Get DOM elements
const button = document.querySelector('.send-btn');
const toTopBtn = document.querySelector('.back-to-top');
const mobileMenuBtn = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.menu-items');
const navMenuLinks = document.querySelectorAll('nav ul li a');

const handleClick = (e) => {
    e.preventDefault();
}

// Add scroll event to window
window.onscroll = function() {scrollFn()};
 
// Define the scroll function
const scrollFn = () => {
    // Add responsiveness for different browsers
    document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ? toTopBtn.style.display = 'block' : toTopBtn.style.display = 'none';
}

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobileMenu = () => {
    navMenuLinks.forEach(link => link.addEventListener('click', mobileMenu));

    navMenu.classList.contains('show') ? navMenu.classList.remove('show') : navMenu.classList.add('show');
}

// Add event listeners to DOM elements
button.addEventListener('click', handleClick);
toTopBtn.addEventListener('click', backToTop);
mobileMenuBtn.addEventListener('click', mobileMenu);