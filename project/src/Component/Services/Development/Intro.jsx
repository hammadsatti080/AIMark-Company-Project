import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      className="development-intro py-5"
      style={{
        background: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #0d1b2a 100%)",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* 🔹 Enhanced background elements - Dark theme */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "260px",
          height: "260px",
          background: "linear-gradient(135deg, rgba(13,110,253,0.15) 0%, rgba(27,38,59,0.2) 100%)",
          borderRadius: "50%",
          filter: "blur(45px)",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "280px",
          height: "280px",
          background: "linear-gradient(135deg, rgba(108,117,125,0.15) 0%, rgba(27,38,59,0.2) 100%)",
          borderRadius: "50%",
          filter: "blur(45px)",
          zIndex: -1,
        }}
      />

      {/* 🔹 Main container with 90% width */}
      <div className="container-fluid position-relative" style={{ width: "90%", margin: "0 auto" }}>
        {/* 🔹 Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2
            style={{
              marginTop:"20px",
              fontSize: "2.0rem",
              fontWeight: "800",
              color: "#ffffff",
              textAlign:"center",
              marginBottom: "0.5rem",
              letterSpacing: "-0.5px",
              textShadow: "0 2px 10px rgba(255,255,255,0.1)",
              lineHeight: "1.2",
            }}
          >
            Why Choose Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #adb5bd 0%, #e9ecef 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 10px rgba(255,255,255,0.2)",
              }}
            >
              Development Services
            </span>{" "}
            ?
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              height: "4px",
              background: "linear-gradient(90deg, #6c757d 0%, #adb5bd 100%)",
              borderRadius: "2px",
              margin: "1rem auto 0",
            }}
          />
        </motion.div>

        {/* 🔹 MAIN DIV with two sub-divs in row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "3rem",
            alignItems: "stretch",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          {/* 🔹 LEFT SUB-DIV - Cards Section */}
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Custom Solutions Card */}
            <motion.div
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{
                background: "linear-gradient(135deg, rgba(33,37,41,0.95) 0%, rgba(52,58,64,0.85) 100%)",
                borderRadius: "20px",
                padding: "2rem 1.5rem",
                boxShadow: "0 15px 35px rgba(0,0,0,0.4), 0 5px 15px rgba(0,0,0,0.3)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                height: "250px",
                border: "1px solid rgba(255,255,255,0.15)",
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(15px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Card accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background: "linear-gradient(90deg, #6c757d 0%, #adb5bd 100%)",
                }}
              />
              
              {/* Card icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                viewport={{ once: true }}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  boxShadow: "0 8px 20px rgba(255,255,255,0.1)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2"/>
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.div>

              <h4
                style={{
                  color: "#ffffff",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  letterSpacing: "-0.2px",
                }}
              >
                Custom Solutions
              </h4>
              
              <p
                style={{
                  color: "#e9ecef",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  marginBottom: "0",
                  flex: 1,
                }}
              >
                We build tailored software solutions that address your specific business challenges. 
                Our custom development ensures that you get exactly what you need to streamline 
                operations and drive growth.
              </p>
            </motion.div>

            {/* Modern Technologies Card */}
            <motion.div
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{
                background: "linear-gradient(135deg, rgba(33,37,41,0.95) 0%, rgba(52,58,64,0.85) 100%)",
                borderRadius: "20px",
                padding: "2rem 1.5rem",
                boxShadow: "0 15px 35px rgba(0,0,0,0.4), 0 5px 15px rgba(0,0,0,0.3)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                height: "250px",
                border: "1px solid rgba(255,255,255,0.15)",
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(15px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Card accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background: "linear-gradient(90deg, #adb5bd 0%, #e9ecef 100%)",
                }}
              />
              
              {/* Card icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                viewport={{ once: true }}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  boxShadow: "0 8px 20px rgba(255,255,255,0.1)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>

              <h4
                style={{
                  color: "#ffffff",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  letterSpacing: "-0.2px",
                }}
              >
                Modern Technologies
              </h4>
              
              <p
                style={{
                  color: "#e9ecef",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  marginBottom: "0",
                  flex: 1,
                }}
              >
                Our team stays ahead of the curve with the latest technologies and frameworks. 
                We leverage modern tools to build scalable, secure, and high-performance 
                applications that stand the test of time.
              </p>
            </motion.div>
          </div>

          {/* 🔹 RIGHT SUB-DIV - Additional Info Section */}
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              style={{
                background: "linear-gradient(135deg, rgba(33,37,41,0.9) 0%, rgba(52,58,64,0.8) 100%)",
                borderRadius: "20px",
                padding: "3rem 2.5rem",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(15px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 8px 20px rgba(0,0,0,0.3)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.3px",
                  lineHeight: "1.3",
                }}
              >
                Transform Your Ideas into Reality
              </h3>
              
              <p
                style={{
                  color: "#e9ecef",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                }}
              >
                With our <strong style={{color: "#ffffff"}}>development expertise</strong>, you get more than just code. 
                We provide comprehensive solutions that include planning, design, development, 
                testing, and maintenance. Our goal is to deliver robust software that empowers 
                your business.
              </p>

              <div style={{ marginTop: "auto" }}>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 12px 30px rgba(255,255,255,0.25)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "linear-gradient(135deg, #6c757d 0%, #adb5bd 100%)",
                    color: "#0d1b2a",
                    border: "none",
                    padding: "14px 36px",
                    borderRadius: "50px",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(255,255,255,0.15)",
                    transition: "all 0.3s ease",
                    width: "100%",
                  }}
                >
                  Start Your Project
                </motion.button>
                
                <p
                  style={{
                    color: "#adb5bd",
                    fontSize: "0.9rem",
                    textAlign: "center",
                    marginTop: "1.5rem",
                    marginBottom: "0",
                  }}
                >
                  Get your free development consultation today
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ✅ Enhanced Responsive Design */}
      <style>
        {`
          @media (max-width: 1200px) {
            .development-intro h2 {
              font-size: 2.4rem !important;
            }
          }

          @media (max-width: 1024px) {
            .development-intro h2 {
              font-size: 2.2rem !important;
            }
            .container-fluid {
              width: 92% !important;
            }
          }

          @media (max-width: 768px) {
            .development-intro h2 {
              font-size: 2rem !important;
            }
            .development-intro .container-fluid > div:last-child {
              flex-direction: column !important;
              gap: 2rem !important;
            }
            .container-fluid {
              width: 95% !important;
            }
          }

          @media (max-width: 480px) {
            .development-intro {
              padding: 40px 15px !important;
              min-height: auto !important;
            }
            .development-intro h2 {
              font-size: 1.8rem !important;
            }
            .development-intro p {
              font-size: 0.9rem !important;
              line-height: 1.6 !important;
            }
            .container-fluid {
              width: 100% !important;
              padding: 0 15px !important;
            }
          }

          @media (min-width: 1920px) {
            .container-fluid {
              width: 85% !important;
              max-width: 1600px !important;
            }
          }
        `}
      </style>
    </section>
  );
}