import React, { useMemo } from "react";
import GoalGauge from "./GoalGauge";

const SmallGauge = ({ label, value, target }) => {
  const progress = useMemo(() => {
    if (!target) return 0;

    const p = (value / target) * 100;

    return Math.min(100, Math.round(p));
  }, [value, target]);

  const strokeDash = useMemo(() => {
    const radius = 16;
    const circumference = 2 * Math.PI * radius;

    return circumference - (progress / 100) * circumference;
  }, [progress]);

  return (
    <div className="flex flex-col items-center gap-1 bg-gray-800 p-2 rounded-xl border border-gray-700">

      <div className="text-[9px] text-gray-400 uppercase">{label}</div>

      <div className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center relative">

        <span className="text-[9px] font-bold text-white">
          {progress}%
        </span>

        <svg className="absolute w-10 h-10 -rotate-90">
          <circle
            cx="20"
            cy="20"
            r="16"
            stroke="#1f2937"
            strokeWidth="3"
            fill="transparent"
          />
          <circle
            cx="20"
            cy="20"
            r="16"
            stroke="#fb923c"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 16}
            strokeDashoffset={strokeDash}
            strokeLinecap="round"
          />
        </svg>

      </div>

      <div className="text-[10px] text-orange-400 font-bold">
        {value}
      </div>

    </div>
  );
};

const RightSidebar = ({ goal = {}, daily = {} }) => {

  const totalProgress = useMemo(() => {
    const water = goal.water ? (daily.water / goal.water) * 100 : 0;
    const steps = goal.steps ? (daily.steps / goal.steps) * 100 : 0;
    const calories = goal.calories ? (daily.calories / goal.calories) * 100 : 0;
    const sleep = goal.sleep ? (daily.sleep / goal.sleep) * 100 : 0;

    const avg = (water + steps + calories + sleep) / 4;

    return Math.min(100, Math.round(avg));
  }, [daily, goal]);

  const bmi = useMemo(() => {
    const weight = goal.weight || 70;
    const height = goal.height || 1.75;
    return (weight / (height * height)).toFixed(1);
  }, [goal]);

  return (
    <div className="flex flex-col gap-4 w-full bg-black">

      <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 text-center">

        <div className="h-32 flex justify-center items-center">
          <GoalGauge value={totalProgress} />
        </div>

        <p className="text-[9px] font-bold text-gray-500 uppercase">
          Daily Goal
        </p>


        <div className="grid grid-cols-2 gap-2 mt-4">

          <SmallGauge label="Water" value={daily.water || 0} target={goal.water || 1} />
          <SmallGauge label="Steps" value={daily.steps || 0} target={goal.steps || 1} />
          <SmallGauge label="Calories" value={daily.calories || 0} target={goal.calories || 1} />
          <SmallGauge label="Sleep" value={daily.sleep || 0} target={goal.sleep || 1} />

        </div>

      </div>

      <div className="bg-gray-900 p-4 rounded-2xl border border-gray-800">

        <h4 className="text-xs font-bold text-gray-300 mb-4 uppercase">
          Macros
        </h4>

        <div className="mb-3">
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-gray-400 uppercase">Protein</span>
            <span className="text-white">0g / 150g</span>
          </div>
          <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-orange-400 w-[0%]" />
          </div>
        </div>

        <div className="mb-3">
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-gray-400 uppercase">Carbs</span>
            <span className="text-white">0g / 280g</span>
          </div>
          <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-orange-400 w-[0%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-gray-400 uppercase">Fat</span>
            <span className="text-white">0g / 80g</span>
          </div>
          <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-orange-400 w-[0%]" />
          </div>
        </div>

      </div>

      <div className="bg-gray-900 p-4 rounded-2xl border border-gray-800">

        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xs font-bold text-gray-300 uppercase">
            Streak
          </h4>
          <span className="text-[10px] bg-orange-400 text-black px-2 py-1 rounded-full font-bold">
            🔥 0
          </span>
        </div>

        <div className="flex justify-between text-[10px] font-bold text-gray-500">
          {["S","M","T","W","T","F","S"].map((d, i) => (
            <span key={i} className={i === 6 ? "text-orange-400" : ""}>
              {d}
            </span>
          ))}
        </div>

      </div>

      <div className="bg-gray-900 p-4 rounded-2xl border border-gray-800">

        <h4 className="text-xs font-bold text-gray-300 uppercase mb-2">
          BMI
        </h4>

        <div className="text-xl font-bold text-white">
          {bmi} <span className="text-[10px] text-gray-500">kg/m²</span>
        </div>

      </div>

    </div>
  );
};

export default RightSidebar;