
export interface SafeInputs {
  investmentAmount: number;
  valuation: number;
  valuationCap: number;
  discountRate: number;
  nextRoundRaiseAmount: number;
  nextRoundValuationPreMoney: number;
  founderShares: number;
  optionPool: number;
}

export interface SafeResults {
  pricePaid: number;
  sharesIssued: number;
  discountPrice: number;
  capPrice: number;
  effectivePrice: number;
  effectiveValuation: number;
  ownershipPercentage: number;
  dilution: number;
  effectiveDiscount: number;
  impliedValuationCap: number;
  nextRoundOwnership: number;
  moneyMultiple: number;
}

export interface ChartData {
  name: string;
  percentage: number;
  value: number;
  color: string;
}

export const calculateSafe = (inputs: SafeInputs): SafeResults => {
  const {
    investmentAmount,
    valuation,
    valuationCap,
    discountRate,
    nextRoundRaiseAmount,
    nextRoundValuationPreMoney,
    founderShares,
    optionPool,
  } = inputs;

  // Calculate price per share based on discount rate
  const discountPrice = (nextRoundValuationPreMoney / founderShares) * (1 - discountRate / 100);
  
  // Calculate price per share based on valuation cap
  const capPrice = valuationCap / founderShares;
  
  // Effective price is the lower of discount price and cap price
  const effectivePrice = Math.min(discountPrice, capPrice);
  
  // Calculate shares issued to the SAFE investor
  const sharesIssued = investmentAmount / effectivePrice;
  
  // Calculate the effective valuation
  const effectiveValuation = effectivePrice * founderShares;
  
  // Calculate ownership percentage after conversion
  const ownershipPercentage = (sharesIssued / (founderShares + sharesIssued)) * 100;
  
  // Calculate dilution
  const dilution = (sharesIssued / founderShares) * 100;
  
  // Calculate effective discount compared to next round
  const nextRoundPrice = nextRoundValuationPreMoney / founderShares;
  const effectiveDiscount = ((nextRoundPrice - effectivePrice) / nextRoundPrice) * 100;
  
  // Calculate implied valuation cap based on discount rate
  const impliedValuationCap = (founderShares * discountPrice) / (1 - discountRate / 100);
  
  // Calculate next round ownership percentage
  const nextRoundShares = nextRoundRaiseAmount / nextRoundPrice;
  const totalShares = founderShares + sharesIssued + nextRoundShares + (founderShares * optionPool / 100);
  const nextRoundOwnership = (sharesIssued / totalShares) * 100;
  
  // Calculate potential money multiple for the SAFE investor
  const moneyMultiple = (sharesIssued * nextRoundPrice) / investmentAmount;

  return {
    pricePaid: investmentAmount / sharesIssued,
    sharesIssued,
    discountPrice,
    capPrice,
    effectivePrice,
    effectiveValuation,
    ownershipPercentage,
    dilution,
    effectiveDiscount,
    impliedValuationCap,
    nextRoundOwnership,
    moneyMultiple,
  };
};

export const formatIndianRupee = (value: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPercentage = (value: number): string => {
  return value.toFixed(2) + '%';
};

export const generateOwnershipChartData = (
  results: SafeResults,
  inputs: SafeInputs
): ChartData[] => {
  const { nextRoundRaiseAmount, nextRoundValuationPreMoney, founderShares, optionPool } = inputs;
  const { sharesIssued } = results;
  
  // Calculate next round shares
  const nextRoundPrice = nextRoundValuationPreMoney / founderShares;
  const nextRoundShares = nextRoundRaiseAmount / nextRoundPrice;
  
  // Calculate option pool shares
  const optionPoolShares = founderShares * optionPool / 100;
  
  // Calculate total shares
  const totalShares = founderShares + sharesIssued + nextRoundShares + optionPoolShares;
  
  // Calculate percentages
  const founderPercentage = (founderShares / totalShares) * 100;
  const safePercentage = (sharesIssued / totalShares) * 100;
  const nextRoundPercentage = (nextRoundShares / totalShares) * 100;
  const optionPoolPercentage = (optionPoolShares / totalShares) * 100;
  
  // Calculate values
  const totalValue = nextRoundValuationPreMoney + nextRoundRaiseAmount;
  const founderValue = (founderPercentage / 100) * totalValue;
  const safeValue = (safePercentage / 100) * totalValue;
  const nextRoundValue = (nextRoundPercentage / 100) * totalValue;
  const optionPoolValue = (optionPoolPercentage / 100) * totalValue;
  
  return [
    {
      name: "Founders",
      percentage: founderPercentage,
      value: founderValue,
      color: "#245e4f",
    },
    {
      name: "SAFE Investors",
      percentage: safePercentage,
      value: safeValue,
      color: "#7ac9a7",
    },
    {
      name: "Next Round",
      percentage: nextRoundPercentage,
      value: nextRoundValue,
      color: "#e9c46a",
    },
    {
      name: "Option Pool",
      percentage: optionPoolPercentage,
      value: optionPoolValue,
      color: "#4a8fe7",
    },
  ];
};

export const generateValuationChartData = (
  results: SafeResults,
  inputs: SafeInputs
): ChartData[] => {
  return [
    {
      name: "Current Valuation",
      value: inputs.valuation,
      percentage: 0,
      color: "#245e4f",
    },
    {
      name: "Valuation Cap",
      value: inputs.valuationCap,
      percentage: 0,
      color: "#7ac9a7",
    },
    {
      name: "Effective Valuation",
      value: results.effectiveValuation,
      percentage: 0,
      color: "#e9c46a",
    },
    {
      name: "Next Round Pre-Money",
      value: inputs.nextRoundValuationPreMoney,
      percentage: 0,
      color: "#4a8fe7",
    },
    {
      name: "Next Round Post-Money",
      value: inputs.nextRoundValuationPreMoney + inputs.nextRoundRaiseAmount,
      percentage: 0,
      color: "#88a3d2",
    },
  ];
};

export const getDefaultInputs = (): SafeInputs => {
  return {
    investmentAmount: 5000000,
    valuation: 40000000,
    valuationCap: 40000000,
    discountRate: 20,
    nextRoundRaiseAmount: 20000000,
    nextRoundValuationPreMoney: 80000000,
    founderShares: 10000000,
    optionPool: 10,
  };
};
