import React from "react";

const Checkpoint = (header, description) => {
  return (
    <div>
      <div>
        <h2>{header}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Checkpoint;
