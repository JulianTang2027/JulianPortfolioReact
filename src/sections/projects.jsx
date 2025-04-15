import React from "react";
import "./projects.css";
import Carousel from "../components/carousel";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <h1 className="projectsHeader">Featured Projects</h1>
      <Carousel />
    </div>
  );
};

export default Projects;
