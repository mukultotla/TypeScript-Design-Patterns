// Define a Shape interface
interface Shape {
  calculateArea(): number;
}

// Implement Circle class
export class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Implement Rectangle class
export class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  calculateArea(): number {
    return this.width * this.height;
  }
}

// AreaCalculator does not need to change when new shapes are added
class AreaCalculator {
  calculate(shape: Shape): number {
    return shape.calculateArea();
  }
}

// Usage
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const area = new AreaCalculator();
console.log(area.calculate(circle)); // 78.54
console.log(area.calculate(rectangle)); // 24
