"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankProcessor = exports.StripeProcessor = exports.PaypalProcessor = void 0;
class PaypalProcessor {
    constructor(amount) {
        this._amount = amount;
    }
    get amount() {
        return this._amount;
    }
    processPayment() {
        console.log(`Processing $${this.amount} via Paypal`);
    }
}
exports.PaypalProcessor = PaypalProcessor;
class StripeProcessor {
    constructor(amount) {
        this._amount = amount;
    }
    get amount() {
        return this._amount;
    }
    processPayment() {
        console.log(`Processing $${this.amount} via Stripe`);
    }
}
exports.StripeProcessor = StripeProcessor;
class BankProcessor {
    constructor(amount) {
        this._amount = amount;
    }
    get amount() {
        return this._amount;
    }
    processPayment() {
        console.log(`Processing $${this.amount} via Bank`);
    }
}
exports.BankProcessor = BankProcessor;
class PaymentProcessorFactory {
    createProcessor(type, amount) {
        switch (type.toLowerCase()) {
            case "paypal":
                return new PaypalProcessor(amount);
            case "stripe":
                return new StripeProcessor(amount);
            case "bank":
                return new BankProcessor(amount);
            default:
                throw new Error("Invalid payment type!");
        }
    }
}
class PaymentProcessorFactoryDemo {
    constructor() {
        this.factory = new PaymentProcessorFactory();
    }
    run() {
        try {
            const stripe = this.factory.createProcessor("stripe", 200);
            const paypal = this.factory.createProcessor("paypal", 100);
            const bank = this.factory.createProcessor("bank", 500);
            stripe.processPayment();
            paypal.processPayment();
            bank.processPayment();
        }
        catch (error) {
            console.log(error);
        }
    }
}
const demo = new PaymentProcessorFactoryDemo();
demo.run();
