// Get DOM elements
const toTopBtn = document.querySelector('.back-to-top');
const mobileMenuBtn = document.querySelector('#mobile-menu');
const topMenu = document.querySelector('.top-menu');
const navMenu = document.querySelector('.menu-items');
const navMenuLinks = document.querySelectorAll('nav ul li a');
const pizzaDescription = document.querySelector('.description-pizza');
const decisionDescription = document.querySelector('.description-decision');
const speedDescription = document.querySelector('.description-speed');
const seeMorePizza = document.querySelector('.more-pizza');
const seeMoreDecision = document.querySelector('.more-decision');
const seeMoreSpeed = document.querySelector('.more-speed');

// Add scroll event to window
window.onscroll = function() {
    window.scrollY >= navMenu.offsetTop ? topMenu.classList.add('sticky') : topMenu.classList.remove('sticky');

    scrollFn();
}
 
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

// Show/hide project description
const showPizzaDescription = () => {
    if (pizzaDescription.classList.contains('show')) {
        pizzaDescription.classList.remove('show');
        seeMorePizza.textContent = 'Show description';
    } else {
        pizzaDescription.classList.add('show');
        seeMorePizza.textContent = 'Hide description';
    }
}

const showDecisionDescription = () => {
    if (decisionDescription.classList.contains('show')) {
        decisionDescription.classList.remove('show');
        seeMoreDecision.textContent = 'Show description';
    } else {
        decisionDescription.classList.add('show');
        seeMoreDecision.textContent = 'Hide description';
    }
}
const showSpeedDescription = () => {
    if (speedDescription.classList.contains('show')) {
        speedDescription.classList.remove('show');
        seeMoreSpeed.textContent = 'Show description';
    } else {
        speedDescription.classList.add('show');
        seeMoreSpeed.textContent = 'Hide description';
    }
}

// Add event listeners to DOM elements
toTopBtn.addEventListener('click', backToTop);
mobileMenuBtn.addEventListener('click', mobileMenu);
seeMorePizza.addEventListener('click', showPizzaDescription);
seeMoreDecision.addEventListener('click', showDecisionDescription);
seeMoreSpeed.addEventListener('click', showSpeedDescription);