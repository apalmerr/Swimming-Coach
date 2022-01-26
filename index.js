const nav_toggle = document.querySelector(".nav_toggle");
const nav_menu = document.querySelector(".nav_menu");

nav_toggle.addEventListener("click", () =>{
    nav_menu.classList.toggle("nav_menu_visible");
});

