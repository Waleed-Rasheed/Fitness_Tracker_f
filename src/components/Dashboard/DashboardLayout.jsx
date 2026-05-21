import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-black text-white overflow-hidden">

      <div className="hidden md:block h-[70px]">
        <Navbar />
      </div>

      <div className="flex flex-1 overflow-hidden">

        <Sidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <div className="flex-1 h-full overflow-y-auto relative">

          <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-black fixed top-0 left-0 right-0 z-40">

            <button onClick={() => setMobileOpen(true)}>
              ☰
            </button>

            <h1 className="text-sm font-semibold">
              Fitness Tracker
            </h1>

          </div>

          <div className="pt-14 md:pt-0">
            <Outlet />
          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;