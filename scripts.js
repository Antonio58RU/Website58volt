document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.content');
    const navLinks = document.querySelectorAll('.nav-tabs a');
    const header = document.querySelector('.sticky-header');
    const headerOffset = header.offsetTop;


    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => section.style.display = 'none');
            document.getElementById(targetId).style.display = 'block';
        });
    });

    document.getElementById('home').style.display = 'block';

    window.addEventListener('scroll', function() {
        if (window.scrollY > headerOffset) {
            header.classList.add('sticky-header'); 
        } else {
            header.classList.remove('sticky-header'); 
        }
    });

    
});