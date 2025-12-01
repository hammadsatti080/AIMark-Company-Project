import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Socialsection() {
  const facts = [
    { number: 106, label: "Happy Clients" },
    { number: 198, label: "Websites Launched" },
    { number: 506, label: "Social Campaigns" },
    { number: 1603, label: "Cups of Coffee" },
  ];

  return (
    <section
      id="fun-facts"
      style={{
        minHeight: "30vh",
        background: "#f7f7f7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 5%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "30px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
            }}
            style={{
              background: "#ffffff",
              padding: "25px 20px",
              borderRadius: "16px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "default",
              transition: "all 0.3s ease",
            }}
          >
            <span
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#0d1b2a",
                marginBottom: "8px",
              }}
            >
              <CountUp start={0} end={fact.number} duration={2} separator="," />
            </span>
            <p
              style={{
                fontSize: "0.95rem",
                fontWeight: "600",
                color: "#0d1b2a",
              }}
            >
              {fact.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ✅ Responsive Styling */}
      <style>
        {`
          @media (max-width: 768px) {
            #fun-facts {
              padding: 40px 5%;
            }
            #fun-facts div {
              gap: 20px;
            }
            #fun-facts div > div {
              padding: 20px 15px;
            }
            #fun-facts div > div span {
              font-size: 1.8rem !important;
            }
            #fun-facts div > div p {
              font-size: 0.9rem !important;
            }
          }

          @media (max-width: 480px) {
            #fun-facts div {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
}
