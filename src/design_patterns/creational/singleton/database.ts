export class DatabaseConnection {
  private static _instance: DatabaseConnection;
  private isConnected: boolean;
  private port: number;

  private constructor() {
    this.isConnected = false;
    this.port = 8080;
  }
  public static getInstance(): DatabaseConnection {
    if (!this._instance) {
      this._instance = new DatabaseConnection();
    }
    return this._instance;
  }

  public connectToDB(): void {
    if (!this.isConnected) {
      this.isConnected = true;
      console.log(`Connected to DB at port: ${this.port}`);
    } else {
      throw new Error("Already connected to DB");
    }
  }
  public disconnectToDB(): void {
    if (this.isConnected) {
      this.isConnected = false;
      console.log(`Disconnected from DB`);
    } else {
      throw new Error("Already disconnected from DB");
    }
  }
  public execQuery(query: string): void {
    if (this.isConnected) {
      console.log("Executed query -> ", query);
    } else {
      console.log("Not connected to DB");
    }
  }
}

const instance1 = DatabaseConnection.getInstance();
instance1.connectToDB();
instance1.execQuery("SELECT * FROM TABLE");
const instance2 = DatabaseConnection.getInstance();
// instance2.connectToDB(); // throws Error
instance2.disconnectToDB();
console.log(instance1 === instance2);
