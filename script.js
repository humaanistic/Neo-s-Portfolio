const galleryImages =
    document.querySelectorAll(".gallery-grid img");

const lightbox =
    document.querySelector(".lightbox");

const lightboxImage =
    document.querySelector(".lightbox-image");

const caption =
    document.querySelector(".lightbox-caption");

const closeBtn =
    document.querySelector(".close-btn");

const prevBtn =
    document.querySelector(".prev-btn");

const nextBtn =
    document.querySelector(".next-btn");


let currentIndex = 0;


/* ===== OPEN LIGHTBOX ===== */

galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.classList.remove("hidden");

    });

});


/* ===== SHOW IMAGE ===== */

function showImage() {

    const currentImage =
        galleryImages[currentIndex];

    lightboxImage.src =
        currentImage.src;

    lightboxImage.alt =
        currentImage.alt;

    caption.textContent =
        currentImage.dataset.caption;

}
function showImage() {

    const currentImage =
        galleryImages[currentIndex];

    lightboxImage.src =
        currentImage.src;

    lightboxImage.alt =
        currentImage.alt;

    caption.textContent =
        currentImage.dataset.caption;


    /* trigger animation */

    lightboxImage.classList.add("animate");


    setTimeout(() => {

        lightboxImage.classList.remove("animate");

    }, 200);

}


/* ===== CLOSE ===== */

closeBtn.addEventListener("click", () => {

    lightbox.classList.add("hidden");

});


/* ===== NEXT ===== */

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    showImage();

});


/* ===== PREVIOUS ===== */

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex =
            galleryImages.length - 1;
    }

    showImage();

});