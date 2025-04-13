import React, { useState, useEffect } from "react";
import "../styles/navBar.css";
import MailIcon from "../icons/mailIcon";
import GithubIcon from "../icons/githubIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import MoonIcon from "../icons/moonIcon";
import SunIcon from "../icons/sunIcon";
import PaletteIcon from "../icons/paletteIcon";
import "./navBar.css";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="navBar">
      <div className="navBarLeft">
        <a onClick={toggleTheme}>{isDarkMode ? <SunIcon /> : <MoonIcon />}</a>
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
