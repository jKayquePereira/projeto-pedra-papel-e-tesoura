console.log("Hello, World!")

let rock = 0
let paper = 0
let scissors = 0

function getComputerChoice() {

    let CRps = Math.random()

    if (CRps >= 0 && CRps <= 0.39) {
        return console.log("Pedra")
    }
    else if (CRps >= 0.4 && CRps <= 0.69) {
        return console.log("Papel")
    }
    else {
        return console.log("Tesoura")
    }

}

function getHumanChoice() {
    let PRps = prompt("Escolha um número [1] Papel [2] Pedra [3] Tesoura: ")

    if (PRps === 1) {
        return console.log("Pedra")
    }
    else if (PRps === 2) {
        return console.log("Papel")
    }
    else if (PRps === 3) {
        return console.log("Tesoura")
    }
    else {
        return console.log("Erro")
    }
}

