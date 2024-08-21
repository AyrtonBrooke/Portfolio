const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const educationMenu = document.querySelector('#education-page');
    const skillsMenu = document.querySelector('#skills-page');
    const projectsMenu = document.querySelector('#projects-page');
    const contactMenu = document.querySelector('#contacts-page');
    let scrollPos = window.scrollY;

    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        educationMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        educationMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        skillsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 4400) {
        skillsMenu.classList.add('highlight');
        educationMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3000) {
        projectsMenu.classList.add('highlight');
        skillsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3700) {
        contactMenu.classList.add('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    }
    if((elem && window.innerWidth <960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


// Email JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('.click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_d1a1cma","template_cklffpb",{
        to_name: email,
        from_name: name,
        message: msg,
    });
}

function emptyerror() {
    swal({
        title: "Oh No...",
        text: "Fields cannot be empty!",
        icon: "error",
    });
}

function success() {
    swal({
        title: "Email Sent",
        text: "Will Reply Within 24 Hours",
        icon: "success",
    });
}

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400)
});