import React from "react";

const CardHeader = ({ title, right }) => {
  return (
    <div className="flex items-center justify-between mb-3">

      <span className="font-bold text-sm text-gray-800">
        {title}
      </span>

      {right && (
        <span className="text-xs text-gray-400 cursor-pointer hover:text-orange-500 transition">
        </span>
      )}

    </div>
  );
};

export default CardHeader;