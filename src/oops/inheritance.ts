class Vehicle {
  constructor(public brand: string) {}

  start(): void {
    console.log(`${this.brand} vehicle is starting...`);
  }
}

class Car extends Vehicle {
  constructor(brand: string, public model: string) {
    super(brand); // Call the parent class constructor
  }

  start(): void {
    super.start(); // Call the parent class method
    console.log(`${this.brand} ${this.model} car is now running.`);
  }
}

// Usage
const car = new Car("Toyota", "Corolla");
car.start();
