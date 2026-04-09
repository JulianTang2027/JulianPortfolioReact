import React from "react";
import profilePic from "../images/profilepic.jpeg";
import TypingEffect from "./TypingEffect";
import "./aboutme.css";

const Aboutme = () => {
  return (
    <div className="aboutmeContainer">
      <div className="aboutmeGreeting">
        <TypingEffect lines={["Hey, I'm Julian"]} speed={60} />
      </div>
      <div className="aboutmeTextContainer">
        <div>
          <p>
            I'm a Sophomore studying at Northwestern University, pursuing a
            B.S. in Computer Science. I'm interested in full stack software
            engineering, and I'm particularly fascinated by UI/UX design.
          </p>
          <div className="aboutmeLocations">
            <div className="locationCard">
              <span className="locationLabel">From</span>
              <iframe
                title="Singapore"
                src="https://maps.google.com/maps?q=Singapore&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="120"
                style={{ border: 0, borderRadius: "6px" }}
                allowFullScreen=""
                loading="lazy"
              />
              <span className="locationName">Singapore</span>
            </div>
            <div className="locationCard">
              <span className="locationLabel">Based in</span>
              <iframe
                title="Evanston"
                src="https://maps.google.com/maps?q=Evanston,IL&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="120"
                style={{ border: 0, borderRadius: "6px" }}
                allowFullScreen=""
                loading="lazy"
              />
              <span className="locationName">Evanston, IL</span>
            </div>
          </div>
        </div>
        <img src={profilePic} alt="Picture of me" />
      </div>
    </div>
  );
};

export default Aboutme;
