document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('.content');
    var navLinks = document.querySelectorAll('.nav-tabs a');
   

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

    // Получаем элементы, с которыми будем работать
    const header = document.querySelector('.sticky-header');
    const headerOffset = header.offsetTop;

    // Отслеживаем событие скролла окна
    window.addEventListener('scroll', function() {
        if (window.scrollY > headerOffset) {
            header.classList.add('sticky-header'); // Добавляем класс при прилипании
        } else {
            header.classList.remove('sticky-header'); // Удаляем класс при возврате
        }
    });

    
});