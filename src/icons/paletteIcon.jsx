import React, { useRef } from "react";
import "./paletteIcon.css";

const PaletteIcon = () => {
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
      stroke="black"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        className="animatepalette"
        d="M 3.943 7.815 C 4.88 5.683 8.227 2.75 12.437 3.021 C 16.639 3.292 21.772 6.3 20.806 12.405 C 20.635 13.483 18.667 18.094 13.336 16.297 C 11.297 15.609 15.277 19.333 12.678 20.847 C 11.677 21.43 6.902 20.524 4.391 16.874 C 2.972 14.811 2.293 11.516 3.944 7.795 Z"
        fill="none"
      />
      <circle
        className="animatecircle4"
        cx="6.909"
        cy="12.838"
        r="1.5"
        fill="none"
      />
      <circle
        className="animatecircle3"
        cx="7.94"
        cy="8.791"
        r="1.5"
        fill="none"
      />
      <circle
        className="animatecircle2"
        cx="11.925"
        cy="6.762"
        r="1.5"
        fill="none"
      />
      <circle
        className="animatecircle1"
        cx="15.957"
        cy="8.765"
        r="1.5"
        fill="none"
      />
    </svg>
  );
};

export default PaletteIcon;
