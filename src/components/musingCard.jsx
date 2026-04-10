import React from "react";
import { Link } from "react-router-dom";
import "./musingCard.css";

const MusingCard = ({ slug, title, date, body, index = 0 }) => {
  const delay = index * 0.18;

  return (
    <Link to={`/musings/${slug}`} className="musingCardLink">
      <div className="musingCard" style={{ animationDelay: `${delay}s` }}>
        {date && <span className="musingDate">{date}</span>}
        {title && <h3 className="musingTitle">{title}</h3>}
        <p className="musingBody">{body}</p>
        <svg
          className="musingUnderline"
          viewBox="0 0 200 8"
          preserveAspectRatio="none"
        >
          <path
            d="M0,4 C30,2 50,6 80,4 C110,2 140,6 170,3 C185,2 195,5 200,4"
            style={{ animationDelay: `${delay + 0.3}s` }}
          />
        </svg>
      </div>
    </Link>
  );
};

export default MusingCard;
