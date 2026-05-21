import React, { useState } from "react";

const GOALS = [
  { emoji: "🤩", label: "Side Planks", sub: "0 sets/day", badge: "Bravo" },
  { emoji: "🔥", label: "ABS & Str…", sub: "0 minutes", badge: "Great" },
];

const GoalCard = () => {
  const [active, setActive] = useState("Side Planks");

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

      {GOALS.map((g) => {
        const isActive = active === g.label;

        return (
          <div
            key={g.label}
            onClick={() => setActive(g.label)}
            className={`min-w-[130px] flex-shrink-0 rounded-xl p-3 border cursor-pointer transition-all duration-200

              ${
                isActive
                  ? "bg-orange-50 border-orange-400 shadow-sm"
                  : "bg-white border-gray-200"
              }

              hover:bg-orange-50 hover:border-orange-400 hover:shadow-sm
            `}
          >

            <div className="text-sm font-bold text-gray-800">
              {g.label}
            </div>

            <div className="text-[10px] text-gray-500 mb-3">
              {g.sub}
            </div>

            <span
              className={`inline-flex items-center gap-1 text-[10px] px-3 py-[2px] rounded-full font-semibold transition

                ${
                  isActive
                    ? "bg-orange-400 text-white"
                    : "bg-white text-orange-500 shadow-sm"
                }
              `}
            >
              <span>{g.emoji}</span>
              {g.badge}
            </span>

          </div>
        );
      })}
    </div>
  );
};

export default GoalCard;