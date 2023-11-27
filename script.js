document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSection = document.querySelector(this.getAttribute('href'));

            // Scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Highlight the target section with extra shadows after a delay
            setTimeout(() => {
                targetSection.classList.add('active');
            }, 500); // Adjust the delay as needed
        });
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});

