class DataFetcher {
  fetchData(): string {
    return "Raw Data";
  }
}

class DataProcessor {
  processData(data: string): string {
    return `Processed ${data}`;
  }
}

class ReportFormatter {
  formatReport(data: string): string {
    return `Formatted Report: ${data}`;
  }
}

class ReportGenerator {
  constructor(
    private dataFetcher: DataFetcher,
    private dataProcessor: DataProcessor,
    private reportFormatter: ReportFormatter
  ) {}

  generateReport(): void {
    const data = this.dataFetcher.fetchData();
    const processedData = this.dataProcessor.processData(data);
    console.log(this.reportFormatter.formatReport(processedData));
  }
}

// Usage
const reportGenerator = new ReportGenerator(
  new DataFetcher(),
  new DataProcessor(),
  new ReportFormatter()
);
reportGenerator.generateReport();
