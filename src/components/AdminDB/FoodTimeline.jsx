import React, { useState } from "react";

const FOODS = [
  { day: "Day one", name: "Veggie & Hummus", detail: "7 days only dinner time", emoji: "🥗", done: true },
  { day: "Day two", name: "A bowl of salad", detail: "12 days only lunch time", emoji: "🥙", done: true },
  { day: "Day three", name: "Green variety foods", detail: "13 days for breakfast", emoji: "🥦", done: true },
  { day: "Day four", name: "A bowl of berries", detail: "9 days for breakfast", emoji: "🍓", done: false },
];

const FoodTimeline = () => {
  const [active, setActive] = useState("Day one");

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

      {FOODS.map((f) => {
        const isActive = active === f.day;

        return (
          <div
            key={f.day}
            onClick={() => setActive(f.day)}
            className={`min-w-[140px] rounded-xl p-3 flex-shrink-0 border cursor-pointer transition-all duration-200
              
              ${
                isActive
                  ? "border-orange-400 bg-orange-50 shadow-sm"
                  : "border-gray-200 bg-white"
              }

              hover:border-orange-400 hover:bg-orange-50 hover:shadow-sm
            `}
          >
            <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-1">
              {f.day}
            </div>

            <div className="flex items-start gap-1 mb-2">
              {f.done && (
                <span className="text-orange-400 text-sm mt-[2px]">✓</span>
              )}

              <div className="text-sm font-bold text-gray-800 leading-tight">
                {f.name}
              </div>
            </div>

            <div className="text-3xl mb-1">{f.emoji}</div>

            <div className="text-[11px] text-gray-500">
              {f.detail}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodTimeline;