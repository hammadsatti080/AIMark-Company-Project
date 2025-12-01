import React from "react";

export default function HeaderRight() {
  const images = [
    {
      src: "/About/first.jpg",
      title: "Intelligent Strategy",
      desc: "AI-powered strategies that drive measurable growth and innovation.",
    },
    {
      src: "/About/Second.jpg",
      title: "Creative Execution",
      desc: "Transforming bold ideas into engaging digital realities.",
    },
    {
      src: "/About/Third.jpg",
      title: "Advanced Analytics",
      desc: "Harnessing data insights for next-generation performance.",
    },
    {
      src: "/About/Four.jpg",
      title: "Seamless Integration",
      desc: "Blending design and intelligence to empower digital ecosystems.",
    },
  ];

  const repeatedImages = [...images, ...images];

  const rightStyle = {
    flex: "0 0 50%",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(180deg, #102742, #0a1a2f)",
    boxShadow: "inset 0 0 30px rgba(0,0,0,0.4)",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
  };

  const imageStrip = {
    display: "flex",
    width: `${repeatedImages.length * 100}%`,
    height: "100%",
    animation: "scrollImages 25s linear infinite",
  };

  const imageWrapper = {
    position: "relative",
    width: `${100 / repeatedImages.length}%`,
    height: "100%",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  };

  const overlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.35)",
    zIndex: 1,
  };

  const infoBox = {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    right: "20px",
    zIndex: 2,
    background: "rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "15px 18px",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  };

  return (
    <div className="header-right" style={rightStyle}>
      <div style={imageStrip}>
        {repeatedImages.map((item, index) => (
          <div key={index} style={imageWrapper}>
            <img src={item.src} alt={item.title} style={imageStyle} />
            <div style={overlay}></div>
            <div className="info-box" style={infoBox}>
              <h3 style={{ fontSize:"1.2rem", fontWeight:"700", marginBottom:"4px", color:"#00d4ff" }}>{item.title}</h3>
              <p style={{ fontSize:"0.95rem", color:"#d6e2f0", lineHeight:"1.4" }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}