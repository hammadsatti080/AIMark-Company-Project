import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Course() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [courseData, setCourseData] = useState({
    icon:'', title:'', language:'', framework:'', developerName:'',
    level:'', duration:'', progress:0, description:'', tags:[]
  });
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window size for responsiveness
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  // Enhanced animations
  const fadeInUp = {
    animation: 'fadeInUp 0.6s ease-out forwards',
    opacity: 0,
    transform: 'translateY(30px)'
  };

  const scaleIn = {
    animation: 'scaleIn 0.4s ease-out forwards',
    opacity: 0,
    transform: 'scale(0.9)'
  };

  const slideIn = {
    animation: 'slideIn 0.5s ease-out forwards',
    opacity: 0,
    transform: 'translateX(-20px)'
  };

  // Premium gradient backgrounds
  const premiumGradients = {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    success: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    dark: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
    glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
  };

  // Responsive container styles
  const containerStyle = {
    minHeight: '100vh',
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
    padding: isMobile ? '1rem' : '2rem',
    position: 'relative',
    overflow: 'hidden'
  };

  // Animated background elements
  const backgroundElements = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0
  };

  // Small Admin Button Style
  const adminButtonStyle = {
    position: 'fixed',
    top: isMobile ? '20px' : '30px',
    right: isMobile ? '20px' : '30px',
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    padding: isMobile ? '12px 20px' : '15px 25px',
    cursor: 'pointer',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
    zIndex: 1000,
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  };

  const adminButtonHover = {
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)'
  };

  // Glass morphism card style - Responsive
  const glassCardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px) saturate(180%)',
    padding: isMobile ? '1.5rem' : '2.5rem',
    borderRadius: '24px',
    maxWidth: isMobile ? '100%' : '500px',
    margin: isMobile ? '1rem auto' : '2rem auto',
    boxShadow: `
      0 25px 50px rgba(0, 0, 0, 0.15),
      0 10px 20px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.6)
    `,
    border: '1px solid rgba(255, 255, 255, 0.3)',
    position: 'relative',
    zIndex: 1,
    ...fadeInUp
  };

  // Premium input styles - Responsive
  const premiumInputStyle = {
    marginBottom: '1.2rem',
    padding: isMobile ? '1rem' : '1.2rem 1.5rem',
    borderRadius: '16px',
    border: '2px solid transparent',
    width: '100%',
    fontSize: '16px',
    background: 'rgba(255, 255, 255, 0.9)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    fontFamily: 'inherit'
  };

  const inputFocusStyle = {
    borderColor: '#667eea',
    background: '#ffffff',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.15)',
    transform: 'translateY(-2px)'
  };

  // Premium button styles - Responsive
  const premiumButtonStyle = {
    padding: isMobile ? '1rem 1.5rem' : '1.2rem 2rem',
    border: 'none',
    borderRadius: '16px',
    background: premiumGradients.primary,
    color: '#fff',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'inherit'
  };

  const buttonHoverStyle = {
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)'
  };

  // Enhanced course card styles - Responsive
  const premiumCourseCardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: isMobile ? '1.5rem' : '2rem',
    borderRadius: '20px',
    boxShadow: `
      0 15px 35px rgba(0, 0, 0, 0.08),
      0 5px 15px rgba(0, 0, 0, 0.05)
    `,
    marginBottom: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(10px)'
  };

  const courseCardHover = {
    transform: isMobile ? 'translateY(-3px)' : 'translateY(-8px) scale(1.02)',
    boxShadow: `
      0 25px 50px rgba(0, 0, 0, 0.15),
      0 15px 30px rgba(0, 0, 0, 0.1)
    `
  };

  // Premium header styles - Responsive
  const premiumHeaderStyle = {
    textAlign: 'center',
    fontSize: isMobile ? '2rem' : '3rem',
    fontWeight: '800',
    background: "white",
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: '"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"',
    marginBottom: '2rem',
    letterSpacing: '-0.02em',
    ...fadeInUp
  };
  const premiumHeaderStyles = {
    textAlign: 'center',
    fontSize: isMobile ? '2rem' : '3rem',
    fontWeight: '800',
    background: "white",
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: "white",
    marginBottom: '2rem',
    letterSpacing: '-0.02em',
    ...fadeInUp
  };
  // Enhanced grid layout - Responsive
  const premiumGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 
                        isTablet ? 'repeat(auto-fill, minmax(300px, 1fr))' : 
                        'repeat(auto-fill, minmax(380px, 1fr))',
    gap: isMobile ? '1rem' : '2rem',
    marginTop: isMobile ? '1.5rem' : '3rem',
    position: 'relative',
    zIndex: 1
  };

  // Progress bar style
  const progressBarStyle = {
    height: '8px',
    background: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '1rem 0'
  };

  const progressFillStyle = (progress) => ({
    height: '100%',
    background: premiumGradients.success,
    borderRadius: '10px',
    width: `${progress}%`,
    transition: 'width 1s ease-in-out',
    boxShadow: '0 2px 10px rgba(79, 172, 254, 0.3)'
  });

  // Modal overlay for login
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: isMobile ? '1rem' : '2rem',
    ...scaleIn
  };

  // Fetch courses
  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/courses');
      setCourses(res.data);
    } catch (err) {
      console.error('Error fetching courses:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { 
    fetchCourses(); 
  }, []);

  // Admin login handlers
  const handleLoginChange = e => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', loginData);
      if(res.data.success){
        setIsAdmin(true);
        setShowLoginForm(false);
        setShowCourseForm(false);
      }
    } catch(err){
      alert(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  // Course form handlers
  const handleCourseChange = e => {
    const { name, value } = e.target;
    if(name === 'tags') setCourseData({ ...courseData, tags: value.split(',') });
    else setCourseData({ ...courseData, [name]: value });
  };

  const handleCourseSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let res;
      if(editingCourseId){
        res = await axios.put(`http://localhost:5000/api/courses/${editingCourseId}`, courseData, {
          headers: { adminEmail: loginData.email, adminPassword: loginData.password }
        });
      } else {
        res = await axios.post('http://localhost:5000/api/courses/add', courseData, {
          headers: { adminEmail: loginData.email, adminPassword: loginData.password }
        });
      }

      fetchCourses();
      setCourseData({ icon:'', title:'', language:'', framework:'', developerName:'',
        level:'', duration:'', progress:0, description:'', tags:[] });
      setShowCourseForm(false);
      setEditingCourseId(null);
    } catch(err){
      alert(err.response?.data?.error || 'Error submitting course');
    } finally {
      setIsLoading(false);
    }
  };

  // Admin actions
  const handleDelete = async (id) => {
    if(!window.confirm('Are you sure you want to delete this course?')) return;
    setIsLoading(true);
    try{
      await axios.delete(`http://localhost:5000/api/courses/${id}`, {
        headers: { adminEmail: loginData.email, adminPassword: loginData.password }
      });
      fetchCourses();
    } catch(err){
      alert(err.response?.data?.error || 'Error deleting course');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (course) => {
    setCourseData({...course, tags: course.tags || []});
    setShowCourseForm(true);
    setEditingCourseId(course._id);
  };

  return (
    <div style={containerStyle}>
      {/* Animated background */}
      <div style={backgroundElements}></div>
      
      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes scaleIn {
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes slideIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .shimmer {
            position: relative;
            overflow: hidden;
          }
          .shimmer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.4),
              transparent
            );
            animation: shimmer 2s infinite;
          }
        `}
      </style>

      {/* Small Admin Button - Always Visible */}
      {!isAdmin && (
        <button 
          style={adminButtonStyle}
          onClick={() => setShowLoginForm(true)}
          onMouseOver={(e) => Object.assign(e.target.style, adminButtonHover)}
          onMouseOut={(e) => Object.assign(e.target.style, adminButtonStyle)}
        >
          ⚙️ {!isMobile && 'Admin'}
        </button>
      )}

      {/* Admin Logout Button */}
      {isAdmin && (
        <button 
          style={{
            ...adminButtonStyle,
            background: premiumGradients.secondary
          }}
          onClick={() => {
            setIsAdmin(false);
            setShowCourseForm(false);
          }}
          onMouseOver={(e) => Object.assign(e.target.style, { ...adminButtonHover, background: premiumGradients.secondary })}
          onMouseOut={(e) => Object.assign(e.target.style, { ...adminButtonStyle, background: premiumGradients.secondary })}
        >
          👋 {!isMobile && 'Logout'}
        </button>
      )}

      {/* Login Modal */}
      {showLoginForm && (
        <div style={modalOverlayStyle} onClick={() => setShowLoginForm(false)}>
          <div style={glassCardStyle} onClick={(e) => e.stopPropagation()}>
            <h2 style={premiumHeaderStyle}>Admin Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input 
                name="email" 
                type="email"
                placeholder="Enter your email" 
                value={loginData.email} 
                onChange={handleLoginChange} 
                style={premiumInputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, premiumInputStyle)}
                required 
              />
              <input 
                type="password" 
                name="password" 
                placeholder="Enter your password" 
                value={loginData.password} 
                onChange={handleLoginChange} 
                style={premiumInputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => Object.assign(e.target.style, premiumInputStyle)}
                required 
              />
              <div style={{ display: 'flex', gap: '1rem', flexDirection: isMobile ? 'column' : 'row' }}>
                <button 
                  type="submit" 
                  style={premiumButtonStyle}
                  onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                  onMouseOut={(e) => Object.assign(e.target.style, premiumButtonStyle)}
                >
                  🔐 Login
                </button>
                <button 
                  type="button"
                  onClick={() => setShowLoginForm(false)}
                  style={{
                    ...premiumButtonStyle,
                    background: premiumGradients.secondary
                  }}
                  onMouseOver={(e) => Object.assign(e.target.style, { ...buttonHoverStyle, background: premiumGradients.secondary })}
                  onMouseOut={(e) => Object.assign(e.target.style, { ...premiumButtonStyle, background: premiumGradients.secondary })}
                >
                  ❌ Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          ...scaleIn
        }}>
          <div style={{
            background: 'white',
            padding: isMobile ? '2rem' : '3rem',
            borderRadius: '20px',
            textAlign: 'center',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #667eea',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 1rem'
            }}></div>
            <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600', color: '#333' }}>
              Loading...
            </p>
          </div>
        </div>
      )}

      {/* ADMIN PANEL - Only shown after authentication */}
      {isAdmin && (
        <div style={{ marginBottom: '3rem', position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem',
            ...fadeInUp
          }}>
            <h1 style={premiumHeaderStyles}>Course Management</h1>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-end' }}>
              <button 
                onClick={()=>{setShowCourseForm(!showCourseForm); setEditingCourseId(null)}}
                style={{
                  ...premiumButtonStyle,
                  width: 'auto',
                  padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
                  background: showCourseForm ? premiumGradients.secondary : premiumGradients.primary
                }}
                onMouseOver={(e) => Object.assign(e.target.style, { ...buttonHoverStyle, width: 'auto', padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem' })}
                onMouseOut={(e) => Object.assign(e.target.style, { ...premiumButtonStyle, width: 'auto', padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem' })}
              >
                {showCourseForm ? '📚 View Courses' : '➕ Add Course'}
              </button>
            </div>
          </div>

          {showCourseForm && (
            <div style={{...glassCardStyle, maxWidth: isMobile ? '100%' : '800px', ...scaleIn}}>
              <h2 style={{...premiumHeaderStyle, fontSize: isMobile ? '1.8rem' : '2.5rem'}}>
                {editingCourseId ? 'Update Course' : 'Create New Course'}
              </h2>
              <form onSubmit={handleCourseSubmit}>
                <div style={{
                  display: 'grid', 
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', 
                  gap: '1.5rem'
                }}>
                  {['icon','title','language','framework','developerName','level','duration','description'].map(field => (
                    <input 
                      key={field} 
                      name={field} 
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)} 
                      value={courseData[field]} 
                      onChange={handleCourseChange} 
                      style={premiumInputStyle}
                      onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, premiumInputStyle)}
                      required 
                    />
                  ))}
                </div>
                <input 
                  name="progress" 
                  type="number" 
                  placeholder="Progress" 
                  value={courseData.progress} 
                  onChange={handleCourseChange} 
                  style={premiumInputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, premiumInputStyle)}
                />
                <input 
                  name="tags" 
                  placeholder="Tags (comma separated)" 
                  value={courseData.tags.join(',')} 
                  onChange={handleCourseChange} 
                  style={premiumInputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, premiumInputStyle)}
                />
                <button 
                  type="submit" 
                  style={premiumButtonStyle}
                  onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
                  onMouseOut={(e) => Object.assign(e.target.style, premiumButtonStyle)}
                >
                  {editingCourseId ? '🔄 Update Course' : '🚀 Create Course'}
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* COURSES GRID - Always Visible */}
      <div>
        <h1 style={{
          ...premiumHeaderStyles,
          fontSize: isMobile ? '2.2rem' : '3rem',
          textAlign: 'center',
          marginBottom: isMobile ? '1.5rem' : '3rem'
        }}>
          Available Courses
        </h1>

        {courses.length === 0 && !isLoading ? (
          <div style={{...glassCardStyle, textAlign: 'center', ...fadeInUp}}>
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>📚</div>
            <p style={{fontSize: '1.4rem', color: '#6c757d', margin: 0}}>
              No courses available yet.
            </p>
            {!isAdmin && (
              <p style={{fontSize: '1rem', color: '#8e9aab', marginTop: '1rem'}}>
                Contact admin to add new courses
              </p>
            )}
          </div>
        ) : (
          <div style={premiumGridStyle}>
            {courses.map((course, idx) => (
              <div 
                key={idx} 
                style={{
                  ...premiumCourseCardStyle,
                  animationDelay: `${idx * 0.1}s`,
                  ...fadeInUp
                }}
                onMouseOver={e => Object.assign(e.currentTarget.style, courseCardHover)}
                onMouseOut={e => Object.assign(e.currentTarget.style, premiumCourseCardStyle)}
              >
                {/* Course Header */}
                <div style={{
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '1.5rem',
                  flexDirection: isMobile ? 'column' : 'row'
                }}>
                  {course.icon && (
                    <span style={{
                      fontSize: isMobile ? '2.5rem' : '3rem',
                      marginRight: isMobile ? '0' : '1.5rem',
                      marginBottom: isMobile ? '1rem' : '0',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                      alignSelf: isMobile ? 'center' : 'flex-start'
                    }}>{course.icon}</span>
                  )}
                  <div style={{flex: 1, textAlign: isMobile ? 'center' : 'left'}}>
                    <h3 style={{
                      margin: 0,
                      fontSize: isMobile ? '1.4rem' : '1.6rem',
                      fontWeight: '700',
                      color: '#2c3e50',
                      lineHeight: '1.3',
                      marginBottom: '0.5rem'
                    }}>{course.title}</h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                      justifyContent: isMobile ? 'center' : 'flex-start'
                    }}>
                      <span style={{
                        background: premiumGradients.primary,
                        color: '#fff',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>{course.language}</span>
                      {course.framework && (
                        <span style={{
                          background: premiumGradients.secondary,
                          color: '#fff',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          fontWeight: '600'
                        }}>{course.framework}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Course Description */}
                <p style={{
                  color: '#5a6c7d',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                  fontSize: '1rem',
                  fontWeight: '400',
                  textAlign: isMobile ? 'center' : 'left'
                }}>{course.description}</p>

                {/* Progress Bar */}
                <div style={progressBarStyle}>
                  <div style={progressFillStyle(course.progress)}></div>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '0.5rem' : '0'
                }}>
                  <span style={{fontSize: '0.9rem', fontWeight: '600', color: '#667eea'}}>
                    Progress: {course.progress}%
                  </span>
                  <span style={{fontSize: '0.9rem', fontWeight: '600', color: '#764ba2'}}>
                    {course.duration}
                  </span>
                </div>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem',
                  justifyContent: isMobile ? 'center' : 'flex-start'
                }}>
                  {course.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      style={{
                        background: 'rgba(102, 126, 234, 0.1)',
                        color: '#667eea',
                        padding: '0.4rem 1rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        border: '1px solid rgba(102, 126, 234, 0.2)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = '#667eea';
                        e.target.style.color = '#fff';
                        e.target.style.transform = 'scale(1.05)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'rgba(102, 126, 234, 0.1)';
                        e.target.style.color = '#667eea';
                        e.target.style.transform = 'scale(1)';
                      }}
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>

                {/* Course Meta */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                  flexDirection: isMobile ? 'column' : 'row'
                }}>
                  <div style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    justifyContent: isMobile ? 'center' : 'flex-start'
                  }}>
                    <span style={{
                      background: premiumGradients.success,
                      color: '#fff',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>🎯 {course.level}</span>
                    <span style={{
                      color: '#6c757d',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>👨‍💻 {course.developerName}</span>
                  </div>
                </div>

                {/* Admin Actions */}
                {isAdmin && (
                  <div style={{
                    marginTop: '1.5rem',
                    display: 'flex',
                    gap: '0.8rem',
                    flexDirection: isMobile ? 'column' : 'row',
                    ...slideIn
                  }}>
                    <button 
                      onClick={()=>handleEdit(course)}
                      style={{
                        ...premiumButtonStyle,
                        width: 'auto',
                        padding: '0.7rem 1.5rem',
                        background: '#ffb300',
                        flex: 1
                      }}
                      onMouseOver={(e) => Object.assign(e.target.style, { 
                        ...buttonHoverStyle, 
                        width: 'auto', 
                        padding: '0.7rem 1.5rem' 
                      })}
                      onMouseOut={(e) => Object.assign(e.target.style, { 
                        ...premiumButtonStyle, 
                        width: 'auto', 
                        padding: '0.7rem 1.5rem' 
                      })}
                    >
                      ✏️ Edit
                    </button>
                    <button 
                      onClick={()=>handleDelete(course._id)}
                      style={{
                        ...premiumButtonStyle,
                        width: 'auto',
                        padding: '0.7rem 1.5rem',
                        background: premiumGradients.secondary,
                        flex: 1
                      }}
                      onMouseOver={(e) => Object.assign(e.target.style, { 
                        ...buttonHoverStyle, 
                        width: 'auto', 
                        padding: '0.7rem 1.5rem' 
                      })}
                      onMouseOut={(e) => Object.assign(e.target.style, { 
                        ...premiumButtonStyle, 
                        width: 'auto', 
                        padding: '0.7rem 1.5rem' 
                      })}
                    >
                      🗑 Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Course;