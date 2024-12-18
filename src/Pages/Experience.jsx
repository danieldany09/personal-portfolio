// Experience.jsx
import React from 'react';
import data from "../constants/index.json";

const Experience = () => {
  return (
    <div id="Experience" className="experience-container">
      <div className="experience-header">
        <svg 
          viewBox="0 0 24 24" 
          className="header-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v16" />
        </svg>
        <h2>Experience</h2>
      </div>

      <div className="experience-grid">
        {data.experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="card-header">
              <h3>{exp.company}</h3>
              <span className="period">{exp.period}</span>
            </div>
            
            <div className="role">{exp.role}</div>
            
            <p className="experience-description">{exp.description}</p>
            
            <div className="tech-stack">
              {exp.techStack.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;