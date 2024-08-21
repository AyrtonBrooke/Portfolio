let slideIndex = 0; // Start with the first slide

function showSlide(index) {
    const slides = document.querySelectorAll('.projects-content');
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    slideIndex = index; // Update the global slide index
}

// Attach event listeners to the slide buttons
document.querySelectorAll('.next, .prev').forEach((button) => {
    button.addEventListener('click', () => {
        let nextSlideIndex;
        if (button.classList.contains('next')) {
            nextSlideIndex = slideIndex + 1;
        } else {
            nextSlideIndex = slideIndex - 1;
        }
        showSlide(nextSlideIndex);
    });
});

// Initialize the first slide
showSlide(slideIndex);
