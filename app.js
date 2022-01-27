class Dog {
    //creates instance of  with Dog name, age, and Breed
    constructor(name, age, breed) {
        this._name = name;
        this._age = age;
        this._breed = breed;
    }

    //
    calculateDogAge() {
       let dogYears = 7 * this._age;
      return dogYears;
    }
}

class DogOne extends Dog {
    //creates instance of DogOne with Dog properites plus an extra property color
    constructor(name, age, breed, color) {
        super(name, age, breed);
        this._color = color;
    }
}

class DogTwo  extends Dog {
    //creates instance of DogTwo with Dog properties plus isHungry, a boolean value
    constructor(name, age, breed, isHungry = true) {
        super(name, age, breed);
        this._isHungry = isHungry;
    }

    //feeds the DogTwo.  If he is hungry, changes isHungry to false, if he is not hungry, prints message to console.
    eat() {
        if(this._isHungry) {
            this._isHungry = false;
        } else {
            console.log('I am not hungry!')
        }
    }
}

//below we will test our classes by instantiating them, calling each method, and verifying output

//create instances of each class
let dog = new Dog('Milo', 35, 'Pug');
let dog1 = new DogOne('Luna', 28, 'Poodle', 'Black');
let dog2 = new DogTwo('Daisy', 16, 'Bulldog', true);


//log each instance
console.log(dog);
console.log(dog1);
console.log(dog2);

//call the method from the parent class to ensure it works as expected
console.log(`The human year of  ${dog._name} is: ${dog.calculateDogAge()}`);
console.log(`The human year of  ${dog1._name} is: ${dog1.calculateDogAge()}`);
console.log(`The human year of  ${dog2._name} is: ${dog2.calculateDogAge()}`);

//log the objects after calling .calculateDogAge() to verify it worked as intended
console.log(dog);
console.log(dog1);
console.log(dog2);

//call .eat()
dog2.eat();

//check that .eat() when isHungry == true works as expected
console.log(dog2);

//check that .eat() when isHungry == false works as expected
dog2.eat();