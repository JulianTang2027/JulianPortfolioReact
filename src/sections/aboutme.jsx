import React from "react";
import TypingEffect from "./TypingEffect";
import "./aboutme.css";

const Aboutme = () => {
  return (
    <div className="aboutmeContainer">
      <div className="aboutmeGreeting">
        <TypingEffect lines={["Hey, I'm Julian"]} speed={60} />
      </div>
      <p className="aboutmeSubtitle">
        Aspiring Software Engineer, Singaporean, and Sushi Lover.
      </p>
      <p className="aboutmeBio">
        Welcome to my personal portfolio! I'm Julian, a Junior at Northwestern
        University, pursuing a B.S. in Computer Science. I'm particularly
        interested in AI and building products for people to use!
      </p>
      <p className="aboutmeLocationLine">Singapore → Evanston, IL</p>
    </div>
  );
};

export default Aboutme;
