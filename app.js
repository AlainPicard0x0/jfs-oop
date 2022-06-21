
class sneakerHead {
    constructor(name, age, numSneakersOwned) {
        this.name = name;
        this.age = age;
        this.numSneakersOwned = numSneakersOwned;
    }

    
    boughtNewPair() {
        this.numSneakersOwned++;
    }
}

class hipster extends sneakerHead {
constructor(name, age, numSneakersOwned, fittedCaps) {
    super(name, age, numSneakersOwned);
    this.fittedCaps = fittedCaps;
}
}


class hoochieDaddy extends sneakerHead {
    
    constructor(name, age, numSneakersOwned, isHot = true) {
        super(name, age, numSneakersOwned);
        this.isHot = isHot;
    }

    
    wear() {
        if(this.isHot) {
            this.isHot = false;
        } else {
            console.log('i dont need to wear shorts today')
        }
    }
}


//below we will test our classes by instantiating them, calling each method, and verifying output

let sneakerHead = new SneakerHead('Amber', 32, 30);
let hipster = new Hipster('Briscoe', 28, 70, ['Houston Rockets', 'Houston Astros']);
let hoochieDaddy = new HoochieDaddy('Myko', 34, 5, true);


console.log(sneakerHead);
console.log(hipster);
console.log(hoochieDaddy);


sneakerHead.boughtNewPair();
hipster.boughtNewPair();
hoochieDaddy.boughtNewPair();


console.log(sneakerHead);
console.log(hipster);
console.log(hoochieDaddy);


hoochieDaddy.wear();


console.log(hoochieDaddy);


hoochieDaddy.wear();