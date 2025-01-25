
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-container img");
    const prevButton = document.querySelector(".arrow.left");
    const nextButton = document.querySelector(".arrow.right");

    let currentIndex = 0;

    // Funkcja do aktualizacji aktywnego obrazu
    function updateGallery(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    // Obsługa kliknięcia strzałek
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery(currentIndex);
    });

    // Początkowa aktualizacja
    updateGallery(currentIndex);
});