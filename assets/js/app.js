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

const decrementButton = document.getElementById("reduce-button");
const incrementButton = document.getElementById("increase-button");
const valueDisplay = document.getElementById("output");

let value = 100;

decrementButton.addEventListener("click", () => {
    value -= 1;
    valueDisplay.textContent = value;
});

incrementButton.addEventListener("click", () => {
    value += 1;
    valueDisplay.textContent = value;
});

// Team swiper
var swiper = new Swiper(".team-mySwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".team-next",
        prevEl: ".team-prev",
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
            slidesPerView: 2,
            spaceBetween: 0,
        },
    },
});

// year
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

function toggleAccordion(button) {
    const allAccordions = document.querySelectorAll('.accordion-content');
    const allIcons = document.querySelectorAll('.accordion-header .arrow');
    const content = button.nextElementSibling;
    const arrow = button.querySelector('.arrow');

    // Close all accordions and reset icons
    allAccordions.forEach(acc => {
        if (acc !== content) {
            acc.classList.add('hidden');
        }
    });

    allIcons.forEach(icon => {
        icon.src = "./assets/images/svg/accordion-svg.svg"; // Reset to plus icon
    });

    // Toggle the clicked accordion
    content.classList.toggle('hidden');

    // Update icon based on state
    if (content.classList.contains('hidden')) {
        arrow.src = "./assets/images/svg/accordion-svg.svg"; // Plus icon
    } else {
        arrow.src = "./assets/images/svg/minus-accordion-svg.svg"; // Minus icon
    }
}
