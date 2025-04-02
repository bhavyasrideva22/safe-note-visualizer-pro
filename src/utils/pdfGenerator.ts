
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { SafeInputs, SafeResults, formatIndianRupee, formatPercentage } from "./calculatorLogic";

declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

const generatePDF = (inputs: SafeInputs, results: SafeResults): void => {
  // Create a new document
  const doc = new jsPDF();
  
  // Add logo and title
  doc.setFillColor(36, 94, 79); // #245e4f
  doc.rect(0, 0, 210, 30, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.text("SAFE Note Calculator Results", 105, 15, { align: "center" });
  
  doc.setFontSize(12);
  doc.text("SAFECalc by safecalc.in", 105, 23, { align: "center" });
  
  // Add date and time
  const currentDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(10);
  doc.text(`Generated on: ${currentDate}`, 20, 40);
  
  // Add input section
  doc.setTextColor(36, 94, 79);
  doc.setFontSize(16);
  doc.text("Input Parameters", 20, 50);
  
  // Add input table
  doc.autoTable({
    startY: 55,
    head: [["Parameter", "Value"]],
    body: [
      ["Investment Amount", formatIndianRupee(inputs.investmentAmount)],
      ["Current Valuation", formatIndianRupee(inputs.valuation)],
      ["Valuation Cap", formatIndianRupee(inputs.valuationCap)],
      ["Discount Rate", formatPercentage(inputs.discountRate)],
      ["Next Round Raise Amount", formatIndianRupee(inputs.nextRoundRaiseAmount)],
      ["Next Round Pre-Money Valuation", formatIndianRupee(inputs.nextRoundValuationPreMoney)],
      ["Founder Shares", inputs.founderShares.toLocaleString()],
      ["Option Pool", formatPercentage(inputs.optionPool)],
    ],
    theme: "grid",
    headStyles: {
      fillColor: [36, 94, 79],
      textColor: [255, 255, 255],
      fontStyle: "bold",
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240],
    },
    margin: { left: 20, right: 20 },
  });
  
  // Add results section
  const finalY = (doc as any).lastAutoTable.finalY + 15;
  doc.setTextColor(36, 94, 79);
  doc.setFontSize(16);
  doc.text("SAFE Note Conversion Results", 20, finalY);
  
  // Add results table
  doc.autoTable({
    startY: finalY + 5,
    head: [["Metric", "Value"]],
    body: [
      ["Shares Issued", results.sharesIssued.toLocaleString("en-IN", { maximumFractionDigits: 0 })],
      ["Effective Price per Share", formatIndianRupee(results.effectivePrice)],
      ["Effective Valuation", formatIndianRupee(results.effectiveValuation)],
      ["Ownership Percentage", formatPercentage(results.ownershipPercentage)],
      ["Founder Dilution", formatPercentage(results.dilution)],
      ["Effective Discount from Next Round", formatPercentage(results.effectiveDiscount)],
      ["Next Round Ownership", formatPercentage(results.nextRoundOwnership)],
      ["Potential Money Multiple", results.moneyMultiple.toFixed(2) + "x"],
    ],
    theme: "grid",
    headStyles: {
      fillColor: [36, 94, 79],
      textColor: [255, 255, 255],
      fontStyle: "bold",
    },
    alternateRowStyles: {
      fillColor: [240, 240, 240],
    },
    margin: { left: 20, right: 20 },
  });
  
  // Add footer
  const pageCount = doc.getNumberOfPages();
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.text(
      "This document is for informational purposes only and does not constitute financial advice.",
      105,
      285,
      { align: "center" }
    );
    doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: "center" });
  }
  
  // Save the PDF
  doc.save("SAFE_Note_Calculation_Results.pdf");
};

export default generatePDF;
