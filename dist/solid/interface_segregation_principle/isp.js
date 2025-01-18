"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = exports.ImprovedDog = void 0;
// Now we can implement only what we need
class ImprovedDog {
    walk() {
        console.log("Dog is walking");
    }
    swim() {
        console.log("Dog is swimming");
    }
    eat() {
        console.log("Dog is eating");
    }
    sleep() {
        console.log("Dog is sleeping");
    }
}
exports.ImprovedDog = ImprovedDog;
class Bird {
    walk() {
        console.log("Bird is walking");
    }
    fly() {
        console.log("Bird is flying");
    }
    eat() {
        console.log("Bird is eating");
    }
    sleep() {
        console.log("Bird is sleeping");
    }
}
exports.Bird = Bird;
