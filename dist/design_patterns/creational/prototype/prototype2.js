"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentPrototype = void 0;
// Concrete prototype
class DocumentPrototype {
    constructor(content, format, author) {
        this.content = content;
        this.format = format;
        this.metadata = {
            author: author,
            created: new Date()
        };
    }
    clone() {
        const cloned = new DocumentPrototype(this.content, this.format, this.metadata.author);
        return cloned;
    }
    modify(newContent) {
        this.content = newContent;
    }
    getDetails() {
        return `${this.content} (${this.format}) by ${this.metadata.author}`;
    }
}
exports.DocumentPrototype = DocumentPrototype;
// Usage example
const originalDoc = new DocumentPrototype("Hello World", "txt", "John");
const clonedDoc = originalDoc.clone();
clonedDoc.modify("Hello Universe");
console.log(originalDoc.getDetails());
console.log(clonedDoc.getDetails());
