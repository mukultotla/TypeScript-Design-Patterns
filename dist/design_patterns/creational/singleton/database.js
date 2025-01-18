"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
class DatabaseConnection {
    constructor() {
        this.isConnected = false;
        this.port = 8080;
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new DatabaseConnection();
        }
        return this._instance;
    }
    connectToDB() {
        if (!this.isConnected) {
            this.isConnected = true;
            console.log(`Connected to DB at port: ${this.port}`);
        }
        else {
            throw new Error("Already connected to DB");
        }
    }
    disconnectToDB() {
        if (this.isConnected) {
            this.isConnected = false;
            console.log(`Disconnected from DB`);
        }
        else {
            throw new Error("Already disconnected from DB");
        }
    }
    execQuery(query) {
        if (this.isConnected) {
            console.log("Executed query -> ", query);
        }
        else {
            console.log("Not connected to DB");
        }
    }
}
exports.DatabaseConnection = DatabaseConnection;
const instance1 = DatabaseConnection.getInstance();
instance1.connectToDB();
instance1.execQuery("SELECT * FROM TABLE");
const instance2 = DatabaseConnection.getInstance();
instance2.connectToDB();
instance2.disconnectToDB();
console.log(instance1 === instance2);
