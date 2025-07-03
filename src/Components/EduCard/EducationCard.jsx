import React from "react";
import "./EducationCard.css";
import useInView from "../Hooks/UseInView";


const EducationCard = ({
  degree,
  image,
  eduLink,
  institution,
  year,
  description,
}) => {
    const [ref, isInView] = useInView(1);
  
  return (
    <div ref={ref} className={`education-card ${isInView ? "slide-in-left" : ""}`}>
      <h3 className="degree">{degree}</h3>
      
      <a href={eduLink}>
        <img className="eduImage" src={image} alt="img" />
        <p className="institution">{institution}</p>
      </a>
      <p className="year">{year}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default EducationCard;
