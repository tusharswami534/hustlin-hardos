function toggleAccordion(clickedButton) {
    const allContents = document.querySelectorAll(".accordion-content");
    const allButtons = document.querySelectorAll(".accordion-header .arrow");

    allContents.forEach(content => {
        if (content !== clickedButton.nextElementSibling) {
            content.classList.add("hidden");
        }
    });

    allButtons.forEach(arrow => {
        if (arrow !== clickedButton.querySelector(".arrow")) {
            arrow.textContent;
        }
    });

    const content = clickedButton.nextElementSibling;
    content.classList.toggle("hidden");
    clickedButton.querySelector(".arrow").textContent = content.classList.contains("hidden");
}