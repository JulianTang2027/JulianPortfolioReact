import React from "react";
import "./musings.css";
import MusingCard from "../components/musingCard";
import ScribbleLayer from "../components/scribbleLayer";
import musings from "../data/musings";

const Musings = () => {
  return (
    <div className="musingsContainer">
      <ScribbleLayer />

      <p className="musingsSubtitle">
        Personal thoughts, opinions, and everything in between.
      </p>
      <div className="musingsEntries">
        {musings.map((m, i) => (
          <MusingCard
            key={m.slug}
            index={i}
            slug={m.slug}
            date={m.date}
            title={m.title}
            body={m.excerpt}
          />
        ))}
      </div>
    </div>
  );
};

export default Musings;
