document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.content');
    const navLinks = document.querySelectorAll('.nav-tabs a');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => section.style.display = 'none');
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Show the home section by default
    document.getElementById('home').style.display = 'block';

    window.addEventListener('scroll', function() {
        if (window.scrollY > header.offsetHeight) {
            nav.classList.add('fixed-nav');
        } else {
            nav.classList.remove('fixed-nav');
        }
    });
});