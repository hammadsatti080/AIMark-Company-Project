import React, { useState, useEffect } from "react";
import { ChevronDown, Clock } from "react-bootstrap-icons";

export default function QA() {
  const [showFAQ, setShowFAQ] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);
  const [showOfficeTiming, setShowOfficeTiming] = useState(true);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for mobile responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const faqs = [
    { question: "AI-Driven Precision", answer: "Every decision is backed by data and analytics to maximize ROI." },
    { question: "Tailored Strategies", answer: "No one-size-fits-all approach—we craft marketing solutions specific to your brand." },
    { question: "Growth-Focused Results", answer: "We go beyond vanity metrics and focus on real business impact." },
    { question: "Expert Team", answer: "A passionate team of AI specialists, digital marketers, and creative minds dedicated to your success." },
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ];

  // Mobile Responsive Styles
  const styles = {
    mainContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "15px" : "20px",
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "20px 15px" : "40px 20px",
      minHeight: "30vh",
    },
    leftDiv: {
      flex: isMobile ? "none" : "1",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      width: "100%",
    },
    rightDiv: {
      flex: isMobile ? "none" : "1",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      width: "100%",
    },
    heading: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: isMobile ? "1.4rem" : "1.8rem",
      fontWeight: "700",
      cursor: "pointer",
      background: "linear-gradient(135deg, #2c3e50, #34495e)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "white",
      backgroundClip: "text",
      padding: isMobile ? "12px 0" : "15px 0",
      userSelect: "none",
      borderBottom: "2px solid #ecf0f1",
      transition: "all 0.3s ease",
    },
    question: (delay, isOpen) => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "12px 15px" : "15px 20px",
      background: isOpen ? "linear-gradient(135deg, #ecf0f1, #d5dbdb)" : "#ffffff",
      borderRadius: "12px",
      marginBottom: "8px",
      cursor: "pointer",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      transform: showFAQ ? "translateY(0)" : "translateY(10px)",
      opacity: showFAQ ? 1 : 0,
      transition: `all 0.3s ease ${delay}s, background 0.3s ease`,
      fontWeight: isOpen ? 600 : 500,
      border: isOpen ? "1px solid #bdc3c7" : "1px solid #f8f9fa",
      fontSize: isMobile ? "0.9rem" : "1rem",
    }),
    answer: (isOpen) => ({
      maxHeight: isOpen ? "200px" : "0",
      opacity: isOpen ? 1 : 0,
      padding: isOpen ? (isMobile ? "12px 15px" : "15px 20px") : "0 15px",
      transition: "all 0.3s ease",
      fontSize: isMobile ? "0.85rem" : "0.95rem",
      lineHeight: "1.5",
      color: "#2c3e50",
      overflow: "hidden",
      background: "#f8f9fa",
      borderRadius: "0 0 12px 12px",
      margin: isOpen ? "0 0 12px 0" : "0",
      border: "1px solid #ecf0f1",
      borderTop: "none",
    }),
    icon: (isOpen) => ({
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s ease",
      color: "#2c3e50",
      flexShrink: 0,
    }),
    officeContent: {
      maxHeight: showOfficeTiming ? "300px" : "0",
      overflow: "hidden",
      transition: "all 0.4s ease",
      fontSize: isMobile ? "0.85rem" : "0.95rem",
      background: "#ffffff",
      borderRadius: "12px",
      padding: showOfficeTiming ? (isMobile ? "15px" : "20px") : "0 15px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      border: "1px solid #ecf0f1",
    },
    officeRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "10px 12px" : "12px 15px",
      borderRadius: "8px",
      background: "#f8f9fa",
      transition: "all 0.3s ease",
      marginBottom: "6px",
      border: "1px solid #e9ecef",
      fontSize: isMobile ? "0.85rem" : "0.95rem",
    },
    officeRowHover: {
      background: "linear-gradient(135deg, #e8f4f8, #f0f8ff)",
      transform: "translateY(-1px)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      borderColor: "#d6eaf8",
    },
    clockIcon: {
      marginRight: "8px",
      color: "#2c3e50",
    },
    // Mobile specific styles
    mobileSection: {
      marginBottom: isMobile ? "20px" : "0",
    },
    touchFeedback: {
      active: {
        transform: "scale(0.98)",
        transition: "transform 0.1s ease",
      }
    }
  };

  // Handle touch feedback for mobile
  const [activeTouch, setActiveTouch] = useState(null);

  const handleTouchStart = (index, type) => {
    if (isMobile) {
      setActiveTouch({ index, type });
    }
  };

  const handleTouchEnd = () => {
    setActiveTouch(null);
  };

  return (
    <div style={styles.mainContainer}>
      {/* Left Section - FAQ */}
      <div style={{ ...styles.leftDiv, ...styles.mobileSection }}>
        <div 
          style={{
            ...styles.heading,
            ...(activeTouch?.type === 'faqHeader' ? styles.touchFeedback.active : {})
          }}
          onClick={() => setShowFAQ(!showFAQ)}
          onTouchStart={() => handleTouchStart(null, 'faqHeader')}
          onTouchEnd={handleTouchEnd}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && setShowFAQ(!showFAQ)}
        >
          <span>Why Choose AI MarkLabs?</span>
          <ChevronDown size={isMobile ? 20 : 24} style={styles.icon(showFAQ)} />
        </div>
        
        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              style={{
                ...styles.question(index * 0.1, openIndex === index),
                ...(activeTouch?.index === index && activeTouch?.type === 'faq' ? styles.touchFeedback.active : {})
              }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              onTouchStart={() => handleTouchStart(index, 'faq')}
              onTouchEnd={handleTouchEnd}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <ChevronDown size={isMobile ? 16 : 20} style={styles.icon(openIndex === index)} />
            </div>
            <div style={styles.answer(openIndex === index)}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

      {/* Right Section - Office Hours */}
      <div style={styles.rightDiv}>
        <div 
          style={{
            ...styles.heading,
            ...(activeTouch?.type === 'officeHeader' ? styles.touchFeedback.active : {})
          }}
          onClick={() => setShowOfficeTiming(!showOfficeTiming)}
          onTouchStart={() => handleTouchStart(null, 'officeHeader')}
          onTouchEnd={handleTouchEnd}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && setShowOfficeTiming(!showOfficeTiming)}
        >
          <span>
            <Clock size={isMobile ? 18 : 22} style={styles.clockIcon} /> 
            Office Hours
          </span>
          <ChevronDown size={isMobile ? 20 : 24} style={styles.icon(showOfficeTiming)} />
        </div>
        
        <div style={styles.officeContent}>
          {officeHours.map((row, index) => (
            <div
              key={index}
              style={{
                ...styles.officeRow,
                ...(hoveredRow === index ? styles.officeRowHover : {})
              }}
              onMouseEnter={() => !isMobile && setHoveredRow(index)}
              onMouseLeave={() => !isMobile && setHoveredRow(null)}
              onTouchStart={() => isMobile && setHoveredRow(index)}
              onTouchEnd={() => isMobile && setHoveredRow(null)}
            >
              <span style={{ 
                fontWeight: "500",
                fontSize: isMobile ? "0.85rem" : "0.95rem"
              }}>
                {row.day}
              </span>
              <span style={{ 
                color: row.time === "Closed" ? "#e74c3c" : "#27ae60",
                fontWeight: "600",
                fontSize: isMobile ? "0.85rem" : "0.95rem"
              }}>
                {row.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}