import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white px-6 py-4 flex items-center justify-between text-sm text-gray-500">

      <div>
        © {new Date().getFullYear()} Fitness Tracker. All rights reserved.
      </div>

      <div className="hidden md:flex gap-6">
        <span className="hover:text-orange-400 cursor-pointer">Privacy</span>
        <span className="hover:text-orange-400 cursor-pointer">Terms</span>
        <span className="hover:text-orange-400 cursor-pointer">Support</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-orange-400 font-semibold">Stay Fit</span>
        <span>💪</span>
      </div>

    </footer>
  );
};

export default Footer;