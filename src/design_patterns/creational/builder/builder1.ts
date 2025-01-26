// Product
class Computer {
  private cpu: string = "";
  private gpu: string = "";
  private ram: string = "";
  private storage: string = "";
  private powerSupply: string = "";

  public setCPU(cpu: string): void {
    this.cpu = cpu;
  }

  public setGPU(gpu: string): void {
    this.gpu = gpu;
  }

  public setRAM(ram: string): void {
    this.ram = ram;
  }

  public setStorage(storage: string): void {
    this.storage = storage;
  }

  public setPowerSupply(powerSupply: string): void {
    this.powerSupply = powerSupply;
  }

  public describe(): string {
    return `Computer with:
        - CPU: ${this.cpu}
        - GPU: ${this.gpu}
        - RAM: ${this.ram}
        - Storage: ${this.storage}
        - Power Supply: ${this.powerSupply}`;
  }
}

// Builder Interface
interface ComputerBuilder {
  reset(): this;
  setCPU(cpu: string): this;
  setGPU(gpu: string): this;
  setRAM(ram: string): this;
  setStorage(storage: string): this;
  setPowerSupply(powerSupply: string): this;
  build(): Computer;
}

// Concrete Builder
class CustomComputerBuilder implements ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  public reset(): this {
    this.computer = new Computer();
    return this;
  }

  public setCPU(cpu: string): this {
    this.computer.setCPU(cpu);
    return this;
  }

  public setGPU(gpu: string): this {
    this.computer.setGPU(gpu);
    return this;
  }

  public setRAM(ram: string): this {
    this.computer.setRAM(ram);
    return this;
  }

  public setStorage(storage: string): this {
    this.computer.setStorage(storage);
    return this;
  }

  public setPowerSupply(powerSupply: string): this {
    this.computer.setPowerSupply(powerSupply);
    return this;
  }

  public build(): Computer {
    const result = this.computer;
    this.reset();
    return result;
  }
}

// Director (optional)
class ComputerDirector {
  private builder: ComputerBuilder;

  constructor(builder: ComputerBuilder) {
    this.builder = builder;
  }

  public buildGamingPC(): Computer {
    return this.builder
      .reset()
      .setCPU("Intel Core i9")
      .setGPU("NVIDIA RTX 4090")
      .setRAM("32GB DDR5")
      .setStorage("2TB NVMe SSD")
      .setPowerSupply("850W Gold")
      .build();
  }

  public buildOfficePC(): Computer {
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
