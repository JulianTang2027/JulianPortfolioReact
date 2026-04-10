import React from "react";

const scribbles = [
  // squiggly line — top left
  {
    path: "M5,25 C15,10 25,40 35,20 C45,0 55,45 65,25 C75,5 85,40 95,22",
    vb: "0 0 100 50",
    x: "5%",
    y: "8%",
    delay: 0,
  },
  // loose spiral — top right
  {
    path: "M50,25 C55,15 65,15 65,25 C65,35 50,38 45,28 C40,18 48,8 60,8 C72,8 78,20 75,32 C72,44 55,48 42,40",
    vb: "0 0 100 55",
    x: "82%",
    y: "5%",
    delay: 1,
  },
  // crosshatch scribble — far right middle
  {
    path: "M10,10 L40,40 M25,10 L55,40 M10,25 L40,10 M25,40 L55,25",
    vb: "0 0 65 50",
    x: "88%",
    y: "45%",
    delay: 2,
  },
  // looping cursive swirl — far left middle
  {
    path: "M5,30 C15,10 25,10 30,25 C35,40 20,45 18,30 C16,15 30,5 42,15 C54,25 45,42 35,38",
    vb: "0 0 60 50",
    x: "3%",
    y: "50%",
    delay: 3,
  },
  // zigzag — bottom right
  {
    path: "M5,40 L20,10 L35,40 L50,10 L65,40 L80,10 L95,40",
    vb: "0 0 100 50",
    x: "75%",
    y: "78%",
    delay: 4,
  },
  // wiggly cloud shape — bottom left
  {
    path: "M15,35 C5,30 5,18 15,15 C18,5 35,5 38,15 C42,8 58,8 58,18 C68,18 68,32 58,35 Z",
    vb: "0 0 75 45",
    x: "8%",
    y: "82%",
    delay: 5,
  },
  // small starburst — right edge
  {
    path: "M25,5 L28,18 L40,12 L30,22 L42,28 L28,27 L25,42 L22,27 L8,28 L20,22 L8,12 L22,18 Z",
    vb: "0 0 50 47",
    x: "92%",
    y: "70%",
    delay: 6,
  },
  // long wavy underline — bottom center
  {
    path: "M0,8 C12,3 18,14 30,8 C42,2 48,14 60,8 C72,2 78,14 90,8 C102,2 108,14 120,8",
    vb: "0 0 120 18",
    x: "30%",
    y: "92%",
    delay: 7,
  },
];

const ScribbleLayer = () => {
  return (
    <div className="scribbleLayer">
      {scribbles.map((s, i) => (
        <svg
          key={i}
          className="scribble"
          viewBox={s.vb}
          style={{ left: s.x, top: s.y }}
        >
          <path d={s.path} style={{ animationDelay: `${s.delay}s` }} />
        </svg>
      ))}
    </div>
  );
};

export default ScribbleLayer;
