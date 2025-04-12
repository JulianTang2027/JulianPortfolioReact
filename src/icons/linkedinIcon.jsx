import React from "react";
import "./linkedinIcon.css";

const LinkedinIcon = () => {
  // Path length 61.1
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-linkedin"
    >
      <path
        // Path length 61.1 (this is the n)
        className="animate-n"
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      ></path>
      <rect
        // Path length 32 (this is the lower half of the i)
        className="animate-lower-i"
        x="2"
        y="9"
        width="4"
        height="12"
      ></rect>
      <circle
        // Path length 11.3 (this is the dot)
        className="animate-upper-i"
        cx="4"
        cy="4"
        r="2"
      ></circle>
    </svg>
  );
};

export default LinkedinIcon;
