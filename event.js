

window.addEventListener('load', function() {
    var navbar = document.querySelector('.conteiner-nav');
    var changeColorHeight = 250; // Altura en píxeles antes de que cambie el color del navbar

    if (window.scrollY > changeColorHeight) {
        navbar.style.backgroundColor = '#7FA9AF'; // Cambia el color de fondo al hacer scroll
    } else {
        navbar.style.backgroundColor = 'transparent'; // Restaura el fondo transparente al volver arriba
    }

    // Almacena el color en localStorage
    localStorage.setItem('navbarColor', navbar.style.backgroundColor);
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.conteiner-nav');
    var changeColorHeight = 250; // Altura en píxeles antes de que cambie el color del navbar

    if (window.scrollY > changeColorHeight) {
        navbar.style.backgroundColor = '#7FA9AF'; // Cambia el color de fondo al hacer scroll
        localStorage.setItem('navbarColor', '#7FA9AF'); // Almacena el color en localStorage
    } else {
        navbar.style.backgroundColor = 'transparent'; // Restaura el fondo transparente al volver arriba
        localStorage.setItem('navbarColor', 'transparent'); // Almacena el color en localStorage
    }
});

const menuIcon = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Cuando se hace clic en el ícono del menú, se alterna la clase 'show'
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
});