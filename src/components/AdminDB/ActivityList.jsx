import React, { useState } from "react";

const ACTIVITIES = [
  { icon: "🏋️", title: "Fitness for beginners", date: "17 Feb, 2022 at 5:36 PM", trainer: "Toren Twin", ti: "TT" },
  { icon: "🥊", title: "Beginner to advance gym", date: "17 Feb, 2022 at 4:30 PM", trainer: "Ardin Swen", ti: "AS" },
  { icon: "🏃", title: "Ultimate body workout", date: "17 Feb, 2022 at 3:38 PM", trainer: "Adam Smith", ti: "AS" },
];

const ActivityList = () => {
  const [active, setActive] = useState("Fitness for beginners");

  return (
    <div className="flex flex-col gap-2">

      {ACTIVITIES.map((a) => {
        const isActive = active === a.title;

        return (
          <div
            key={a.title}
            onClick={() => setActive(a.title)}
            className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200

              ${
                isActive
                  ? "bg-orange-50 border-orange-400 shadow-sm"
                  : "bg-white border-gray-100"
              }

              hover:bg-orange-50 hover:border-orange-300
            `}
          >

            <span className="text-xl flex-shrink-0">
              {a.icon}
            </span>

            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-gray-800 truncate">
                {a.title}
              </div>
              <div className="text-[10px] text-gray-400">
                {a.date}
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">

              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold

                  ${
                    isActive
                      ? "bg-orange-400 text-white"
                      : "bg-orange-100 text-orange-500"
                  }
                `}
              >
                {a.ti}
              </div>

              <span className="text-[11px] text-gray-500 whitespace-nowrap">
                {a.trainer}
              </span>

            </div>

          </div>
        );
      })}

    </div>
  );
};

export default ActivityList;