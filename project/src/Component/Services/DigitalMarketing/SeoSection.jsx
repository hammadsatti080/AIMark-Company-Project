import React from "react";
import { motion } from "framer-motion";

export default function SeoSection() {
  const services = [
    "SOCIAL MEDIA",
    "CREATIVE STRATEGY",
    "PUBLIC RELATIONS",
    "CONTENT MARKETING",
    "ADVERTISMENT",
    "WEB DEVELOPMENT",
    "PRODUCT PROMOTION",
  ];

  return (
    <section
      id="seo"
      style={{
        minHeight: "50vh",
        background: "linear-gradient(135deg, #001f3f, #0077b6)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "60px 5%", // reduced padding for mobile
        boxSizing: "border-box",
        overflowX: "hidden", // prevent horizontal scroll
      }}
    >
      {/* 🔹 SEO Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "20px",
          color: "#fff",
          wordWrap: "break-word",
        }}
      >
        Search Engine Optimization (SEO)
      </motion.h2>

      {/* 🔹 SEO Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          maxWidth: "700px",
          lineHeight: "1.6",
          fontSize: "1.1rem",
          marginBottom: "60px",
          color: "#fff",
          wordWrap: "break-word",
        }}
      >
        Improve your search rankings and get discovered by the right audience. Our SEO strategies bring long-term organic growth.
      </motion.p>

      {/* 🔹 Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // smaller min width to fit on mobile
          gap: "20px",
          width: "100%",
          justifyContent: "center",
          alignItems: "stretch",
          boxSizing: "border-box",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
            }}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "16px",
              padding: "30px 15px",
              fontWeight: "700",
              fontSize: "1.1rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              color: "#fff",
              maxWidth: "100%", // prevent overflow
              boxSizing: "border-box",
            }}
          >
            {service}
          </motion.div>
        ))}
      </motion.div>

      {/* 🔹 Responsive Styling */}
      <style>
        {`
          @media (max-width: 768px) {
            #seo {
              padding: 40px 5%;
            }
            #seo h2 {
              font-size: 2rem !important;
            }
            #seo p {
              font-size: 1rem !important;
            }
          }

          @media (max-width: 480px) {
            #seo {
              padding: 30px 3%;
            }
            #seo h2 {
              font-size: 1.7rem !important;
            }
            #seo p {
              font-size: 0.95rem !important;
            }
            #seo div > div {
              padding: 20px 10px !important;
              font-size: 1rem !important;
            }
          }
        `}
      </style>
    </section>
  );
}
