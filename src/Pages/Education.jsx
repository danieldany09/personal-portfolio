import React from 'react';
import data from "../constants/index.json";

const Education = () => {
  return (
    <div id="Education" className="timeline-container">
      <div className="section-header">
        <svg 
          viewBox="0 0 24 24" 
          className="section-icon"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
        <h2>Education</h2>
      </div>

      <div className="timeline-line">
        {data.education.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.institution}</h3>
              <p className="degree">{item.degree}</p>
              <p className="degree">Percentage - {item.percentage}</p>
              <div className="timeline-period">
                <svg 
                  viewBox="0 0 24 24" 
                  className="period-icon"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {item.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;