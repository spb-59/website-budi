import React from "react";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-80 flex flex-col z-50">
      <ul>
        {/* Scroll to the 'Services' section */}
           <li
          onClick={() => scrollToSection("About")}>About
      </li>

        {/* Scroll to the 'About' section */}
        <li
          onClick={() => scrollToSection("Services")}>Services
      </li>
    </ul>
    </nav >
  );
}
