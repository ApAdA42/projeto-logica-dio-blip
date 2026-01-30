//Segundo desafio 

function saldoVitorias(wins, losses){
    let result = wins - losses
    return result
}
let wins = 10
let losses = 8

let rank
let result = saldoVitorias(wins, losses)


if (result <= 10) {
    rank = "Ferro"
} else if (result <= 20) {
    rank = "Bronze"
} else if (result <= 50) {
    rank = "Prata"
} else if (result <= 80) {
    rank = "Ouro"
} else if (result <= 90) {
    rank = "Diamante"
} else if (result <= 100) {
    rank = "Lendário"
} else {
    rank = "Imortal"
}

console.log("O herói tem saldo de " + result + " e está no nível de " + rank)