import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Scroll() {
  const sections = ["hero", "seo", "companies", "fun-facts", "email", "analytics", "ads"];
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Track which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "30px",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        zIndex: 1000,
      }}
    >
      {sections.map((section, index) => (
        <motion.button
          key={index}
          onClick={() => scrollToSection(section)}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            border: "2px solid #fff",
            background: activeSection === section ? "#00b4d8" : "transparent",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}
