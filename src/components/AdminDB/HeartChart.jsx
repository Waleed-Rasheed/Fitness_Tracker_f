import React from "react";

const HR_DATA = [28, 38, 32, 42, 55, 70, 68, 72, 65, 80, 70, 76];

const HeartChart = () => {
  const W = 260;
  const H = 100;
  const pad = 12;

  const min = Math.min(...HR_DATA);
  const max = Math.max(...HR_DATA);

  const sx = (i) =>
    pad + (i / (HR_DATA.length - 1)) * (W - pad * 2);

  const sy = (v) =>
    H - pad - ((v - min) / (max - min)) * (H - pad * 2);

  const pathD = HR_DATA
    .map((v, i) => `${i === 0 ? "M" : "L"}${sx(i)},${sy(v)}`)
    .join(" ");

  const areaD =
    pathD + ` L${sx(HR_DATA.length - 1)},${H} L${sx(0)},${H} Z`;

  const activeIndex = 8;

  return (
    <div className="w-full">

      <div className="flex justify-between text-[10px] text-gray-400 mb-1">
        {["90b", "60b", "40b", "0b"].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>

      <svg
        width="100%"
        viewBox={`0 0 ${W} ${H}`}
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="hr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fb923c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={areaD} fill="url(#hr)" />

        <path
          d={pathD}
          fill="none"
          stroke="#fb923c"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          cx={sx(activeIndex)}
          cy={sy(HR_DATA[activeIndex])}
          r="5"
          fill="#fb923c"
        />

        <rect
          x={sx(activeIndex) - 34}
          y={sy(HR_DATA[activeIndex]) - 22}
          width="68"
          height="18"
          rx="9"
          fill="#9a3412"
        />

        <text
          x={sx(activeIndex)}
          y={sy(HR_DATA[activeIndex]) - 9}
          textAnchor="middle"
          fill="white"
          fontSize="9"
        >
          {HR_DATA[activeIndex]} bpm
        </text>
      </svg>

      <div className="flex justify-around mt-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu"].map((l) => (
          <span
            key={l}
            className={`text-[10px] ${
              l === "Tue"
                ? "text-orange-500 font-semibold"
                : "text-gray-400"
            }`}
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeartChart;