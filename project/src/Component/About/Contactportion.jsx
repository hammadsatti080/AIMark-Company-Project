import React from "react";
import { FaArrowDown } from "react-icons/fa";

export default function Contactportion() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "60px 20px",
    background: "#fff",
  };

  const textStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    textAlign: "center",
    color: "#0d1b2a",
    opacity: 0,
    transform: "translateY(20px)",
    animation: "fadeUp 1s forwards",
  };

  const arrowStyle = {
    fontSize: "1.8rem",
    color: "#0d1b2a",
    animation: "bounce 1.5s infinite",
  };

  const buttonStyle = {
    padding: "14px 40px",
    fontSize: "1.2rem",
    fontWeight: "600",
    borderRadius: "40px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
    color: "#fff",
    transition: "all 0.3s ease, box-shadow 0.3s ease",
  };

  const buttonHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  };

  const responsiveStyles = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(8px); }
      60% { transform: translateY(4px); }
    }

    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 992px) {
      .cta-text { font-size: 1.5rem; }
      .cta-arrow { font-size: 1.5rem; }
      .cta-button { font-size: 1rem; padding: 12px 30px; }
    }

    @media (max-width: 600px) {
      .cta-text { font-size: 1.2rem; }
      .cta-arrow { font-size: 1.2rem; }
      .cta-button { font-size: 0.95rem; padding: 10px 25px; }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{responsiveStyles}</style>

      {/* Text */}
      <div className="cta-text" style={textStyle}>
        Ready to take your business to the next level? Let's build something extraordinary.
      </div>

      {/* Arrow */}
      <FaArrowDown className="cta-arrow" style={arrowStyle} />

      {/* Button */}
      <button
        className="cta-button"
        style={buttonStyle}
        onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
        onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
      >
        Get Started
      </button>
    </div>
  );
}
