console.log("Hello, World!")

let rock = 0
let paper = 0
let scissors = 0

function getComputerChoice(CRps) {

    let CRpsNum = Math.random()

    if (CRpsNum >= 0 && CRpsNum <= 0.39) {
        alert("COMPUTADOR JOGOU: Papel")
        return 1
    } else if (CRpsNum >= 0.4 && CRpsNum <= 0.69) {
        alert("COMPUTADOR JOGOU: Tesoura")
        return 2
    } else {
        alert("COMPUTADOR JOGOU: Pedra")
        return 3
    }

}
function getHumanChoice(PRps) {
    alert("FAÇA SUA JOGADA")
    PRps = prompt("PAPEL[1] TESOURA[2] PEDRA[3]: ");
    PRps = parseInt(PRps)

    if (PRps === 1) {
        alert("VOCÊ JOGOU: Papel")
        return PRps
    }
    else if (PRps === 2) {
        alert("VOCÊ JOGOU: Tesoura")
        return PRps
    }
    else if (PRps === 3) {
        alert("VOCÊ JOGOU: Pedra")
        return PRps
    }
    else {
        return 999
    }
}

let humanScore = 0
let computerScore = 0
let rodada = 0

function playRound(humanChoice, computerChoice) {

    alert(`O JOGO COMEÇOU! RODADA ${rodada}`)

    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()

    if (humanChoice == 999) {
        alert("ERRO")
        return
    }

    if (humanChoice == 3 && computerChoice == 1) {humanChoice = 0}
    if (humanChoice == 1 && computerChoice == 3) {computerChoice = 0}


    if (humanChoice > computerChoice) {
        alert("VOCÊ VENCEU ESSA RODADA!")
        humanScore += 1
        rodada += 1
    } else if (computerChoice == humanChoice) {
        alert("EMPATE NA RODADA!")
        rodada += 1
    } else if (computerChoice > humanChoice) {
        alert("O COMPUTADOR VENCEU ESSA RODADA!")
        computerScore += 1
        rodada += 1
    }
}

function playGame() {
    for (rodada = 1; rodada <= 5; rodada + 1) {playRound()}

    if (humanScore > computerScore) {
        alert("VOCÊ VENCEU A MÁQUINA!")
        alert(`SUA PONTUAÇÃO: ${humanScore}`)
        alert(`PONTUAÇÃO DA MÁQUINA: ${computerScore}`)
    }
    else if (computerScore == humanScore) {
        alert("EMPATOU!")
        alert(`SUA PONTUAÇÃO: ${humanScore}`)
        alert(`PONTUAÇÃO DA MÁQUINA: ${computerScore}`)
    }
    else {
        alert("VOCÊ FOI MASSACRADO!")
        alert(`PONTUAÇÃO DA MÁQUINA: ${computerScore}`)
        alert(`SUA PONTUAÇÃO: ${humanScore}`)
    }
}

playGame()