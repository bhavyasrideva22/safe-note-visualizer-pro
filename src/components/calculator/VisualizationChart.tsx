
import React from "react";
import { ChartData } from "../../utils/calculatorLogic";
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Legend 
} from "recharts";

interface VisualizationChartProps {
  ownershipData: ChartData[];
  valuationData: ChartData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-md border border-gray-200">
        <p className="font-medium text-charcoal">{payload[0].name}</p>
        {payload[0].payload.value !== undefined && (
          <p className="text-sm text-gray-600">
            Value: ₹{payload[0].payload.value.toLocaleString()}
          </p>
        )}
        {payload[0].payload.percentage !== undefined && payload[0].payload.percentage > 0 && (
          <p className="text-sm text-gray-600">
            {payload[0].payload.percentage.toFixed(2)}%
          </p>
        )}
      </div>
    );
  }
  return null;
};

const VisualizationChart: React.FC<VisualizationChartProps> = ({ 
  ownershipData, 
  valuationData 
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="calculator-card">
        <h3 className="text-lg font-semibold text-primary mb-4">
          Ownership Distribution After Next Round
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ownershipData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="percentage"
                nameKey="name"
                label={(entry) => entry.name}
              >
                {ownershipData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="calculator-card">
        <h3 className="text-lg font-semibold text-primary mb-4">
          Valuation Comparison
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={valuationData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis 
                tickFormatter={(value) => 
                  value >= 10000000 
                    ? `₹${(value / 10000000).toFixed(0)}Cr` 
                    : `₹${(value / 100000).toFixed(0)}L`
                } 
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" nameKey="name">
                {valuationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default VisualizationChart;
