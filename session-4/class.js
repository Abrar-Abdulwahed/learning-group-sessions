//METHOD 1: class declaration
class Rectangle {
    constructor(){
        this.numberOfSides = 4;
        this.shape = "closed";
    }
    area() {}
    perimeter() {}
}
const rect = new Rectangle();
console.log(rect.shape); //closed

//METHOD 2: class expression
//unnamed expression
const Rectangle = class {
    //...
};

//named expression
let Shape = class Rectangle {
    //...
};

//! static
class Rectangle {
    constructor(side) {
        this.side = side;
    }
    computePerimeter() {
        return 4 * this.side;
    }
    static greeting() {
        console.log('Welcome Everybody!')
    }
    static comparePerimeter(square1, square2) {
        if (rect1.side > rect2.side) {
            console.log("First rectangle has more perimeter");
        } else if (rect1.side < rect2.side) {
            console.log("Second rectangle has more perimeter");
        } else {
            console.log("Both have same perimeter");
        }
    }
}
const rect1 = new Rectangle(3);
const rect2 = new Rectangle(7);
Square.greeting();
Square.comparePerimeter(rect1, rect2);