
import React from "react";
import { SafeResults, formatIndianRupee, formatPercentage } from "../../utils/calculatorLogic";
import { IndianRupee } from "lucide-react";

interface CalculatorResultsProps {
  results: SafeResults | null;
}

const CalculatorResults: React.FC<CalculatorResultsProps> = ({ results }) => {
  if (!results) return null;

  const resultItems = [
    {
      label: "Shares Issued",
      value: results.sharesIssued.toLocaleString("en-IN", { maximumFractionDigits: 0 }),
      icon: <IndianRupee className="h-4 w-4 text-primary" />,
    },
    {
      label: "Effective Price per Share",
      value: formatIndianRupee(results.effectivePrice),
      icon: <IndianRupee className="h-4 w-4 text-primary" />,
    },
    {
      label: "Effective Valuation",
      value: formatIndianRupee(results.effectiveValuation),
      icon: <IndianRupee className="h-4 w-4 text-primary" />,
    },
    {
      label: "Ownership Percentage",
      value: formatPercentage(results.ownershipPercentage),
      icon: <div className="h-4 w-4 bg-primary rounded-full flex-shrink-0"></div>,
    },
    {
      label: "Founder Dilution",
      value: formatPercentage(results.dilution),
      icon: <div className="h-4 w-4 bg-secondary rounded-full flex-shrink-0"></div>,
    },
    {
      label: "Effective Discount from Next Round",
      value: formatPercentage(results.effectiveDiscount),
      icon: <div className="h-4 w-4 bg-accent rounded-full flex-shrink-0"></div>,
    },
    {
      label: "Next Round Ownership",
      value: formatPercentage(results.nextRoundOwnership),
      icon: <div className="h-4 w-4 bg-softBlue rounded-full flex-shrink-0"></div>,
    },
    {
      label: "Potential Money Multiple",
      value: results.moneyMultiple.toFixed(2) + "x",
      icon: <IndianRupee className="h-4 w-4 text-primary" />,
    },
  ];

  return (
    <div className="calculator-card">
      <h2 className="text-xl font-semibold text-primary mb-6">SAFE Note Conversion Results</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {resultItems.map((item, index) => (
          <div key={index} className="result-item">
            <div className="flex items-center">
              <span className="mr-2">{item.icon}</span>
              <span className="result-label">{item.label}</span>
            </div>
            <span className="result-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculatorResults;
