import React, { useState } from "react";
import "./skillCard.css";

const SkillCard = ({ logo, name, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`skill-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        // Linear gradient background for base + radial gradient for the glow effect
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), 
                         radial-gradient(circle at top, ${color}, transparent 90%)`,
        borderColor: isHovered ? color : "transparent",
        boxShadow: `0 5px 30px ${color}${isHovered ? "80" : "40"}`,
      }}
    >
      {/* Blur container - creates the glassmorphism effect */}
      <div className="blur-container">
        <div
          className="blur"
          style={{
            background: color,
          }}
        />
      </div>

      {/* Card content */}
      <div className="content">
        {/* Logo */}
        <div className="image">
          <img src={logo} alt={name} />
        </div>

        {/* Skill name */}
        <div className="name">{name}</div>
      </div>
    </div>
  );
};

export default SkillCard;
