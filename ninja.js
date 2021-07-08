//Ninja
class Ninja {
    constructor(name, health = 50, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
        return this;
    }

    showStats(){
        console.log("Name: " + this.name + ", Strength: " + this.strength + ", Speed: " + this.speed + ", Health: " + this.health);
        return this;
    }
    
    drinkSake(){
        this.health += 10;
        return this;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


//Super Ninja
class Sensei extends Ninja {
    constructor(ninjaName, health, speed, strength, wisdom) {
        super(ninjaName, 200, 10, 10, wisdom = 10)
        this.wisdom = wisdom;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("You must control your body with your mindddd young ninja!")
    }
}

const superSensei = new Sensei("The Sensei")
superSensei.speakWisdom();
superSensei.showStats();