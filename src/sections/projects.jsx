import React, { useState } from "react";
import "./projects.css";
import ProjectCard from "../components/projectCard";
import SkillShapes, { shapes } from "../components/skillShapes";
import CodeGhost from "../components/codeGhost";
import {
  MonitorIcon,
  RobotIcon,
  PenIcon,
  GolfIcon,
  GlobeIcon,
  BirdIcon,
} from "../icons/projectIcons";

const projects = [
  {
    title: "Portfolio Website",
    description: "A minimalist personal portfolio built with React.",
    tags: ["CSS", "React"],
    link: "https://github.com/JulianTang2027/JulianPortfolioReact",
    icon: <MonitorIcon />,
    span: "wide",
  },
  {
    title: "agentdiag",
    description:
      "Diagnose why AI agents fail. Lightweight CLI for agent trace analysis.",
    tags: ["Python"],
    link: "https://github.com/JulianTang2027/agentdiag",
    icon: <RobotIcon />,
    span: "tall",
  },
  {
    title: "PADS Good Neighbor App",
    description:
      "React web application for PADS Lake County staff and community members to report, track, and manage incidents.",
    tags: ["CSS", "HTML", "Javascript", "React"],
    link: "https://github.com/394-s25/pads",
    icon: <PenIcon />,
  },
  {
    title: "Parameter Golf",
    description: "OpenAI competition on optimizing parameters.",
    tags: ["Python"],
    link: "https://github.com/JulianTang2027/parameter-golf",
    icon: <GolfIcon />,
  },
  {
    title: "Do VLMs have internal world models?",
    description: "Ongoing research into VLMs at the Machine Learning Lab",
    link: "https://github.com/JulianTang2027/vlms-internal-world-models",
    tags: ["Python"],
    icon: <GlobeIcon />,
  },
  {
    title: "Pigeon",
    description: "Northwestern degree completion assistant",
    link: "https://github.com/JulianTang2027/ieee-planner",
    tags: ["CSS", "Golang", "Javascript"],
    icon: <BirdIcon />,
    span: "wide",
  },
];

const getHighlightColor = (tags, activeSkill) => {
  if (!activeSkill) return null;
  const match = tags.find((t) => t.toLowerCase() === activeSkill.toLowerCase());
  if (!match) return null;
  const shape = shapes.find(
    (s) => s.skill.toLowerCase() === activeSkill.toLowerCase(),
  );
  return shape ? shape.color : null;
};

const Projects = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="projectsContainer">
      <CodeGhost />
      <p className="projectsSubtitle">
        Projects I've built, and the technologies I've built them with.
      </p>
      <SkillShapes activeSkill={activeSkill} setActiveSkill={setActiveSkill} />
      <div className="tetrisGrid">
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            description={p.description}
            tags={p.tags}
            link={p.link}
            icon={p.icon}
            index={i}
            span={p.span}
            highlightColor={getHighlightColor(p.tags, activeSkill)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
