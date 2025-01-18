"use strict";
class FlyingBird {
    move() {
        return "I can fly";
    }
}
class FlightlessBird {
    move() {
        return "I can walk";
    }
}
// Now both classes fulfill the contract without breaking expectations
function makeAnimalMove(animal) {
    return animal.move();
}
const sparrow = new FlyingBird();
const ostrich = new FlightlessBird();
console.log(makeAnimalMove(sparrow)); // "I can fly"
console.log(makeAnimalMove(ostrich)); // "I can walk"
