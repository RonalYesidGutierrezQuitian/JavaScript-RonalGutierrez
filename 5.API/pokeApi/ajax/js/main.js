document.addEventListener("DOMContentLoaded", function() {
  // Estilos CSS
  let styles = `
  @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Oxanium', cursive;
  }
  
  body {
    text-align: center;
    background: linear-gradient(to bottom, #6ab7f5, #fff);
    min-height: 100vh;
  }
  
  main {
    display: inline-block;
    margin-top: 2%;
    padding: 15px;
    position: relative;
  }
  
  .pokedex {
    width: 100%;
    max-width: 425px;
  }
  
  .pokemon__image {
    position: absolute;
    bottom: 55%;
    left: 50%;
    transform: translate(-63%, 20%);
    height: 18%;
  }
  
  .pokemon__data {
    position: absolute;
    font-weight: 600;
    color: #aaa;
    top: 54.5%;
    right: 27%;
    font-size: clamp(8px, 5vw, 25px);
  }
  
  .pokemon__name {
    color: #3a444d;
    text-transform: capitalize;
  }
  
  .form {
    position: absolute;
    width: 65%;
    top: 65%;
    left: 13.5%;
  }
  
  .input__search {
    width: 100%;
    padding: 4%;
    outline: none;
    border: 2px solid #333;
    border-radius: 5px;
    font-weight: 600;
    color: #3a444d;
    font-size: clamp(8px, 5vw, 1rem);
    box-shadow: -3px 4px 0 #888, -5px 7px 0 #333
  }
  
  .buttons {
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: 65%;
    transform: translate(-57%, 0);
    display: flex;
    gap: 20px;
  }
  
  .button {
    width: 50%;
    padding: 4%;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: clamp(8px, 5vw, 1rem);
    font-weight: 600;
    color: white;
    background-color: #444;
    box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;
  }
  
  .button:active {
    box-shadow: inset -4px 4px 0 #222;
    font-size: 0.9rem;
  }
`;

// Crear un elemento style y agregar los estilos
let styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);

// Seleccionar elementos del DOM
const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
const buttonSearch = document.querySelector('.btn-search'); // Nuevo botón de búsqueda

// Variable para almacenar el número de búsqueda actual
let searchPokemon = 1;

// Función para realizar la solicitud AJAX y obtener los datos del Pokémon
const fetchPokemon = (pokemon) => {
    // Utilizando la API fetch para realizar la solicitud al servidor
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
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
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = data.id;
            pokemonImage.style.display = 'block';
            pokemonImage.src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
            input.value = ''; // Limpiar el campo de búsqueda
            searchPokemon = data.id; // Actualizar el número de búsqueda
        })
        .catch(error => {
            // Manejar cualquier error que ocurra durante la solicitud
            pokemonImage.style.display = 'none'; // Ocultar la imagen del Pokémon
            pokemonName.innerHTML = 'Not found :c'; // Mostrar mensaje de error
            pokemonNumber.innerHTML = ''; // Limpiar el número del Pokémon
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Función para manejar el evento de envío del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    fetchPokemon(input.value.toLowerCase()); // Realizar la solicitud del Pokémon ingresado
});

// Funciones para manejar los eventos de los botones de navegación
buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        fetchPokemon(searchPokemon); // Obtener el Pokémon anterior
    }
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    fetchPokemon(searchPokemon); // Obtener el Pokémon siguiente
});

// Función para manejar el evento de clic en el botón de búsqueda
buttonSearch.addEventListener('click', () => {
    const searchTerm = input.value.toLowerCase().trim(); // Obtener el término de búsqueda
    if (searchTerm !== '') {
        fetchPokemon(searchTerm); // Realizar la solicitud del Pokémon ingresado
    }
});

// Cargar los datos del Pokémon inicial al cargar la página
fetchPokemon(searchPokemon);
});
