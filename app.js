class Person {
    //creates instance of Person with properties name, age, and numBooksRead
    constructor(name, age, numBooksRead) {
        this.name = name;
        this.age = age;
        this.numBooksRead = numBooksRead;
    }

    //increments numBooksRead by 1
    readNewBook() {
        this.numBooksRead++;
    }
}

class Electrician extends Person {
    //creates instance of Electrician with Person properites plus certifications, an array of strings
    constructor(name, age, numBooksRead, certifications) {
        super(name, age, numBooksRead);
        this.certifications = certifications;
    }
}

class Teenager extends Person {
    //creates instance of Teenager with Person properties plus isHungry, a boolean value
    constructor(name, age, numBooksRead, isHungry = true) {
        super(name, age, numBooksRead);
        this.isHungry = isHungry;
    }

    //feeds the teenager.  If they are hungry, changes isHungry to false, if they are not hungry, prints message to console.
    eat() {
        if(this.isHungry) {
            this.isHungry = false;
        } else {
            console.log('Oh no I think I ate too much')
        }
    }
}

//below we will test our classes by instantiating them, calling each method, and verifying output

//create instances of each class
let person = new Person('Euthyphro', 35, 0);
let electrician = new Electrician('Zeus', 28, 3, ['Lightning', 'Polymorphism']);
let teen = new Teenager('Persius', 16, 5, true);

//log each instance
console.log(person);
console.log(electrician);
console.log(teen);

//call the method from the parent class to ensure it works as expected
person.readNewBook();
electrician.readNewBook();
teen.readNewBook();

//log the objects after calling .readNewBook() to verify it worked as intended
console.log(person);
console.log(electrician);
console.log(teen);

//call .eat()
teen.eat();

//check that .eat() when isHungry == true works as expected
console.log(teen);

//check that .eat() when isHungry == false works as expected
teen.eat();


//Object Oriented Programming Exercise:


// ----------- Parent class----------
class Vehicle {
// writing constructor creates instances of Vehicle
    constructor(name, mode, types){
        this._name = name;       
        this._mode = mode;         
        this._types = types;    
        this._numOfWheels = 0;
    }
    get name() {
        return this._name;
    }
    get mode() {
        return this._mode;
    }
    get types() {
        return this._types;
    }
    get numOfWheels(){
        return this._numOfWheels;
    }
    set numOfWheels(wheels){
        this._numOfWheels = wheels;
    }
        //add new items to the array
    addModes(newMode){
       this._mode.push(newMode);
    }
}

//--------first child class----------
class Car extends Vehicle {
    constructor(name, mode, types, model){
        super(name, mode, types);
        this._model = model;            //one additional property
    }
    get model() {
        return this._model;
    }
    //add new items to the array
    addModel(newModel){                        // one additional method
        this._model.push(newModel);
        
    }
}

//-----------second child class---------
class bike extends Vehicle{
    constructor(name, mode, types, yearOfInvent, numOfBikes){
        super(name, mode, types);
        this._yearOfInvent = yearOfInvent; 
        this._numOfBikes = numOfBikes;       
    }
    get yearOfInvent(){
        return this._yearOfInvent;
    }
    get numOfBikes(){
        return this._numOfBikes;
    }
    //check if the year of invent , the bike is new or old
    year(){                                    
        if(this._yearOfInvent === 2022){
            return true;
        } else{
            console.log(`This ${this._yearOfInvent} is old`);
        }
    }
    //increments by 1 
    totalBikes(){                               
        this._numOfBikes++;  
    }
}

//instances of parent Class

let motorVehicle = new Vehicle('cars', ['road'], 'sedan', 4 );
console.log(motorVehicle.name);
//call function to add into array
motorVehicle.addModes('air');
motorVehicle.numOfWheels = 4;
console.log(motorVehicle.numOfWheels);
//log instance of parent class 
console.log(motorVehicle);

//instances of first Child class 

let newCar = new Car('Lamborghini', ['road'], 'SUV', ['2022']);
console.log(newCar.name);
// call functions
newCar.addModel('2021');
//log instance of first child class 
console.log(newCar);

//instances of second Child class 

let listBikes = new bike('Raven', ['road'], ['cruise'], '2020', 0);
console.log(listBikes.name);
//check that .year() is old or new 
listBikes.year();
listBikes.totalBikes();
//log instance of second child class 
console.log(listBikes);