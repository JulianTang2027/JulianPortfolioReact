import React, { useState } from "react";
import "./experience.css";

const experienceData = [
  {
    year: "2026",
    title: "Inflection AI",
    role: "Incoming Member of Technical Staff Intern",
    description: "Summer 2026!",
  },
  {
    year: "2026",
    title: "Machine Learning Lab (Northwestern University)",
    role: "Undergraduate Research Assistant",
    description: "Research on VLMs and VLAs.",
  },
  {
    year: "2025",
    title: "Certis",
    role: "Software Engineering Intern",
    description:
      "Built kiosk for the Singapore Stock Exchange (SGX), supporting over 1000+ daily check-ins.",
  },
  {
    year: "2025",
    title: "CMD Global Partners LLC",
    role: "Software Engineering Intern",
    description:
      "Built company website using React and Strapi CMS, where I learned many of the techniques I used to build this personal portfolio!",
  },
  {
    year: "2024",
    title: "Prudential Assurance Company Singapore",
    role: "Software Engineering Intern",
    description:
      "Implemented Analytics tracking for core financial platform used by 5000+ financial consultants.",
  },
  {
    year: "2021 — 2023",
    title: "Singapore Police Force",
    role: "National Service",
    description: "Fulfilled national service obligations.",
  },
];

const educationData = [
  {
    year: "2023 — Present",
    title: "Northwestern University",
    role: "B.S. Computer Science",
    description: "Dean's list every quarter present (7/7)",
  },
  {
    year: "2025",
    title: "DIS - Copenhagen",
    role: "Exchange Student",
    description:
      "Courses: New Nordic Design, Kierkegaard's Authorship (taken at Copenhagen University), Innovation and Entrepreneurship and Danish Language and Culture.",
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const data = activeTab === "experience" ? experienceData : educationData;

  return (
    <div className="experienceContainer">
      <p className="experienceSubtitle">A timeline of my educational and professional experience.</p>
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
