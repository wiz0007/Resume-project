import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ContactDropdown from "./ContactDropdown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close menu on click
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false); // Close menu on resize
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <h1 className="res">Resume</h1>

      <div className={`${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li onClick={() => scrollToSection("eduHeading")}>Education</li>
          <li onClick={() => scrollToSection("expHeading")}>Experience</li>
          <li onClick={() => scrollToSection("skillHeading")}>Skills</li>
        </ul>
      </div>

      <div className="hamburger" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
        {isMobileMenuOpen ? "✖" : "☰"}
      </div>
      <div className="contact">
        <ContactDropdown/>
      </div>
      
    </nav>
  );
};

export default Navbar;
