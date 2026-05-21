import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const NAV_ITEMS = [
  { icon: "⊞", label: "Home" },
  { icon: "∿", label: "Activity" },
  { icon: "◎", label: "Goals" },
  { icon: "▦", label: "Calendar" },
  { icon: "◉", label: "Profile" },
];

const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <aside className="w-24 h-screen flex flex-col items-center py-6 border-r bg-gray-50">

      <div className="mb-8 text-center">
        <div className="w-11 h-11 rounded-xl bg-orange-400 shadow flex items-center justify-center text-white text-xl mx-auto mb-1">
          🏋️
        </div>
        <div className="text-[10px] font-bold text-orange-500 leading-tight tracking-wide">
          Fitness<br />Tracker
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full items-center">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.label;

          return (
            <div
              key={item.label}
              title={item.label}
              onClick={() => setActive(item.label)}
              className={`w-12 h-12 flex items-center justify-center rounded-xl text-xl cursor-pointer transition-all select-none
                ${
                  isActive
                    ? "bg-orange-400 text-white shadow-md"
                    : "text-gray-400 hover:text-orange-400 hover:bg-orange-50"
                }`}
            >
              {item.icon}
            </div>
          );
        })}
      </div>

      <button
        onClick={handleLogout}
        className="w-full mt-auto flex items-center justify-center gap-2 py-3 text-red-500 hover:bg-red-100"
      >
        <FaSignOutAlt /> Logout
      </button>

    </aside>
  );
};

export default Sidebar;