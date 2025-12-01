import React from "react";

export default function AttractiveNavbar() {
  const navbarStyle = {
    width: "100%",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(45deg, #6a11cb, #2575fc)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "25px",
    fontSize: "18px",
    color: "white",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "0.3s",
  };

  return (
    <div style={navbarStyle}>
      

      {/* Links Row */}
      <div style={linkContainerStyle}>
        <a href="#" style={linkStyle}>Creative</a>
        <a href="#" style={linkStyle}>Digital</a>
        <a href="#" style={linkStyle}>Development</a>
        <a href="#" style={linkStyle}>ADA</a>
        <a href="#" style={linkStyle}>DigitalMarketing</a>
      </div>
    </div>
  );
}
