import React from "react";
import "./ExpCard.css";
import useInView from "../Hooks/UseInView";

const ExperienceCard = ({
  role,
  image,
  expLink,
  company,
  duration,
  description,
}) => {
  const [ref, isInView] = useInView(1);
  return (
    <div ref={ref} className={`experience-card ${isInView? "slide-in-left" : ""}`}>
      <h3 className="role">{role}</h3>
      <a href={expLink}>
        <img className="expImage" src={image} alt="img" />
        <p className="company">{company}</p>
      </a>
      <p className="duration">{duration}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default ExperienceCard;
