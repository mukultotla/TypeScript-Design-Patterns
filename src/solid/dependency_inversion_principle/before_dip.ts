export class EmailService {
  sendEmail(message: string): string {
    return `Sending email: ${message}`;
  }
}

export class NotificationService {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService(); // Direct dependency on EmailService
  }

  notify(message: string): string {
    return this.emailService.sendEmail(message);
  }
}

const notifyService = new NotificationService();
console.log(notifyService.notify("Mukul"));
