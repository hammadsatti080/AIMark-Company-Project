import React from "react";
import { HouseDoor, RocketTakeoff, ShieldCheck } from "react-bootstrap-icons";

export default function Companymission() {
  const cards = [
    {
      heading: "Vision Statement",
      title: "Our Vision",
      desc: "To revolutionize digital marketing by providing businesses with innovative, AI-powered solutions that fuel growth.",
      icon: <RocketTakeoff size={30} color="#ff4d4f" />, // Red-ish
    },
    {
      heading: "Mission Statement",
      title: "Our Mission",
      desc: "To deliver customized, data-driven strategies that produce measurable outcomes and support sustainable business growth.",
      icon: <HouseDoor size={30} color="#40a9ff" />, // Blue
    },
    {
      heading: "Core Values",
      title: "Our Values",
      desc: "We prioritize transparency, agility, and a relentless focus on results, embracing real-time data-driven decision-making.",
      icon: <ShieldCheck size={30} color="#73d13d" />, // Green
    },
  ];

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px",
    padding: "60px 20px",
    background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
    flexWrap: "wrap",
  };

  const cardStyle = {
    flex: "1 1 300px",
    background: "#fff",
    borderRadius: "20px",
    padding: "30px 25px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    cursor: "default",
    opacity: 0,
    transform: "translateY(30px)",
    animation: "fadeUp 0.8s forwards",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center all content horizontally
    textAlign: "center",
  };

  const cardHeadingStyle = {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    justifyContent: "center", // Center icon + heading horizontally
    color: "#0d1b2a",
  };

  const cardTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "15px",
    color: "linear-gradient(135deg, #0d1b2a, #1b263b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const cardDescStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#0d1b2a",
    marginTop: "10px",
  };

  const responsiveStyles = `
    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .company-card:hover {
      transform: translateY(-10px) scale(1.03);
      box-shadow: 0 25px 40px rgba(0,0,0,0.3);
    }

    @media (max-width: 992px) {
      .company-container { 
        flex-direction: column; 
        align-items: center; 
        gap: 0; 
        padding-left: 20px;
        padding-right: 20px;
      }
      .company-card { 
        width: 100%; 
        max-width: 500px; 
        margin: 0 auto; 
        margin-bottom: 20px;
      }
    }

    @media (max-width: 600px) {
      .company-card { padding: 25px 20px; }
    }
  `;

  return (
    <div style={containerStyle} className="company-container">
      <style>{responsiveStyles}</style>
      {cards.map((card, index) => (
        <div
          key={index}
          className="company-card"
          style={{
            ...cardStyle,
            animationDelay: `${index * 0.3}s`,
          }}
        >
          {/* Centered heading with icon */}
          <div style={cardHeadingStyle}>
            {card.icon} {card.heading}
          </div>
          <h3 style={cardTitleStyle}>{card.title}</h3>
          <p style={cardDescStyle}>{card.desc}</p>
        </div>
      ))}
    </div>
  );
}
