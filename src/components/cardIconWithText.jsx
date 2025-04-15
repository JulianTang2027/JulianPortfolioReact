import React from "react";
import CardIcon from "../icons/cardIcon";
import TypingEffect from "../sections/TypingEffect";
import "./cardIconWithText.css";

const CardIconWithText = () => {
  return (
    <div className="cardIconContainer">
      <CardIcon className="cardIcon" />
      <span className="typingText">Julian Tang</span>
    </div>
  );
};

export default CardIconWithText;
