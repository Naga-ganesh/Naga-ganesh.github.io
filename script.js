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
                // Remove 'active' class from all sections
                document.querySelectorAll('section').forEach(section => {
                    section.classList.remove('active');
                });

                // Add 'active' class to the target section
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
                // Remove 'active' class from all sections
                sections.forEach(s => {
                    s.classList.remove('active');
                });

                // Add 'active' class to the current section
                section.classList.add('active');
            }
        });
    });
});
