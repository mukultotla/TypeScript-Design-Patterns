"use strict";
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
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach((shape) => console.log(shape.area()));
