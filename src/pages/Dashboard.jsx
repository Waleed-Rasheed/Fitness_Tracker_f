import React, { useState, useEffect } from "react";
import axios from "axios";

import StatGrid from "../components/Dashboard/StatGrid";
import ActivitySection from "../components/Dashboard/ActivitySection";
import RightSidebar from "../components/Dashboard/RightSidebar";
import WeightSection from "../components/Dashboard/WeightSection";
import DailyStats from "../components/Dashboard/DailyStats";

const Dashboard = () => {
  const [refresh, setRefresh] = useState(false);
  const [goal, setGoal] = useState({});
  const [daily, setDaily] = useState({});

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const [goalRes, dailyRes] = await Promise.all([
        axios.get("http://localhost:8080/api/goal/get", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("http://localhost:8080/api/daily/get", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setGoal(goalRes.data?.data || {});
      setDaily(dailyRes.data?.data || {});
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const triggerRefresh = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="w-full h-full text-white">
      <div className="p-4 lg:p-6 space-y-4">
        <DailyStats />

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[70%] space-y-6">
            <StatGrid refresh={refresh} />

            <div className="bg-gray-900 p-4 rounded-2xl border border-gray-800">
              <ActivitySection refresh={refresh} />
              <WeightSection refresh={refresh} />
            </div>
          </div>

          <div className="w-full lg:w-[30%]">
            <RightSidebar goal={goal} daily={daily} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;