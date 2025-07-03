import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="resume-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p>
          Created by <a style={{color:'rgb(255, 227, 227)'}} href="https://in.linkedin.com/in/ayushmaan-mishra-254020257"><strong>Ayushmaan Mishra</strong></a> —{" "}
          <a href="mailto:ayush8171wiz@gmail.com">ayush8171wiz.com</a> |{" "}
          <a href="tel:+919149084611">+91 9149084611</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
