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
