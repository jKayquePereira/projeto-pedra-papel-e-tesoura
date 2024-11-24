const prompt = require("prompt-sync")();

console.log("Hello, World!")

let rock = 0
let paper = 0
let scissors = 0

function getComputerChoice(CRps) {

    let CRpsNum = Math.random()

    if (CRpsNum >= 0 && CRpsNum <= 0.39) {
        console.log("Pedra")
        return 3
    } else if (CRpsNum >= 0.4 && CRpsNum <= 0.69) {
        return console.log("Papel")
        return 1
    } else {
        console.log("Tesoura")
        return 2
    }

}
function getHumanChoice(PRps) {
    PRps = prompt("FAÇA SUA JOGADA Papel[1] Pedra[2] Tesoura[3]: ");
    PRps = parseInt(PRps)

    if (PRps === 1) {
        console.log("Papel")
        return PRps
    }
    else if (PRps === 2) {
        console.log("Tesoura")
        return PRps
    }
    else if (PRps === 3) {
        console.log("Pedra")
        return PRps
    }
    else {
        return PRps = 999
    }
}

let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()

if (humanChoice === 999) {console.log("ERRO")}

if (humanChoice === 3 && computerChoice === 1) {humanChoice = 0}
if (humanChoice === 1 && computerChoice === 3) {computerChoice = 0}

if (humanChoice > computerChoice) {
    console.log("Voce Venceu")
} else if (computerChoice === humanChoice) {
    console.log("Empate")
} else {
    console.log("PC Venceu")
}

