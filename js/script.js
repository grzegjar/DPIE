document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const prevButton = document.querySelector(".arrow.left");
    const nextButton = document.querySelector(".arrow.right");

    let currentIndex = 0;

    function updateGallery(index) {
        galleryItems.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateGallery(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateGallery(currentIndex);
    });

    // Inicjalizacja galerii
    updateGallery(currentIndex);
});



document.querySelectorAll('.toggle-submenu').forEach(item => {
    item.addEventListener('click', function(event) {
        const parentLi = item.parentElement;
        parentLi.classList.toggle('active');
        
        // Jeśli jakieś inne podmenu jest otwarte, zamykamy je
        document.querySelectorAll('.menu-item').forEach(li => {
            if (li !== parentLi) {
                li.classList.remove('active');
            }
        });
        
        event.preventDefault(); // Zapobiega przeładowaniu strony
    });
});
