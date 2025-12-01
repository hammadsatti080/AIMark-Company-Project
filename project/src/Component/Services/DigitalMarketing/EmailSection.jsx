import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function EmailSection() {
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

  return (
    <section
      id="email"
      style={{
        minHeight: "100vh",
        padding: isMobile ? "40px 5%" : "80px 5%",
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        background: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        pointerEvents: "none"
      }}></div>

      <div style={{
        maxWidth: "1400px",
        width: "100%",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "40px" : "60px",
        alignItems: "center"
      }}>
        {/* Left Content Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            padding: isMobile ? "20px 0" : "40px 0",
            order: isMobile ? 2 : 1 // Change order for mobile
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              borderRadius: "20px",
              padding: isMobile ? "25px" : "40px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: isMobile ? "2.2rem" : "3.5rem",
                fontWeight: "800",
                marginBottom: "20px",
                background: "linear-gradient(45deg, #fff, #e0e7ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "1.2",
                textAlign: isMobile ? "center" : "left"
              }}
            >
              Email Marketing That Converts
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                fontSize: isMobile ? "1.1rem" : "1.3rem",
                lineHeight: "1.7",
                marginBottom: "30px",
                color: "rgba(255, 255, 255, 0.9)",
                fontWeight: "300",
                textAlign: isMobile ? "center" : "left"
              }}
            >
              Drive engagement, build relationships, and boost conversions with our data-driven email marketing strategies. 
              We create campaigns that your audience actually wants to read.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "30px"
              }}
            >
              {[
                { icon: "🎯", text: "Personalized Campaigns" },
                { icon: "📈", text: "Performance Analytics" },
                { icon: "🔄", text: "Automated Workflows" },
                { icon: "📱", text: "Mobile-Optimized Designs" },
                { icon: "💰", text: "High ROI Strategies" },
                { icon: "📊", text: "A/B Testing" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: isMobile ? 0 : 10 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 15px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "12px",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <span style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>{feature.icon}</span>
                  <span style={{ 
                    fontSize: isMobile ? "0.95rem" : "1.1rem", 
                    fontWeight: "500",
                    color: "rgba(255, 255, 255, 0.9)"
                  }}>
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: "15px",
                marginBottom: "30px"
              }}
            >
              {[
                { number: "42%", label: "Higher Open Rates" },
                { number: "3.5x", label: "More Conversions" },
                { number: "89%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: isMobile ? 1 : 1.05 }}
                  style={{
                    textAlign: "center",
                    padding: isMobile ? "15px" : "20px",
                    background: "rgba(255, 255, 255, 0.08)",
                    borderRadius: "15px",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <div style={{
                    fontSize: isMobile ? "1.5rem" : "2rem",
                    fontWeight: "800",
                    background: "linear-gradient(45deg, #fff, #4CC9F0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "5px"
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: isMobile ? "0.8rem" : "0.9rem",
                    color: "rgba(255, 255, 255, 0.8)",
                    fontWeight: "500"
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "15px",
                flexWrap: "wrap"
              }}
            >
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            order: isMobile ? 1 : 2 // Image comes first on mobile
          }}
        >
          <motion.div
            whileHover={{ scale: isMobile ? 1 : 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
              border: "3px solid rgba(255, 255, 255, 0.2)",
              width: "100%",
              maxWidth: isMobile ? "400px" : "100%"
            }}
          >
            <img
              src="https://www.clutchcreativeco.com/wp-content/uploads/2022/03/email-marketing-tips.jpg"
              alt="Email Marketing Strategies"
              style={{
                width: "100%",
                height: isMobile ? "300px" : "500px",
                objectFit: "cover",
                display: "block"
              }}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
              }}
            />
            
            {/* Image Overlay Effect */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(45deg, rgba(30, 60, 114, 0.1), rgba(42, 82, 152, 0.1))",
              pointerEvents: "none"
            }}></div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: isMobile ? 1 : 1.1, rotate: isMobile ? 0 : 5 }}
              style={{
                position: "absolute",
                top: isMobile ? "15px" : "20px",
                right: isMobile ? "15px" : "20px",
                background: "linear-gradient(45deg, #4CC9F0, #3A86FF)",
                color: "white",
                padding: isMobile ? "10px 15px" : "12px 20px",
                borderRadius: "12px",
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                fontWeight: "700",
                boxShadow: "0 8px 20px rgba(76, 201, 240, 0.4)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                textAlign: "center"
              }}
            >
              {isMobile ? "🚀 98%" : "🚀 98% Delivery Rate"}
            </motion.div>
          </motion.div>

          {/* Decorative Elements - Hidden on mobile */}
          {!isMobile && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "-20px",
                  width: "100px",
                  height: "100px",
                  background: "linear-gradient(45deg, #4CC9F0, #7209B7)",
                  borderRadius: "50%",
                  filter: "blur(20px)",
                  opacity: 0.3,
                  zIndex: -1
                }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-30px",
                  width: "150px",
                  height: "150px",
                  background: "linear-gradient(45deg, #F72585, #3A86FF)",
                  borderRadius: "50%",
                  filter: "blur(30px)",
                  opacity: 0.2,
                  zIndex: -1
                }}
              />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}