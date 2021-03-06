var hamburger = document.querySelector(".hamburger");
var menuItem = document.querySelector(".menu-items");
var menuContainer = document.querySelector(".menu-container");
var menuHeader = document.querySelector(".header");
var navBar = document.querySelector(".navbar");
var logo = document.querySelector(".logo");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    menuItem.classList.toggle("active");
    menuContainer.classList.toggle("active");
    menuHeader.classList.toggle("active");
    navBar.classList.toggle("active");
    logo.classList.toggle("active");
}

var slidePosition = 1;
SlideShow(slidePosition);

function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("Containers");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slidePosition++;
    if (slidePosition > slides.length) {slidePosition = 1}
    slides[slidePosition-1].style.display = "block";
    setTimeout(SlideShow, 2000);
}