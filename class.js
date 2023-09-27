class Animal {
    constructor(){
        this.name = 'Elephant';
    }
    sleep() {}
    eat() {}
    talk() {}
}
const animalObj = new Animal();
console.log(animalObj.name); //Elephant

//! Inheritance
class Person {
    constructor(name, age, hairColor){
        this.name = name;
        this.age = age;
        this.sayName = () => `My name is ${this.name}`;
    }
}
class Teacher extends Person {
    constructor(name, subject, salary){
        super(name)
        this.subject = subject;
        this.salary = salary;
    }
    doGrading(){
        console.log(`You get an A+ in ${this.subject}`);
    }
}
const myTeacher = new Teacher('Mark', 'history', '6000$');
console.log(myTeacher.subject); // history
myTeacher.sayName(); // My name is Mark