// Before SRP
export class ReportGenerator {
  generateReport(): void {
    const data = this.fetchData();
    const processedData = this.processData(data);
    console.log(this.formatReport(processedData));
  }

  private fetchData(): string {
    return "Raw Data";
  }

  private processData(data: string): string {
    return `Processed ${data}`;
  }

  private formatReport(data: string): string {
    return `Formatted Report: ${data}`;
  }
}

const reportGenerator = new ReportGenerator();
reportGenerator.generateReport();
