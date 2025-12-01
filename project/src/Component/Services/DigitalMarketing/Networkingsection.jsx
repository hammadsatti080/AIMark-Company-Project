import React from "react";
import { motion } from "framer-motion";

export default function Networkingsection() {
  return (
    <section
      id="email"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #03045e, #00b4d8)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "60px 10%",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}
      >
        Email Marketing
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ maxWidth: "700px", lineHeight: "1.6", fontSize: "1.1rem" }}
      >
        Convert leads and retain customers through personalized, automated, and high-performing email campaigns.
      </motion.p>
    </section>
  )
    }