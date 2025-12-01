import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Creativeintro() {
  return (
    <section
      className="digital-strategy-intro"
      style={{
 
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
        padding: "30px 0",
        margin: "0",
        width: "100%",
      }}
    >
      {/* 🔹 Decorative background glow */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "200px",
          height: "200px",
        
          borderRadius: "50%",
          filter: "blur(35px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "220px",
          height: "220px",
   
          borderRadius: "50%",
          filter: "blur(35px)",
        }}
      />

      <div className="position-relative" style={{ 
        padding: "0",
        margin: "0 auto",
        width: "90%",
        maxWidth: "1400px"
      }}>
        {/* 🔹 Main Container with Flex Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "space-between",
            gap: "20px",
            margin: "0",
            width: "100%",
          }}
          className="main-content-container"
        >
          {/* Left Card - 35% - Heading */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "30px 25px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              flex: "0 1 35%",
              minHeight: "280px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#ffffff",
                margin: "0",
                textAlign: "center",
                lineHeight: "1.3",
              }}
            >
              How Can a{" "}
              <span
                style={{
                  color: "#60a5fa",
                }}
              >
                Strong Creative Design
              </span>{" "}
              Elevate Your Brand?
            </h2>
          </motion.div>

          {/* Arrow Separator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "0 0 auto",
              padding: "0 10px",
            }}
            className="arrow-container"
          >
            <FaArrowRight 
              size={35} 
              color="#60a5fa"
              style={{
                filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.5))"
              }}
            />
          </motion.div>

          {/* Right Card - 65% - Text */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "30px 25px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              flex: "0 1 65%",
              minHeight: "280px",
              display: "flex",
              alignItems: "center",
              margin: "0",
            }}
          >
            <div style={{ width: "100%" }}>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  textAlign: "left",
                  margin: "0 0 15px 0",
                  opacity: "0.9",
                }}
              >
                A strong creative foundation is essential for building a compelling brand identity. Without cohesive visuals, engaging content, and strategic storytelling, your brand risks getting lost in the noise. At AI Mark Labs, we craft innovative designs and high-impact content that resonate with your audience.
              </p>
              <p
                style={{
                  color: "#ffffff",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  textAlign: "left",
                  margin: "0",
                  opacity: "0.9",
                }}
              >
                By combining cutting-edge design, compelling narratives, and audience-driven insights, we ensure that every creative asset strengthens your brand presence. From branding and content creation to motion design and UI/UX, our tailored approach enhances engagement, builds trust, and drives conversions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ✅ Responsive Tweaks */}
      <style>
        {`
          /* Large screens - 90% width */
          @media (min-width: 1400px) {
            .digital-strategy-intro > div {
              width: 90% !important;
              max-width: 1400px !important;
            }
          }

          @media (max-width: 1399px) {
            .digital-strategy-intro > div {
              width: 92% !important;
            }
          }

          @media (max-width: 1200px) {
            .digital-strategy-intro > div {
              width: 94% !important;
              padding: 0 20px !important;
            }
            
            .main-content-container {
              gap: 15px !important;
            }
            
            .digital-strategy-intro h2 {
              font-size: 1.8rem !important;
            }
            
            .digital-strategy-intro p {
              font-size: 1rem !important;
            }
            
            .digital-strategy-intro [style*="padding: 30px 25px"] {
              padding: 25px 20px !important;
            }
            
            .digital-strategy-intro [style*="min-height: 280px"] {
              min-height: 260px !important;
            }
          }

          @media (max-width: 992px) {
            .digital-strategy-intro > div {
              width: 96% !important;
            }
            
            .digital-strategy-intro h2 {
              font-size: 1.7rem !important;
            }
            
            .digital-strategy-intro p {
              font-size: 0.98rem !important;
              line-height: 1.65 !important;
            }
            
            .main-content-container > div {
              flex: 0 1 100% !important;
            }
            
            .digital-strategy-intro [style*="flex: 0 1 35%"] {
              flex: 0 1 38% !important;
            }
            
            .digital-strategy-intro [style*="flex: 0 1 65%"] {
              flex: 0 1 62% !important;
            }
          }

          @media (max-width: 768px) {
            .digital-strategy-intro {
              padding: 25px 0 !important;
            }
            
            .digital-strategy-intro > div {
              width: 98% !important;
              padding: 0 15px !important;
            }
            
            .main-content-container {
              flex-direction: column !important;
              gap: 15px !important;
            }
            
            .digital-strategy-intro h2 {
              font-size: 1.6rem !important;
              text-align: center !important;
            }
            
            .digital-strategy-intro p {
              text-align: left !important;
              font-size: 0.95rem !important;
              line-height: 1.6 !important;
            }
            
            .main-content-container > div {
              flex: 1 1 100% !important;
              width: 100% !important;
            }
            
            .arrow-container {
              transform: rotate(90deg) !important;
              padding: 5px 0 !important;
            }
            
            .arrow-container svg {
              width: 30px !important;
              height: 30px !important;
            }
            
            .digital-strategy-intro [style*="min-height: 280px"] {
              min-height: auto !important;
            }
            
            .digital-strategy-intro [style*="padding: 30px 25px"] {
              padding: 25px 20px !important;
            }
          }

          @media (max-width: 576px) {
            .digital-strategy-intro {
              padding: 20px 0 !important;
            }
            
            .digital-strategy-intro > div {
              width: 100% !important;
              padding: 0 10px !important;
            }
            
            .digital-strategy-intro h2 {
              font-size: 1.4rem !important;
              padding: 20px 15px !important;
            }
            
            .digital-strategy-intro p {
              font-size: 0.9rem !important;
              line-height: 1.55 !important;
              margin-bottom: 12px !important;
            }
            
            .digital-strategy-intro [style*="padding: 30px 25px"] {
              padding: 20px 15px !important;
            }
            
            .arrow-container svg {
              width: 25px !important;
              height: 25px !important;
            }
          }

          @media (max-width: 400px) {
            .digital-strategy-intro h2 {
              font-size: 1.3rem !important;
              padding: 18px 12px !important;
            }
            
            .digital-strategy-intro p {
              font-size: 0.85rem !important;
              line-height: 1.5 !important;
            }
            
            .digital-strategy-intro [style*="padding: 30px 25px"] {
              padding: 18px 12px !important;
            }
          }

          /* Smooth hover effects */
          .main-content-container > [style*="background: rgba(255,255,255,0.1)"] {
            transition: all 0.3s ease;
          }
          
          .main-content-container > [style*="background: rgba(255,255,255,0.1)"]:hover {
            background: rgba(255,255,255,0.15) !important;
            border-color: rgba(255,255,255,0.2) !important;
            transform: translateY(-3px);
          }

          /* Arrow animation */
          .arrow-container svg {
            transition: all 0.3s ease;
          }
          
          .main-content-container:hover .arrow-container svg {
            transform: scale(1.1);
            filter: drop-shadow(0 0 12px rgba(96, 165, 250, 0.7)) !important;
          }

          /* Remove any default margins */
          .digital-strategy-intro * {
            box-sizing: border-box;
          }
        `}
      </style>
    </section>
  );
}