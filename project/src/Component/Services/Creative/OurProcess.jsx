import React from "react";
import { motion } from "framer-motion";

export default function OurProcess() {
  const steps = [
    {
      step: "01",
      title: "Research & Discovery",
      desc: "We dive deep into your brand, audience, and industry to uncover insights that guide the creative direction.",
    },
    {
      step: "02",
      title: "Strategy & Concept",
      desc: "We craft a visual and strategic blueprint aligning design, messaging, and user goals for maximum impact.",
    },
    {
      step: "03",
      title: "Design & Development",
      desc: "Our team transforms ideas into engaging visuals, motion graphics, and interactive experiences that inspire.",
    },
    {
      step: "04",
      title: "Delivery & Growth",
      desc: "We launch, analyze, and refine — ensuring your brand continues to evolve and stand out across every platform.",
    },
  ];

  return (
    <section
      className="our-process-section"
      style={{
        backgroundColor: "#ffffff",
        color: "#0d1b2a",
        padding: "80px 0",
      }}
    >
      {/* 🔹 Heading */}
      <div style={{ textAlign: "center", marginBottom: "60px", width: "90%", maxWidth: "1200px", margin: "0 auto 60px auto" }}>
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: "700",
            marginBottom: "15px",
            color: "#0d1b2a",
          }}
        >
          Our Process
        </h2>
        <p
          style={{
            color: "rgba(0,0,0,0.7)",
            fontSize: "1.05rem",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          A creative, transparent workflow that transforms strategy into stunning
          results — from concept to execution.
        </p>
      </div>

      {/* 🔹 Steps Container */}
      <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto" }}>
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              marginBottom: "30px",
              gap: "30px",
            }}
            className="process-step-row"
          >
            {/* Left Sub-div - Step Number and Title */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
              style={{
                flex: "0 1 35%",
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                borderRadius: "20px",
                padding: "35px 30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                minHeight: "180px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background decorative element */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "80px",
                  height: "80px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                }}
              />
              
              {/* Step Number */}
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "#60a5fa",
                  marginBottom: "8px",
                  letterSpacing: "1px",
                }}
              >
                STEP {item.step}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "700",
                  color: "#ffffff",
                  margin: "0",
                  lineHeight: "1.3",
                }}
              >
                {item.title}
              </h3>
            </motion.div>

            {/* Right Sub-div - Description */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
              style={{
                flex: "0 1 65%",
                background: "#ffffff",
                borderRadius: "20px",
                padding: "35px 30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                minHeight: "180px",
                position: "relative",
              }}
            >
              {/* Description */}
              <p
                style={{
                  color: "rgba(0,0,0,0.8)",
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  margin: "0",
                  fontWeight: "400",
                }}
              >
                {item.desc}
              </p>

              {/* Step indicator line */}
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "4px",
                  height: "60%",
                  background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                  borderRadius: "2px",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Responsive Styling */}
      <style>
        {`
          .process-step-row:hover .motion-div {
            transform: translateY(-3px);
          }

          @media (max-width: 1024px) {
            .our-process-section h2 {
              font-size: 2.2rem !important;
            }
            
            .process-step-row {
              gap: 25px !important;
            }
            
            .process-step-row [style*="padding: 35px 30px"] {
              padding: 30px 25px !important;
            }
            
            .process-step-row h3 {
              font-size: 1.5rem !important;
            }
          }

          @media (max-width: 768px) {
            .our-process-section {
              padding: 60px 0 !important;
            }
            
            .our-process-section > div {
              width: 95% !important;
            }
            
            .our-process-section h2 {
              font-size: 2rem !important;
            }
            
            .process-step-row {
              flex-direction: column !important;
              gap: 20px !important;
              margin-bottom: 40px !important;
            }
            
            .process-step-row > div {
              flex: 1 1 100% !important;
              width: 100% !important;
            }
            
            .process-step-row [style*="padding: 35px 30px"] {
              padding: 25px 20px !important;
              min-height: 150px !important;
            }
            
            .process-step-row h3 {
              font-size: 1.4rem !important;
            }
            
            .process-step-row p {
              font-size: 1rem !important;
              line-height: 1.6 !important;
            }
          }

          @media (max-width: 480px) {
            .our-process-section {
              padding: 50px 0 !important;
            }
            
            .our-process-section > div {
              width: 98% !important;
            }
            
            .our-process-section h2 {
              font-size: 1.8rem !important;
            }
            
            .our-process-section p {
              font-size: 1rem !important;
            }
            
            .process-step-row {
              margin-bottom: 30px !important;
            }
            
            .process-step-row [style*="padding: 35px 30px"] {
              padding: 20px 18px !important;
              min-height: 140px !important;
            }
            
            .process-step-row h3 {
              font-size: 1.3rem !important;
            }
            
            .process-step-row p {
              font-size: 0.95rem !important;
            }
          }

          @media (max-width: 360px) {
            .our-process-section h2 {
              font-size: 1.6rem !important;
            }
            
            .process-step-row h3 {
              font-size: 1.2rem !important;
            }
            
            .process-step-row p {
              font-size: 0.9rem !important;
            }
          }

          /* Smooth transitions */
          .process-step-row > div {
            transition: all 0.3s ease;
          }
          
          .process-step-row > div:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
          }
        `}
      </style>
    </section>
  );
}