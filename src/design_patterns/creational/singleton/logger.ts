export class Singleton {
  private static _instance: Singleton;
  private readonly timestamp: number;

  private constructor() {
    this.timestamp = Date.now();
  }

  public static getInstance(): Singleton {
    if (!this._instance) {
      this._instance = new Singleton();
    }
    return this._instance;
  }
  public logMessage(message: string): void {
    console.log(`Time: ${this.timestamp}. Message: ${message}`);
  }
}

const instance1 = Singleton.getInstance();
instance1.logMessage("First message");

const instance2 = Singleton.getInstance();
instance1.logMessage("Second message");

// Verify both instances are the same
console.log(instance1 === instance2);
