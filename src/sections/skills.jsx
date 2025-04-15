import React from "react";
import "./skills.css";
import SkillCard from "../components/skillCard";
import reactLogo from "../logos/react.svg";
import htmlLogo from "../logos/html5.svg";
import cssLogo from "../logos/css.svg";
import javascriptLogo from "../logos/javascript.svg";
import pythonLogo from "../logos/python.svg";
import typescriptLogo from "../logos/typescript.svg";
import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1 className="skillsHeader">Skills</h1>
      <span className="skillsSpan">
        Click on each skill card to see my experience!
      </span>
      <div className="skillCardContainer">
        <SkillCard logo={reactLogo} name="React" color="#61DAFB" />
        <SkillCard logo={htmlLogo} name="HTML" color="#E34F26" />
        <SkillCard logo={cssLogo} name="CSS" color="#663399" />
        <SkillCard logo={javascriptLogo} name="Javascript" color="#F7DF1E" />
        <SkillCard logo={pythonLogo} name="Python" color="#3776AB" />
        <SkillCard logo={typescriptLogo} name="Typescript" color="#3178C6" />
      </div>
    </div>
  );
};

export default Skills;
