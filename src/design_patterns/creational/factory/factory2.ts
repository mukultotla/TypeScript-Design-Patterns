interface PaymentProcessor {
  amount: number;
  processPayment(): void;
}

export class PaypalProcessor implements PaymentProcessor {
  private _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }
  get amount(): number {
    return this._amount;
  }

  processPayment(): void {
    console.log(`Processing $${this.amount} via Paypal`);
  }
}

export class StripeProcessor implements PaymentProcessor {
  private _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }
  get amount(): number {
    return this._amount;
  }

  processPayment(): void {
    console.log(`Processing $${this.amount} via Stripe`);
  }
}

export class BankProcessor implements PaymentProcessor {
  private _amount: number;
  constructor(amount: number) {
    this._amount = amount;
  }
  get amount(): number {
    return this._amount;
  }

  processPayment(): void {
    console.log(`Processing $${this.amount} via Bank`);
  }
}

class PaymentProcessorFactory {
  createProcessor(type: string, amount: number): PaymentProcessor {
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
  private factory: PaymentProcessorFactory;
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
    } catch (error) {
      console.log(error);
    }
  }
}

const demo = new PaymentProcessorFactoryDemo();
demo.run();
