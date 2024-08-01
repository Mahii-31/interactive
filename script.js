document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const projectButtons = document.querySelectorAll('.view-more-btn');

    function addFadeOut(event) {
        event.preventDefault();
        const target = event.currentTarget;
        target.classList.add('fade-out');

        // Wait for the animation to finish before navigating
        setTimeout(() => {
            if (target.tagName === 'A') {
                window.location.href = target.href;
            }
        }, 1000);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', addFadeOut);
    });

    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('fade-out');
            // Add additional functionality here if needed
        });
    });

    const characterContainer = document.getElementById('character-container');
    characterContainer.addEventListener('click', function() {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting me!');
        contactForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const modalButtons = document.querySelectorAll('.view-more-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = "none";
        });
    });

    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

