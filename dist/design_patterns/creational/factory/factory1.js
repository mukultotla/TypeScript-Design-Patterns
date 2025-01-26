"use strict";
class Car {
    manufacture() {
        console.log("Manufacturing a car");
    }
    getType() {
        return "Car";
    }
}
class Motorcycle {
    manufacture() {
        console.log("Manufacturing a motorcycle");
    }
    getType() {
        return "Motorcycle";
    }
}
class Truck {
    manufacture() {
        console.log("Manufacturing a truck");
    }
    getType() {
        return "Truck";
    }
}
class VehicleFactory {
    createVehicle(type) {
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
            console.log(`Vehicles created: ${car.getType()}, ${motorcycle.getType()}, ${truck.getType()}`);
        }
        catch (error) {
            console.error("Error in factory demonstration:", error);
        }
    }
}
const demoInstance = new FactoryDemo();
demoInstance.run();
