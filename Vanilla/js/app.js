const App = {
  // All of our selected HTML elements
  menu: document.querySelector(".menu"),
  menuItems: document.querySelectorAll(".items"),

  init() {
    App.$.menu.addEventListener("click", () => {
      App.$.menuItems.forEach((items) => {
        items.classList.toggle("hidden");
      });
    });
  },
};
