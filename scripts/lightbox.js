document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.clickable-map, .enlargeable');  
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    images.forEach(image => {
        image.addEventListener('click', function () {
            lightbox.style.display = 'flex';  
            lightboxImg.src = image.src;     
        });
    });

    lightbox.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });
});
