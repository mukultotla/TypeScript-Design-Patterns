"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportGenerator = void 0;
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
exports.ReportGenerator = ReportGenerator;
const reportGenerator = new ReportGenerator();
reportGenerator.generateReport();
