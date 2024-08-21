//get elements
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");

const publicKey = process.env.publicKey;
const serviceID = process.env.serviceID;
const templateID = process.env.templateID;

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {
    e.preventDefault();

    submitBtn.innerText = "Just a moment..."

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value
    }

    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {
            submitBtn.value = "Message Sent Successfully";
            contactForm.reset();
        }, (error) => {
            console.log(error);
            submitBtn.value = "Error";
        })
})