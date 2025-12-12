// actions.js - Lógica do jogo da memória

// Use only the game board container, not header/footer Bootstrap containers
const container = document.querySelector('#game-board');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

// Array com os nomes das imagens dos dispositivos de acessibilidade
const movies = [
    'card1.jpg',  // Leitor de tela
    'card2.jpg',  // Bengala
    'card3.jpg',  // Cadeira motorizada
    'card4.jpg',  // Braille
    'card5.jpg',  // Rampa
    'card6.jpg',  // Prótese
    'card7.jpg',  // Teclado adaptado
    'card8.jpg',  // Libras
    'card9.jpg',  // CAA
    'card10.jpg'  // Ampliador
];

// Função para criar elementos HTML
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let card01 = '';
let card02 = '';

// Verificar se o jogo terminou
const ChecarEndGame = () => {
    const cardsDesabilitados = document.querySelectorAll('.desabilitarCard');

    if (cardsDesabilitados.length === movies.length * 2) {
        setTimeout(() => {
            clearInterval(this.loop);
            const playerName = localStorage.getItem('player') || 'Jogador';
            const tempo = timer.innerHTML;
            alert(`Parabéns, ${playerName}! Você completou o jogo em ${tempo} segundos!`);
        }, 1200);
    }
}

// Checar se as cartas são iguais
const checarCards = () => {
    const movie01 = card01.getAttribute('datamovie');
    const movie02 = card02.getAttribute('datamovie');

    if (movie01 === movie02) {
        card01.firstChild.classList.add('desabilitarCard');
        card02.firstChild.classList.add('desabilitarCard');

        card01 = '';
        card02 = '';

        ChecarEndGame();
    } else {
        setTimeout(() => {
            card01.classList.remove('revelarCarta');
            card02.classList.remove('revelarCarta');

            card01 = '';
            card02 = '';
        }, 1000);
    }
}

// Revelar carta ao clicar
const revelarCarta = ({ target }) => {
    if (target.parentNode.className.includes('revelarCarta')) {
        return;
    }

    if (card01 === '') {
        target.parentNode.classList.add('revelarCarta');
        card01 = target.parentNode;
    } else if (card02 === '') {
        target.parentNode.classList.add('revelarCarta');
        card02 = target.parentNode;
        checarCards();
    }
}

// Criar carta
const criarCarta = (movie) => {
    const card = createElement('div', 'cards');
    const front = createElement('div', 'face cardFront');
    const back = createElement('div', 'face cardBack');

    front.style.backgroundImage = `url(assets/images/cards/${movie})`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revelarCarta);
    card.setAttribute('datamovie', movie);

    return card;
}

// Carregar o jogo
const carregarGame = () => {
    const duplicateMovies = [...movies, ...movies];
    const listaRandomica = duplicateMovies.sort(() => Math.random() - 0.5);

    listaRandomica.forEach((movie) => {
        const card = criarCarta(movie);
        container.appendChild(card);
    });
}

// Iniciar temporizador
const startTimer = () => {
    this.loop = setInterval(() => {
        const tempoAtual = Number(timer.innerHTML);
        timer.innerHTML = tempoAtual + 1;
    }, 1000);
}

// Carregar ao iniciar a página
window.onload = () => {
    const playerName = localStorage.getItem('player');

    // Se não houver nome, redirecionar para a tela de login
    if (!playerName) {
        window.location.href = 'start.html';
        return;
    }

    spanPlayer.innerHTML = playerName;
    startTimer();
    carregarGame();
}

// Reiniciar o jogo
const resetGame = () => {
    container.innerHTML = '';
    clearInterval(this.loop);
    timer.innerHTML = '0';
    startTimer();
    carregarGame();
};
