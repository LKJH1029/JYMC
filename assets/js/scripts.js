function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado exitosamente');
});

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('open');
});

const navLinksItems = navLinks.querySelectorAll('a');
navLinksItems.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('open');
    });
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('open');
    }
});
