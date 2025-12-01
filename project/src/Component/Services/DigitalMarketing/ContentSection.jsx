import React from "react";
import { motion } from "framer-motion";

// Example images
const companyImages = {
  Google: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  HubSpot: "/Homescreen/Daraz.webp",
  Engro: "/Homescreen/Engro.jpg",
  Daraz: "/Homescreen/Daraz.webp",
  Jazz: "/Homescreen/Jazz.jpg",
};

export default function ContentSection() {
  const companies = [
    {
      name: "Google",
      website: "https://www.google.com",
      years: "10+ years",
      description: "SEO and content leader",
    },
    {
      name: "HubSpot",
      website: "https://www.hubspot.com",
      years: "7+ years",
      description: "Inbound marketing and automation",
    },
    {
      name: "Engro",
      website: "https://www.engro.com",
      years: "5+ years",
      description: "SEO tools and analytics",
    },
    {
      name: "Daraz",
      website: "https://daraz.com",
      years: "6+ years",
      description: "Social media management solutions",
    },
    {
      name: "Jazz",
      website: "https://jazz.com",
      years: "8+ years",
      description: "Social engagement platform",
    },
  ];

  return (
    <section
      id="companies"
      style={{
        minHeight: "30vh",
        background: "#ffffff",
        color: "#0d1b2a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "60px 5%",
        gap: "50px",
        boxSizing: "border-box",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "2.2rem",
          fontWeight: "700",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Companies We Work With
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
          width: "100%",
        }}
      >
        {companies.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              backgroundColor: "#f0f4ff",
            }}
            style={{
              background: "linear-gradient(135deg, #001f3f, #0077b6)",
              borderRadius: "16px",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              border: "1px solid rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "center",
              minHeight: "220px",
              transition: "all 0.3s ease",
            }}
          >
            {/* Company Logo */}
            <div
              style={{
                height: "50px",
                width: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={companyImages[company.name]}
                alt={company.name}
                style={{ maxHeight: "50px", maxWidth: "100%", objectFit: "contain" }}
              />
            </div>

            {/* Company Name */}
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1.1rem",
                fontWeight: "700",
                color: "white",
                textDecoration: "none",
              }}
            >
              {company.name}
            </a>

            {/* Years of Collaboration */}
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: "600",
                color: "white",
              }}
            >
              Collaboration: {company.years}
            </span>

            {/* Description */}
            <p style={{ fontSize: "0.95rem", color: "white" }}>{company.description}</p>
          </motion.div>
        ))}
      </div>

      {/* ✅ Responsive Styling */}
      <style>
        {`
          @media (max-width: 768px) {
            #companies {
              padding: 40px 5%;
            }
            #companies h2 {
              font-size: 1.8rem !important;
            }
            #companies div {
              gap: 15px !important;
            }
            #companies div > div {
              min-height: 200px !important;
              padding: 15px !important;
            }
            #companies div > div div img {
              max-height: 70px !important; /* logo larger on mobile */
            }
          }

          @media (max-width: 480px) {
            #companies div {
              grid-template-columns: 1fr !important;
            }
            #companies div > div div img {
              max-height: 90px !important; /* even larger on small phones */
            }
          }
        `}
      </style>
    </section>
  );
}
