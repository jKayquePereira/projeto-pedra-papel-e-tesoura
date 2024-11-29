document.addEventListener("DOMContentLoaded", () => {

    console.log("Hello, World!")

    const buttons = document.querySelector(".buttons")

    function getComputerChoice() {

        let random = Math.random()

        if (random <= 0.33) {
            alert("COMPUTADOR JOGOU: Papel")
            return 1
        } else if (random <= 0.66) {
            alert("COMPUTADOR JOGOU: Tesoura")
            return 2
        } else {
            alert("COMPUTADOR JOGOU: Pedra")
            return 3
        }
    }

    let humanScore = 0
    let computerScore = 0
    let round = 0

    function playRound(humanChoice) {
        computerChoice = getComputerChoice()
        alert(`O JOGO COMEÇOU! RODADA ${round}`)
        //
        // if (humanChoice == 5) {
        //     alert("ERRO")
        //     return
        // }

        if (![1, 2, 3].includes(humanChoice)) {
            alert("ESCOLHA INVÁLIDA")
        }

        if (humanChoice === 3) {
            alert("VOCÊ JOGOU: PEDRA")
        } else if (humanChoice === 2) {
            alert("VOCÊ JOGOU: TESOURA")
        } else {
            alert("VOCÊ JOGOU: PAPEL")
        }

        if (humanChoice === 3 && computerChoice === 1) {
            humanChoice = 0
        }
        if (humanChoice === 1 && computerChoice === 3) {
            computerChoice = 0
        }

        if (humanChoice > computerChoice) {
            alert("VOCÊ VENCEU ESSA RODADA!")
            humanScore++
        } else if (computerChoice == humanChoice) {
            alert("EMPATE NA RODADA!")
        } else {
            alert("O COMPUTADOR VENCEU ESSA RODADA!")
            computerScore++
        }
        round++

        if (humanScore > computerScore) {
            alert("VOCÊ VENCEU A MÁQUINA!")
            alert(`SUA PONTUAÇÃO: ${humanScore}`)
            alert(`PONTUAÇÃO DA MÁQUINA: ${computerScore}`)
        } else if (computerScore == humanScore) {
            alert("EMPATOU!")
            alert(`SUA PONTUAÇÃO: ${humanScore}`)
            alert(`PONTUAÇÃO DA MÁQUINA: ${computerScore}`)
        } else {
            alert("VOCÊ FOI MASSACRADO!")
            alert(`PONTUAÇÃO DA MÁQUINA: ${computerScore}`)
            alert(`SUA PONTUAÇÃO: ${humanScore}`)
        }
    }


    buttons.querySelector("#rock")?.addEventListener("click", () => {
        playRound(3)
    })
    buttons.querySelector("#scissors")?.addEventListener("click", () => {
        playRound(2)
    })
    buttons.querySelector("#paper")?.addEventListener("click", () => {
        playRound(1)
    })


// function playGame() {
//     while (round <= 5) {
//         playRound()
//     }
//
//     if (humanScore > computerScore) {
//         alert("VOCÊ VENCEU A MÁQUINA!")
//         alert(`SUA PONTUAÇÃO: ${humanScore}`)
//         alert(`PONTUAÇÃO DA MÁQUINA: ${computerScore}`)
//     }
//     else if (computerScore == humanScore) {
//         alert("EMPATOU!")
//         alert(`SUA PONTUAÇÃO: ${humanScore}`)
//         alert(`PONTUAÇÃO DA MÁQUINA: ${computerScore}`)
//     }
//     else {
//         alert("VOCÊ FOI MASSACRADO!")
//         alert(`PONTUAÇÃO DA MÁQUINA: ${computerScore}`)
//         alert(`SUA PONTUAÇÃO: ${humanScore}`)
//     }
// }
//

})