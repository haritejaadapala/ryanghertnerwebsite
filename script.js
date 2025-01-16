// Navigation Bar Click Handling
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');

            // Navigate to a new page
            if (target !== '#') {
                window.location.href = target;
            }
        });
    });

    // Slideshow Initialization
    let currentSlideIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slideshow-image');
        if (index >= slides.length) currentSlideIndex = 0;
        if (index < 0) currentSlideIndex = slides.length - 1;

        slides.forEach((slide, i) => {
            slide.style.display = i === currentSlideIndex ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }

    function prevSlide() {
        currentSlideIndex--;
        showSlide(currentSlideIndex);
    }

    // Auto-slide every 5 seconds
    setInterval(() => {
        nextSlide();
    }, 5000);

    // Attach events to arrows
    document.querySelector('.arrow.next').addEventListener('click', nextSlide);
    document.querySelector('.arrow.prev').addEventListener('click', prevSlide);

    // Initialize slideshow
    showSlide(currentSlideIndex);
});
