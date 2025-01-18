export class Bird {
  fly(): string {
    return "I can fly";
  }
}

// This violates LSP because not all birds can fly
export class Penguin extends Bird {
  fly(): string {
    throw new Error("I can't fly!"); // Breaks the expected behavior
  }
}

// This function assumes all birds can fly
function makeBirdFly(bird: Bird) {
  return bird.fly();
}

// This will throw an error
const bird = new Bird();
const penguin = new Penguin();
console.log(makeBirdFly(bird)); // "I can fly"
console.log(makeBirdFly(penguin)); // Error!
