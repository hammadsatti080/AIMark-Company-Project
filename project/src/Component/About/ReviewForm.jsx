import React, { useState, useEffect } from "react";

const ReviewForm = ({ onReviewAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    comment: "",
  });

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [focusedElement, setFocusedElement] = useState(null);

  // Check if mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Review submitted successfully!");
        setFormData({ name: "", email: "", rating: "", comment: "" });
        if (onReviewAdded) onReviewAdded(); // refresh reviews list
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage("❌ Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Responsive inline styles
  const styles = {
    container: {
      maxWidth: "600px",
      margin: isMobile ? "1rem auto" : "2rem auto",
      padding: isMobile ? "1.5rem 1rem" : "2rem",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: isMobile ? "0 4px 15px rgba(0, 0, 0, 0.08)" : "0 10px 30px rgba(0, 0, 0, 0.08)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      width: isMobile ? "95%" : "100%",
    },
    header: {
      textAlign: "center",
      marginBottom: isMobile ? "1.5rem" : "2rem",
      color: "#2c3e50",
      fontSize: isMobile ? "1.5rem" : "1.8rem",
      fontWeight: "600",
    },
    message: {
      padding: isMobile ? "10px 12px" : "12px 16px",
      borderRadius: "8px",
      marginBottom: isMobile ? "1rem" : "1.5rem",
      textAlign: "center",
      fontWeight: "500",
      backgroundColor: message.includes("✅") ? "#e8f5e9" : "#ffebee",
      color: message.includes("✅") ? "#2e7d32" : "#c62828",
      border: message.includes("✅") ? "1px solid #c8e6c9" : "1px solid #ffcdd2",
      fontSize: isMobile ? "0.9rem" : "1rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "1rem" : "1.5rem",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? "0.3rem" : "0.5rem",
    },
    label: {
      fontSize: isMobile ? "0.85rem" : "0.9rem",
      fontWeight: "500",
      color: "#34495e",
      marginLeft: "4px",
    },
    input: {
      padding: isMobile ? "12px 14px" : "14px 16px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: isMobile ? "0.95rem" : "1rem",
      transition: "all 0.3s ease",
      backgroundColor: "#fafafa",
    },
    textarea: {
      padding: isMobile ? "12px 14px" : "14px 16px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: isMobile ? "0.95rem" : "1rem",
      minHeight: isMobile ? "100px" : "120px",
      resize: "vertical",
      transition: "all 0.3s ease",
      backgroundColor: "#fafafa",
      fontFamily: "inherit",
    },
    select: {
      padding: isMobile ? "12px 14px" : "14px 16px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: isMobile ? "0.95rem" : "1rem",
      backgroundColor: "#fafafa",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    ratingContainer: {
      display: "flex",
      justifyContent: isMobile ? "space-around" : "space-between",
      marginTop: "0.5rem",
      flexWrap: isMobile ? "wrap" : "nowrap",
      gap: isMobile ? "0.5rem" : "0",
    },
    ratingOption: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      padding: isMobile ? "6px" : "8px",
      borderRadius: "8px",
      transition: "all 0.2s ease",
      flex: isMobile ? "0 0 18%" : "auto",
    },
    ratingCircle: {
      width: isMobile ? "35px" : "40px",
      height: isMobile ? "35px" : "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "600",
      fontSize: isMobile ? "0.9rem" : "1rem",
      marginBottom: "4px",
      transition: "all 0.2s ease",
    },
    ratingLabel: {
      fontSize: isMobile ? "0.7rem" : "0.8rem",
      color: "#7f8c8d",
      textAlign: "center",
    },
    submitButton: {
      padding: isMobile ? "14px 20px" : "16px 24px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#3498db",
      color: "white",
      fontSize: isMobile ? "1rem" : "1.1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "0.5rem",
      width: "100%",
    },
    focus: {
      borderColor: "#3498db",
      boxShadow: "0 0 0 3px rgba(52, 152, 219, 0.2)",
      backgroundColor: "white",
    },
    hover: {
      transform: isMobile ? "none" : "translateY(-2px)",
      boxShadow: isMobile ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "0 5px 15px rgba(0, 0, 0, 0.1)",
    },
  };

  // Get dynamic styles for elements
  const getInputStyle = (elementName) => {
    const baseStyle = elementName === "comment" ? styles.textarea : 
                     elementName === "rating" ? styles.select : styles.input;
    
    const focusStyle = focusedElement === elementName ? styles.focus : {};
    const hoverStyle = (!isMobile && hoveredElement === elementName) ? styles.hover : {};
    
    return { ...baseStyle, ...focusStyle, ...hoverStyle };
  };

  const getButtonStyle = () => {
    const baseStyle = styles.submitButton;
    const hoverStyle = (!isMobile && hoveredElement === "submit") ? styles.hover : {};
    const disabledStyle = isSubmitting ? { opacity: 0.7, cursor: "not-allowed" } : {};
    
    return { ...baseStyle, ...hoverStyle, ...disabledStyle };
  };

  const getRatingStyle = (value) => {
    const isSelected = formData.rating === value.toString();
    const isHovered = hoveredElement === `rating-${value}`;
    
    let bgColor = "#ecf0f1";
    let textColor = "#7f8c8d";
    
    if (isSelected) {
      if (value <= 2) bgColor = "#e74c3c";
      else if (value <= 4) bgColor = "#f39c12";
      else bgColor = "#2ecc71";
      textColor = "white";
    } else if (isHovered && !isMobile) {
      bgColor = "#bdc3c7";
    }
    
    return {
      ...styles.ratingCircle,
      backgroundColor: bgColor,
      color: textColor,
      transform: (isHovered && !isMobile) ? "scale(1.1)" : "scale(1)",
    };
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Leave a Review</h2>
      {message && <div style={styles.message}>{message}</div>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder={isMobile ? "Your name" : "Enter your name"}
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedElement("name")}
            onBlur={() => setFocusedElement(null)}
            onMouseEnter={() => !isMobile && setHoveredElement("name")}
            onMouseLeave={() => !isMobile && setHoveredElement(null)}
            style={getInputStyle("name")}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder={isMobile ? "Your email" : "Enter your email"}
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedElement("email")}
            onBlur={() => setFocusedElement(null)}
            onMouseEnter={() => !isMobile && setHoveredElement("email")}
            onMouseLeave={() => !isMobile && setHoveredElement(null)}
            style={getInputStyle("email")}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Rating</label>
          <div style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((r) => (
              <div
                key={r}
                style={styles.ratingOption}
                onClick={() => setFormData({ ...formData, rating: r.toString() })}
                onMouseEnter={() => !isMobile && setHoveredElement(`rating-${r}`)}
                onMouseLeave={() => !isMobile && setHoveredElement(null)}
              >
                <div style={getRatingStyle(r)}>{r}</div>
                <span style={styles.ratingLabel}>
                  {r} {r === 1 ? "Star" : "Stars"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Your Review</label>
          <textarea
            name="comment"
            placeholder={isMobile ? "Share your experience..." : "Share your experience in detail..."}
            value={formData.comment}
            onChange={handleChange}
            onFocus={() => setFocusedElement("comment")}
            onBlur={() => setFocusedElement(null)}
            onMouseEnter={() => !isMobile && setHoveredElement("comment")}
            onMouseLeave={() => !isMobile && setHoveredElement(null)}
            style={getInputStyle("comment")}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={getButtonStyle()}
          onMouseEnter={() => !isMobile && setHoveredElement("submit")}
          onMouseLeave={() => !isMobile && setHoveredElement(null)}
        >
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;