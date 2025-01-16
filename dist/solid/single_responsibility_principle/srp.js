"use strict";
class DataFetcher {
    fetchData() {
        return "Raw Data";
    }
}
class DataProcessor {
    processData(data) {
        return `Processed ${data}`;
    }
}
class ReportFormatter {
    formatReport(data) {
        return `Formatted Report: ${data}`;
    }
}
class ReportGenerator {
    constructor(dataFetcher, dataProcessor, reportFormatter) {
        this.dataFetcher = dataFetcher;
        this.dataProcessor = dataProcessor;
        this.reportFormatter = reportFormatter;
    }
    generateReport() {
        const data = this.dataFetcher.fetchData();
        const processedData = this.dataProcessor.processData(data);
        console.log(this.reportFormatter.formatReport(processedData));
    }
}
// Usage
const reportGenerator = new ReportGenerator(new DataFetcher(), new DataProcessor(), new ReportFormatter());
reportGenerator.generateReport();
