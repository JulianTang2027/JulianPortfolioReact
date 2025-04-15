import React from "react";
import "./cardIcon.css";

const CardIcon = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="0.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="headercard"
        preserveAspectRatio="none"
      >
        <rect
          className="cardrect"
          x="1"
          y="4"
          width="22"
          height="16"
          rx="2"
          ry="2"
        ></rect>
        <line className="cardline" x1="1" y1="7" x2="23" y2="7"></line>
      </svg>
    </div>
  );
};

export default CardIcon;
