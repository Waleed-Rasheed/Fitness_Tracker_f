import React from "react";

const Header = () => {
  return (
    <header className="flex items-center px-7 py-4 gap-4 border-b bg-gray-50 flex-shrink-0">
      
      <div className="flex-1">
        <div className="text-xs text-gray-500 mb-1">Good Morning</div>
        <div className="text-xl font-bold text-gray-800">
          Welcome Back Admin
        </div>
      </div>

      <div className="flex-1 max-w-xs bg-white rounded-xl border border-gray-200 flex items-center px-3 py-2 gap-2">
        <span className="text-gray-400">🔍</span>
        <input
          placeholder="Search"
          className="w-full text-sm text-gray-600 bg-transparent outline-none"
        />
      </div>

      <div className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white cursor-pointer">
        🔔
      </div>

      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow">
          Ad
        </div>
        <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
          Admin
        </span>
        <span className="text-gray-400"></span>
      </div>
    </header>
  );
};

export default Header;