import React from "react";
import DonutChart from "./DonutChart.jsx";

const MacroRow = ({ color, label, val, trend }) => {
  return (
    <div className="flex items-center gap-2 mb-2">

      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
      />

      <div className="flex-1">
        <div className="text-[10px] text-gray-500">{label}</div>
        <div className="text-sm font-bold text-gray-800">{val}</div>
      </div>

      <svg width="48" height="20" viewBox="0 0 48 20">
        <polyline
          points={trend}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const OverviewCard = () => {
  return (
    <div className="flex items-center gap-3">

      <DonutChart pct={0} />

      <div className="flex-1">

        <MacroRow
          color="#f97316" 
          label="Calories burn"
          val="0%"
          trend="0,10 8,10 16,10 24,10 32,10 40,10 48,10"
        />

        <MacroRow
          color="#60a5fa"
          label="Protein"
          val="0%"
          trend="0,10 8,10 16,10 24,10 32,10 40,10 48,10"
        />

        <MacroRow
          color="#a78bfa"
          label="Carbs"
          val="0%"
          trend="0,10 8,10 16,10 24,10 32,10 40,10 48,10"
        />

      </div>
    </div>
  );
};

export default OverviewCard;