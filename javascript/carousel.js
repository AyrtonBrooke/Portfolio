// /js/carousel.js
let slideIndex = 1;

function showSlides(n) {
    var slides = document.getElementsByClassName("projects-content");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

document.querySelectorAll('.projects-content .next, .projects-content .prev').forEach((button) => {
    button.addEventListener('click', () => {
        const activeSlide = document.querySelector('.projects-content.active');
        const activeSlideIndex = Array.from(activeSlide.parentNode.children).indexOf(activeSlide);
        let nextSlideIndex;
        if (button.classList.contains('next')) {
            nextSlideIndex = activeSlideIndex + 1;
        } else {
            nextSlideIndex = activeSlideIndex - 1;
        }
        showSlide(nextSlideIndex);
    });
});

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
}

// Initialize the first slide
showSlide(0);
