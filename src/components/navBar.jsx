import React from "react";
import "../styles/navBar.css";
import MailIcon from "../icons/mailIcon";
import GithubIcon from "../icons/githubIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import SunIcon from "../icons/sunIcon";
import PaletteIcon from "../icons/paletteIcon";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBarLeft">
        <a>
          <SunIcon />
        </a>
        <a>
          <PaletteIcon />
        </a>
      </div>
      <div className="navBarRight">
        <a
          href="mailto:juliantang2027@u.northwestern.edu"
          target="_blank"
          rel="noreferrer"
        >
          <MailIcon />
        </a>
        <a
          href="https://github.com/JulianTang2027"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/julian-sebastian-tang/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
