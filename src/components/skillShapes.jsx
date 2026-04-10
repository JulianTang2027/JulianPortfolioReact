import React from "react";
import "./skillShapes.css";

const skills = [
  { skill: "React", color: "#a8d8ea" },
  { skill: "Python", color: "#d4a017" },
  { skill: "JavaScript", color: "#3776AB" },
  { skill: "HTML", color: "#fab1a0" },
  { skill: "CSS", color: "#5fa877" },
  { skill: "Golang", color: "#74b9ff" },
];

export { skills as shapes };

const SkillShapes = ({ activeSkill, setActiveSkill }) => {
  return (
    <div className="skillsRow">
      {skills.map((item) => (
        <span
          className={`skillLabel ${activeSkill === item.skill ? "skillActive" : ""}`}
          key={item.skill}
          style={{
            color: activeSkill === item.skill ? item.color : undefined,
          }}
          onMouseEnter={() => setActiveSkill(item.skill)}
          onMouseLeave={() => setActiveSkill(null)}
        >
          {item.skill}
        </span>
      ))}
    </div>
  );
};

export default SkillShapes;
