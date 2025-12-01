import React, { useState } from "react";

export default function OwnerInfo() {
  const [readMore, setReadMore] = useState([false, false, false, false]); // now 4 owners

  const toggleReadMore = (index) => {
    setReadMore((prev) => prev.map((val, i) => (i === index ? !val : false)));
  };

  const owners = [
    {
      name: "John Doe",
      image: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty2.webp",
      aboutTitle: "About John",
      aboutText: [
        "Hello, I’m Misty Farghaly, CEO and Founder of AI Mark Labs. My mission is simple: to empower businesses with AI-driven marketing strategies that create measurable impact. At AI Mark Labs, we blend technology with creativity to ensure every campaign delivers not just engagement, but real conversions and revenue growth.",
        "Success isn’t just about clicks and traffic; it’s about building loyal customer relationships and sustainable growth. Let’s work together to unlock the full potential of your brand in today’s competitive digital landscape.",
      ],
    },
    {
      name: "Jane Smith",
      image: "https://aimarklabs.com/assets/img/demos/business-consulting/About-AIML.webp",
      aboutTitle: "About Jane",
      aboutText: [
        "In a world where digital noise is everywhere, we help brands cut through the clutter with smart, AI-powered marketing solutions. AI Mark Labs isn’t just another marketing agency—we’re your strategic partner in driving real, measurable growth.",
        "By leveraging cutting-edge AI technology, data-driven insights, and creativity, we build marketing strategies that deliver tangible results. Whether you’re a startup or an established brand, we ensure every campaign is optimized for success.",
      ],
    },
    {
      name: "Alex Johnson",
      image: "https://aimarklabs.com/assets/img/demos/business-consulting/team/Misty2.webp", // Replace with actual image
      aboutTitle: "About Alex",
      aboutText: [
        "Alex Johnson is our AI strategy lead, ensuring all campaigns are powered by intelligent insights. He combines analytics with creative thinking to maximize ROI for clients.",
        "With a deep understanding of AI tools and digital marketing trends, Alex ensures that every project achieves measurable business impact.",
      ],
    },
    {
      name: "Emily Davis",
      image: "https://aimarklabs.com/assets/img/demos/business-consulting/About-AIML.webp", // Replace with actual image
      aboutTitle: "About Emily",
      aboutText: [
        "Emily Davis is our creative director, responsible for designing campaigns that resonate with audiences. Her creativity and attention to detail ensure a consistent and impactful brand presence.",
        "She works closely with our AI and analytics teams to turn insights into visually compelling campaigns that deliver measurable results.",
      ],
    },
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "10px",
    padding: "40px 20px",
    background: "#fff",
    boxSizing: "border-box",
    flexWrap: "wrap",
  };

  const columnStyle = {
    flex: "1 1 300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "20px",
  };

  const imageStyle = {
    width: "220px",
    height: "260px",
    borderRadius: "20px",
    objectFit: "cover",
    marginBottom: "20px",
    border: "4px solid linear-gradient(135deg, #0d1b2a, #1b263b)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  };

  const nameStyle = {
    fontSize: "1.8rem",
    fontWeight: "700",
    background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "15px",
  };

  const buttonStyle = {
    padding: "12px 25px",
    fontSize: "1rem",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
    color: "#fff",
    transition: "all 0.3s ease",
    marginBottom: "15px",
  };

  const buttonHoverStyle = { transform: "scale(1.05)" };

  const paragraphStyle = (open) => ({
    maxHeight: open ? "1000px" : "0px",
    opacity: open ? 1 : 0,
    transform: open ? "translateY(0px)" : "translateY(20px)",
    overflow: "hidden",
    transition: "all 0.6s ease",
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#1b263b",
    textAlign: "left",
    width: "90%",
    background: open ? "rgba(0,0,0,0.03)" : "transparent",
    padding: open ? "15px 20px" : "0",
    borderRadius: "10px",
    boxShadow: open ? "0 4px 12px rgba(0,0,0,0.1)" : "none",
  });

  const responsiveStyles = `
    @media (max-width: 1200px) {
      .owner-container { justify-content: center; gap: 15px; }
      .owner-column { flex: 1 1 280px; }
    }
    @media (max-width: 992px) {
      .owner-container { flex-direction: column; align-items: center; }
      .owner-column { width: 100%; flex: none; margin-bottom: 25px; }
      .owner-image { width: 180px !important; height: 220px !important; }
    }
    @media (max-width: 600px) {
      .owner-image { width: 160px !important; height: 200px !important; }
    }
  `;

  return (
    <div className="owner-container" style={containerStyle}>
      <style>{responsiveStyles}</style>

      {owners.map((owner, index) => (
        <div key={index} className="owner-column" style={columnStyle}>
          <img
            src={owner.image}
            alt={owner.name}
            className="owner-image"
            style={imageStyle}
          />
          <h2 style={nameStyle}>{owner.name}</h2>
          <button
            style={buttonStyle}
            onClick={() => toggleReadMore(index)}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            {readMore[index] ? "Read Less" : "Read More"}
          </button>
          <div style={paragraphStyle(readMore[index])}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "10px", color: "#0d1b2a" }}>
              {owner.aboutTitle}
            </h3>
            {owner.aboutText.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
