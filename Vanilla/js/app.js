

const menu = document.querySelector(".menu");
const menuItems = menu.querySelectorAll(".items");

menu.addEventListener("click", () => {
    menuItems.forEach((items) => {
        items.classList.toggle("hidden")
    })
});