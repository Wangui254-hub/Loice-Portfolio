// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuButton.textContent = isOpen ? "×" : "☰";

});



document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";

    });

});



document.getElementById("year").textContent =
    new Date().getFullYear();



const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        (entries, currentObserver) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    currentObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );

    revealItems.forEach((item) => {

        observer.observe(item);

    });

} else {

    revealItems.forEach((item) => {

        item.classList.add("visible");

    });

}