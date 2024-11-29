let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

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

function playRound(playerSelection) {
    const computerChoice = getComputerChoice();
    let result = "";

    const playerChoiceText = ["Papel", "Tesoura", "Pedra"][playerSelection - 1];
    const computerChoiceText = ["Papel", "Tesoura", "Pedra"][computerChoice - 1];

    if (playerSelection === computerChoice) {
        result = `Empate! Você e o computador jogaram ${playerChoiceText}.`;
    } else if (
        (playerSelection === 1 && computerChoice === 3) ||
        (playerSelection === 2 && computerChoice === 1) ||
        (playerSelection === 3 && computerChoice === 2)
    ) {
        humanScore++;
        result = `Você venceu! ${playerChoiceText} vence ${computerChoiceText}.`;
    } else {
        computerScore++;
        result = `Você perdeu! ${computerChoiceText} vence ${playerChoiceText}.`;
    }

    updateScore();
    updateResult(result);

    if (humanScore === winningScore) {
        endGame("Você venceu o jogo!");
    } else if (computerScore === winningScore) {
        endGame("O computador venceu o jogo!");
    }
}

function updateScore() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Placar: Jogador ${humanScore} x ${computerScore} Computador`;
}

function updateResult(result) {
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = result;
}

function endGame(message) {
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = message;

    document.querySelectorAll("button").forEach(button => button.disabled = true);
}

function setupGame() {
    document.getElementById("pedra").addEventListener("click", () => playRound(3));
    document.getElementById("papel").addEventListener("click", () => playRound(1));
    document.getElementById("tesoura").addEventListener("click", () => playRound(2));
}

setupGame();
