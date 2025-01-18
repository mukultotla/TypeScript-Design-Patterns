interface IAnimal {
  move(): string;
}

class FlyingBird implements IAnimal {
  move(): string {
    return "I can fly";
  }
}

class FlightlessBird implements IAnimal {
  move(): string {
    return "I can walk";
  }
}

// Now both classes fulfill the contract without breaking expectations
function makeAnimalMove(animal: IAnimal) {
  return animal.move();
}

const sparrow = new FlyingBird();
const ostrich = new FlightlessBird();

console.log(makeAnimalMove(sparrow)); // "I can fly"
console.log(makeAnimalMove(ostrich)); // "I can walk"
