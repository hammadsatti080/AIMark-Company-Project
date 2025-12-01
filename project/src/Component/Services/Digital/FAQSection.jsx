import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FAQSection() {
  const faqs = [
    {
      question: "What makes AI Mark Labs different from other digital agencies?",
      answer: "We combine human creativity with AI-driven insights to deliver data-backed strategies that drive measurable business growth. Our approach focuses on innovation, transparency, and real results."
    },
    {
      question: "How long does it take to see digital marketing results?",
      answer: "Depending on your campaign type, SEO and content marketing often show results in 3–6 months, while paid ads can deliver measurable outcomes within weeks."
    },
    {
      question: "Do you customize strategies for each business?",
      answer: "Absolutely. Every business has unique goals and audiences — we create fully tailored digital strategies aligned with your objectives and market conditions."
    },
    {
      question: "Can I track the performance of my campaigns?",
      answer: "Yes! We provide detailed performance dashboards and transparent reports with metrics like traffic, conversions, ROI, and engagement for full visibility."
    },
    {
      question: "Do you offer ongoing support and optimization?",
      answer: "We believe optimization never stops. Our team continuously monitors and refines your campaigns to ensure sustained growth and maximum ROI."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We've worked with businesses across e-commerce, SaaS, healthcare, education, and professional services, adapting our strategies to each industry's unique challenges."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
const navigate=useNavigate();
const handlebutton=()=>{
  navigate("/Contact")
}
  return (
    <section
      className="faq-section py-5"
      style={{
        backgroundColor: "#ffffff",
        color: "#333333",
        padding: "60px 20px",
        minHeight: "100vh",
      }}
    >
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Simple Header */}
        <div className="text-center mb-5">
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "#000000",
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            style={{
              color: "#666666",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Find answers to common questions about our services and processes.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              style={{
                borderBottom: "1px solid #e0e0e0",
                padding: "20px 0",
              }}
            >
              {/* Question */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "10px 0",
                }}
                onClick={() => toggleFAQ(index)}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    color: "#000000",
                    margin: 0,
                    flex: 1,
                    lineHeight: "1.4",
                  }}
                >
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    color: "#666666",
                    fontSize: "1rem",
                    marginLeft: "15px",
                  }}
                >
                  <FaChevronDown />
                </motion.span>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      overflow: "hidden",
                    }}
                  >
                    <p
                      style={{
                        color: "#666666",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        margin: "15px 0 0 0",
                        padding: "0 0 10px 0",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Simple Contact Section */}
        <div 
          className="text-center mt-6"
          style={{
            marginTop: "60px",
            padding: "40px 20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
              marginBottom: "1rem",
              color: "#000000",
            }}
          >
            Still have questions?
          </h3>
          <p
            style={{
              color: "#666666",
              fontSize: "1rem",
              lineHeight: "1.6",
              marginBottom: "2rem",
              maxWidth: "500px",
              margin: "0 auto 2rem",
            }}
          >
            Can't find the answer you're looking for? Please get in touch with our team.
          </p>
          <button
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              border: "none",
              padding: "12px 30px",
              borderRadius: "6px",
              fontSize: "1rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#333333"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#000000"}
            onClick={handlebutton}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Simple Responsive Styles */}
      <style>
        {`
          .faq-item:hover h3 {
            color: #333333;
          }

          @media (max-width: 768px) {
            .faq-section {
              padding: 40px 15px !important;
            }
            
            .faq-section h1 {
              font-size: 2rem !important;
            }
            
            .faq-item h3 {
              font-size: 1.1rem !important;
            }
          }

          @media (max-width: 480px) {
            .faq-section {
              padding: 30px 10px !important;
            }
            
            .faq-section h1 {
              font-size: 1.8rem !important;
            }
            
            .faq-item {
              padding: 15px 0 !important;
            }
            
            .faq-item h3 {
              font-size: 1rem !important;
            }
            
            .faq-item p {
              font-size: 0.95rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}