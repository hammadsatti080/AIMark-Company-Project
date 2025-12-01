import React from "react";
import { motion } from "framer-motion";

export default function CreativeSection() {
  return (
    <section
      className="creative-section"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "#fff",
        padding: "60px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "250px",
          height: "250px",
          background: "rgba(255,255,255,0.02)",
          borderRadius: "50%",
          filter: "blur(35px)",
        }}
      />

      <div style={{ width: "90%", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "stretch", gap: "40px" }}>
          
          {/* Left Column - Modern Card Design */}
          <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "30px" }}>
            
            {/* Main Feature Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "30px",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Small Image in Top Left */}
              <div style={{ 
                display: "flex", 
                alignItems: "flex-start", 
                gap: "20px",
                marginBottom: "25px"
              }}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>🎨</span>
                </motion.div>
                
                <div style={{ flex: "1" }}>
                  <h2 style={{
                    fontSize: "2.2rem",
                    fontWeight: "700",
                    margin: "0 0 8px 0",
                    lineHeight: "1.2",
                    background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Creative Excellence
                  </h2>
                  <p style={{
                    fontSize: "1.1rem",
                    color: "rgba(255,255,255,0.8)",
                    margin: "0",
                    lineHeight: "1.5",
                  }}>
                    Transforming brands with innovative design and compelling visual storytelling
                  </p>
                </div>
              </div>

              {/* Services Grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}>
                {[
                  {
                    icon: "🔄",
                    title: "Branding & Identity",
                    description: "Memorable logos and brand guidelines for strong market presence"
                  },
                  {
                    icon: "🎬",
                    title: "Motion Design",
                    description: "Engaging animations and visuals that captivate your audience"
                  },
                  {
                    icon: "✍️",
                    title: "Content Creation",
                    description: "Strategic content and copywriting that informs and converts"
                  },
                  {
                    icon: "🎥",
                    title: "Video Production",
                    description: "Professional video content for marketing and storytelling"
                  },
                  {
                    icon: "💻",
                    title: "UI/UX Design",
                    description: "User-friendly website and app designs for better experience"
                  },
                  {
                    icon: "📊",
                    title: "Graphic Design",
                    description: "High-quality visuals and infographics that tell your story"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      background: "rgba(255,255,255,0.12)"
                    }}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: "16px",
                      padding: "20px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                  >
                    <div style={{ 
                      display: "flex", 
                      alignItems: "flex-start", 
                      gap: "15px" 
                    }}>
                      <div style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>
                      <div style={{ flex: "1" }}>
                        <h4 style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: "#fff",
                          margin: "0 0 8px 0",
                        }}>
                          {item.title}
                        </h4>
                        <p style={{
                          fontSize: "0.9rem",
                          color: "rgba(255,255,255,0.7)",
                          lineHeight: "1.5",
                          margin: "0",
                        }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image Only */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              flex: "0 0 400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
              style={{
                width: "100%",
                height: "500px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
            >
              <motion.img
                src="/Homescreen/Creative.webp"
                alt="Creative Design Services"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "24px",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 1200px) {
            .creative-section > div {
              width: 95% !important;
            }
            
            .creative-section [style*="flex: 0 0 400px"] {
              flex: 0 0 350px !important;
            }
          }

          @media (max-width: 992px) {
            .creative-section > div > div {
              flex-direction: column !important;
              gap: 30px !important;
            }
            
            .creative-section [style*="flex: 0 0 400px"] {
              flex: 1 1 100% !important;
              width: 100% !important;
            }
            
            .creative-section [style*="height: 500px"] {
              height: 400px !important;
              max-width: 500px !important;
              margin: 0 auto !important;
            }
          }

          @media (max-width: 768px) {
            .creative-section {
              padding: 40px 0 !important;
            }
            
            .creative-section > div {
              width: 98% !important;
            }
            
            .creative-section h2 {
              font-size: 1.8rem !important;
            }
            
            .creative-section [style*="gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))"] {
              gridTemplateColumns: 1fr !important;
            }
            
            .creative-section [style*="height: 500px"] {
              height: 350px !important;
            }
          }

          @media (max-width: 480px) {
            .creative-section {
              padding: 30px 0 !important;
            }
            
            .creative-section h2 {
              font-size: 1.6rem !important;
            }
            
            .creative-section [style*="padding: 30px"] {
              padding: 20px !important;
            }
            
            .creative-section [style*="display: flex; align-items: flex-start; gap: 20px"] {
              flex-direction: column !important;
              text-align: center !important;
            }
            
            .creative-section [style*="width: 80px; height: 80px"] {
              margin: 0 auto 15px auto !important;
            }
            
            .creative-section [style*="height: 500px"] {
              height: 280px !important;
            }
          }

          /* Smooth transitions */
          .creative-section * {
            transition: all 0.3s ease;
          }
        `}
      </style>
    </section>
  );
}