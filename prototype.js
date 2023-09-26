//! Base prototype
Object.prototype

//! Prototype Chain - Prototypal Inheritance
// Example 1:
const arr = [];

// Example 2(with object Literal): pet is fish's prototype
const pet = { activity: "walking"}
const fish = Object.create(pet); // create empty object and inherit pet prototype
console.log(fish); // do in session the delegating on inherited prototype
fish.activity = "swimming"
console.log(fish)

// Example 3(with constructor function): pet is fish's prototype
function Pet() {
    this.activity = 'walking';
}
const fish = new Pet();
console.log(fish); // do in session the delegating on inherited prototype
fish.activity = "swimming"
console.log(fish)


//! WHY prototype?
function Animal(){
    this.name = 'Elephant'

    // Behaviors
    this.sleep = function(){};
    this.eat = function(){};
    this.talk = function(){};
}

// more performant way
function Animal(){
    this.name = 'Elephant'
}

// Shared Behaviors as prototypes
Animal.prototype.sleep = function(){};
Animal.prototype.eat = function(){};
Animal.prototype.talk = function(){};

//! Difference between prototype & __proto__
function Pet() {
    this.activity = 'walking';
}
const fish = new Pet();

console.log(Pet.prototype); // object
console.log(fish.prototype); // undefined
console.log(fish.__proto__); // object

console.log(typeof Pet.prototype); // object
console.log(typeof fish.__proto__); // object

console.log(Pet.prototype === fish.__proto__ ); // true