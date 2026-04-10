import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MailIcon from "../icons/mailIcon";
import GithubIcon from "../icons/githubIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import MoonIcon from "../icons/moonIcon";
import SunIcon from "../icons/sunIcon";
import "./navBar.css";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    <nav className="navBar">
      <div className="navBarLeft">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="navIconButton"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
      <div className="navBarCenter">
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/musings">Musings</Link>
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
    </nav>
  );
};

export default NavBar;
