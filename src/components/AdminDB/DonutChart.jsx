import React from "react";

const DonutChart = ({ pct = 84 }) => {
  const r = 52;
  const cx = 64;
  const cy = 64;

  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="donutGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>
      </defs>

      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#fde8d0"
        strokeWidth="14"
      />

      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="url(#donutGrad)"
        strokeWidth="14"
        strokeDasharray={`${dash} ${circ - dash}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
        className="transition-all duration-700"
      />

      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        className="text-[20px] font-bold fill-orange-500"
      >
        {10}%
      </text>

      <text
        x={cx}
        y={cy + 14}
        textAnchor="middle"
        className="text-[10px] fill-gray-500"
      >
        0 ml
      </text>
    </svg>
  );
};

export default DonutChart;