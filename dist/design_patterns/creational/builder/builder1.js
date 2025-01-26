"use strict";
// Product
class Computer {
    constructor() {
        this.cpu = "";
        this.gpu = "";
        this.ram = "";
        this.storage = "";
        this.powerSupply = "";
    }
    setCPU(cpu) {
        this.cpu = cpu;
    }
    setGPU(gpu) {
        this.gpu = gpu;
    }
    setRAM(ram) {
        this.ram = ram;
    }
    setStorage(storage) {
        this.storage = storage;
    }
    setPowerSupply(powerSupply) {
        this.powerSupply = powerSupply;
    }
    describe() {
        return `Computer with:
        - CPU: ${this.cpu}
        - GPU: ${this.gpu}
        - RAM: ${this.ram}
        - Storage: ${this.storage}
        - Power Supply: ${this.powerSupply}`;
    }
}
// Concrete Builder
class CustomComputerBuilder {
    constructor() {
        this.computer = new Computer();
    }
    reset() {
        this.computer = new Computer();
        return this;
    }
    setCPU(cpu) {
        this.computer.setCPU(cpu);
        return this;
    }
    setGPU(gpu) {
        this.computer.setGPU(gpu);
        return this;
    }
    setRAM(ram) {
        this.computer.setRAM(ram);
        return this;
    }
    setStorage(storage) {
        this.computer.setStorage(storage);
        return this;
    }
    setPowerSupply(powerSupply) {
        this.computer.setPowerSupply(powerSupply);
        return this;
    }
    build() {
        const result = this.computer;
        this.reset();
        return result;
    }
}
// Director (optional)
class ComputerDirector {
    constructor(builder) {
        this.builder = builder;
    }
    buildGamingPC() {
        return this.builder
            .reset()
            .setCPU("Intel Core i9")
            .setGPU("NVIDIA RTX 4090")
            .setRAM("32GB DDR5")
            .setStorage("2TB NVMe SSD")
            .setPowerSupply("850W Gold")
            .build();
    }
    buildOfficePC() {
        return this.builder
            .reset()
            .setCPU("Intel Core i5")
            .setGPU("Integrated Graphics")
            .setRAM("16GB DDR4")
            .setStorage("512GB SSD")
            .setPowerSupply("500W Bronze")
            .build();
    }
}
// Usage Example
const builder = new CustomComputerBuilder();
const director = new ComputerDirector(builder);
// Using the director
const gamingPC = director.buildGamingPC();
console.log(gamingPC.describe());
const officePC = director.buildOfficePC();
console.log(officePC.describe());
// Using the builder directly for custom configurations
const customPC = builder
    .setCPU("AMD Ryzen 7")
    .setGPU("AMD Radeon RX 6800")
    .setRAM("16GB DDR4")
    .setStorage("1TB SSD")
    .setPowerSupply("750W Gold")
    .build();
console.log(customPC.describe());
