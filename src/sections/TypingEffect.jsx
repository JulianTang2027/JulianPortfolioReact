import React, { useState, useEffect } from "react";
import "./typingEffect.css";

const TypingEffect = ({ lines = [], speed = 100 }) => {
  const [displayLines, setDisplayLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    // Initialize displayLines with empty strings for each line
    if (displayLines.length === 0 && lines.length > 0) {
      setDisplayLines(lines.map(() => ""));
    }
  }, [lines, displayLines.length]);

  useEffect(() => {
    if (lines.length === 0) return;

    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        // Still typing the current line
        const timeout = setTimeout(() => {
          setDisplayLines((prev) => {
            const newLines = [...prev];
            newLines[currentLineIndex] =
              newLines[currentLineIndex] + currentLine[currentCharIndex];
            return newLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        // Current line is complete, move to the next line
        if (currentLineIndex < lines.length - 1) {
          const timeout = setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
            setCurrentCharIndex(0);
          }, speed * 2); // Slightly longer pause between lines

          return () => clearTimeout(timeout);
        } else {
          // All lines are complete
          setIsTypingComplete(true);
        }
      }
    }
  }, [currentLineIndex, currentCharIndex, lines, speed]);

  return (
    <div className="typing-effect">
      {displayLines.map((line, index) => (
        <h1 key={index}>
          {line}
          {currentLineIndex === index && !isTypingComplete && (
            <span className="cursor">|</span>
          )}
          {currentLineIndex === index &&
            isTypingComplete &&
            index === lines.length - 1 && (
              <span className="cursor blink">|</span>
            )}
        </h1>
      ))}
    </div>
  );
};

export default TypingEffect;
