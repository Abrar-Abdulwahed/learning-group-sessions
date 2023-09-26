//! creating object
//METHOD 1: Object Literal
const literalObj = {};

//METHOD 2: `new` keyword with built-in constructor
const obj = new Object(); // === const obj = {};
const arr = new Array();  // === const arr = [];
const date = new Date();

//METHOD 3: `new` keyword with user-defined constructor
//METHOD 3.1: constructor function
function Person () {
    this.name = 'Abrar'
}
const person = new Person();


//! Extended Object Literal Syntax
//METHOD 1:
literalObj.a = 'first letter';
literalObj['a b'] = 'second letter';
console.log(literalObj);

//METHOD 2: Shorthand Properties
let x = 1, y = 2;
let o = { x, y };

//METHOD 3: Computed Property Names: Expression Evaluated then converted to string
const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }
let computed = {};
computed[PROPERTY_NAME] = 1;
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

