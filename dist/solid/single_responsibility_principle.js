"use strict";
// Before SRP
class ReportGenerator {
    generateReport() {
        const data = this.fetchData();
        const processedData = this.processData(data);
        console.log(this.formatReport(processedData));
    }
    fetchData() {
        return "Raw Data";
    }
    processData(data) {
        return `Processed ${data}`;
    }
    formatReport(data) {
        return `Formatted Report: ${data}`;
    }
}
const reportGenerator = new ReportGenerator();
reportGenerator.generateReport();
