import React, { useState } from "react";
import "./experience.css";

const experienceData = [
  {
    year: "2025",
    title: "Prudential Assurance Company Singapore",
    role: "Software Engineering Intern",
    description:
      "Implemented Google Analytics tracking for core financial platform. Developed dynamic page element tracking automation. Wrote comprehensive Jest tests for key platform features.",
  },
  {
    year: "2023",
    title: "Singapore Police Force",
    role: "National Service",
    description: "Fulfilled national service obligations.",
  },
];

const educationData = [
  {
    year: "2024 — Present",
    title: "Northwestern University",
    role: "B.S. Computer Science",
    description:
      "Sophomore studying Computer Science with interests in full stack engineering and UI/UX design.",
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const data = activeTab === "experience" ? experienceData : educationData;

  return (
    <div className="experienceContainer">
      <div className="experienceToggle">
        <button
          className={activeTab === "experience" ? "active" : ""}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>
      <div className="timelineMinimal" key={activeTab}>
        {data.map((item, index) => (
          <div
            className="timelineItem fadeIn"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <span className="timelineYear">{item.year}</span>
            <div className="timelineLine">
              <div className="timelineDot" />
              {index < data.length - 1 && <div className="timelineBar" />}
            </div>
            <div className="timelineContent">
              <h3>{item.title}</h3>
              <span className="timelineRole">{item.role}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
