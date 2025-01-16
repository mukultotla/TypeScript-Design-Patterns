export class AreaCalculator {
  calculateArea(shape: any): number {
    if (shape.type === "circle") {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.type === "rectangle") {
      return shape.width * shape.height;
    }
    // Adding a new shape requires modifying this method
    throw new Error("Shape not supported");
  }
}

const calculator = new AreaCalculator();
console.log(calculator.calculateArea({ type: "circle", radius: 5 })); // 78.54
console.log(
  calculator.calculateArea({ type: "rectangle", width: 4, height: 6 })
); // 24
