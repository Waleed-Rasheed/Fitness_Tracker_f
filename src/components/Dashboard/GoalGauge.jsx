import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

const GoalGauge = ({ value }) => {
  return (
    <Gauge
      value={value}
      startAngle={0}
      endAngle={360}
      innerRadius="78%"
      outerRadius="100%"
      sx={{
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 22,
          fontWeight: 800,
          fill: "#fb923c",
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "#fb923c",
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: "#1f2937",
        },
        "& text": {
          fill: "#fb923c !important",
          fontWeight: "800",
        },
      }}
      text={({ value }) => `${value}%`}
    />
  );
};

export default GoalGauge;