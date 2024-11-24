const prompt = require("prompt-sync")();

console.log("Hello, World!")

let rock = 0
let paper = 0
let scissors = 0

function getComputerChoice(CRps) {

    let CRpsNum = Math.random()

    if (CRpsNum >= 0 && CRpsNum <= 0.39) {
        console.log("COMPUTADOR JOGOU: Pedra")
        return 3
    } else if (CRpsNum >= 0.4 && CRpsNum <= 0.69) {
        return console.log("COMPUTADOR JOGOU: Papel")
        return 1
    } else {
        console.log("COMPUTADOR JOGOU: Tesoura")
        return 2
    }

}
function getHumanChoice(PRps) {
    PRps = prompt("FAÇA SUA JOGADA Papel[1] Tesoura[2] Pedra[3]: ");
    PRps = parseInt(PRps)

    if (PRps === 1) {
        console.log("VOCÊ JOGOU: Papel")
        return PRps
    }
    else if (PRps === 2) {
        console.log("VOCÊ JOGOU: Tesoura")
        return PRps
    }
    else if (PRps === 3) {
        console.log("VOCÊ JOGOU: Pedra")
        return PRps
    }
    else {
        return PRps = 999
    }
}

let humanScore = 0
let computerScore = 0
let rodada = 0

function playRound(humanChoice, computerChoice) {

    console.log(`O JOGO COMEÇOU! RODADA ${rodada}`)

    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()

    if (humanChoice === 999) {console.log("ERRO")}

    if (humanChoice === 3 && computerChoice === 1) {humanChoice = 0}
    if (humanChoice === 1 && computerChoice === 3) {computerChoice = 0}

    if (humanChoice > computerChoice) {
        console.log("VOCÊ VENCEU ESSA RODADA!")
        humanScore += 1
        rodada += 1
    } else if (computerChoice === humanChoice) {
        console.log("EMPATE")
        rodada += 1
    } else {
        console.log("O COMPUTADOR VENCEU ESSA RODADA!")
        computerScore += 1
        rodada += 1
    }
}

function playGame() {
    for (rodada = 1; rodada <= 5; rodada + 1) {playRound()}

    if (humanScore > computerScore) {
        console.log("VOCÊ VENCEU A MÁQUINA!")
        console.log(`SUA PONTUAÇÃO: ${humanScore}`)
        console.log(`PONTUAÇÃO DA MÁQUINA: ${computerScore}`)
    }
    else if (computerScore > humanScore) {
        console.log("VOCÊ FOI MASSACRADO!")
        console.log(`PONTUAÇÃO DA MÁQUINA: ${computerScore}`)
        console.log(`SUA PONTUAÇÃO: ${humanScore}`)
    }
    else {
        console.log("EMPATOU!")
        console.log(`SUA PONTUAÇÃO: ${humanScore}`)
        console.log(`PONTUAÇÃO DA MÁQUINA: ${computerScore}`)
    }
}

playGame()
