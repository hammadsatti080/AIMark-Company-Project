import React from "react";

export default function HeaderLeft() {
 

  const animatedLine = {
    display: "block",
    height: "4px",
    width: "80px",
    margin: "8px auto 0 auto",
    borderRadius: "2px",
    background: "linear-gradient(90deg, #00f0ff, #0077ff)",
    animation: "slideLine 2s infinite alternate",
  };

  const textStyle = {
    fontSize: "1.15rem",
    color: "#cfd8e3",
    lineHeight: "1.6",
    maxWidth: "500px",
    marginBottom: "25px",
  };

  const highlightsContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "10px",
  };

  const highlightCard = {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "12px",
    padding: "15px 20px",
    minWidth: "140px",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const highlightNumber = {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#00d4ff",
    marginBottom: "4px",
  };

  const highlightText = {
    fontSize: "0.9rem",
    color: "#cfd8e3",
    lineHeight: "1.3",
  };

  const leftStyle = {
    flex: "0 0 50%",
    display: "flex",

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px 40px",
    boxSizing: "border-box",
    position: "relative",
    background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
    color: "#fff",
  };

  const highlights = [
    { number: "10+", text: "Years of Experience" },
    { number: "200+", text: "Projects Delivered" },
    { number: "50+", text: "Happy Clients" },
    { number: "15", text: "Awards & Recognitions" },
  ];

  return (
    <div className="header-left" style={leftStyle}>
      <h1 style={{paddingTop:"40px"}}>AI Mark Lab</h1>
      <span style={animatedLine}></span>
      <p style={textStyle}>
        Empowering businesses through <span style={{color:"#00f0ff"}}>AI</span>, <span style={{color:"#00f0ff"}}>Design</span> and <span style={{color:"#00f0ff"}}>Digital Transformation</span>. Creativity meets intelligence to craft exceptional experiences.
      </p>

      <div style={highlightsContainer}>
        {highlights.map((item, index) => (
          <div key={index} className="highlight-card" style={highlightCard}>
            <div style={highlightNumber}>{item.number}</div>
            <div style={highlightText}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}