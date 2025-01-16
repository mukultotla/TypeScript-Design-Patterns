interface Shape {
  area(): number;
}

class Calculator {
  add(a: number, b: number): number; // Overload 1
  add(a: string, b: string): string; // Overload 2
  add(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 10)); // 15
console.log(calc.add("Hello, ", "World!")); // "Hello, World!"

export class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach((shape) => console.log(shape.area()));
