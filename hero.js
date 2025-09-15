class Hero{
    #health;

    constructor (name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }

    getHealth(){
        return this.#health;
    }
}

class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} uses power Strike`);
    }
}

class Mage extends Hero{
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
    }
    useAbility(){
        console.log(`${this.name} casts Fireball!`);
    }
}

const warrior = new Warrior("Thorin",100,10);
warrior.useAbility();

const mage = new Mage("Gandalf",80,8,50);
mage.useAbility();