import React from "react";
import { Link, useParams } from "react-router-dom";
import { getMusingBySlug } from "../data/musings";
import ScribbleLayer from "../components/scribbleLayer";
import "./musings.css";
import "./musingDetail.css";

const MusingDetail = () => {
  const { slug } = useParams();
  const musing = getMusingBySlug(slug);

  if (!musing) {
    return (
      <div className="musingDetailContainer">
        <ScribbleLayer />
        <Link to="/musings" className="musingBackLink">
          ← Back to musings
        </Link>
        <p className="musingNotFound">That musing doesn't exist.</p>
      </div>
    );
  }

  const paragraphs = musing.body.split("\n\n").filter(Boolean);

  return (
    <div className="musingDetailContainer">
      <ScribbleLayer />
      <Link to="/musings" className="musingBackLink">
        ← Back to musings
      </Link>
      <article className="musingDetailEntry">
        <span className="musingDetailDate">{musing.date}</span>
        <h1 className="musingDetailTitle">{musing.title}</h1>
        {paragraphs.map((para, i) => (
          <p key={i} className="musingDetailBody">
            {para}
          </p>
        ))}
      </article>
    </div>
  );
};

export default MusingDetail;
