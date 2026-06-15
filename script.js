const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    if(navMenu.classList.contains('active')){
        menuBtn.innerHTML =
        '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';
    }
});

window.addEventListener('scroll', () => {

    const navbar =
    document.getElementById('navbar');

    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
window.addEventListener("scroll", () => {
    const image = document.querySelector(".image-container");

    let scrollPosition = window.scrollY;

    image.style.transform = `translateY(${scrollPosition * 0.05}px)`;
});