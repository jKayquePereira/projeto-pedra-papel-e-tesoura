// Variáveis de controle do jogo
let humanScore = 0;
let computerScore = 0;
const winningScore = 5; // O vencedor precisa de 5 pontos para ganhar o jogo

// Função para obter a escolha do computador (aleatória)
function getComputerChoice() {
    const random = Math.random();
    if (random <= 0.33) {
        return 1; // Papel
    } else if (random <= 0.66) {
        return 2; // Tesoura
    } else {
        return 3; // Pedra
    }
}

// Função para determinar o vencedor da rodada
function playRound(playerSelection) {
    const computerChoice = getComputerChoice();
    let result = "";

    // Exibe a escolha do jogador e do computador
    const playerChoiceText = ["Papel", "Tesoura", "Pedra"][playerSelection - 1];
    const computerChoiceText = ["Papel", "Tesoura", "Pedra"][computerChoice - 1];

    // Lógica de comparação entre as escolhas
    if (playerSelection === computerChoice) {
        result = `Empate! Você e o computador jogaram ${playerChoiceText}.`;
    } else if (
        (playerSelection === 1 && computerChoice === 3) || // Papel vence Pedra
        (playerSelection === 2 && computerChoice === 1) || // Tesoura vence Papel
        (playerSelection === 3 && computerChoice === 2)    // Pedra vence Tesoura
    ) {
        humanScore++;
        result = `Você venceu! ${playerChoiceText} vence ${computerChoiceText}.`;
    } else {
        computerScore++;
        result = `Você perdeu! ${computerChoiceText} vence ${playerChoiceText}.`;
    }

    // Atualiza o placar e o resultado no DOM
    updateScore();
    updateResult(result);

    // Verifica se alguém atingiu 5 pontos
    if (humanScore === winningScore) {
        endGame("Você venceu o jogo!");
    } else if (computerScore === winningScore) {
        endGame("O computador venceu o jogo!");
    }
}

// Atualiza o placar na tela
function updateScore() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Placar: Jogador ${humanScore} x ${computerScore} Computador`;
}

// Atualiza o resultado da rodada na tela
function updateResult(result) {
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = result;
}

// Finaliza o jogo
function endGame(message) {
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = message;

    // Desabilita os botões após o fim do jogo
    document.querySelectorAll("button").forEach(button => button.disabled = true);
}

// Função para configurar os botões e adicionar event listeners
function setupGame() {
    document.getElementById("pedra").addEventListener("click", () => playRound(3));
    document.getElementById("papel").addEventListener("click", () => playRound(1));
    document.getElementById("tesoura").addEventListener("click", () => playRound(2));
}

// Inicializa o jogo
setupGame();
