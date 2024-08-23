// Highlight Menu on Scroll
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const educationMenu = document.querySelector('#education-page');
    const skillsMenu = document.querySelector('#skills-page');
    const projectsMenu = document.querySelector('#projects-page');
    const contactMenu = document.querySelector('#contact-page');
    let scrollPos = window.scrollY;

    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        projectsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        skillsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2600) {
        skillsMenu.classList.add('highlight');
        educationMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3500) {
        educationMenu.classList.add('highlight');
        skillsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 4000) {
        contactMenu.classList.add('highlight');
        educationMenu.classList.remove('highlight');
        return;
    }
    if((elem && window.innerWidth <960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
    }
};

// Event Listeners for Highlighting Menu
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
