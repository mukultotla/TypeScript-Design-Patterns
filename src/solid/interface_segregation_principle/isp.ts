// Better Example - Following ISP
interface Walker {
  walk(): void;
}

interface Swimmer {
  swim(): void;
}

interface Flyer {
  fly(): void;
}

interface BasicNeeds {
  eat(): void;
  sleep(): void;
}

// Now we can implement only what we need
export class ImprovedDog implements Walker, Swimmer, BasicNeeds {
  walk() {
    console.log("Dog is walking");
  }

  swim() {
    console.log("Dog is swimming");
  }

  eat() {
    console.log("Dog is eating");
  }

  sleep() {
    console.log("Dog is sleeping");
  }
}

export class Bird implements Walker, Flyer, BasicNeeds {
  walk() {
    console.log("Bird is walking");
  }

  fly() {
    console.log("Bird is flying");
  }

  eat() {
    console.log("Bird is eating");
  }

  sleep() {
    console.log("Bird is sleeping");
  }
}
