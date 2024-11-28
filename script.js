// Exibe uma mensagem inicial no console
console.log("Hello, World!");

let humanScore = 0;
let computerScore = 0;
let rodada = 0;

// Função para gerar a escolha do computador
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

// Função para processar a jogada do jogador
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    console.log(`Você jogou: ${["Papel", "Tesoura", "Pedra"][humanChoice - 1]}`);
    console.log(`Computador jogou: ${["Papel", "Tesoura", "Pedra"][computerChoice - 1]}`);

    if (humanChoice === 3 && computerChoice === 1) humanChoice = 0;
    if (humanChoice === 1 && computerChoice === 3) computerChoice = 0;

    if (humanChoice > computerChoice) {
        console.log("VOCÊ VENCEU ESSA RODADA!");
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("EMPATE NA RODADA!");
    } else {
        console.log("O COMPUTADOR VENCEU ESSA RODADA!");
        computerScore++;
    }

    rodada++;
    console.log(`Placar: Você ${humanScore} x ${computerScore} Computador`);
}

// Adiciona eventos de clique para os botões
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#pedra").addEventListener("click", () => playRound(3));
    document.querySelector("#papel").addEventListener("click", () => playRound(1));
    document.querySelector("#tesoura").addEventListener("click", () => playRound(2));
});
