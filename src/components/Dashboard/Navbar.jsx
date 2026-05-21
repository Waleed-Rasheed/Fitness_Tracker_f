import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";

import GoalModal from "./GoalModal";
import API from "../../api/auth";

const Navbar = ({ setGoals }) => {
  const [openNotif, setOpenNotif] = useState(false);
  const [openGoal, setOpenGoal] = useState(false);
  const [profile, setProfile] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setProfile(res.data.user || res.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    setOpenNotif(false);
  }, [location.pathname]);

  const notifications = [
    "💪 New workout plan available",
    "🍎 Log your meals today",
    "🔥 You reached 80% of your goal",
    "⏰ Time for workout session",
  ];

  const handleSaveGoals = (data) => {
    setGoals(data);
    setOpenGoal(false);
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-black text-white border-b border-gray-800 px-4 sm:px-6 py-3 flex items-center justify-between">

        <h1 className="text-sm font-bold text-orange-400">
          Fitness Tracker
        </h1>

        <div className="flex items-center gap-3 relative">

          <button
            onClick={() => setOpenGoal(true)}
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-400 to-orange-500 text-black hover:scale-105 transition shadow-md"
          >
            🎯 Goal
          </button>

          <div className="relative">
            <FaBell
              className="text-gray-300 hover:text-orange-400 cursor-pointer text-lg"
              onClick={() => setOpenNotif(!openNotif)}
            />

            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>

            {openNotif && (
              <div className="absolute right-0 mt-3 w-72 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl z-[999]">
                <div className="p-3 border-b border-gray-800 text-orange-400 font-semibold text-sm">
                  Notifications
                </div>

                <div className="max-h-60 overflow-y-auto">
                  {notifications.map((n, i) => (
                    <div
                      key={i}
                      className="px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 border-b border-gray-800"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <img
            src={
              profile?.profile ||
              "https://as2.ftcdn.net/jpg/03/55/72/07/1000_F_355720743_3GQv9QBh9uyBVGO25npy9iYODrTBa3wU.jpg"
            }
            className="w-8 h-8 rounded-full cursor-pointer hover:scale-105 transition"
            onClick={() => navigate("/profile")}
            alt="profile"
          />
        </div>
      </div>

      <GoalModal
        open={openGoal}
        onClose={() => setOpenGoal(false)}
        onSave={handleSaveGoals}
      />
    </>
  );
};

export default Navbar;