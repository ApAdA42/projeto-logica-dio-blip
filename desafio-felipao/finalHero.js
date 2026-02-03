class hero{
    constructor(nameHero, age, classHero, attackType){
        this.nameHero = nameHero
        this.age = age
        this.classHero = classHero
        this.attackType = attackType
    }

    attack(){
        console.log(`Turno do herói de ${this.age} anos: ${this.nameHero}.`)
        console.log(`Este ${this.classHero} atacou usando ${this.attackType}!`)
    }
}

let nameHero = "Marcelo"
let age = 25
let classHero = "guerreiro"
let atk

switch (classHero){
    case "guerreiro":
        atk = "espada longa"
        break
    case "mago":
        atk = "magia"
        break
    case "monge":
        atk = "artes marciais"
        break
    case "ninja":
        atk = "shurikens"
        break
    case "arqueiro":
        atk = "arco e flecha"
        break
    default:
        atk = "os punhos"
}

const newHero = new hero(nameHero, age, classHero, atk)
newHero.attack()
