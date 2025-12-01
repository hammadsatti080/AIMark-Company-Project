import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is included in your Creative Strategy services?",
      answer: "Our Creative Strategy includes branding, visual identity design, motion graphics, UI/UX, and content creation — all structured to align with your digital goals and elevate your brand presence.",
      trending: true
    },
    {
      question: "How do you ensure our brand stands out creatively?",
      answer: "We blend storytelling, market research, and data-driven insights to design visuals and messaging that capture attention and resonate with your target audience.",
      trending: false
    },
    {
      question: "Can you adapt creative assets for different platforms?",
      answer: "Absolutely! We tailor content and visuals for each platform — social media, web, print, and ads — ensuring consistency while maximizing engagement on every channel.",
      trending: true
    },
    {
      question: "Do you handle both static and motion design?",
      answer: "Yes. Our design team specializes in both graphic and motion design, including animated brand elements, video edits, and dynamic digital ads that stand out.",
      trending: true
    },
    {
      question: "How do you maintain consistency across all brand assets?",
      answer: "We create detailed brand guidelines, covering typography, color systems, tone of voice, and motion style — ensuring every piece of content stays true to your brand identity.",
      trending: false
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const navigate=useNavigate();
  const handlebutton=()=>{
    navigate("/Contact")
  }

  return (
    <section
      className="creative-faq-section"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "#ffffff",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
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

      {/* 🔹 Header */}
      <div style={{ 
        textAlign: "center", 
        marginBottom: "60px", 
        width: "90%", 
        maxWidth: "1200px", 
        margin: "0 auto 60px auto",
        position: "relative",
        zIndex: 2 
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(96, 165, 250, 0.1)",
            padding: "8px 20px",
            borderRadius: "20px",
            marginBottom: "20px",
            border: "1px solid rgba(96, 165, 250, 0.2)",
          }}>
            <FaStar color="#60a5fa" size={16} />
            <span style={{
              color: "#60a5fa",
              fontSize: "0.9rem",
              fontWeight: "600",
              letterSpacing: "0.5px"
            }}>
              FREQUENTLY ASKED
            </span>
          </div>

          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              marginBottom: "20px",
              background: "linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: "1.2",
            }}
          >
            Creative Strategy FAQs
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Get instant answers to your questions about our creative process, design philosophy, and brand strategy approach.
          </p>
        </motion.div>
      </div>

      {/* 🔹 FAQ Cards */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          width: "90%",
          position: "relative",
          zIndex: 2,
        }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: "20px",
              marginBottom: "20px",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              overflow: "hidden",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
            className="faq-card"
            whileHover={{ 
              scale: 1.02,
              background: "rgba(255,255,255,0.12)",
              borderColor: "rgba(96, 165, 250, 0.3)"
            }}
          >
            {/* Question */}
            <motion.button
              onClick={() => toggleFAQ(index)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                outline: "none",
                color: "#ffffff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "28px 30px",
                fontSize: "1.1rem",
                fontWeight: "600",
                textAlign: "left",
                cursor: "pointer",
                gap: "20px",
              }}
              whileHover={{ background: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{ flex: "1", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                {/* Question Number */}
                <div style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: "700",
                  color: "#ffffff",
                  flexShrink: 0,
                  marginTop: "2px",
                }}>
                  {index + 1}
                </div>

                <div style={{ flex: "1" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
                    <span>{faq.question}</span>
                    {faq.trending && (
                      <div style={{
                        background: "linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)",
                        padding: "4px 10px",
                        borderRadius: "12px",
                        fontSize: "0.7rem",
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}>
                        <FaStar size={8} />
                        TRENDING
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Animated Icon */}
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: "rgba(96, 165, 250, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(96, 165, 250, 0.2)",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                {activeIndex === index ? (
                  <FaMinus color="#60a5fa" size={14} />
                ) : (
                  <FaPlus color="#60a5fa" size={14} />
                )}
              </motion.div>
            </motion.button>

            {/* Answer */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{
                    padding: "0 30px 28px 77px",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "1rem",
                    lineHeight: "1.7",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          marginTop: "60px",
          width: "90%",
          maxWidth: "1200px",
          margin: "60px auto 0 auto",
        }}
      >
        <p style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "1.1rem",
          marginBottom: "25px",
        }}>
          Still have questions? We're here to help!
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(96, 165, 250, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
            border: "none",
            padding: "15px 35px",
            borderRadius: "25px",
            color: "#ffffff",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(59, 130, 246, 0.2)",
          }}
          onClick={handlebutton}
        >
          Contact Our Creative Team
        </motion.button>
      </motion.div>

      {/* ✅ Responsive Styling */}
      <style>
        {`
          @media (max-width: 1024px) {
            .creative-faq-section h2 {
              font-size: 2.4rem !important;
            }
            
            .faq-card [style*="padding: 28px 30px"] {
              padding: 24px 25px !important;
            }
            
            .faq-card [style*="padding: 0 30px 28px 77px"] {
              padding: 0 25px 24px 72px !important;
            }
          }

          @media (max-width: 768px) {
            .creative-faq-section {
              padding: 60px 0 !important;
            }
            
            .creative-faq-section h2 {
              font-size: 2.2rem !important;
            }
            
            .faq-card [style*="padding: 28px 30px"] {
              padding: 20px 20px !important;
            }
            
            .faq-card [style*="padding: 0 30px 28px 77px"] {
              padding: 0 20px 20px 62px !important;
            }
            
            .faq-card [style*="width: 32px; height: 32px"] {
              width: 28px !important;
              height: 28px !important;
              font-size: 0.75rem !important;
            }
            
            .faq-card button {
              font-size: 1rem !important;
              gap: 15px !important;
            }
          }

          @media (max-width: 480px) {
            .creative-faq-section h2 {
              font-size: 1.8rem !important;
            }
            
            .creative-faq-section p {
              fontSize: 1rem !important;
            }
            
            .faq-card [style*="padding: 28px 30px"] {
              padding: 18px 18px !important;
            }
            
            .faq-card [style*="padding: 0 30px 28px 77px"] {
              padding: 0 18px 18px 58px !important;
            }
            
            .faq-card button {
              font-size: 0.95rem !important;
              gap: 12px !important;
            }
            
            .faq-card [style*="width: 40px; height: 40px"] {
              width: 36px !important;
              height: 36px !important;
            }
          }

          @media (max-width: 360px) {
            .creative-faq-section h2 {
              font-size: 1.6rem !important;
            }
            
            .faq-card button {
              font-size: 0.9rem !important;
            }
            
            .faq-card [style*="display: flex; align-items: center; gap: 10px"] {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 8px !important;
            }
          }

          /* Smooth transitions */
          .creative-faq-section * {
            transition: all 0.3s ease;
          }
        `}
      </style>
    </section>
  );
}