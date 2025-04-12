import React from "react";
import "./sunIcon.css";

const SunIcon = () => {
  return (
    <svg
      className="animatesun"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle className="animatecircle" cx="12" cy="12" r="5"></circle>
      <line className="animateline1" x1="12" y1="1" x2="12" y2="3"></line>
      <line className="animateline5" x1="12" y1="21" x2="12" y2="23"></line>
      <line
        className="animateline8"
        x1="4.22"
        y1="4.22"
        x2="5.64"
        y2="5.64"
      ></line>
      <line
        className="animateline4"
        x1="18.36"
        y1="18.36"
        x2="19.78"
        y2="19.78"
      ></line>
      <line className="animateline7" x1="1" y1="12" x2="3" y2="12"></line>
      <line className="animateline3" x1="21" y1="12" x2="23" y2="12"></line>
      <line
        className="animateline6"
        x1="4.22"
        y1="19.78"
        x2="5.64"
        y2="18.36"
      ></line>
      <line
        className="animateline2"
        x1="18.36"
        y1="5.64"
        x2="19.78"
        y2="4.22"
      ></line>
    </svg>
  );
};

export default SunIcon;
