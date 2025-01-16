export interface Shape {
  area(): number;
  perimeter(): number;
}

export class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area(): number {
    return this.width * this.height;
  }
  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(3, 4);

console.log("Area of Circle -> ", circle.area());
console.log("Perimeter of Rectangle -> ", rectangle.perimeter());
