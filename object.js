//! creating object
//METHOD 1: Object Literal
const literalObj = {};
//* examples
const student = {
    name: 'Abrar',
    address: 'Taiz, YEMEN',
    greet: function() {
      console.log('Hello, my name is ' + this.name);
    }
};

//? shorthand
const name = 'Abrar', address = 'Taiz, YEMEN';
const studentShort = {
    name,
    address,
    greet() {
      console.log('Hello, my name is ' + this.name);
    }
};

//METHOD 2: `new` keyword with built-in constructor
const obj = new Object(); // === const obj = {} === const obj = Object.create(Object.prototype);
const arr = new Array();  // === const arr = [];
const date = new Date();



//METHOD 3: `new` keyword with user-defined constructor
//METHOD 3.1: constructor function
function Person () {
    this.name = 'Abrar'
}
const person = new Person();


//! Extended Object Literal Syntax
//METHOD 1: dot notation
const plainObj = {};
plainObj.a = 'first letter';
console.log(plainObj);

//METHOD 3: array notation
//METHOD 3.1: literal string
plainObj['a b'] = "ab letters"

//METHOD 3.1: computed Property Names: Expression Evaluated at run time then converted to string
const PROPERTY_NAME = 10 + 20;
function computePropertyName() { return "p" + 2; }
let computed = {};
computed[PROPERTY_NAME] = 1; // computed['30']
computed[computePropertyName()] = 2;

//! Access properties
//METHOD 1: dot notation, (.) operator --> Simple Identifier
console.log(o.x)
//METHOD 2: array notation, [] square brackets
console.log(computed[PROPERTY_NAME])

//TODO: what is the output?
let a ={}, b= {key:'b'}, c= {key:'c'};
a[b]=10;
a[c]=200;
console.log(a[b]);

