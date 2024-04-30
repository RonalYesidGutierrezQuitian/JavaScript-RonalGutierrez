// Variables globales
let deckId = null;
let playerCards = [];
let playerTotal = 0;

//
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
    background: linear-gradient(to bottom, #e51d2e , #fff);
    min-height: 100vh;
  }
  
  main {
    display: inline-block;
    margin-top: 2%;
    padding: 15px;
    position: relative;
  }

  
  .buttonCard {
    width: 50%;
    padding: 4%;
    border: 2px solid #000;
    border-radius: 5px;
    font-size: clamp(8px, 5vw, 1rem);
    font-weight: 600;
    color: white;
    background-color: #972a27;
    box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;
  }
  
  .buttonCard:active {
    box-shadow: inset -4px 4px 0 #222;
    font-size: 0.9rem;
  }
`;

let styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);

// Obtener una nueva baraja al cargar la página
window.onload = function() {
    getNewDeck();
}

// Función para obtener una nueva baraja
function getNewDeck() {
    fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
    .then(response => response.json())
    .then(data => {
        deckId = data.deck_id;
        drawCard(2);
    })
    .catch(error => console.log(error));
}

// Función para dibujar una cantidad específica de cartas del mazo
function drawCard(count) {
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`)
    .then(response => response.json())
    .then(data => {
        data.cards.forEach(card => {
            playerCards.push(card);
            updatePlayerTotal(card);
        });
        updateUI();
    })
    .catch(error => console.log(error));
}

// Función para actualizar el total del jugador
function updatePlayerTotal(card) {
    let value = card.value;
    if (['KING', 'QUEEN', 'JACK'].includes(value)) {
        value = 10;
    } else if (value === 'ACE') {
        value = 11; // Consideraremos Ases como 11 por defecto
    } else {
        value = parseInt(value);
    }
    playerTotal += value;
    // Manejo de Ases si el total excede 21
    if (playerTotal > 21 && playerCards.some(card => card.value === 'ACE')) {
        playerTotal -= 10; // Cambiar el valor del As de 11 a 1
    }
}

// Función para mostrar las cartas del jugador y el total en la interfaz de usuario
function updateUI() {
    const gameContainer = document.querySelector('.gameContainer');
    const imageCard = document.querySelector('.imageCard');
    const countTotal = document.querySelector('.countTotal');
    
    // Mostrar la última carta del jugador
    const lastCard = playerCards[playerCards.length - 1];
    imageCard.src = lastCard.image;
    imageCard.alt = `${lastCard.value} of ${lastCard.suit}`;

    // Mostrar el total del jugador
    countTotal.textContent = `Total: ${playerTotal}`;

    // Actualizar botones según las reglas del juego
    const botones = document.querySelector('.botones');
    botones.innerHTML = ''; // Limpiar botones existentes
    if (playerTotal < 21) {
        const buttonCard = document.createElement('button');
        buttonCard.textContent = 'Pedir Carta';
        buttonCard.classList.add('buttonCard');
        buttonCard.addEventListener('click', () => {
            drawCard(1);
        });
        botones.appendChild(buttonCard);
    }
}

// Función para reiniciar el juego
function resetGame() {
    deckId = null;
    playerCards = [];
    playerTotal = 0;
    getNewDeck();
}