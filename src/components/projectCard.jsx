import React from "react";
import "./projectCard.css";

const ProjectCard = ({ title, description, tags = [], link, icon, index = 0, span }) => {
  const delay = index * 0.25;
  const spanClass = span ? `projectBlock span-${span}` : "projectBlock";

  const content = (
    <div className={spanClass} style={{ animationDelay: `${delay}s` }}>
      <svg className="blockBorder" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect
          x="0.5"
          y="0.5"
          width="99"
          height="99"
          style={{ animationDelay: `${delay}s` }}
        />
      </svg>
      <div className="blockContent" style={{ animationDelay: `${delay + 0.6}s` }}>
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
