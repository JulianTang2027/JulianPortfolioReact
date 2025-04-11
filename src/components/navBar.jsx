import React from "react";
import "../styles/navBar.css";
import MailIcon from "../icons/mailIcon";
import GithubIcon from "../icons/githubIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import SunIcon from "../icons/sunIcon";

const NavBar = () => {
  return (
    <div className="navBar">
      <ul>
        <li></li>
        <li></li>
        <SunIcon />
        <MailIcon />
        <GithubIcon />
        <LinkedinIcon />
      </ul>
    </div>
  );
};

export default NavBar;
