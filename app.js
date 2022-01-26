class Shape {
    constructor(color, sides, sideLength) {
        this._color = color;
        this._sides = sides;
        this._sideLength = sideLength;
    }
    getPerimeter() {
        return this._sides * this._sideLength;
    }
}

class Cube extends Shape {
    constructor(color, sides, sideLength) {
        super(color, sides, sideLength);
    }
    getVolume() {
        return this._sides * this._sides * this._sides;
    }
    
}

class Prism extends Shape {
    constructor(color, sides, sideLength, height) {
        super(color, sides, sideLength);
        this._height = height;
    }
}

const blueHexagon = new Shape('blue', 6, 4);
const redCube = new Cube('red', 4, 9);
const yellowPentagonalPrism = new Prism('yellow', 5, 2, 10);

console.log(blueHexagon);
console.log(redCube);
console.log(yellowPentagonalPrism);

console.log(blueHexagon.getPerimeter());
console.log(redCube.getPerimeter());
console.log(yellowPentagonalPrism.getPerimeter());
