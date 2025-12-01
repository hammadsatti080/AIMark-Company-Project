import React from "react";
import { motion } from "framer-motion";

export default function Headers() {
  return (
    <section
      id="hero"
      className="digital-marketing-hero"
      style={{
        position: "relative",
        backgroundImage: "url('/Service/DigitalBackground.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffff",
        padding: "120px 8%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "80vh",
        zIndex: 1,
        boxSizing: "border-box", // prevent overflow
        overflowX: "hidden", // remove horizontal scroll
      }}
    >
      {/* 🔹 Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom right, rgba(13,27,42,0.75), rgba(27,38,59,0.65))",
          zIndex: 0,
        }}
      />

      {/* 🔹 Text Box */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 2,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          backdropFilter: "blur(6px)",
          borderRadius: "16px",
          padding: "50px 40px",
          maxWidth: "100%", // allow full width on small screens
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            lineHeight: "1.2",
            color: "#ffffff",
            marginBottom: "30px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            wordWrap: "break-word", // prevent overflow
          }}
        >
          MAKING
          <br />
          <span style={{ color: "#00b4d8" }}>CONNECTIONS</span>
          <br />
          DELIVERING RESULTS
        </h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "#00b4d8",
            border: "none",
            color: "#fff",
            fontWeight: "600",
            padding: "12px 30px",
            borderRadius: "30px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
            maxWidth: "100%", // prevent overflow on mobile
            whiteSpace: "nowrap",
          }}
        >
          Email (info@aimarklabs.com)
        </motion.button>
      </motion.div>

      {/* 🔹 Responsive Styling */}
      <style>
        {`
          @media (max-width: 1024px) {
            .digital-marketing-hero {
              padding: 90px 6%;
              justify-content: center;
            }
            .digital-marketing-hero h1 {
              font-size: 2.5rem !important;
              text-align: center;
            }
          }

          @media (max-width: 768px) {
            .digital-marketing-hero {
              padding: 70px 5%;
              min-height: 60vh;
              flex-direction: column;
              justify-content: center;
            }
            .digital-marketing-hero h1 {
              font-size: 2rem !important;
              line-height: 1.3;
              text-align: center;
              word-break: break-word;
            }
            .digital-marketing-hero button {
              display: block;
              margin: 20px auto 0;
              width: 80%;
            }
          }

          @media (max-width: 480px) {
            .digital-marketing-hero {
              padding: 50px 5%;
              min-height: 50vh;
            }
            .digital-marketing-hero h1 {
              font-size: 1.7rem !important;
              line-height: 1.2;
            }
            .digital-marketing-hero button {
              font-size: 0.9rem;
              padding: 10px 20px;
            }
          }
        `}
      </style>
    </section>
  );
}
