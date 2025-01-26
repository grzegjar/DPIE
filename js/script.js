document.addEventListener("DOMContentLoaded", function () {
    // Obsługa galerii
    const galleryItems = document.querySelectorAll(".gallery-item");
    const prevButton = document.querySelector(".arrow.left");
    const nextButton = document.querySelector(".arrow.right");
    let currentIndex = 0;

    function updateGallery(index) {
        galleryItems.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
    }

    if (prevButton && nextButton && galleryItems.length > 0) {
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
    }

    // Obsługa submenu
    document.querySelectorAll('.toggle-submenu').forEach(item => {
        item.addEventListener('click', function (event) {
            const parentLi = item.parentElement; // Rodzic, który zawiera podmenu
            parentLi.classList.toggle('active'); // Dodajemy/usuwamy klasę 'active'

            // Jeśli jakieś inne podmenu jest otwarte, zamykamy je
            document.querySelectorAll('.menu-item').forEach(li => {
                if (li !== parentLi) {
                    li.classList.remove('active'); // Usuwamy klasę 'active' z innych elementów
                }
            });

            // Przesuwanie do wybranej sekcji
            const targetId = item.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            event.preventDefault(); // Zapobiegamy przeładowaniu strony
        });
    });

    // Automatyczne ustawianie aktywnego menu tytułu
    document.querySelectorAll('.menu-title').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelectorAll('.menu-title').forEach(title => {
                title.classList.remove('active'); // Usuwamy klasę 'active' ze wszystkich tytułów
            });
            item.classList.add('active'); // Dodajemy klasę 'active' do klikniętego tytułu
        });
    });

    // Obsługa menu bocznego
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", function () {
            sidebar.classList.toggle("open");
        });
    }
});
