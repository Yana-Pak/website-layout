const button = document.querySelectorAll(".button");

button.forEach((button) => {
    button.addEventListener("click", () => {
        const currentState = button.getAttribute("data-state");

        if (!currentState || currentState === "closed") {
            button.setAttribute("data-state", "opened");
            button.setAttribute("aria-expanded", "true");
        } else {
            button.setAttribute("data-state", "closed");
            button.setAttribute("aria-expanded", "false");
        }
    });
});




const dropdownButton = document.querySelector(".burger");
const dropdownMenu = document.querySelector(".nav__list");

dropdownButton.addEventListener("click", function () {
    dropdownMenu.classList.toggle("show");
});
