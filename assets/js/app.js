const handelClick = () => {
  document.body.classList.toggle("overflow-hidden");
  document.getElementById("toggle-line-1").classList.toggle("translate-x-10");
  document.getElementById("toggle-line-2").classList.toggle("rotate-45");
  document.getElementById("toggle-line-2").classList.toggle("after:rotate-90");
  document.getElementById("toggle-line-3").classList.toggle("-translate-x-10");
  document.getElementById("menu").classList.toggle("max-sm:!left-0");
  document.getElementById("menu").classList.toggle("max-sm:!top-0");
};

// Latest Tweets Swiper
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

// Faq Section
function toggleAccordion(button) {
  const allAccordions = document.querySelectorAll(".accordin-data");
  const allIcons = document.querySelectorAll(
    ".accordin-button span:last-child"
  );

  const paragraph = button.nextElementSibling;
  const icon = button.querySelector("span:last-child");

  allAccordions.forEach((otherParagraph) => {
    if (otherParagraph !== paragraph) {
      otherParagraph.style.maxHeight = null;
    }
  });

  allIcons.forEach((otherIcon) => {
    if (otherIcon !== icon) {
      otherIcon.classList.add("after:rotate-90");
    }
  });

  if (paragraph.style.maxHeight) {
    paragraph.style.maxHeight = null;
    icon.classList.add("after:rotate-90");
  } else {
    paragraph.style.maxHeight = paragraph.scrollHeight + "px";
    icon.classList.remove("after:rotate-90");
  }
}
// Back to TOp
let backToTopButton = document.getElementById("backToTop");
window.onscroll = function () {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};
backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
