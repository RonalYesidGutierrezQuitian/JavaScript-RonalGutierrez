document.addEventListener("DOMContentLoaded", function() {

// Seleccionar elementos del DOM
const characterName = document.querySelector('#cname');
const posterActor = document.querySelector('.hero__image');
const form = document.querySelector('.form');
const input = document.querySelector('#inputSearch');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
const buttonSearch = document.querySelector('.btn-search'); // Nuevo botón de búsqueda

// Variable para almacenar el número de búsqueda actual
let searchHero = 1;

// Función para realizar la solicitud AJAX y obtener los datos
const fetchHero = (hero) => {
    // Utilizando la API fetch para realizar la solicitud al servidor
    fetch(`https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json`)
        .then(response => {
            // Verificar si la respuesta del servidor fue exitosa
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Convertir la respuesta a formato JSON y devolverla
            return response.json();
        })
        .then(data => {
            // Actualizar la interfaz de usuario con los datos del Pokémon
            heroNameDisplay.innerHTML = data.name;
            actorNameDisplay.innerHTML = data.secretIdentity;
            ageActor.innerHTML = data.age;
            geolocationDisplay.innerHTML = data.homeTown;
            posterDisplay.innerHTML = data.powers;
            locationDateDisplay.innerHTML = data.formed;
            //producerDisplay.innerHTML = data.name;
            input.value = ''; // Limpiar el campo de búsqueda
            searchHero = data.id; // Actualizar el número de búsqueda
        })
        .catch(error => {
            // Manejar cualquier error que ocurra durante la solicitud
            characterName.innerHTML = 'Not found :c'; // Mostrar mensaje de error
            heroNumber.innerHTML = '';
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Función para manejar el evento de envío del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    fetchHero(input.value.toLowerCase()); // Realizar la solicitud del heroe ingresado
});

// Funciones para manejar los eventos de los botones de navegación
buttonPrev.addEventListener('click', () => {
    if (searchHero > 1) {
        searchHero -= 1;
        fetchHero(searchHero);
    }
});

buttonNext.addEventListener('click', () => {
    searchHero += 1;
    fetchHero(searchHero); // Obtener el heroe siguiente
});

// Función para manejar el evento de clic en el botón de búsqueda
buttonSearch.addEventListener('click', () => {
    const searchTerm = input.value.toLowerCase().trim(); // Obtener el término de búsqueda
    if (searchTerm !== '') {
        fetchHero(searchTerm); // Realizar la solicitud del Heroe ingresado
    }
});

// Cargar los datos del Pokémon inicial al cargar la página
fetchHero(searchHero);
});