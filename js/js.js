// Function to show icons when the page loads or scrolls
function showIcons() {
    const icons = document.querySelectorAll('.social-icon');
    const scrollPosition = window.scrollY + window.innerHeight;
    
    icons.forEach(icon => {
        const iconPosition = icon.getBoundingClientRect().top + window.scrollY;
        
        if (scrollPosition > iconPosition || window.scrollY === 0) {
            icon.classList.add('show'); // Adds the 'show' class to make them visible
        }
    });
}

// Trigger the function on page load and on scroll
window.addEventListener("load", showIcons); // On load
window.addEventListener("scroll", showIcons); // On scroll
/******************************/
// Create an IntersectionObserver to observe elements as they enter the viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
});

// Select all the text elements with the class 'animate-aboutMe'
const animateAboutMeTexts = document.querySelectorAll('.animate-aboutMe');

// Observe each element
animateAboutMeTexts.forEach(text => {
    observer.observe(text);
});
/***********************/
const goUpBtn = document.querySelector('.go-up-btn');
const homeSection = document.querySelector('.HomeSection');

// Show the button when the user scrolls past the bottom of the HomeSection
window.addEventListener('scroll', () => {
    const homeSectionBottom = homeSection.getBoundingClientRect().bottom;

    // Show the button when the bottom of HomeSection is scrolled past
    if (homeSectionBottom < window.innerHeight) {
        goUpBtn.style.display = 'flex';
    } else {
        goUpBtn.style.display = 'none';
    }
});

// Scroll back to top when the button is clicked
goUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
/*******************************************/
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS for scroll in and onload animation
    AOS.init({
        once: false, // Allow animations on scroll out as well
        duration: 1000, // Duration in milliseconds
    });

    // Detect scroll out for the element
    const educationCard = document.getElementById('educationCard');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If element is in view, apply AOS animation
                educationCard.classList.add('aos-animate');
            } else {
                // If element is out of view, apply custom scroll-out animation
                educationCard.classList.remove('aos-animate');
                educationCard.classList.add('scroll-out-animation');
            }
        });
    });

    // Observe the education card element for in and out of view
    observer.observe(educationCard);
});
/*********************************************************/
const projectViewMoreBtn = document.getElementById('view-more-btn');
const hiddenProjectCards = document.querySelectorAll('#extra-cards, #extra-cards-2');

// Single event listener for the button
projectViewMoreBtn.addEventListener('click', function() {
    hiddenProjectCards.forEach(card => card.classList.toggle('d-none'));

    // Toggle the button text between 'View More' and 'View Less'
    if (projectViewMoreBtn.textContent === 'View More') {
        projectViewMoreBtn.textContent = 'View Less';
    } else {
        projectViewMoreBtn.textContent = 'View More';
    }
});
/****************************/
document.getElementById('toggleViewBtnExperience').addEventListener('click', function() {
    const timeline = document.querySelector('.timeline');
    timeline.classList.toggle('show-allExperience');
    this.textContent = timeline.classList.contains('show-allExperience') ? 'Show Less' : 'View All';
});

/***************************************/ 
