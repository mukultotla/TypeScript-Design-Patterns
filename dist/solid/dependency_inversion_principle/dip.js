"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = exports.EmailService = void 0;
class EmailService {
    sendMessage(message) {
        return `Sending email: ${message}`;
    }
}
exports.EmailService = EmailService;
class NotificationService {
    constructor(messageService) {
        this.messageService = messageService; // Dependency Injection
    }
    notify(message) {
        return this.messageService.sendMessage(message);
    }
}
exports.NotificationService = NotificationService;
const emailService = new EmailService();
const notifyService = new NotificationService(emailService);
console.log(notifyService.notify("Mukul"));
