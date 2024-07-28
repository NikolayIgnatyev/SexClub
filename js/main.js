
var swiper = new Swiper(".swiper-pairs", {
	slidesPerView: "auto",
	speed: 1000,
	spaceBetween: 70,
});

const btnBurger = document.querySelector(".burger");
const menu = document.querySelector(".burger-menu");
const burgerIcon = document.querySelector(".icon-burger");

btnBurger.addEventListener('click', () =>{
	menu.classList.toggle('open-menu');
	document.body.classList.toggle("lock");
})

document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.icon-burger');
    if (burgerIcon) {
        burgerIcon.addEventListener('click', function() {
            burgerIcon.classList.toggle('open');
        });
    } else {
        console.error('Element with id "burgerIcon" not found');
    }
});
