let heroName = "Cleudosvaldo"
let XP = 11000
let classificacao

if (XP < 0){
    classificacao = "Vilão"
} else if(XP === 0){
    classificacao = "Cidadão"
} else if (XP < 1000){
    classificacao = "Ferro"
} else if(XP < 2000){
    classificacao = "Bronze"
} else if(XP < 5000){
    classificacao = "Prata"
} else if(XP < 7000){
    classificacao = "Ouro"
} else if(XP < 8000){
    classificacao = "Platina"
} else if(XP < 9000){
    classificacao = "Diamante"
} else if(XP < 10000){
    classificacao = "Ascendente"
} else if(XP < 11000){
    classificacao = "Radiante"
} else {
    classificacao = "Imortal"
}

switch (classificacao){
    case "Vilão":
        console.log("Seu herói, chamado", heroName, "não parece ser um herói")
        console.log("Parece um", classificacao + ", com seus", XP, " de Pontos de Experiência")
        break
    
    case "Cidadão":
        console.log("Seu herói, chamado", heroName + ", precisa de mais Pontos de Experpência")
        console.log("Tem certeza que", heroName, "não é apenas mais um", classificacao + ", com seus", XP, "de Pontos de Experiência?")
        break

    default:
        console.log("Seu herói, chamado", heroName, "é um herói promissor")
        console.log(heroName, "está com", XP, "de Pontos de Experiência! Atualmente com o rank:", classificacao)
}