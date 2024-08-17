window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Inicializa el mapa de Google Maps
function initMap() {
    // Ubicación de la barbería en San Antonio, TX
    var location = { lat: 29.398928, lng: -98.520516 };

    // Crea el mapa centrado en la ubicación
    var map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 14,
        center: location
    });

    // Crea un marcador en la ubicación
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

    // Manejo de errores para el mapa
    google.maps.event.addListenerOnce(map, 'idle', function(){
        if (!map.getCenter()) {
            alert('El mapa no se pudo cargar correctamente.');
        }
    });
}

// Opcional: función para añadir múltiples marcadores (si se necesita en el futuro)
function addMarker(location, map) {
    return new google.maps.Marker({
        position: location,
        map: map
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navMenu = document.querySelector('.nav-menu');
    var navLinks = document.querySelectorAll('.nav-menu a');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) { // Solo en dispositivos móviles
                navMenu.classList.remove('active');
            }
        });
    });
});


