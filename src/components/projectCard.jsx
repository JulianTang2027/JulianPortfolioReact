import React from "react";
import "./projectCard.css";

const ProjectCard = ({ title, description, tags = [], link, icon, index = 0, span, highlightColor }) => {
  const delay = index * 0.12;
  const spanClass = span ? `projectBlock span-${span}` : "projectBlock";

  const content = (
    <div
      className={spanClass}
      style={{
        animationDelay: `${delay}s`,
        borderColor: highlightColor || undefined,
      }}
    >
      <div className="blockContent" style={{ animationDelay: `${delay + 0.35}s` }}>
        {icon && <div className="blockIcon">{icon}</div>}
        <h3>{title}</h3>
        <p>{description}</p>
        {tags.length > 0 && (
          <div className="blockTags">
            {tags.map((tag, i) => (
              <span key={i} className="blockTag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="blockLink">
        {content}
      </a>
    );
  }

  return content;
};

export default ProjectCard;
