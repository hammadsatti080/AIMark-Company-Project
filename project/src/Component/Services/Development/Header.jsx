import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function Header({ title, subtitle }) {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [isTitleTyping, setIsTitleTyping] = useState(true);
  const [isSubtitleTyping, setIsSubtitleTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const location = useLocation();
  const currentPath = location.pathname.split('/').filter(Boolean);

  // Check mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pageTitle = title || "Development";
  const pageSubtitle = subtitle || "Custom software development solutions that drive innovation, efficiency, and competitive advantage.";

  // Typewriter effect for title
  useEffect(() => {
    if (currentTitleIndex < pageTitle.length) {
      const timer = setTimeout(() => {
        setDisplayedTitle(prev => prev + pageTitle[currentTitleIndex]);
        setCurrentTitleIndex(prev => prev + 1);
      }, isMobile ? 60 : 80);

      return () => clearTimeout(timer);
    } else {
      setIsTitleTyping(false);
      setTimeout(() => setIsSubtitleTyping(true), 300);
    }
  }, [currentTitleIndex, pageTitle, isMobile]);

  // Typewriter effect for subtitle
  useEffect(() => {
    if (isSubtitleTyping && currentSubtitleIndex < pageSubtitle.length) {
      const timer = setTimeout(() => {
        setDisplayedSubtitle(prev => prev + pageSubtitle[currentSubtitleIndex]);
        setCurrentSubtitleIndex(prev => prev + 1);
      }, isMobile ? 20 : 30);

      return () => clearTimeout(timer);
    }
  }, [currentSubtitleIndex, pageSubtitle, isSubtitleTyping, isMobile]);

  // Reset typing when title or subtitle changes
  useEffect(() => {
    setDisplayedTitle("");
    setDisplayedSubtitle("");
    setCurrentTitleIndex(0);
    setCurrentSubtitleIndex(0);
    setIsTitleTyping(true);
    setIsSubtitleTyping(false);
  }, [title, subtitle]);

  // Dynamic breadcrumb generation
  const generateBreadcrumbs = () => {
    const breadcrumbs = [
      { path: "/", label: "Home" },
      { path: "/services", label: "Services" }
    ];

    // Add current page
    if (title) {
      breadcrumbs.push({ path: location.pathname, label: title, isCurrent: true });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="service-header"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        padding: isMobile ? "25px 0" : "40px 0",
        borderBottom: "2px solid rgba(255,255,255,0.1)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{
        width: isMobile ? "92%" : "80%",
        maxWidth: "1200px",
      }}>
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          flexWrap: "wrap",
          gap: isMobile ? "15px" : "20px",
        }}>
          {/* Left Section - Title + Subtitle */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              flex: isMobile ? "none" : "1 1 300px",
              minWidth: isMobile ? "100%" : "300px",
              width: "100%",
            }}
          >
            <h1
              className="fw-bold mb-2"
              style={{
                fontSize: isMobile ? "1.6rem" : "2.3rem",
                lineHeight: "1.3",
                color: "#ffffff",
                margin: isMobile ? "0 0 8px 0" : "0 0 10px 0",
                fontWeight: "700",
                minHeight: isMobile ? "auto" : "60px",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {displayedTitle}
              {isTitleTyping && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{
                    display: "inline-block",
                    width: "3px",
                    height: isMobile ? "1.1em" : "1.2em",
                    backgroundColor: "#10b981", // Green color for development
                    marginLeft: "4px",
                    verticalAlign: "middle",
                  }}
                />
              )}
            </h1>
            <p
              style={{
                fontSize: isMobile ? "0.9rem" : "1rem",
                color: "rgba(255,255,255,0.9)",
                maxWidth: "600px",
                lineHeight: "1.5",
                margin: "0",
                fontWeight: "400",
                minHeight: isMobile ? "auto" : "50px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {displayedSubtitle}
              {isSubtitleTyping && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: isMobile ? "0.9em" : "1em",
                    backgroundColor: "#34d399", // Lighter green for development
                    marginLeft: "2px",
                    verticalAlign: "middle",
                  }}
                />
              )}
            </p>
          </motion.div>

          {/* Right Section - Breadcrumb */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "6px" : "8px",
              fontSize: isMobile ? "0.85rem" : "0.95rem",
              flexWrap: "wrap",
              justifyContent: isMobile ? "flex-start" : "flex-end",
              width: isMobile ? "100%" : "auto",
              marginTop: isMobile ? "5px" : "0",
            }}
          >
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={breadcrumb.path}>
                {index > 0 && (
                  <FaChevronRight style={{ 
                    fontSize: isMobile ? "0.7rem" : "0.8rem", 
                    color: "rgba(255,255,255,0.6)",
                    opacity: 0.8,
                    flexShrink: 0,
                  }} />
                )}
                {breadcrumb.isCurrent ? (
                  <span
                    style={{
                      fontWeight: "600",
                      color: "#ffffff",
                      padding: isMobile ? "2px 0" : "0",
                    }}
                  >
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    to={breadcrumb.path}
                    className="breadcrumb-link"
                    style={{
                      textDecoration: "none",
                      color: "rgba(255,255,255,0.8)",
                      transition: "0.3s",
                      fontWeight: "500",
                      padding: isMobile ? "2px 0" : "0",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.8)")}
                  >
                    {breadcrumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 1200px) {
            .service-header > div {
              width: 90% !important;
            }
          }

          @media (max-width: 992px) {
            .service-header h1 {
              font-size: 2rem !important;
            }
            .service-header p {
              font-size: 0.95rem !important;
            }
          }

          @media (max-width: 768px) {
            .service-header > div {
              width: 92% !important;
            }
            
            .service-header h1 {
              font-size: 1.6rem !important;
              min-height: auto !important;
              line-height: 1.3 !important;
            }
            
            .service-header p {
              font-size: 0.9rem !important;
              max-width: 100% !important;
              min-height: auto !important;
              line-height: 1.5 !important;
            }
            
            .breadcrumb-links {
              gap: 6px !important;
              font-size: 0.85rem !important;
              margin-top: 8px !important;
            }
          }

          @media (max-width: 480px) {
            .service-header {
              padding: 20px 0 !important;
            }
            
            .service-header > div {
              width: 94% !important;
            }
            
            .service-header h1 {
              font-size: 1.4rem !important;
              margin-bottom: 6px !important;
            }
            
            .service-header p {
              font-size: 0.85rem !important;
              line-height: 1.4 !important;
            }
            
            .breadcrumb-links {
              gap: 4px !important;
              font-size: 0.8rem !important;
            }
          }

          @media (max-width: 360px) {
            .service-header h1 {
              font-size: 1.3rem !important;
            }
            
            .service-header p {
              font-size: 0.82rem !important;
            }
            
            .breadcrumb-links {
              font-size: 0.78rem !important;
              gap: 3px !important;
            }
          }

          /* Hover effects for better interaction */
          .breadcrumb-link:hover {
            transform: translateY(-1px);
          }

          /* Touch-friendly links for mobile */
          .breadcrumb-link {
            -webkit-tap-highlight-color: transparent;
          }

          /* Smooth transitions for all elements */
          .service-header * {
            transition: all 0.3s ease;
          }

          /* Better touch targets for mobile */
          @media (max-width: 768px) {
            .breadcrumb-link {
              padding: 4px 0 !important;
              margin: -4px 0 !important;
            }
          }
        `}
      </style>
    </motion.div>
  );
}