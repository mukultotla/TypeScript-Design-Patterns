"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
    // Implement the clone method
    clone() {
        return new Car(this.model, this.color);
    }
    displayDetails() {
        console.log(`Car Model: ${this.model}, Color: ${this.color}`);
    }
    changeColor(color) {
        this.color = color;
    }
}
exports.Car = Car;
const car1 = new Car("Sedan", "Red");
car1.displayDetails(); // Car Model: Sedan, Color: Red
// Clone the car1 object
const car2 = car1.clone(); // object1.clone
car2.changeColor("Blue"); // Modify the clone without affecting the original
car2.displayDetails(); // Car Model: Sedan, Color: Blue
// Original remains unchanged
car1.displayDetails(); // Car Model: Sedan, Color: Red
