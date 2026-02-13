console.log("script.js loaded successfully... party time!");

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
            img.src = `images/people/caleb_and_katie_${paddedNumber}.jpg`;
            img.style.opacity = 1;
            // console.log(img.src);
        }, 500);

    }, 2000);

});
