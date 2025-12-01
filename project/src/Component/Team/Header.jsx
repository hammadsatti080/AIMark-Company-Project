// components/Team.jsx
import React, { useState, useEffect } from "react";

const Header = () => {
  const backend = "http://localhost:5000";
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Main container - REMOVED BACKGROUND COLOR
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: isMobile ? "10px" : "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: "100vh"
  };

  // Header - REMOVED WHITE BACKGROUND
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: isMobile ? "20px" : "30px",
    padding: isMobile ? "15px 0" : "20px 0",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "15px" : "0"
  };

  // Title
  const titleStyle = {
    color: "white",
    fontSize: isMobile ? "1.5rem" : "2.5rem",
    margin: "0",
    fontWeight: "700",
    textAlign: isMobile ? "center" : "left",
    animation: "fadeInDown 0.8s ease-out"
  };

  // Buttons
  const buttonStyle = {
    padding: isMobile ? "10px 20px" : "12px 24px",
    backgroundColor: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: isMobile ? "14px" : "16px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    ':hover': {
      backgroundColor: "#5a6fd8",
      transform: "translateY(-2px)"
    }
  };

  // Detail Button - NEW STYLE
  const detailButtonStyle = {
    padding: "8px 16px",
    backgroundColor: "transparent",
    color: "#667eea",
    border: "2px solid #667eea",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    marginTop: "15px",
    width: "100%",
    ':hover': {
      backgroundColor: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      color: "white",
      transform: "translateY(-2px)"
    }
  };

  // Loading
  const loadingStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: isMobile ? "40px 20px" : "60px 20px",
    textAlign: "center"
  };

  const spinnerStyle = {
    width: isMobile ? "40px" : "50px",
    height: isMobile ? "40px" : "50px",
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #667eea",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "20px"
  };

  // Error - REMOVED WHITE BACKGROUND
  const errorStyle = {
    textAlign: "center",
    padding: isMobile ? "30px 15px" : "40px 20px",
    borderRadius: "12px",
    margin: "20px 0",
    animation: "fadeIn 0.5s ease-out"
  };

  // Team grid
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(350px, 1fr))",
    gap: isMobile ? "15px" : "25px",
    marginBottom: "30px"
  };

  // Team card - ONLY WHITE ELEMENT with enhanced animations
  const cardStyle = {
   
   background:"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transform: "translateY(0)",
    animation: "cardEntrance 0.6s ease-out forwards",
    opacity: 0
  };

  // Image container with hover effect
  const imageStyle = {
    width: "100%",
    height: isMobile ? "200px" : "250px",
    overflow: "hidden",
    position: "relative"
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
    transform: "scale(1)"
  };

  // Details
  const detailsStyle = {
    padding: isMobile ? "15px" : "25px",
    flex: "1",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column"
  };

  const nameStyle = {
    fontSize: isMobile ? "1.3rem" : "1.5rem",
    fontWeight: "700",
    color: "white",
    margin: "0 0 8px 0",
    transition: "color 0.3s ease"
  };

  const positionStyle = {
    fontSize: isMobile ? "1rem" : "1.1rem",
    color: "white",
    fontWeight: "600",
    margin: "0 0 15px 0",
    transition: "color 0.3s ease"
  };

  // Info grid
  const infoGridStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: "1"
  };

  const infoItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "6px 0",
    borderBottom: "1px solid #f0f0f0",
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: "1.4",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "2px" : "0",
    transition: "all 0.3s ease",
    opacity: 0,
    animation: "fadeInUp 0.5s ease-out forwards"
  };


  // Modal Styles - NEW
  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: isMobile ? "10px" : "20px",
    animation: "fadeIn 0.3s ease-out"
  };

  const modalContentStyle = {
  
  background:"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  color:"white",
    borderRadius: "16px",
    padding: isMobile ? "20px" : "30px",
    maxWidth: "600px",
    width: "100%",
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
    animation: "scaleIn 0.3s ease-out",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "white",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    ':hover': {
      backgroundColor: "#f0f0f0",
      color: "white"
    }
  };

  const modalHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "25px",
    flexDirection: isMobile ? "column" : "row",
    textAlign: isMobile ? "center" : "left"
  };

  const modalImageStyle = {
    width: isMobile ? "120px" : "150px",
    height: isMobile ? "120px" : "150px",
    borderRadius: "50%",
    overflow: "hidden",
    flexShrink: 0
  };

  const modalDetailsStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  };

  const modalInfoItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "15px",
    padding: "12px 0",
    borderBottom: "1px solid #f0f0f0"
  };

  const iconStyle = {
    fontSize: "20px",
    flexShrink: 0,
    marginTop: "2px"
  };

  const infoContentStyle = {
    flex: "1"
  };

  const infoLabelStyle = {
    fontWeight: "600",
    color: "white",
    marginBottom: "4px",
    fontSize: "14px"
  };

  const infoValueStyle = {
    color: "white",
    fontSize: "15px",
    lineHeight: "1.5"
  };

  // Empty team - ONLY WHITE CARD
  const emptyTeamStyle = {
    textAlign: "center",
    padding: isMobile ? "40px 15px" : "60px 20px",
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    margin: "20px 0",
    animation: "pulse 2s infinite"
  };

  const emptyIconStyle = {
    fontSize: isMobile ? "3rem" : "4rem",
    marginBottom: "15px",
    animation: "bounce 2s infinite"
  };

  // Debug info - REMOVED BACKGROUND COLOR
  const debugStyle = {
    color: "white",
    padding: isMobile ? "12px 15px" : "15px 20px",
    borderRadius: "8px",
    fontSize: isMobile ? "12px" : "14px",
    marginTop: "20px",
    border: "1px solid #e0e0e0",
    animation: "fadeIn 0.8s ease-out"
  };

  // Automatically fetch team data when component loads
  useEffect(() => {
    fetchTeam();
  }, []);

  // Fetch team members from backend
  const fetchTeam = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`${backend}/api/team`);
      
      if (res.ok) {
        const data = await res.json();
        setTeam(data);
        console.log("Team data fetched:", data);
      } else {
        setError("Failed to fetch team members");
      }
    } catch (error) {
      console.error("Error fetching team:", error);
      setError("Network error while fetching team");
    } finally {
      setLoading(false);
    }
  };

  // Refresh team data manually
  const handleRefresh = () => {
    fetchTeam();
  };

  // Show member details in modal - NEW FUNCTION
  const handleShowDetails = (member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  // Close modal - NEW FUNCTION
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  // Enhanced button style with animation
  const animatedButtonStyle = {
    ...buttonStyle,
    animation: "pulse 2s infinite"
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
        <div style={loadingStyle}>
          <div style={spinnerStyle}></div>
          <p style={{ 
            fontSize: isMobile ? "16px" : "18px", 
            color: "#666", 
            margin: "0" 
          }}>
            Loading team members...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={containerStyle}>
        <style>
          {`
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-5px); }
              75% { transform: translateX(5px); }
            }
          `}
        </style>
        <div style={errorStyle}>
          <p style={{ 
            fontSize: isMobile ? "16px" : "18px", 
            margin: "0 0 20px 0",
            animation: "shake 0.5s ease-in-out"
          }}>
            ❌ {error}
          </p>
          <button 
            onClick={handleRefresh} 
            style={animatedButtonStyle}
          >
            🔄 Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <style>
        {`
          /* Keyframes for animations */
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes cardEntrance {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }

          /* Hover effects for cards */
          .team-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 12px 30px rgba(0,0,0,0.15);
          }

          .team-card:hover .member-image {
            transform: scale(1.1);
          }

          .team-card:hover .member-name {
            color: #667eea;
          }

          .team-card:hover .member-position {
            color: #5a6fd8;
          }

          /* Button hover effects */
          .detail-button:hover {
            background-color: #667eea !important;
            color: white !important;
            transform: translateY(-2px) !important;
          }

          .close-button:hover {
            background-color: #f0f0f0 !important;
            color: #333 !important;
          }

          /* Staggered animation for info items */
          .info-item:nth-child(1) { animation-delay: 0.1s; }
          .info-item:nth-child(2) { animation-delay: 0.2s; }
          .info-item:nth-child(3) { animation-delay: 0.3s; }
          .info-item:nth-child(4) { animation-delay: 0.4s; }
          .info-item:nth-child(5) { animation-delay: 0.5s; }

          /* Staggered animation for cards */
          .team-card:nth-child(1) { animation-delay: 0.1s; }
          .team-card:nth-child(2) { animation-delay: 0.2s; }
          .team-card:nth-child(3) { animation-delay: 0.3s; }
          .team-card:nth-child(4) { animation-delay: 0.4s; }
          .team-card:nth-child(5) { animation-delay: 0.5s; }
          .team-card:nth-child(6) { animation-delay: 0.6s; }
        `}
      </style>

      {/* Header - NO WHITE BACKGROUND */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>👥 Our Amazing Team</h1>
        <button 
          onClick={handleRefresh} 
          style={buttonStyle}
        >
          🔄 Refresh
        </button>
      </div>

      {/* Team Grid - ONLY CARDS HAVE WHITE BACKGROUND */}
      {team.length === 0 ? (
        <div style={emptyTeamStyle}>
          <div style={emptyIconStyle}>👥</div>
          <h3 style={{ color: "#2c3e50", margin: "0 0 10px 0" }}>
            No Team Members Yet
          </h3>
          <p style={{ color: "#666", margin: "0" }}>
            Our team is growing soon!
          </p>
        </div>
      ) : (
        <div style={gridStyle}>
          {team.map((member, index) => (
            <div 
              key={member._id} 
              className="team-card"
              style={{
                ...cardStyle,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Member Image */}
              <div style={imageStyle}>
                <img
                  src={member.image || "https://via.placeholder.com/400x300/667eea/ffffff?text=No+Image"}
                  alt={member.name}
                  className="member-image"
                  style={imgStyle}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300/667eea/ffffff?text=No+Image";
                  }}
                />
              </div>
              
              {/* Member Info */}
              <div style={detailsStyle}>
                <h3 className="member-name" style={nameStyle}>{member.name}</h3>
                <p className="member-position" style={positionStyle}>{member.post}</p>
                
                <div style={infoGridStyle}>
                  <div 
                    className="info-item"
                    style={{
                      ...infoItemStyle,
                      animationDelay: `${index * 0.1 + 0.2}s`,
                      color:"white"
                    }}
                  >
                    <strong >🎯 Experience:</strong>
                    <span >{member.experienceTime}</span>
                  </div>
                  
                  <div 
                    className="info-item"
                    style={{
                      ...infoItemStyle,
                      animationDelay: `${index * 0.1 + 0.3}s`,
                     color:"white"
                    }}
                  >
                    <strong>📚 Education:</strong>
                    <span>{member.education}</span>
                  </div>
                </div>

                {/* Detail Button - NEW */}
                <button 
                  className="detail-button"
                  style={detailButtonStyle}
                  onClick={() => handleShowDetails(member)}
                >
                  📋 View Full Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Member Detail Modal - NEW */}
      {showModal && selectedMember && (
        <div style={modalOverlayStyle} onClick={handleCloseModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-button"
              style={closeButtonStyle}
              onClick={handleCloseModal}
            >
              ×
            </button>
            
            <div style={modalHeaderStyle}>
              <div style={modalImageStyle}>
                <img
                  src={selectedMember.image || "https://via.placeholder.com/150/667eea/ffffff?text=No+Image"}
                  alt={selectedMember.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div>
                <h2 style={{ 
                  margin: "0 0 8px 0", 
                  color: "white",
                  fontSize: isMobile ? "1.5rem" : "1.8rem"
                }}>
                  {selectedMember.name}
                </h2>
                <p style={{ 
                  margin: "0", 
                  color: "#667eea",
                  fontSize: isMobile ? "1.1rem" : "1.3rem",
                  fontWeight: "600"
                }}>
                  {selectedMember.post}
                </p>
              </div>
            </div>

            <div style={modalDetailsStyle}>
              <div style={modalInfoItemStyle}>
                <div style={iconStyle}>🎯</div>
                <div style={infoContentStyle}>
                  <div style={infoLabelStyle}>Experience</div>
                  <div style={infoValueStyle}>{selectedMember.experienceTime}</div>
                </div>
              </div>

              <div style={modalInfoItemStyle}>
                <div style={iconStyle}>📚</div>
                <div style={infoContentStyle}>
                  <div style={infoLabelStyle}>Education</div>
                  <div style={infoValueStyle}>{selectedMember.education}</div>
                </div>
              </div>

              {selectedMember.startOfJoining && (
                <div style={modalInfoItemStyle}>
                  <div style={iconStyle}>📅</div>
                  <div style={infoContentStyle}>
                    <div style={infoLabelStyle}>Joined</div>
                    <div style={infoValueStyle}>
                      {new Date(selectedMember.startOfJoining).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              )}

              {selectedMember.growthAreas && (
                <div style={modalInfoItemStyle}>
                  <div style={iconStyle}>🚀</div>
                  <div style={infoContentStyle}>
                    <div style={infoLabelStyle}>Growth Areas</div>
                    <div style={infoValueStyle}>{selectedMember.growthAreas}</div>
                  </div>
                </div>
              )}

              {selectedMember.achievements && (
                <div style={modalInfoItemStyle}>
                  <div style={iconStyle}>🏆</div>
                  <div style={infoContentStyle}>
                    <div style={infoLabelStyle}>Achievements</div>
                    <div style={infoValueStyle}>{selectedMember.achievements}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Debug Info - NO BACKGROUND COLOR */}
      <div style={debugStyle}>
        <p style={{ margin: "0 0 8px 0" }}>
          <strong>Team Members Count:</strong> {team.length}
        </p>
        <p style={{ margin: "0" }}>
          <strong>Last Updated:</strong> {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default Header;