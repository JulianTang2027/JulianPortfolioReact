import React from "react";
import profilePic from "../images/profilepic.jpeg";
import "./aboutme.css";

const Aboutme = () => {
  return (
    <div className="aboutmeBackground">
      <div className="aboutmeContainer">
        <h1>Hey, I'm Julian 👋</h1>
        <span>📍 Evanston, IL</span>
        <div className="aboutmeTextContainer">
          <p>
            Hey there! I'm Julian, a Sophomore studying at Northwestern
            University. I'm in the process of attaining my bachelors of Science
            in Computer Science. I'm interested in full stack software
            engineering, and I'm particularly fascinated by UI/UX design!
          </p>
          <img src={profilePic} alt="Picture of me" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
