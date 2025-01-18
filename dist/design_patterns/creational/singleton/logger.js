"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() {
        this.timestamp = Date.now();
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new Singleton();
        }
        return this._instance;
    }
    logMessage(message) {
        console.log(`Time: ${this.timestamp}. Message: ${message}`);
    }
}
exports.Singleton = Singleton;
const instance1 = Singleton.getInstance();
instance1.logMessage("First message");
const instance2 = Singleton.getInstance();
instance1.logMessage("Second message");
// Verify both instances are the same
console.log(instance1 === instance2);
