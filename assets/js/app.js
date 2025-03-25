const handelClick = () => {
  document.body.classList.toggle("overflow-hidden");
  document.getElementById("toggle-line-1").classList.toggle("translate-x-10");
  document.getElementById("toggle-line-2").classList.toggle("rotate-45");
  document.getElementById("toggle-line-2").classList.toggle("after:rotate-90");
  document.getElementById("toggle-line-3").classList.toggle("-translate-x-10");
  document.getElementById("menu").classList.toggle("max-sm:!left-0");
  document.getElementById("menu").classList.toggle("max-sm:!top-0");
};

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".latest-next",
    prevEl: ".latest-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
