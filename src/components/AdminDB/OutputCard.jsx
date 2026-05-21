import React, { useState } from "react";

const DATA = {
  Daily: [
    { icon: "🍽️", label: "Calory loss", val: ".05 gm", badge: "❤️ WOW" },
    { icon: "⚖️", label: "Weight loss", val: "0.2 kg", badge: "🔥 Great" },
  ],
  Weekly: [
    { icon: "🍽️", label: "Calory loss", val: ".35 gm", badge: "❤️ WOW" },
    { icon: "⚖️", label: "Weight loss", val: "1.23 kg", badge: "🔥 Great" },
  ],
  Monthly: [
    { icon: "🍽️", label: "Calory loss", val: "1.2 gm", badge: "❤️ WOW" },
    { icon: "⚖️", label: "Weight loss", val: "4.8 kg", badge: "🔥 Great" },
  ],
};

const OutputCard = () => {
  const [range, setRange] = useState("Weekly");
  const [active, setActive] = useState("Weight loss");

  return (
    <div className="flex flex-col gap-3">

      <div className="flex gap-2 mb-2">
        {["Daily", "Weekly", "Monthly"].map((r) => (
          <button
            key={r}
            onClick={() => {
              setRange(r);
              setActive(null); 
            }}
            className={`px-3 py-1 text-xs rounded-full transition
              ${
                range === r
                  ? "bg-orange-400 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-orange-50 hover:text-orange-500"
              }`}
          >
            {r}
          </button>
        ))}
      </div>

      {DATA[range].map((o) => {
        const isActive = active === o.label;

        return (
          <div
            key={o.label}
            onClick={() => setActive(o.label)}
            className={`group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer
              ${
                isActive
                  ? "border-orange-400 bg-orange-50"
                  : "border-gray-200 bg-white hover:border-orange-400 hover:bg-orange-50"
              }`}
          >
            <span className="text-2xl">{o.icon}</span>

            <div className="flex-1">
              <div className={`text-xs ${isActive ? "text-orange-500" : "text-gray-500 group-hover:text-orange-500"}`}>
                {o.label}
              </div>
              <div className="text-base font-bold text-gray-800">
                {o.val}
              </div>
            </div>

            <span
              className={`text-[10px] px-3 py-1 rounded-full font-semibold whitespace-nowrap transition
                ${
                  isActive
                    ? "bg-orange-400 text-white"
                    : "bg-gray-100 text-gray-500 group-hover:bg-orange-400 group-hover:text-white"
                }`}
            >
              {o.badge}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default OutputCard;