import React, { useRef } from "react";
import "./arrowdownIcon.css";

const ArrowdownIcon = () => {
  const pathRef = useRef(null);
  const handleClick = () => {
    if (pathRef.current) {
      console.log(pathRef.current.getTotalLength());
    }
  };
  return (
    <svg
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrowdownicon"
    >
      <line className="arrowdownline" x1="12" y1="5" x2="12" y2="19"></line>
      <polyline className="arrowdownarch" points="19 12 12 19 5 12"></polyline>
    </svg>
  );
};

export default ArrowdownIcon;
