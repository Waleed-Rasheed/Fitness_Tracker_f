import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoWater, IoFootsteps } from "react-icons/io5";
import { FaFireFlameCurved, FaMoon } from "react-icons/fa6";

const StatCard = ({ title, value, target, icon }) => {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-xl p-3 h-24 sm:h-28">

      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 text-sm">
          {icon}
        </div>

        <span className="text-[10px] uppercase tracking-wide text-gray-400 font-medium">
          {title}
        </span>
      </div>

      <div className="flex items-end gap-1">
        <span className="text-lg font-semibold text-white">
          {value || 0}
        </span>

        <span className="text-xs text-gray-500">
          / {target || 0}
        </span>
      </div>

    </div>
  );
};

const StatGrid = () => {
  const [goal, setGoal] = useState({});
  const [daily, setDaily] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const [goalRes, dailyRes] = await Promise.all([
        axios.get("http://localhost:8080/api/goal/get", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("http://localhost:8080/api/daily/get", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setGoal(goalRes.data.data || {});
      setDaily(dailyRes.data.data || {});
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    window.addEventListener("goals-updated", fetchData);
    window.addEventListener("daily-updated", fetchData);

    return () => {
      window.removeEventListener("goals-updated", fetchData);
      window.removeEventListener("daily-updated", fetchData);
    };
  }, []);

  if (loading) {
    return <p className="text-gray-400 text-sm">Loading...</p>;
  }

  const data = [
    {
      title: "Water",
      value: daily.water || 0,
      target: goal.water || 0,
      icon: <IoWater />,
    },
    {
      title: "Calories",
      value: daily.calories || 0,
      target: goal.calories || 0,
      icon: <FaFireFlameCurved />,
    },
    {
      title: "Steps",
      value: daily.steps || 0,
      target: goal.steps || 0,
      icon: <IoFootsteps />,
    },
    {
      title: "Sleep",
      value: daily.sleep || 0,
      target: goal.sleep || 0,
      icon: <FaMoon />,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
      {data.map((item, i) => (
        <StatCard key={i} {...item} />
      ))}
    </div>
  );
};

export default StatGrid;