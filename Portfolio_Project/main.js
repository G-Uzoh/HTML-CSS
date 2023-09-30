// Get DOM elements
const button = document.querySelector('.send-btn');
const toTopBtn = document.querySelector('.back-to-top');

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

// Add event listeners to DOM elements
button.addEventListener('click', handleClick);
toTopBtn.addEventListener('click', backToTop);