"use strict";
// This class is forced to implement methods it doesn't need
class Dog {
    walk() {
        console.log("Dog is walking");
    }
    swim() {
        console.log("Dog is swimming");
    }
    // Dog shouldn't need to implement fly
    fly() {
        throw new Error("Dogs can't fly!");
    }
    eat() {
        console.log("Dog is eating");
    }
    sleep() {
        console.log("Dog is sleeping");
    }
}
