document.addEventListener("DOMContentLoaded", () => {
    console.log("LIMBS Frontend Redesign loaded successfully.");
});
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

if (contactForm && formSuccess) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formSuccess.style.display = "block";

        contactForm.reset();

        formSuccess.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    });

}