document.addEventListener("DOMContentLoaded", function() {
    // Navbar Toggle for Small Screens
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });

    // Smooth Scrolling for Internal Links
    const smoothScrollLinks = document.querySelectorAll('.navbar-nav a');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            // Close the navbar if in mobile view
            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Carousel Auto-Play Adjustments
    const carouselElement = document.querySelector('#carouselExampleControls');

    if (carouselElement) {
        $('.carousel').carousel({
            interval: 5000 // Change to desired speed
        });
    }

    // Adjust Hero Section on Resize
    function adjustHeroSection() {
        const heroSection = document.querySelector('.hero-section');
        const illustration = heroSection.querySelector('.illustration');
        const windowWidth = window.innerWidth;

        if (windowWidth < 768) {
            illustration.style.display = 'none';
        } else {
            illustration.style.display = 'block';
        }
    }

    // Initial adjustment on page load
    adjustHeroSection();

    // Adjust on window resize
    window.addEventListener('resize', adjustHeroSection);

    // Contact Form Validation
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const message = this.querySelector('textarea').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Thank you for contacting us!');
            // Here you can add AJAX code to submit the form data to the server
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});




