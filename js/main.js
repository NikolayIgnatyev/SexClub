
var swiper = new Swiper(".swiper-pairs", {
	slidesPerView: "auto",
	speed: 1000,
	spaceBetween: 70,
});

const btnBurger = document.querySelector(".burger");
const btnClose = document.querySelector(".btn-close-menu");
const menu = document.querySelector(".header__menu");

btnBurger.addEventListener('click', () =>{
	menu.classList.add('open-menu');
})
btnClose.addEventListener('click', () => {
	menu.classList.remove('open-menu');
})
