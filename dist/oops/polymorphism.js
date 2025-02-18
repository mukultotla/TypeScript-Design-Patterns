"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = void 0;
class Calculator {
    add(a, b) {
        return a + b;
    }
}
const calc = new Calculator();
console.log(calc.add(5, 10)); // 15
console.log(calc.add("Hello, ", "World!")); // "Hello, World!"
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
exports.Circle = Circle;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
exports.Rectangle = Rectangle;
const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((shape) => console.log(shape.area()));
