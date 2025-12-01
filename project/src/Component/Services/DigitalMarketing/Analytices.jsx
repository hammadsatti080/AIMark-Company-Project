import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Analytics() {
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Analytics data
  const analyticsData = [
    {
      id: 1,
      title: "Campaign Performance",
      value: "89%",
      description: "Average success rate across all campaigns",
      change: "+12%",
      trend: "up",
      icon: "📊",
      color: "#4CC9F0"
    },
    {
      id: 2,
      title: "ROI Increase",
      value: "3.5x",
      description: "Return on investment compared to last quarter",
      change: "+45%",
      trend: "up",
      icon: "💰",
      color: "#7209B7"
    },
    {
      id: 3,
      title: "Customer Engagement",
      value: "92%",
      description: "Overall customer engagement rate",
      change: "+8%",
      trend: "up",
      icon: "👥",
      color: "#F72585"
    },
    {
      id: 4,
      title: "Conversion Rate",
      value: "24%",
      description: "Average conversion across platforms",
      change: "+15%",
      trend: "up",
      icon: "🎯",
      color: "#3A86FF"
    },
    {
      id: 5,
      title: "Cost Reduction",
      value: "42%",
      description: "Reduction in customer acquisition cost",
      change: "+18%",
      trend: "up",
      icon: "📉",
      color: "#38B000"
    },
    {
      id: 6,
      title: "Growth Rate",
      value: "156%",
      description: "Year-over-year business growth",
      change: "+32%",
      trend: "up",
      icon: "🚀",
      color: "#FF9E00"
    }
  ];

  const insightsData = [
    {
      title: "Top Performing Channel",
      value: "Social Media",
      percentage: "68%",
      description: "Social media drives the highest engagement and conversions"
    },
    {
      title: "Peak Engagement Time",
      value: "2:00 PM - 4:00 PM",
      percentage: "42% higher",
      description: "Optimal time for customer interactions and conversions"
    },
    {
      title: "Best Performing Content",
      value: "Video Content",
      percentage: "3.2x",
      description: "Video generates 3.2x more engagement than text content"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const insightCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="analytics"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #001219 0%, #005f73 50%, #0a9396 100%)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: isMobile ? "40px 5%" : "80px 5%",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 20% 80%, rgba(74, 222, 128, 0.1) 0%, transparent 50%)",
        pointerEvents: "none"
      }}></div>

      <div style={{
        maxWidth: "1400px",
        width: "100%",
        margin: "0 auto"
      }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            textAlign: "center", 
            marginBottom: isMobile ? "40px" : "60px" 
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ 
              fontSize: isMobile ? "2.2rem" : "3.5rem", 
              fontWeight: "800", 
              marginBottom: "20px",
              background: "linear-gradient(45deg, #fff, #4CC9F0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: "1.2"
            }}
          >
            Analytics & Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ 
              maxWidth: "700px", 
              lineHeight: "1.6", 
              fontSize: isMobile ? "1rem" : "1.3rem",
              margin: "0 auto",
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: "300",
              padding: isMobile ? "0 10px" : "0"
            }}
          >
            Track, analyze, and optimize your campaigns with data-driven insights that maximize ROI and drive exponential growth.
          </motion.p>
        </motion.div>

        {/* Main Analytics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(350px, 1fr))",
            gap: isMobile ? "20px" : "30px",
            marginBottom: isMobile ? "50px" : "80px"
          }}
        >
          {analyticsData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ 
                scale: isMobile ? 1 : 1.05,
                y: isMobile ? 0 : -10,
                transition: { duration: 0.3 }
              }}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: "20px",
                padding: isMobile ? "20px" : "30px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer"
              }}
            >
              {/* Background Accent */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: `linear-gradient(90deg, ${item.color}, transparent)`
              }}></div>

              <div style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: isMobile ? "15px" : "20px",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "10px" : "0"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px"
                }}>
                  <div style={{
                    fontSize: isMobile ? "2rem" : "2.5rem",
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      fontWeight: "600",
                      marginBottom: "4px",
                      color: "rgba(255, 255, 255, 0.9)"
                    }}>
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div style={{
                  background: item.trend === "up" ? "rgba(74, 222, 128, 0.2)" : "rgba(248, 113, 113, 0.2)",
                  color: item.trend === "up" ? "#4ADE80" : "#F87171",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: isMobile ? "0.8rem" : "0.9rem",
                  fontWeight: "600",
                  border: `1px solid ${item.trend === "up" ? "rgba(74, 222, 128, 0.3)" : "rgba(248, 113, 113, 0.3)"}`,
                  alignSelf: isMobile ? "flex-start" : "auto"
                }}>
                  {item.change} {item.trend === "up" ? "↗" : "↘"}
                </div>
              </div>

              <div style={{
                fontSize: isMobile ? "2.2rem" : "3rem",
                fontWeight: "800",
                background: `linear-gradient(45deg, #fff, ${item.color})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "10px",
                lineHeight: "1"
              }}>
                {item.value}
              </div>

              <p style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: isMobile ? "0.85rem" : "0.95rem",
                lineHeight: "1.5",
                margin: 0
              }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            borderRadius: "25px",
            padding: isMobile ? "30px 20px" : "50px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
            marginBottom: isMobile ? "30px" : "0"
          }}
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: isMobile ? "1.8rem" : "2.2rem",
              fontWeight: "700",
              marginBottom: isMobile ? "30px" : "40px",
              textAlign: "center",
              background: "linear-gradient(45deg, #4CC9F0, #7209B7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "white",
              backgroundClip: "text"
            }}
          >
            Key Insights & Recommendations
          </motion.h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: isMobile ? "20px" : "30px"
          }}>
            {insightsData.map((insight, index) => (
              <motion.div
                key={index}
                variants={insightCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: isMobile ? 1 : 1.02 }}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  borderRadius: "15px",
                  padding: isMobile ? "20px" : "25px",
                  border: "1px solid rgba(255, 255, 255, 0.1)"
                }}
              >
                <h4 style={{
                  fontSize: isMobile ? "1.1rem" : "1.2rem",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#4CC9F0"
                }}>
                  {insight.title}
                </h4>
                <div style={{
                  fontSize: isMobile ? "1.6rem" : "2rem",
                  fontWeight: "800",
                  marginBottom: "10px",
                  color: "#fff"
                }}>
                  {insight.value}
                </div>
                <div style={{
                  background: "rgba(74, 222, 128, 0.2)",
                  color: "#4ADE80",
                  padding: "4px 12px",
                  borderRadius: "15px",
                  fontSize: isMobile ? "0.8rem" : "0.9rem",
                  fontWeight: "600",
                  display: "inline-block",
                  marginBottom: "15px",
                  border: "1px solid rgba(74, 222, 128, 0.3)"
                }}>
                  {insight.percentage}
                </div>
                <p style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: isMobile ? "0.85rem" : "0.95rem",
                  lineHeight: "1.5",
                  margin: 0
                }}>
                  {insight.description}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(200px, 1fr))",
            gap: isMobile ? "15px" : "20px",
            marginTop: isMobile ? "40px" : "60px",
            textAlign: "center"
          }}
        >
          {[
            { number: "50K+", label: "Data Points Analyzed" },
            { number: "99.9%", label: "Accuracy Rate" },
            { number: "24/7", label: "Real-time Monitoring" },
            { number: "150+", label: "Success Metrics" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              style={{
                padding: isMobile ? "15px" : "20px",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "15px",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}
            >
              <div style={{
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: "800",
                background: "linear-gradient(45deg, #4CC9F0, #F72585)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "8px"
              }}>
                {stat.number}
              </div>
              <div style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                fontWeight: "500"
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}