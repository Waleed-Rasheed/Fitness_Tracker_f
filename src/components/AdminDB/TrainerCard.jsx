import React, { useState } from "react";

const TRAINERS = [
  {
    name: "John Arnold",
    role: "Yoga expert",
    img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=200",
  },
  {
    name: "Adam Smith",
    role: "Fitness expert",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200",
  },
];

const TrainerCard = () => {
  const [selected, setSelected] = useState("Adam Smith");

  return (
    <div>

      <div className="flex justify-between items-center mb-3">
        <span className="font-bold text-sm text-gray-800">Trainer</span>
        <span className="text-xs text-orange-400 cursor-pointer hover:text-orange-500">
          View all →
        </span>
      </div>

      <div className="flex gap-2">

        {TRAINERS.map((t) => {
          const isActive = selected === t.name;

          return (
            <div
              key={t.name}
              onClick={() => setSelected(t.name)}
              className={`flex-1 rounded-2xl p-4 flex flex-col items-center gap-2 cursor-pointer transition border
                ${
                  isActive
                    ? "bg-orange-50 border-orange-400 shadow-md"
                    : "bg-white border-gray-200 hover:border-orange-200"
                }`}
            >
              <img
                src={t.img}
                alt={t.name}
                className={`w-14 h-14 rounded-full object-cover border-2
                  ${isActive ? "border-orange-400" : "border-gray-200"}`}
              />

              <div className="text-sm font-semibold text-gray-800 text-center">
                {t.name}
              </div>

              <div className="text-xs text-gray-500">{t.role}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrainerCard;