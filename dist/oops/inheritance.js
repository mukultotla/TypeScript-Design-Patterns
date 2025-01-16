"use strict";
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} vehicle is starting...`);
    }
}
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand); // Call the parent class constructor
        this.model = model;
    }
    start() {
        super.start(); // Call the parent class method
        console.log(`${this.brand} ${this.model} car is now running.`);
    }
}
// Usage
const car = new Car("Toyota", "Corolla");
car.start();
