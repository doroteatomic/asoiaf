document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade'); 

    const observerOptions = {
        threshold: 0.1, 
    };

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
            } else {
                entry.target.classList.remove('visible'); 
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    fadeElements.forEach(element => observer.observe(element)); 
});
