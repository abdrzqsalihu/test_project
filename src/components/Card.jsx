import React from "react";

const Card = ({ children, title, className }) => {
  return (
    <div className={`rounded-lg shadow-md p-6 ${className || `bg-gray-200`} `}>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
