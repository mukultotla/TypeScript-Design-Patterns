interface MessageService {
  sendMessage(message: string): string;
}

export class EmailService implements MessageService {
  sendMessage(message: string): string {
    return `Sending email: ${message}`;
  }
}

export class NotificationService {
  private messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService; // Dependency Injection
  }

  notify(message: string): string {
    return this.messageService.sendMessage(message);
  }
}

const emailService = new EmailService();
const notifyService = new NotificationService(emailService);

console.log(notifyService.notify("Mukul"));
