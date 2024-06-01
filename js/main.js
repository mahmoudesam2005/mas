// Language Button
let lang = document.querySelector(".lang");
// Language Menu
let menu = document.querySelector(".lang ul");
// Main Menu
let mainNav = document.querySelector(".nav");
// Main Menu Ul
let mainNavUl = document.querySelector(".nav ul");
// The Scroll Button
let aScroll = document.querySelector(".scroll");
// The Menu Icon 1
let bar = document.querySelector(".bar");
// The Menu Icon 2
let bar2 = document.querySelector(".bar2");

// Showing the language menu
lang.addEventListener("click", () => {
    menu.classList.toggle("block-show");
})


// When Scrolling appear the scroll top and the shadow
document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 400) {
        mainNav.classList.add("nav-shadow");
        aScroll.classList.add("show");
    }
    else {
        mainNav.classList.remove("nav-shadow");
        aScroll.classList.remove("show");
    }
})

//  To Scroll Top
aScroll.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

// To open Main Mene
bar.addEventListener("click", () => {
    mainNavUl.classList.toggle("show");
});