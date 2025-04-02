
import React, { useState } from "react";
import { Download } from "lucide-react";
import CalculatorForm from "./CalculatorForm";
import CalculatorResults from "./CalculatorResults";
import VisualizationChart from "./VisualizationChart";
import EmailForm from "../ui/EmailForm";
import {
  SafeInputs,
  SafeResults,
  calculateSafe,
  getDefaultInputs,
  generateOwnershipChartData,
  generateValuationChartData,
} from "../../utils/calculatorLogic";
import generatePDF from "../../utils/pdfGenerator";
import { useToast } from "@/components/ui/use-toast";

const SafeCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<SafeInputs>(getDefaultInputs());
  const [results, setResults] = useState<SafeResults | null>(null);
  const [ownershipData, setOwnershipData] = useState<any[]>([]);
  const [valuationData, setValuationData] = useState<any[]>([]);
  const { toast } = useToast();

  const handleCalculate = () => {
    try {
      const calculatedResults = calculateSafe(inputs);
      setResults(calculatedResults);
      
      // Generate chart data
      setOwnershipData(generateOwnershipChartData(calculatedResults, inputs));
      setValuationData(generateValuationChartData(calculatedResults, inputs));
      
      // Scroll to results
      setTimeout(() => {
        const resultsSection = document.getElementById("results-section");
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } catch (error) {
      toast({
        title: "Calculation Error",
        description: "There was an error in your inputs. Please check and try again.",
        variant: "destructive",
      });
    }
  };

  const handleDownloadPDF = () => {
    if (!results) return;
    
    try {
      generatePDF(inputs, results);
      toast({
        title: "PDF Generated",
        description: "Your results have been downloaded as a PDF.",
      });
    } catch (error) {
      toast({
        title: "Download Error",
        description: "There was an error generating the PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-10">
      <div>
        <CalculatorForm
          inputs={inputs}
          setInputs={setInputs}
          handleCalculate={handleCalculate}
        />
      </div>

      {results && (
        <div id="results-section" className="space-y-10 animate-fade-in">
          <CalculatorResults results={results} />
          
          <VisualizationChart 
            ownershipData={ownershipData} 
            valuationData={valuationData} 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="calculator-card">
              <div className="flex items-center mb-6">
                <Download className="w-6 h-6 text-primary mr-2" />
                <h2 className="text-xl font-semibold text-primary">
                  Download Results
                </h2>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Download your SAFE Note calculation results as a professionally formatted PDF document.
              </p>
              <button 
                onClick={handleDownloadPDF} 
                className="secondary-button w-full"
              >
                Download as PDF
              </button>
            </div>
            
            <EmailForm inputs={inputs} results={results} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SafeCalculator;
