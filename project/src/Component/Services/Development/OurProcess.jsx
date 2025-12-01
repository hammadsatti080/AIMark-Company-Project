import React from "react";
import { motion } from "framer-motion";

export default function OurProcess() {
  const steps = [
    {
      step: "01",
      title: "Planning & Analysis",
      desc: "We analyze your requirements, define project scope, and create a detailed development roadmap.",
      icon: "📋"
    },
    {
      step: "02",
      title: "Design & Architecture",
      desc: "Our team designs the system architecture, user interface, and creates detailed technical specifications.",
      icon: "🎨"
    },
    {
      step: "03",
      title: "Development & Coding",
      desc: "We build robust, scalable solutions using modern technologies and best coding practices.",
      icon: "💻"
    },
    {
      step: "04",
      title: "Testing & Deployment",
      desc: "Rigorous testing ensures quality, followed by seamless deployment and ongoing maintenance.",
      icon: "🚀"
    },
  ];

  return (
    <section
      className="development-process-section py-5"
      style={{
        backgroundColor: "#ffffff",
        color: "#0d1b2a",
        padding: "80px 8%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          background: "linear-gradient(135deg, rgba(16,185,129,0.03) 0%, rgba(5,150,105,0.02) 100%)",
          borderRadius: "50%",
          filter: "blur(30px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "180px",
          height: "180px",
          background: "linear-gradient(135deg, rgba(5,150,105,0.03) 0%, rgba(16,185,129,0.02) 100%)",
          borderRadius: "50%",
          filter: "blur(25px)",
        }}
      />

      <div className="container-fluid">
        {/* Main row with two sub-divs */}
        <div className="row align-items-center">
          {/* Left Sub-div - Heading and Description */}
          <motion.div 
            className="col-lg-4 col-md-12 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{ paddingRight: "2rem" }}>
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "800",
                  marginBottom: "1.5rem",
                  lineHeight: "1.2",
                  color: "#0d1b2a",
                  letterSpacing: "-0.5px",
                }}
              >
                Development Process
              </h2>
              <p
                style={{
                  color: "rgba(13,27,42,0.8)",
                  fontSize: "1.15rem",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                }}
              >
                A structured, agile approach to building robust software solutions that scale with your business needs.
              </p>
              
              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                style={{
                  background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  border: "1px solid rgba(16,185,129,0.1)",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                }}
              >
                <h4 style={{ 
                  fontSize: "1.2rem", 
                  fontWeight: "600", 
                  marginBottom: "1rem",
                  color: "#0d1b2a"
                }}>
                  Why Our Development Process Works
                </h4>
                <ul style={{ 
                  color: "rgba(13,27,42,0.8)", 
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  paddingLeft: "1.2rem",
                  margin: 0
                }}>
                  <li style={{ marginBottom: "0.5rem" }}>Agile methodology for flexibility</li>
                  <li style={{ marginBottom: "0.5rem" }}>Code quality and best practices</li>
                  <li style={{ marginBottom: "0.5rem" }}>Continuous integration & deployment</li>
                  <li>Comprehensive testing & quality assurance</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Sub-div - Process Steps */}
          <div className="col-lg-8 col-md-12">
            <div className="row">
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  className="col-lg-6 col-md-6 col-sm-12 mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    style={{
                      background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                      borderRadius: "20px",
                      padding: "2rem 1.5rem",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(16,185,129,0.1)",
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      height: "100%",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    className="process-card"
                  >
                    {/* Step Number Background */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "80px",
                        height: "80px",
                        background: "linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(5,150,105,0.03) 100%)",
                        borderBottomLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    />

                    {/* Step Number */}
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "700",
                        fontSize: "1rem",
                        marginBottom: "1.5rem",
                        boxShadow: "0 5px 15px rgba(16,185,129,0.3)",
                      }}
                    >
                      {item.step}
                    </div>

                    {/* Icon and Title Container */}
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "12px",
                      marginBottom: "1rem"
                    }}>
                      <div style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "rgba(16,185,129,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>
                      <h5
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "700",
                          margin: "0",
                          color: "#0d1b2a",
                          lineHeight: "1.3",
                        }}
                      >
                        {item.title}
                      </h5>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        color: "rgba(13,27,42,0.8)",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        margin: "0",
                      }}
                    >
                      {item.desc}
                    </p>

                    {/* Bottom accent line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "40px" }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        height: "3px",
                        background: "linear-gradient(90deg, #10b981 0%, #059669 100%)",
                        borderRadius: "2px",
                        marginTop: "1.5rem",
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Enhanced Responsive Styling */}
      <style>
        {`
          .process-card:hover {
            box-shadow: 0 15px 40px rgba(0,0,0,0.12) !important;
            border-color: rgba(16,185,129,0.2) !important;
          }

          @media (max-width: 1200px) {
            .development-process-section h2 {
              font-size: 2.4rem !important;
            }
          }

          @media (max-width: 992px) {
            .development-process-section {
              padding: 60px 5% !important;
            }
            .development-process-section h2 {
              font-size: 2.2rem !important;
              text-align: center !important;
            }
            .development-process-section .col-lg-4 {
              margin-bottom: 3rem !important;
              padding-right: 0 !important;
            }
            .development-process-section .col-lg-4 > div {
              text-align: center !important;
              padding-right: 0 !important;
            }
          }

          @media (max-width: 768px) {
            .development-process-section {
              padding: 50px 4% !important;
            }
            .development-process-section h2 {
              font-size: 2rem !important;
            }
            .process-card {
              padding: 1.5rem 1.25rem !important;
            }
          }

          @media (max-width: 480px) {
            .development-process-section {
              padding: 40px 3% !important;
            }
            .development-process-section h2 {
              font-size: 1.8rem !important;
            }
            .process-card h5 {
              font-size: 1.2rem !important;
            }
            .process-card p {
              font-size: 0.95rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}