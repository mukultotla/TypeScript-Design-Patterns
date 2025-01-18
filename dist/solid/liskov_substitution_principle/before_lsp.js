"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Penguin = exports.Bird = void 0;
class Bird {
    fly() {
        return "I can fly";
    }
}
exports.Bird = Bird;
// This violates LSP because not all birds can fly
class Penguin extends Bird {
    fly() {
        throw new Error("I can't fly!"); // Breaks the expected behavior
    }
}
exports.Penguin = Penguin;
// This function assumes all birds can fly
function makeBirdFly(bird) {
    return bird.fly();
}
// This will throw an error
const bird = new Bird();
const penguin = new Penguin();
console.log(makeBirdFly(bird)); // "I can fly"
console.log(makeBirdFly(penguin)); // Error!
