import React from "react";
import Checkpoint from "./checkpoint";
import "./timeline.css";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="checkpoint">
        <div>
          <h2>Singapore Police Force</h2>
          <p>My national service type shit</p>
        </div>
      </div>
      <div className="checkpoint">
        <div>
          <h2>Northwestern University</h2>
          <p>On god</p>
        </div>
      </div>
      <div className="checkpoint">
        <div>
          <h2>Prudential Assurance Company Singapore</h2>
          <p>
            Implemented Google Analytics tracking for Company’s core financial
            platform used by 5,000 financial consultants in order to gather data
            on load times, page views and specific user events Developed
            function that dynamically handles page element tracking for Google
            Analytics, automating event-triggering process Wrote comprehensive
            Jest tests to ensure functionality of key features of financial
            platform webpage
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
