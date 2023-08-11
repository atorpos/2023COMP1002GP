let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        const offset = (index - slideIndex + slides.length) % slides.length;
        slide.style.transform = `translateX(${offset * 100}%)`;
    });

    slideIndex = (slideIndex + 1) % slides.length;

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();