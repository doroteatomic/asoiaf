document.addEventListener('DOMContentLoaded', function() {
    const scrollBox = document.getElementById('sigilScrollBox');
    const scrollBtnLeft = document.querySelector('.scroll-btn-left');
    const scrollBtnRight = document.querySelector('.scroll-btn-right');

    scrollBtnLeft.addEventListener('click', function() {
        scrollBox.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    scrollBtnRight.addEventListener('click', function() {
        scrollBox.scrollBy({
            left: 200, 
            behavior: 'smooth'
        });
    });
});
