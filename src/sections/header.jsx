import React from "react";
import NavBar from "../components/navBar";
// import HeaderText from "../components/headerText";
import "./header.css";
import TypingEffect from "./TypingEffect";
import ArrowdownIcon from "../icons/arrowdownIcon";

const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <TypingEffect lines={["Julian Tang"]} speed={80} />
      <div className="subtitleContainer">
        <h2 className="subtitleText">Software Engineer</h2>
      </div>
      <div className="arrowContainer">
        <ArrowdownIcon />
      </div>
    </div>
  );
};

export default Header;
