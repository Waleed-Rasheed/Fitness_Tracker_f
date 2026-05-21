import React from "react";

const BAR_DATA = [
  { label: "Jan", pct: 0 },
  { label: "Feb", pct: 0 },
  { label: "Mar", pct: 0 },
  { label: "Apr", pct: 2, active: true },
  { label: "May", pct: 0 },
  { label: "Jun", pct: 0 },
  { label: "Jul", pct: 0 },
  { label: "Aug", pct: 0 },
];

const ActivityChart = () => {
  return (
    <div className="flex items-end gap-2 h-36 pt-2">

      {BAR_DATA.map((d) => {
        const height = Math.max(d.pct * 10, 10);

        return (
          <div
            key={d.label}
            className="flex-1 flex flex-col items-center gap-1"
          >
            <span
              className={`text-[10px] ${
                d.active ? "text-orange-500 font-bold" : "text-gray-400"
              }`}
            >
              {d.pct}%
            </span>

            <div
              className={`w-full rounded-full transition-all duration-300 ${
                d.active
                  ? "bg-orange-400 shadow-md"
                  : "bg-orange-100"
              }`}
              style={{ height: `${height}px` }}
            />

            <span
              className={`text-[10px] ${
                d.active
                  ? "text-orange-500 font-semibold"
                  : "text-gray-400"
              }`}
            >
              {d.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ActivityChart;