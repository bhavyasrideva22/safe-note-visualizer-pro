
import React from "react";
import { SafeInputs } from "../../utils/calculatorLogic";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface CalculatorFormProps {
  inputs: SafeInputs;
  setInputs: React.Dispatch<React.SetStateAction<SafeInputs>>;
  handleCalculate: () => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  inputs,
  setInputs,
  handleCalculate,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof SafeInputs
  ) => {
    const value = parseFloat(e.target.value.replace(/,/g, ""));
    setInputs((prev) => ({
      ...prev,
      [field]: isNaN(value) ? 0 : value,
    }));
  };

  const handleSliderChange = (value: number[], field: keyof SafeInputs) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value[0],
    }));
  };

  return (
    <div className="calculator-card">
      <h2 className="text-xl font-semibold text-primary mb-6">
        Enter SAFE Note Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <Label htmlFor="investmentAmount" className="form-label">
            Investment Amount (₹)
          </Label>
          <Input
            id="investmentAmount"
            type="text"
            value={inputs.investmentAmount.toLocaleString()}
            onChange={(e) => handleInputChange(e, "investmentAmount")}
            className="w-full"
          />
        </div>

        <div className="form-control">
          <Label htmlFor="valuation" className="form-label">
            Current Valuation (₹)
          </Label>
          <Input
            id="valuation"
            type="text"
            value={inputs.valuation.toLocaleString()}
            onChange={(e) => handleInputChange(e, "valuation")}
            className="w-full"
          />
        </div>

        <div className="form-control">
          <Label htmlFor="valuationCap" className="form-label">
            Valuation Cap (₹)
          </Label>
          <Input
            id="valuationCap"
            type="text"
            value={inputs.valuationCap.toLocaleString()}
            onChange={(e) => handleInputChange(e, "valuationCap")}
            className="w-full"
          />
        </div>

        <div className="form-control">
          <Label htmlFor="discountRate" className="form-label">
            Discount Rate: {inputs.discountRate}%
          </Label>
          <Slider
            id="discountRate"
            min={0}
            max={50}
            step={1}
            value={[inputs.discountRate]}
            onValueChange={(value) => handleSliderChange(value, "discountRate")}
            className="mt-2"
          />
        </div>

        <div className="form-control">
          <Label htmlFor="nextRoundRaiseAmount" className="form-label">
            Next Round Raise Amount (₹)
          </Label>
          <Input
            id="nextRoundRaiseAmount"
            type="text"
            value={inputs.nextRoundRaiseAmount.toLocaleString()}
            onChange={(e) => handleInputChange(e, "nextRoundRaiseAmount")}
            className="w-full"
          />
        </div>

        <div className="form-control">
          <Label htmlFor="nextRoundValuationPreMoney" className="form-label">
            Next Round Pre-Money Valuation (₹)
          </Label>
          <Input
            id="nextRoundValuationPreMoney"
            type="text"
            value={inputs.nextRoundValuationPreMoney.toLocaleString()}
            onChange={(e) => handleInputChange(e, "nextRoundValuationPreMoney")}
            className="w-full"
          />
        </div>

        <div className="form-control">
          <Label htmlFor="founderShares" className="form-label">
            Founder Shares
          </Label>
          <Input
            id="founderShares"
            type="text"
            value={inputs.founderShares.toLocaleString()}
            onChange={(e) => handleInputChange(e, "founderShares")}
            className="w-full"
          />
        </div>

        <div className="form-control">
          <Label htmlFor="optionPool" className="form-label">
            Option Pool: {inputs.optionPool}%
          </Label>
          <Slider
            id="optionPool"
            min={0}
            max={20}
            step={0.5}
            value={[inputs.optionPool]}
            onValueChange={(value) => handleSliderChange(value, "optionPool")}
            className="mt-2"
          />
        </div>
      </div>

      <div className="mt-8">
        <button onClick={handleCalculate} className="primary-button w-full">
          Calculate SAFE Conversion
        </button>
      </div>
    </div>
  );
};

export default CalculatorForm;
