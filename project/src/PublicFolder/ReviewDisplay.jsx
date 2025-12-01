import React, { useState, useEffect } from "react";

const ReviewDisplay = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsiveness
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

  // Fetch reviews from API
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/reviews");
      const data = await res.json();
      
      if (res.ok) {
        setReviews(data);
      } else {
        setError("Failed to load reviews");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Responsive inline styles
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: isMobile ? "1rem auto" : "2rem auto",
      padding: isMobile ? "0 0.5rem" : "0 1rem",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: isMobile ? "2rem" : "2.5rem",
      color: "#2c3e50",
    },
    title: {
      fontSize: isMobile ? "1.8rem" : "2.2rem",
      fontWeight: "700",
      marginBottom: "0.5rem",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      color: "#7f8c8d",
      fontWeight: "400",
    },
    loading: {
      textAlign: "center",
      padding: isMobile ? "2rem" : "3rem",
      fontSize: isMobile ? "1.1rem" : "1.2rem",
      color: "#3498db",
    },
    error: {
      textAlign: "center",
      padding: isMobile ? "1.5rem" : "2rem",
      backgroundColor: "#ffebee",
      color: "#c62828",
      borderRadius: "12px",
      marginBottom: isMobile ? "1.5rem" : "2rem",
      border: "1px solid #ffcdd2",
      fontSize: isMobile ? "0.9rem" : "1rem",
    },
    reviewCount: {
      textAlign: "center",
      marginBottom: isMobile ? "1.5rem" : "2rem",
      fontSize: isMobile ? "1rem" : "1.1rem",
      color: "#7f8c8d",
      backgroundColor: "#f8f9fa",
      padding: isMobile ? "0.6rem" : "0.8rem",
      borderRadius: "8px",
      border: "1px solid #e9ecef",
    },
    reviewGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: isMobile ? "1rem" : "1.5rem",
      alignItems: "stretch",
    },
    reviewCard: {
      backgroundColor: "white",
      borderRadius: "16px",
      padding: isMobile ? "1.2rem" : "1.5rem",
      boxShadow: isMobile ? "0 3px 15px rgba(0, 0, 0, 0.08)" : "0 5px 20px rgba(0, 0, 0, 0.08)",
      border: "1px solid #f0f0f0",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      height: "auto",
      minHeight: isMobile ? "auto" : "280px",
    },
    reviewHeader: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "flex-start",
      marginBottom: isMobile ? "1rem" : "1.2rem",
      gap: isMobile ? "0.8rem" : "0",
    },
    reviewerInfo: {
      display: "flex",
      alignItems: "center",
      gap: isMobile ? "0.8rem" : "1rem",
    },
    avatar: {
      width: isMobile ? "40px" : "45px",
      height: isMobile ? "40px" : "45px",
      borderRadius: "50%",
      backgroundColor: "#3498db",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "600",
      fontSize: isMobile ? "1rem" : "1.1rem",
      flexShrink: 0,
    },
    reviewerDetails: {
      display: "flex",
      flexDirection: "column",
      minWidth: 0, // For text truncation
    },
    reviewerName: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      fontWeight: "600",
      color: "#2c3e50",
      marginBottom: "0.2rem",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    reviewerEmail: {
      fontSize: isMobile ? "0.8rem" : "0.85rem",
      color: "#7f8c8d",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    ratingContainer: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      flexShrink: 0,
    },
    stars: {
      display: "flex",
      gap: "0.1rem",
    },
    star: {
      color: "#ffc107",
      fontSize: isMobile ? "1.1rem" : "1.2rem",
    },
    starEmpty: {
      color: "#e0e0e0",
      fontSize: isMobile ? "1.1rem" : "1.2rem",
    },
    ratingText: {
      fontSize: isMobile ? "0.9rem" : "1rem",
      fontWeight: "600",
      color: "#2c3e50",
      marginLeft: "0.3rem",
    },
    comment: {
      fontSize: isMobile ? "0.95rem" : "1rem",
      lineHeight: "1.5",
      color: "#34495e",
      padding: isMobile ? "1rem" : "1rem",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      borderLeft: isMobile ? "3px solid #3498db" : "4px solid #3498db",
      flex: 1,
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    },
    commentText: {
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      margin: 0,
    },
    date: {
      textAlign: "right",
      fontSize: isMobile ? "0.8rem" : "0.85rem",
      color: "#95a5a6",
      marginTop: "0.8rem",
      fontStyle: "italic",
    },
    emptyState: {
      textAlign: "center",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem",
      backgroundColor: "#f8f9fa",
      borderRadius: "16px",
      border: "2px dashed #dee2e6",
    },
    emptyIcon: {
      fontSize: isMobile ? "2.5rem" : "3rem",
      color: "#bdc3c7",
      marginBottom: "1rem",
    },
    emptyText: {
      fontSize: isMobile ? "1.1rem" : "1.2rem",
      color: "#7f8c8d",
      marginBottom: "0.5rem",
    },
    emptySubtext: {
      fontSize: isMobile ? "0.9rem" : "1rem",
      color: "#95a5a6",
    },
  };

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} style={styles.star}>★</span>);
      } else {
        stars.push(<span key={i} style={styles.starEmpty}>★</span>);
      }
    }
    return stars;
  };

  // Function to get initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to truncate comment for mobile
  const truncateComment = (comment, maxLength = 120) => {
    if (isMobile && comment.length > maxLength) {
      return comment.substring(0, maxLength) + '...';
    }
    return comment;
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.loading}>
          <div>Loading reviews...</div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Customer Reviews</h1>
        <p style={styles.subtitle}>See what our customers are saying about us</p>
      </div>

      {error && <div style={styles.error}>{error}</div>}

      {!error && (
        <>
          <div style={styles.reviewCount}>
            {reviews.length === 0 
              ? "No reviews yet" 
              : `Showing ${reviews.length} ${reviews.length === 1 ? 'review' : 'reviews'}`
            }
          </div>

          {reviews.length === 0 ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>💬</div>
              <div style={styles.emptyText}>No reviews yet</div>
              <div style={styles.emptySubtext}>Be the first to share your experience!</div>
            </div>
          ) : (
            <div style={styles.reviewGrid}>
              {reviews.map((review, index) => (
                <div 
                  key={review._id || index} 
                  style={{
                    ...styles.reviewCard,
                    transform: "translateY(0)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.12)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = isMobile 
                        ? "0 3px 15px rgba(0, 0, 0, 0.08)" 
                        : "0 5px 20px rgba(0, 0, 0, 0.08)";
                    }
                  }}
                >
                  <div style={styles.reviewHeader}>
                    <div style={styles.reviewerInfo}>
                      <div style={styles.avatar}>
                        {getInitials(review.name)}
                      </div>
                      <div style={styles.reviewerDetails}>
                        <div style={styles.reviewerName}>{review.name}</div>
                        <div style={styles.reviewerEmail}>{review.email}</div>
                      </div>
                    </div>
                    
                    <div style={styles.ratingContainer}>
                      <div style={styles.stars}>
                        {renderStars(parseInt(review.rating))}
                      </div>
                      <div style={styles.ratingText}>{review.rating}/5</div>
                    </div>
                  </div>
                  
                  <div style={styles.comment}>
                    <p style={styles.commentText}>
                      "{isMobile ? truncateComment(review.comment) : review.comment}"
                    </p>
                  </div>
                  
                  {review.createdAt && (
                    <div style={styles.date}>
                      Posted on {formatDate(review.createdAt)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ReviewDisplay;