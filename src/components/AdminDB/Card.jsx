import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm shadow-orange-100/40">
      {children}
    </div>
  );
};

export default Card;