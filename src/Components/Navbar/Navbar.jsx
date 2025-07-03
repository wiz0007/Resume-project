import React from "react";
import "./Navbar.css";
import ContactDropdown from "./ContactDropdown";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <h1 className="res">Resume</h1>
      <ul className="nav-links">
        <li onClick={() => scrollToSection("eduHeading")}>Education</li>
        <li onClick={() => scrollToSection("expHeading")}>Experience</li>
        <li onClick={() => scrollToSection("skillHeading")}>Skills</li>
        <li onClick={() => scrollToSection("contactHeading")}>Contact</li>
      </ul>
    <ContactDropdown/>
    </nav>
  );
};

export default Navbar;

