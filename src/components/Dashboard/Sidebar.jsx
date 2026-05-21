import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaDumbbell,
  FaUtensils,
  FaList,
  FaUser,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import API from "../../api/auth";

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profile, setProfile] = useState(null);
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

  const handleNavClick = () => {
    setActiveMenu(null);
    setProfileOpen(false);
    setMobileOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const linkClass =
    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition";

  const normal = "text-gray-400 hover:text-white hover:bg-gray-800/70";
  const active =
    "text-white bg-orange-500/20 border border-orange-500/30";

  const menuItem = (isActive) =>
    `${linkClass} ${isActive ? active : normal}`;

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-black border-r border-gray-800
        flex flex-col justify-between z-50 transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-4 pt-6">
          <div className="flex justify-between items-center md:hidden mb-4">
            <h1 className="text-white font-bold">Menu</h1>
            <button onClick={() => setMobileOpen(false)}>
              <FaTimes />
            </button>
          </div>

          <NavLink
            to="/dashboard"
            onClick={handleNavClick}
            className={({ isActive }) => menuItem(isActive)}
          >
            <FaTachometerAlt />
            Dashboard
          </NavLink>

          <button
            onClick={() =>
              setActiveMenu(activeMenu === "ex" ? null : "ex")
            }
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 hover:bg-gray-800 mt-2"
          >
            <FaDumbbell />
            Exercise
          </button>

          {activeMenu === "ex" && (
            <div className="ml-5 mt-2 flex flex-col gap-1">
              <NavLink
                to="/exercise/view"
                onClick={handleNavClick}
                className={({ isActive }) => menuItem(isActive)}
              >
                <FaList />Exercise
              </NavLink>

              <NavLink
                to="/category/view"
                onClick={handleNavClick}
                className={({ isActive }) => menuItem(isActive)}
              >
                <FaList /> Categories
              </NavLink>
            </div>
          )}

          <button
            onClick={() =>
              setActiveMenu(activeMenu === "nut" ? null : "nut")
            }
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-300 hover:bg-gray-800 mt-2"
          >
            <FaUtensils />
            Nutrition
          </button>

          {activeMenu === "nut" && (
            <div className="ml-5 mt-2 flex flex-col gap-1">
              <NavLink
                to="/nutrition"
                onClick={handleNavClick}
                className={({ isActive }) => menuItem(isActive)}
              >
                <FaList /> Nutrition
              </NavLink>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-800">
          <div
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 cursor-pointer"
          >
            <img
              src={profile?.avatar || "https://as2.ftcdn.net/jpg/03/55/72/07/1000_F_355720743_3GQv9QBh9uyBVGO25npy9iYODrTBa3wU.jpg"}
              className="w-9 h-9 rounded-full"
            />

            <div>
              <p className="text-sm font-semibold">
                {profile?.name || "User"}
              </p>
              <p className="text-xs text-gray-400">
                {profile?.email || "email@example.com"}
              </p>
            </div>
          </div>

          {profileOpen && (
            <div className="mt-2 bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <NavLink
                to="/profile"
                onClick={handleNavClick}
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-800 text-gray-300"
              >
                <FaUser /> Profile
              </NavLink>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-3 hover:bg-red-900 text-red-400"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;