"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = exports.EmailService = void 0;
class EmailService {
    sendEmail(message) {
        return `Sending email: ${message}`;
    }
}
exports.EmailService = EmailService;
class NotificationService {
    constructor() {
        this.emailService = new EmailService(); // Direct dependency on EmailService
    }
    notify(message) {
        return this.emailService.sendEmail(message);
    }
}
exports.NotificationService = NotificationService;
const notifyService = new NotificationService();
console.log(notifyService.notify("Mukul"));
