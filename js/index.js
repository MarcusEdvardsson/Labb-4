var hamburger = document.querySelector(".hamburger");
var menuItem = document.querySelector(".menu-items");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    menuItem.classList.toggle("active");
}