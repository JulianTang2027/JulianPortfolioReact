import React, { useState, useEffect, useCallback } from "react";
import "./codeGhost.css";

const snippets = [
  { text: "{ }", x: "4%", y: "8%" },
  { text: "< />", x: "90%", y: "12%" },
  { text: "=> {", x: "6%", y: "45%" },
  { text: "print(\"Hello World\")", x: "78%", y: "50%" },
  { text: "python -m venv .venv", x: "5%", y: "80%" },
  { text: "// TODO", x: "82%", y: "78%" },
  { text: "npm install", x: "45%", y: "90%" },
  { text: "const x = 42;", x: "75%", y: "30%" },
  { text: "git commit -m", x: "10%", y: "65%" },
  { text: "import React", x: "60%", y: "6%" },
];

const CHAR_DELAY = 60;
const HOLD = 3000;
const ERASE_DELAY = 30;
const STAGGER = 800;

const GhostSnippet = ({ text, x, y, startDelay }) => {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState("waiting");

  const cycle = useCallback(() => {
    setPhase("typing");
    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setPhase("erasing");
          let j = text.length;
          const eraseInterval = setInterval(() => {
            j--;
            setDisplay(text.slice(0, j));
            if (j <= 0) {
              clearInterval(eraseInterval);
              setTimeout(() => cycle(), 2000);
            }
          }, ERASE_DELAY);
        }, HOLD);
      }
    }, CHAR_DELAY);
  }, [text]);

  useEffect(() => {
    const timeout = setTimeout(() => cycle(), startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay, cycle]);

  return (
    <span
      className="codeGhostSnippet"
      style={{ left: x, top: y }}
    >
      {display}
      {phase !== "waiting" && <span className="ghostCursor">|</span>}
    </span>
  );
};

const CodeGhost = () => {
  return (
    <div className="codeGhostLayer">
      {snippets.map((s, i) => (
        <GhostSnippet
          key={i}
          text={s.text}
          x={s.x}
          y={s.y}
          startDelay={i * STAGGER}
        />
      ))}
    </div>
  );
};

export default CodeGhost;
