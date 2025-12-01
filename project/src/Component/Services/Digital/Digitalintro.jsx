import React from "react";
import { motion } from "framer-motion";

export default function Digitalintro() {
  return (
    <section
      className="digital-strategy-intro py-5"
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
            Why a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #adb5bd 0%, #e9ecef 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 10px rgba(255,255,255,0.2)",
              }}
            >
              Strong Digital Strategy
            </span>{" "}
            is Essential?
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
            {/* Strategic Alignment Card */}
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
                  //background: "linear-gradient(135deg, #6c757d 0%, #adb5bd 100%)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  boxShadow: "0 8px 20px rgba(255,255,255,0.1)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
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
                Strategic Alignment
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
                A successful digital strategy ensures that every aspect of your online presence 
                is aligned with your business goals. Without a well-planned approach, marketing 
                efforts can become scattered and ineffective.
              </p>
            </motion.div>

            {/* Data-Driven Results Card */}
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
                 // background: "linear-gradient(135deg, #adb5bd 0%, #e9ecef 100%)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  boxShadow: "0 8px 20px rgba(255,255,255,0.1)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19V13C9 11.8954 9.89543 11 11 11H13C14.1046 11 15 11.8954 15 13V19C15 20.1046 15.8954 21 17 21H19C20.1046 21 21 20.1046 21 19V13C21 11.8954 20.1046 11 19 11H18M9 19C9 20.1046 8.10457 21 7 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11H6M9 19V9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9V19M6 11V9C6 7.89543 6.89543 7 8 7H10C11.1046 7 12 7.89543 12 9V11M6 11C6 12.1046 5.10457 13 4 13H3" 
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
                Data-Driven Results
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
                By leveraging in-depth analytics, AI insights, and market research, we create 
                tailored strategies that drive measurable success. Our approach ensures that 
                every campaign is optimized for performance.
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
                Transform Your Digital Presence with AI Mark Labs
              </h3>
              
              <p
                style={{
                  color: "#e9ecef",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                }}
              >
                With <strong style={{color: "#ffffff"}}>AI Mark Labs</strong>, you get a customized strategy built on 
                deep market analysis, customer insights, and industry trends. We help you create 
                tailored approaches that drive measurable success in today's competitive digital landscape.
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
                  Start Your Digital Journey
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
                  Get your free strategy consultation today
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
            .digital-strategy-intro h2 {
              font-size: 2.4rem !important;
            }
          }

          @media (max-width: 1024px) {
            .digital-strategy-intro h2 {
              font-size: 2.2rem !important;
            }
            .container-fluid {
              width: 92% !important;
            }
          }

          @media (max-width: 768px) {
            .digital-strategy-intro h2 {
              font-size: 2rem !important;
            }
            .digital-strategy-intro .container-fluid > div:last-child {
              flex-direction: column !important;
              gap: 2rem !important;
            }
            .container-fluid {
              width: 95% !important;
            }
          }

          @media (max-width: 480px) {
            .digital-strategy-intro {
              padding: 40px 15px !important;
              min-height: auto !important;
            }
            .digital-strategy-intro h2 {
              font-size: 1.8rem !important;
            }
            .digital-strategy-intro p {
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