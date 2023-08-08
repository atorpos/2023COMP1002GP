let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.transform = 'translateX(0)';
        } else {
            const distance = (index - slideIndex) * 100;
            slide.style.transform = `translateX(${distance}%)`;
        }
    });

    slideIndex++;
    console.log(slideIndex);
    console.log(slides.length);
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();