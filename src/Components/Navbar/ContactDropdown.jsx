import React, { useState } from "react";
import "./ContactDropdown.css";

const ContactDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="contact-dropdown">
      <button className="contact-button" onClick={toggleDropdown}>
        Contact Here 
        {/* {isOpen ? "▲" : "▼"} */}
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="mailto:rawatanurag0987@gmail.com">📧 Email</a></li>
          <li><a href="tel:+916395991258">📞 Phone</a></li>
          <li><a href="https://in.linkedin.com/in/anurag-rawat-722118287" target="_blank" rel="noreferrer">🔗 LinkedIn</a></li>
        </ul>
      )}
    </div>
  );
};

export default ContactDropdown;
