// login.js - Validação e redirecionamento para o jogo

const input = document.querySelector('.nomeJogador');
const button = document.querySelector('.botaoLogin');
const form = document.querySelector('.loginForm');

// Validar input e habilitar botão
const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

// Submeter formulário
const handleSubmit = (event) => {
    event.preventDefault();
    
    const playerName = input.value.trim();
    
    if (playerName.length > 2) {
        // Salvar nome no localStorage
        localStorage.setItem('player', playerName);
        
        // Redirecionar para o jogo
        window.location.href = 'game.html';
    } else {
        alert('Por favor, digite um nome com pelo menos 3 caracteres.');
    }
}

// Event listeners
input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

// Foco automático no input
window.addEventListener('load', () => {
    input.focus();
});
