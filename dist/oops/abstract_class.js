"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving.`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} meows.`);
    }
}
// Usage
const animals = [new Dog("Buddy"), new Cat("Whiskers")];
animals.forEach((animal) => {
    animal.move();
    animal.makeSound();
});
// Output:
// Buddy is moving.
// Buddy barks.
// Whiskers is moving.
// Whiskers meows.
