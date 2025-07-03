import React from "react";
import useInView from "../Hooks/UseInView";
import "./Skill.css";

const Skill = () => {
  const [ref, isInView] = useInView(1);

  const technicalSkills = ["MS Word", "MS PowerPoint", "MS Excel"];
  const softSkills = ["Smart Work", "Conflict Resolution", "Time Management", "Quick Learner"];

  return (
    <div ref={ref} className={`skills-badges-container ${isInView ? "slide-in-left" : ""}`}>
      <div className="skills-section">
        <h3>🛠 Technical Skills</h3>
        <div className="badge-wrapper">
          {technicalSkills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>🤝 Soft Skills</h3>
        <div className="badge-wrapper">
          {softSkills.map((skill, index) => (
            <span key={index} className="skill-badge soft">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;


