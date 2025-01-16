abstract class Animal {
  constructor(protected name: string) {}

  abstract makeSound(): void; // Abstract method (must be implemented by subclasses)

  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} meows.`);
  }
}

// Usage
const animals: Animal[] = [new Dog("Buddy"), new Cat("Whiskers")];
animals.forEach((animal) => {
  animal.move();
  animal.makeSound();
});
// Output:
// Buddy is moving.
// Buddy barks.
// Whiskers is moving.
// Whiskers meows.
