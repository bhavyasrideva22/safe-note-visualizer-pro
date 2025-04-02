
import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width="36" 
        height="36" 
        viewBox="0 0 36 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <rect width="36" height="36" rx="8" fill="#245e4f" />
        <path 
          d="M9 18C9 13.0294 13.0294 9 18 9C22.9706 9 27 13.0294 27 18C27 22.9706 22.9706 27 18 27" 
          stroke="#7ac9a7" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />
        <path 
          d="M18 27C15.7909 27 14 25.2091 14 23C14 20.7909 15.7909 19 18 19C20.2091 19 22 20.7909 22 23C22 25.2091 20.2091 27 18 27Z" 
          fill="#e9c46a" 
          stroke="#7ac9a7" 
          strokeWidth="1.5" 
        />
      </svg>
      <span className="font-bold text-xl text-primary">SAFECalc</span>
    </div>
  );
};

export default Logo;
