interface Vehicle {
  manufacture(): void;
  getType(): string;
}

class Car implements Vehicle {
  manufacture(): void {
    console.log("Manufacturing a car");
  }

  getType(): string {
    return "Car";
  }
}

class Motorcycle implements Vehicle {
  manufacture(): void {
    console.log("Manufacturing a motorcycle");
  }

  getType(): string {
    return "Motorcycle";
  }
}

class Truck implements Vehicle {
  manufacture(): void {
    console.log("Manufacturing a truck");
  }

  getType(): string {
    return "Truck";
  }
}

class VehicleFactory {
  createVehicle(type: string): Vehicle {
    switch (type.toLowerCase()) {
      case "car":
        return new Car();
      case "motorcycle":
        return new Motorcycle();
      case "truck":
        return new Truck();
      default:
        throw new Error(`Vehicle type ${type} is not supported`);
    }
  }
}

class FactoryDemo {
  private factory: VehicleFactory;

  constructor() {
    this.factory = new VehicleFactory();
  }

  run() {
    try {
      // Create different types of vehicles
      const car = this.factory.createVehicle("car");
      const motorcycle = this.factory.createVehicle("motorcycle");
      const truck = this.factory.createVehicle("truck");

      // Manufacture each vehicle
      car.manufacture();
      motorcycle.manufacture();
      truck.manufacture();

      // Optional: Log details
      console.log(
        `Vehicles created: ${car.getType()}, ${motorcycle.getType()}, ${truck.getType()}`
      );
    } catch (error) {
      console.error("Error in factory demonstration:", error);
    }
  }
}

const demoInstance = new FactoryDemo();
demoInstance.run();
