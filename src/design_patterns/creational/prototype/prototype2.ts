interface Prototype {
  clone(): Prototype;
}

// Concrete prototype
export class DocumentPrototype implements Prototype {
  private content: string;
  private format: string;
  private metadata: {
    author: string;
  };

  constructor(content: string, format: string, author: string) {
    this.content = content;
    this.format = format;
    this.metadata = {
      author: author,
    };
  }

  clone(): DocumentPrototype {
    const cloned = new DocumentPrototype(
      this.content,
      this.format,
      this.metadata.author
    );
    return cloned;
  }

  modify(newContent: string): void {
    this.content = newContent;
  }

  getDetails(): string {
    return `${this.content} (${this.format}) by ${this.metadata.author}`;
  }
}

// Usage example
const originalDoc = new DocumentPrototype("Hello World", "txt", "John");

const clonedDoc = originalDoc.clone(); // Object.clone
clonedDoc.modify("Hello Universe");

console.log(originalDoc.getDetails());
console.log(clonedDoc.getDetails());
