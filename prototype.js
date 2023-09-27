//! Base prototype
Object.prototype

//! Prototype Chain
const arr = [];

//! Prototype Chain - Prototypal Inheritance
// show in session delegating on inherited prototype vs hasOwnProperty

//METHOD 1: Object.create(prototype)
const rectanglePrototype1 = {
    numberOfSides: 4,
    shape: "closed",
    area() {},
    perimeter() {}
}
const square1 = Object.create(rectanglePrototype1);
square1.sideLength = "40cm"

//METHOD 2: obj.__proto__ = prototype
const rectanglePrototype2 = {
    numberOfSides: 4,
    shape: "closed",
    area() {},
    perimeter() {}
}
const square2 = {
    sideLength: "40cm",
    __proto__: rectanglePrototype2
};

//METHOD 3: (with constructor function): rectangle is square's prototype
function Rectangle() {
    this.numberOfSides = 4;
    this.shape = "closed";
}
Rectangle.prototype.area = function(){};
Rectangle.prototype.perimeter = function(){};
const square3 = new Rectangle();


//! WHY prototype?
//? WHY NOT following:
function Rectangle() {
    this.numberOfSides = 4;
    this.shape = "closed";
    this.area = function(){},
    this.perimeter = function(){}
}
const square4 = new Rectangle();

//! Difference between prototype & __proto__
console.log(Rectangle.prototype); // object
console.log(square3.prototype); // undefined
console.log(square3.__proto__); // object

console.log(typeof Rectangle.prototype); // object
console.log(typeof square3.__proto__); // object

console.log(Rectangle.prototype === square3.__proto__ ); // true