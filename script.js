console.log("script.js loaded successfully... party time!");

// Preload profile images; run immediately with IIFE
(function preloadProfileImages() {
    const images = [
        "images/people/Caleb_001.jpg",
        "images/people/Caleb_002.jpg"
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
})();

document.addEventListener("DOMContentLoaded", function () {
    const img = document.getElementById("about-slideshow");

    // If image element not found, return
    if (!img) {
        return;
    }
    
    const totalImages = 12;
    
    // Preload images to prevent flicker
    for (let i = 1; i <= totalImages; i++) {
        const preloadImage = new Image();
        const paddedNumber = String(i).padStart(3, "0");
        preloadImage.src = `images/people/caleb_and_katie_${paddedNumber}.jpg`;
    }

    // Cycle through images in numeric order
    let currentIndex = 1;
    
    setInterval(() => {
        currentIndex += 1;
        if (currentIndex > totalImages) {
            currentIndex = 1;
        }
        const paddedNumber = String(currentIndex).padStart(3, "0");
        img.style.opacity = 0;

        setTimeout(() => {
            const nextImage = new Image();
            nextImage.src = `images/people/caleb_and_katie_${paddedNumber}.jpg`;

            // decode the next images before switching to it to reduce flicker on mobile
            nextImage.decode().then(() => {
                img.src = nextImage.src;
                img.style.opacity = 1;
                console.log(img.src);
            });
        }, 750);

    }, 3000);

});
