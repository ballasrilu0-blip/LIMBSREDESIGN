const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {

        navigation.classList.toggle("is-open");

        const isOpen =
            navigation.classList.contains("is-open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent =
            isOpen ? "✕" : "☰";
    });
}