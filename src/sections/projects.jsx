import React from "react";
import "./projects.css";
import ProjectCard from "../components/projectCard";

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const PenIcon = () => (
  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const BoxIcon = () => (
  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const Projects = () => {
  return (
    <div className="projectsContainer">
      <div className="tetrisGrid">
        <ProjectCard
          title="Portfolio Website"
          description="A minimalist personal portfolio built with React."
          tags={["React", "CSS"]}
          link="https://github.com/JulianTang2027"
          icon={<CodeIcon />}
          index={0}
          span="wide"
        />
        <ProjectCard
          title="Project Two"
          description="Description here."
          tags={["Python"]}
          icon={<BoxIcon />}
          index={1}
          span="tall"
        />
        <ProjectCard
          title="Project Three"
          description="Description here."
          tags={["React", "Node"]}
          icon={<PenIcon />}
          index={2}
        />
        <ProjectCard
          title="Project Four"
          description="Description here."
          tags={["CSS"]}
          icon={<CodeIcon />}
          index={3}
        />
      </div>
    </div>
  );
};

export default Projects;
