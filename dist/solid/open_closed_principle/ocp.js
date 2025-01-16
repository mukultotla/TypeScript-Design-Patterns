"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = void 0;
// Implement Circle class
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
exports.Circle = Circle;
// Implement Rectangle class
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
exports.Rectangle = Rectangle;
// AreaCalculator does not need to change when new shapes are added
class AreaCalculator {
    calculate(shape) {
        return shape.calculateArea();
    }
}
// Usage
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const area = new AreaCalculator();
console.log(area.calculate(circle)); // 78.54
console.log(area.calculate(rectangle)); // 24
