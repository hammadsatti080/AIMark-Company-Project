import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FAQSection() {
  const faqs = [
    {
      question: "What technologies and frameworks do you work with?",
      answer: "We work with modern technologies including React, Next.js, Node.js, Python, Django, React Native, Flutter, and various databases like MongoDB, PostgreSQL, and Firebase."
    },
    {
      question: "How long does a typical development project take?",
      answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, web applications 4-12 weeks, and complex systems 3-6 months. We provide detailed timelines during project planning."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements to keep your application running smoothly."
    },
    {
      question: "Can you work with our existing development team?",
      answer: "Absolutely. We often collaborate with in-house teams, providing specialized expertise and helping scale development capacity during peak periods or for specific technical challenges."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes requirement analysis, planning, design, development, testing, deployment, and ongoing maintenance. We follow agile methodology with regular updates and feedback cycles."
    },
    {
      question: "Do you handle both frontend and backend development?",
      answer: "Yes, we provide full-stack development services, creating complete solutions from user interfaces to server infrastructure, databases, and API integrations."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 const navigate=useNavigate();
 const handlebutton=()=>{
  navigate("/contact")
 }
  return (
    <section
      className="development-faq-section py-5"
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
            Development FAQs
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
            Common questions about our development process, technologies, and services.
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
            Ready to start your project?
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
            Have more questions about our development services? Let's discuss your project requirements.
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
            Discuss Project
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
            .development-faq-section {
              padding: 40px 15px !important;
            }
            
            .development-faq-section h1 {
              font-size: 2rem !important;
            }
            
            .faq-item h3 {
              font-size: 1.1rem !important;
            }
          }

          @media (max-width: 480px) {
            .development-faq-section {
              padding: 30px 10px !important;
            }
            
            .development-faq-section h1 {
              font-size: 1.8rem !important;
            }
            
            .faq-item {
              padding: 15px 0 !important;
            }
            
            .faq-item h3 {
              font-size: 1rem !important;
            }
            
            .faq-item p {
              fontSize: 0.95rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}