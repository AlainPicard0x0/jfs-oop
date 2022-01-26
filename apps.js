// 3 classes

//Class class
class Class {
 constructor(name, level, weapon) { 
     this.name = name;
     this.level = level;
     this.weapon = weapon;
 }
    //rolls stats for character
   rollStats() {
    
    const stats = [{hp: 1}, {mp: 1}, {luck: 1}];

    const myStats = stats.map(stat => (Math.floor(Math.random(5) * this.level)));
    console.log(myStats);

 }
}

//Knight class
class Knight extends Class {
    constructor(name, level, weapon, defense) {
        super(name, level, weapon);
        this.defense = defense;

    }

    defenseUp() {
        console.log(this.level);
        const tough = (Math.floor(Math.random() * this.level + this.defense));
        const difference = tough - this.defense;
        this.defense = tough;
        console.log(`You gain an addition ${difference} defense!`);
        return this.defense;
    }
    


}

//Wizard class
class Wizard extends Class {
    constructor(name, level, weapon, magicType) {
        super(name, level, weapon);
        this.magicType = magicType;
    }

    buffWeapon() {
        
        return console.log(`You imbue your ${this.weapon} with the fires of a Phoenix!`);
    }

}

let classes = new Class('Fenrir', 40, 'Petrified Stick');
let knight = new Knight('Gargo', 59, 'Sword', 150);
let wizard = new Wizard('Red Maggus', 150, 'Obsidian Wand', 'Pyro Magus');
// prints out the classes and their attributes
console.log(classes);
console.log(knight);
console.log(wizard);
//rolls random stats for the character
classes.rollStats();
//stores knight.defenseUp() and prints it out
let x = knight.defenseUp();
console.log(knight);

//buffs the wizard's weapon to do more damage
wizard.buffWeapon();

//rolls the knight's stat
knight.rollStats();