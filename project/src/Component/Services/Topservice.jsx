import React, { useState, useEffect } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function Topservice() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      id: 1,
      title: "Digital Strategy",
      description: "Data-driven digital strategies designed to maximize your brand's growth, engagement, and ROI. By leveraging in-depth analytics, AI insights, and market research, we create tailored strategies that drive measurable success.",
      shortDesc: "Data-driven strategies to maximize your brand's growth and ROI with AI-powered insights.",
      icon: "🎯",
      link: "/Digital",
      external: false
    },
    {
      id: 2,
      title: "Creative Marketing",
      description: "Innovative and visually compelling creative solutions that captivate audiences and elevate brand identity. From striking logos and graphic design to engaging content and high-impact video production.",
      shortDesc: "Innovative creative solutions that captivate audiences and elevate brand identity.",
      icon: "✨",
      link: "/Creative",
      external: false
    },
    {
      id: 3,
      title: "Development Company",
      description: "Cutting-edge web and app development designed for seamless, high-performance digital experiences. From intuitive websites to powerful mobile apps, create fast, scalable, and user-friendly solutions.",
      shortDesc: "Cutting-edge web and app development for high-performance digital experiences.",
      icon: "💻",
      link: "/Development",
      external: false
    },
    {
      id: 4,
      title: "Digital Marketing Experts",
      description: "AI-powered digital marketing strategies designed to drive traffic, boost engagement, and maximize conversions. Advanced data analytics, automation, and AI-driven insights for targeted campaigns.",
      shortDesc: "AI-powered marketing strategies to drive traffic, boost engagement, and maximize conversions.",
      icon: "🚀",
      link: "/DigitalMarketing",
      external: false
    },
    {
        id: 5,
        title: "ADA",
        description: "AI-powered digital marketing strategies designed to drive traffic, boost engagement, and maximize conversions. Advanced data analytics, automation, and AI-driven insights for targeted campaigns.",
        shortDesc: "AI-powered marketing strategies to drive traffic, boost engagement, and maximize conversions.",
        icon: "🚀",
        link: "/ADA",
        external: false
      }
  ];

  // Handle navigation for internal routes
  const handleNavigation = (service) => {
    if (service.external) {
      window.open(service.link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(service.link);
    }
  };

  // Handle whole card click (optional)
  const handleCardClick = (service) => {
    handleNavigation(service);
  };

  // ReadMore Button Component
  const ReadMoreButton = ({ service, isHovered }) => {
    const buttonContent = (
      <>
        Read More
        <ArrowRight 
          size={16} 
          style={{
            transform: isHovered ? "translateX(5px)" : "translateX(0)",
            transition: "transform 0.3s ease",
          }} 
        />
      </>
    );

    if (service.external) {
      return (
        <a 
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          style={getButtonStyles(isHovered)}
          onMouseEnter={() => !isMobile && setHoveredCard(service.id)}
          onMouseLeave={() => !isMobile && setHoveredCard(null)}
          onClick={(e) => e.stopPropagation()}
        >
          {buttonContent}
        </a>
      );
    } else {
      return (
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleNavigation(service);
          }}
          style={getButtonStyles(isHovered)}
          onMouseEnter={() => !isMobile && setHoveredCard(service.id)}
          onMouseLeave={() => !isMobile && setHoveredCard(null)}
        >
          {buttonContent}
        </button>
      );
    }
  };

  // Style functions
  const getButtonStyles = (isHovered) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: isHovered 
      ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
      : "transparent",
    color: isHovered ? "#ffffff" : "#0f172a",
    border: "2px solid #0f172a",
    padding: "10px 20px",
    borderRadius: "25px",
    fontWeight: "600",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: isHovered ? "translateX(5px)" : "translateX(0)",
    textDecoration: "none",
    outline: "none",
    fontFamily: "inherit",
  });

  const getCardStyles = (isHovered, index) => ({
    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
    borderRadius: "20px",
    padding: isMobile ? "20px" : "30px",
    boxShadow: isHovered 
      ? "0 20px 40px rgba(0,0,0,0.3), 0 0 0 2px #3b82f6"
      : "0 10px 30px rgba(0,0,0,0.2)",
    transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
    transition: "all 0.4s ease",
    opacity: 0,
    animation: `fadeInUp 0.6s ease ${index * 0.2}s forwards`,
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  });

  const getCardGlowStyles = (isHovered) => ({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: isHovered 
      ? "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)"
      : "linear-gradient(90deg, #0f172a, #1e293b)",
    transition: "all 0.4s ease",
  });

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.7);
          }
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
        }
      `}</style>
      
      <section style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        minHeight: "100vh",
        padding: isMobile ? "40px 15px" : "80px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: "center",
          marginBottom: isMobile ? "30px" : "50px",
        }}>
          <h2 style={{
            fontSize: isMobile ? "2rem" : "3rem",
            fontWeight: "700",
            background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "15px",
          }}>
            Our Services
          </h2>
          <p style={{
            fontSize: isMobile ? "1rem" : "1.2rem",
            color: "#cbd5e1",
            maxWidth: "600px",
            margin: "0 auto",
          }}>
            Comprehensive digital solutions powered by cutting-edge technology and creative excellence
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          gap: isMobile ? "20px" : "30px",
          maxWidth: "1200px",
          width: "100%",
        }}>
          {services.map((service, index) => (
            <div
              key={service.id}
              style={getCardStyles(hoveredCard === service.id, index)}
              onMouseEnter={() => !isMobile && setHoveredCard(service.id)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onTouchStart={() => isMobile && setHoveredCard(service.id)}
              onTouchEnd={() => isMobile && setHoveredCard(null)}
              onClick={() => handleCardClick(service)}
            >
              {/* Glow Effect */}
              <div style={getCardGlowStyles(hoveredCard === service.id)} />
              
              {/* Icon */}
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "15px",
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                marginBottom: "20px",
                boxShadow: "0 8px 20px rgba(15, 23, 42, 0.3)",
              }}>
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 style={{
                fontSize: isMobile ? "1.3rem" : "1.5rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "15px",
              }}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p style={{
                fontSize: isMobile ? "0.9rem" : "1rem",
                color: "#475569",
                lineHeight: "1.6",
                marginBottom: "25px",
              }}>
                {isMobile ? service.shortDesc : service.description}
              </p>
              
              {/* Read More Button */}
              <ReadMoreButton 
                service={service} 
                isHovered={hoveredCard === service.id} 
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}