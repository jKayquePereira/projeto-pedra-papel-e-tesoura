console.log("Hello, World!")

let rock = 0
let paper = 0
let scissors = 0

function getComputerChoice() {

    let Crps = Math.random()

    if (Crps >= 0 && Crps <= 0.39) {
        return console.log("Pedra")
    }
    else if (Crps >= 0.4 && Crps <= 0.69) {
        return console.log("Papel")
    }
    else {
        return console.log("Tesoura")
    }

}
