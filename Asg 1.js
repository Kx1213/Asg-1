// Example script for interactivity
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website is loaded and ready!");
});

// JavaScript function to change photos
// Ensuring the image size remains 400x400
image.width = 400;
image.height = 400;
function changePhoto(image) { 
    const images = ["images.jpg", "Imok.jpg", "Davidtao.jpg", "500x500.jpg", "The_great_leap.jpg"];
    const currentIndex = images.indexOf(image.src.split('/').pop());
    const nextIndex = (currentIndex + 1) % images.length;
    image.src = images[nextIndex];
}
