interface Prototype {
  clone(): Prototype;
}

export class Car implements Prototype {
  private model: string;
  private color: string;

  constructor(model: string, color: string) {
    this.model = model;
    this.color = color;
  }

  // Implement the clone method
  clone(): Prototype {
    return new Car(this.model, this.color);
  }

  displayDetails(): void {
    console.log(`Car Model: ${this.model}, Color: ${this.color}`);
  }

  changeColor(color: string): void {
    this.color = color;
  }
}

const car1 = new Car("Sedan", "Red");
car1.displayDetails(); // Car Model: Sedan, Color: Red

// Clone the car1 object
const car2 = car1.clone() as Car; // object1.clone
car2.changeColor("Blue"); // Modify the clone without affecting the original
car2.displayDetails(); // Car Model: Sedan, Color: Blue

// Original remains unchanged
car1.displayDetails(); // Car Model: Sedan, Color: Red
