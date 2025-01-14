"use strict";
class BankAccount {
    constructor(initialBalance) {
        this._balance = initialBalance;
    }
    // Getter to get balance of the bank account
    get balance() {
        return this._balance;
    }
    // Method Deposit Money
    deposit(amount) {
        if (amount < 0) {
            console.log("Invalid deposit amount");
            return;
        }
        this._balance += amount;
    }
    // Method to Withdraw Money
    withdraw(amount) {
        if (amount < 0) {
            console.log("Invalid withdrawl amount");
            return;
        }
        if (this._balance - amount >= 0) {
            this._balance -= amount;
        }
        else {
            console.log("Insufficient balance");
            return;
        }
    }
}
let myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log("Current balance -> ", myAccount.balance);
