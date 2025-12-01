import React, { useState, useEffect } from "react";

export default function ServicePortion() {
  const API_URL = "http://localhost:5000/api/services";

  const [services, setServices] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({
    icon: "",
    title: "",
    description: "",
    language: "",
    framework: "",
    developer: "",
    progress: 90,
    duration: "3 months",
    level: "Intermediate",
    tags: [],
    rating: 4.5,
    projects: 0,
    clients: 0,
    startDate: new Date().toISOString().split('T')[0]
  });

  // Enhanced icons for selection
  const commonIcons = ["🚀", "💻", "🎨", "📱", "🔒", "☁️", "🤖", "💡", "⚡", "🎯", "🔧", "📊", "🌐", "💾", "🛡️", "📈"];
  
  // Enhanced tags for selection
  const commonTags = [
    "Web Development", "Mobile App", "AI/ML", "Cloud Computing", "Cybersecurity", 
    "UI/UX Design", "Database", "DevOps", "Frontend", "Backend", "Full Stack",
    "E-commerce", "Blockchain", "IoT", "Data Analytics", "Machine Learning"
  ];

  // Programming languages options
  const languages = ["JavaScript", "Python", "Java", "C++", "TypeScript", "PHP", "Ruby", "Go", "Rust", "Swift", "Kotlin", "Scala"];

  // Frameworks options
  const frameworks = ["React", "Vue", "Angular", "Node.js", "Django", "Spring", "Laravel", "Express", "Flask", "Next.js", "Svelte", "Nuxt.js"];

  // Level options
  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];

  // Duration options
  const durations = ["1 month", "2 months", "3 months", "6 months", "1 year", "Custom"];

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Fetch all services with enhanced error handling
  const loadServices = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/all`);
      const data = await res.json();

      if (data.success) {
        // Enhanced data mapping with fallbacks
        const servicesWithDetails = data.data.map(service => ({
          ...service,
          language: service.language || "JavaScript",
          framework: service.framework || "React",
          developer: service.developer || "Tech Team",
          progress: service.progress || Math.floor(Math.random() * 30) + 70,
          duration: service.duration || "2 months",
          level: service.level || "Intermediate",
          tags: service.tags || ["Web Development", "Frontend"],
          rating: service.rating || (Math.random() * 1 + 4).toFixed(1),
          projects: service.projects || Math.floor(Math.random() * 50) + 10,
          clients: service.clients || Math.floor(Math.random() * 40) + 5,
          startDate: service.startDate || new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          description: service.description || "Professional service delivery with modern technologies and best practices."
        }));
        setServices(servicesWithDetails);
      } else {
        console.error("Failed to load services:", data.message);
        alert("❌ Failed to load services: " + data.message);
      }
    } catch (err) {
      console.error("Error loading services:", err);
      alert("❌ Network error: Failed to load services. Check if server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  // ✅ Enhanced Admin Login with validation
  const handleAdminLogin = async () => {
    if (!admin.email || !admin.password) {
      alert("❌ Please enter both email and password");
      return;
    }

    setLoginLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (admin.email === "admin@gmail.com" && admin.password === "admin123") {
        setIsAdmin(true);
        setAdmin({ email: "", password: "" });
        alert("✅ Admin login successful!");
      } else {
        alert("❌ Incorrect Admin Credentials");
      }
    } catch (err) {
      alert("❌ Login failed. Please try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  // ✅ Open Form with reset
  const handleOpenForm = () => {
    setShowForm(true);
    setCurrentStep(1);
    setFormData({ 
      icon: "", 
      title: "", 
      description: "", 
      language: "", 
      framework: "", 
      developer: "",
      progress: 90,
      duration: "3 months",
      level: "Intermediate",
      tags: [],
      rating: 4.5,
      projects: 0,
      clients: 0,
      startDate: new Date().toISOString().split('T')[0]
    });
  };

  // ✅ Close Form
  const handleCloseForm = () => {
    setShowForm(false);
    setCurrentStep(1);
  };

  // ✅ Enhanced Step Navigation with validation
  const handleNextStep = () => {
    if (currentStep === 1 && !formData.icon) {
      alert("Please select an icon for your service");
      return;
    }
    
    if (currentStep === 2) {
      if (!formData.title.trim()) {
        alert("Please enter service title");
        return;
      }
      if (!formData.description.trim()) {
        alert("Please enter service description");
        return;
      }
      if (formData.description.length < 20) {
        alert("Description should be at least 20 characters long");
        return;
      }
    }

    setCurrentStep(prev => prev + 1);
  };

  // ✅ Handle Previous Step
  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  // ✅ Enhanced Add Service with validation
  const handleAddService = async () => {
    if (!formData.language) {
      alert("Please select a programming language");
      return;
    }
    if (!formData.framework) {
      alert("Please select a framework");
      return;
    }
    if (!formData.developer.trim()) {
      alert("Please enter developer/team name");
      return;
    }
    if (formData.tags.length === 0) {
      alert("Please select at least one tag");
      return;
    }

    try {
      const serviceData = {
        ...formData,
        projects: parseInt(formData.projects) || 0,
        clients: parseInt(formData.clients) || 0,
        rating: parseFloat(formData.rating) || 4.5,
        progress: parseInt(formData.progress) || 90
      };

      const res = await fetch(`${API_URL}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          email: "admin@gmail.com",
          password: "admin123",
        },
        body: JSON.stringify(serviceData),
      });

      const data = await res.json();
      
      if (data.success) {
        alert("✅ " + data.message);
        loadServices();
        handleCloseForm();
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error("Error adding service:", err);
      alert("❌ Failed to add service. Check console for details.");
    }
  };

  // ✅ Enhanced Delete Service with confirmation
  const deleteService = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service? This action cannot be undone.")) {
      return;
    }

    try {
      const res = await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
        headers: {
          email: "admin@gmail.com",
          password: "admin123",
        },
      });

      const data = await res.json();
      
      if (data.success) {
        alert("✅ " + data.message);
        loadServices();
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error("Error deleting service:", err);
      alert("❌ Delete failed. Check console for details.");
    }
  };

  // ✅ Handle Explore Button Click
  const handleExploreClick = (service) => {
    setSelectedService(service);
    setShowDetailModal(true);
  };

  // ✅ Enhanced Tag Selection
  const handleTagToggle = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag) 
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag].slice(0, 6)
    }));
  };

  // ✅ Handle Input Changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // ✅ Calculate service statistics
  const calculateStats = () => {
    const totalServices = services.length;
    const avgProgress = services.reduce((acc, service) => acc + service.progress, 0) / totalServices || 0;
    const totalProjects = services.reduce((acc, service) => acc + service.projects, 0);
    const totalClients = services.reduce((acc, service) => acc + service.clients, 0);
    
    return { totalServices, avgProgress, totalProjects, totalClients };
  };

  const stats = calculateStats();

  // Responsive Styles
  const styles = {
    // Main Container
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      padding: isMobile ? '2rem 0' : '4rem 0',
      position: 'relative',
      overflow: 'hidden',
    },
    
    // Background Elements
    bgBubble1: {
      position: 'absolute',
      top: '-10%',
      right: '-10%',
      width: isMobile ? '200px' : '400px',
      height: isMobile ? '200px' : '400px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'pulse 4s ease-in-out infinite'
    },
    bgBubble2: {
      position: 'absolute',
      bottom: '-10%',
      left: '-10%',
      width: isMobile ? '200px' : '400px',
      height: isMobile ? '200px' : '400px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '50%',
      filter: 'blur(40px)',
      animation: 'pulse 4s ease-in-out infinite 2s'
    },

    // Header
    header: {
      textAlign: 'center',
      marginBottom: isMobile ? '2rem' : '3rem',
      position: 'relative',
      zIndex: 10,
      padding: isMobile ? '0 1rem' : '0'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      padding: isMobile ? '0.4rem 1rem' : '0.5rem 1.5rem',
      borderRadius: '2rem',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      border: '1px solid rgba(255,255,255,0.3)',
      animation: 'float 6s ease-in-out infinite',
      color: 'white',
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      fontWeight: '600'
    },
    badgeDot: {
      width: '6px',
      height: '6px',
      background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
      borderRadius: '50%',
      marginRight: '0.5rem',
      animation: 'pulse 2s ease-in-out infinite'
    },
    mainTitle: {
      fontSize: isMobile ? '2.5rem' : '3.5rem',
      fontWeight: '900',
      background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '1rem',
      lineHeight: '1.1',
      padding: isMobile ? '0 0.5rem' : '0'
    },
    subtitle: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      color: 'rgba(255,255,255,0.8)',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
      padding: isMobile ? '0 1rem' : '0'
    },

    

    // Admin Bar
    adminBar: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'stretch' : 'center',
      gap: isMobile ? '1rem' : '0',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      padding: isMobile ? '1.5rem' : '2rem',
      borderRadius: isMobile ? '1.5rem' : '2rem',
      marginBottom: isMobile ? '2rem' : '3rem',
      border: '1px solid rgba(255,255,255,0.2)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      margin: isMobile ? '0 1rem' : '0'
    },
    addButton: {
      background: 'linear-gradient(45deg, #43e97b, #38f9d7)',
      color: 'white',
      border: 'none',
      padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
      borderRadius: isMobile ? '0.875rem' : '1rem',
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      boxShadow: '0 10px 30px rgba(67, 233, 123, 0.3)',
      width: isMobile ? '100%' : 'auto'
    },

    // Services Grid
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: isMobile ? '1.5rem' : '2rem',
      marginBottom: isMobile ? '3rem' : '5rem',
      padding: isMobile ? '0 1rem' : '0'
    },

    // Service Card
    card: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: isMobile ? '1.5rem' : '2rem',
      padding: isMobile ? '1.5rem' : '2rem',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.5s ease',
      position: 'relative',
      overflow: 'hidden',
      animation: 'fadeInUp 0.8s ease-out'
    },
    cardHover: {
      transform: isMobile ? 'translateY(-0.5rem)' : 'translateY(-1rem)',
      boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
      background: 'rgba(255,255,255,0.15)'
    },
    iconContainer: {
      position: 'relative',
      marginBottom: isMobile ? '1.5rem' : '2rem'
    },
    iconGlow: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: isMobile ? '60px' : '80px',
      height: isMobile ? '60px' : '80px',
      background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
      borderRadius: isMobile ? '1rem' : '1.5rem',
      filter: 'blur(20px)',
      opacity: 0.7,
      transition: 'all 0.5s ease'
    },
    icon: {
      position: 'relative',
      zIndex: 2,
      width: isMobile ? '60px' : '80px',
      height: isMobile ? '60px' : '80px',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      borderRadius: isMobile ? '1rem' : '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? '2rem' : '2.5rem',
      transition: 'all 0.5s ease'
    },
    numberBadge: {
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      width: isMobile ? '32px' : '40px',
      height: isMobile ? '32px' : '40px',
      background: 'linear-gradient(45deg, #fa709a, #fee140)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      boxShadow: '0 5px 15px rgba(250, 112, 154, 0.4)'
    },
    cardTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: isMobile ? '0.875rem' : '1rem',
      background: 'linear-gradient(45deg, #fff, #e0e0e0)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    cardDescription: {
      color: 'rgba(255,255,255,0.8)',
      lineHeight: '1.6',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      fontSize: isMobile ? '0.9rem' : '1rem',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    
    // Progress Line
    progressContainer: {
      width: '100%',
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '10px',
      marginBottom: isMobile ? '1.25rem' : '1.5rem',
      overflow: 'hidden'
    },
    progressBar: {
      height: '6px',
      background: 'linear-gradient(90deg, #43e97b, #38f9d7)',
      borderRadius: '10px',
      position: 'relative',
      transition: 'width 0.5s ease'
    },
    progressText: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: isMobile ? '0.75rem' : '0.8rem',
      marginBottom: '0.5rem',
      display: 'flex',
      justifyContent: 'space-between'
    },

    actionRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: isMobile ? '0.75rem' : '1rem'
    },
    learnButton: {
      background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
      color: 'white',
      border: 'none',
      padding: isMobile ? '0.625rem 1.25rem' : '0.75rem 1.5rem',
      borderRadius: isMobile ? '0.625rem' : '0.75rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontSize: isMobile ? '0.875rem' : '1rem',
      flex: 1
    },
    deleteButton: {
      background: 'linear-gradient(45deg, #ff6b6b, #ffa8a8)',
      color: 'white',
      border: 'none',
      padding: isMobile ? '0.625rem' : '0.75rem',
      borderRadius: isMobile ? '0.625rem' : '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      opacity: 0,
      fontSize: isMobile ? '0.875rem' : '1rem',
      minWidth: isMobile ? 'auto' : '80px'
    },

    // Detail Modal
    detailModal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: isMobile ? '0.5rem' : '1rem'
    },
    detailContent: {
      background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.1))',
      backdropFilter: 'blur(20px)',
      borderRadius: isMobile ? '1.5rem' : '2rem',
      border: '1px solid rgba(255,255,255,0.3)',
      maxWidth: isMobile ? '95vw' : '800px',
      width: '100%',
      maxHeight: isMobile ? '95vh' : '90vh',
      overflow: 'auto',
      boxShadow: '0 40px 80px rgba(0,0,0,0.3)'
    },
    detailHeader: {
      background: 'linear-gradient(45deg, rgba(67, 233, 123, 0.3), rgba(56, 249, 215, 0.3))',
      padding: isMobile ? '1.5rem' : '2rem',
      borderBottom: '1px solid rgba(255,255,255,0.2)',
      display: 'flex',
      alignItems: isMobile ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '1rem' : '0'
    },
    detailBody: {
      padding: isMobile ? '1.5rem' : '2rem',
      color: 'white'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '1rem',
      marginBottom: isMobile ? '1.5rem' : '2rem'
    },
    statCard: {
      background: 'rgba(255,255,255,0.1)',
      padding: isMobile ? '0.875rem' : '1rem',
      borderRadius: isMobile ? '0.875rem' : '1rem',
      textAlign: 'center',
      backdropFilter: 'blur(10px)'
    },
    tag: {
      display: 'inline-block',
      background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
      color: 'white',
      padding: '0.3rem 0.8rem',
      borderRadius: '1rem',
      fontSize: isMobile ? '0.75rem' : '0.8rem',
      margin: '0.2rem',
      fontWeight: '500'
    },

    // Modal
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: isMobile ? '0.5rem' : '1rem'
    },
    modal: {
      background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
      backdropFilter: 'blur(20px)',
      borderRadius: isMobile ? '1.5rem' : '2rem',
      border: '1px solid rgba(255,255,255,0.3)',
      maxWidth: isMobile ? '95vw' : '600px',
      width: '100%',
      maxHeight: isMobile ? '95vh' : '90vh',
      overflow: 'auto',
      boxShadow: '0 40px 80px rgba(0,0,0,0.3)'
    },
    modalHeader: {
      background: 'linear-gradient(45deg, rgba(67, 233, 123, 0.3), rgba(56, 249, 215, 0.3))',
      padding: isMobile ? '1.5rem' : '2rem',
      borderBottom: '1px solid rgba(255,255,255,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    modalContent: {
      padding: isMobile ? '1.5rem' : '2rem'
    },
    input: {
      width: '100%',
      background: 'rgba(15, 23, 42, 0.8)',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: isMobile ? '0.875rem' : '1rem',
      padding: isMobile ? '0.875rem' : '1rem',
      color: 'white',
      fontSize: isMobile ? '0.9rem' : '1rem',
      marginBottom: isMobile ? '0.875rem' : '1rem',
      backdropFilter: 'blur(10px)',
      outline: 'none',
      transition: 'all 0.3s ease'
    },
    select: {
      width: '50%',
      background: 'rgba(15, 23, 42, 0.8)',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: isMobile ? '0.875rem' : '1rem',
      padding: isMobile ? '0.875rem' : '1rem',
      color: 'white',
      fontSize: isMobile ? '0.9rem' : '1rem',
      marginBottom: isMobile ? '0.875rem' : '1rem',
      backdropFilter: 'blur(10px)',
      outline: 'none'
    },
    tagContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: isMobile ? '0.875rem' : '1rem'
    },
    tagButton: {
      background: 'rgba(255,255,255,0.1)',
      border: '2px solid rgba(255,255,255,0.2)',
      borderRadius: isMobile ? '0.875rem' : '1rem',
      padding: isMobile ? '0.4rem 0.875rem' : '0.5rem 1rem',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '0.8rem' : '0.9rem'
    },
    selectedTag: {
      background: 'linear-gradient(45deg, #43e97b, #38f9d7)',
      borderColor: '#43e97b',
      transform: 'scale(1.05)'
    },
    iconGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(4, 1fr)' : 'repeat(5, 1fr)',
      gap: '0.5rem',
      marginBottom: isMobile ? '1.25rem' : '1.5rem'
    },
    iconButton: {
      background: 'rgba(255,255,255,0.1)',
      border: '2px solid rgba(255,255,255,0.2)',
      borderRadius: isMobile ? '0.875rem' : '1rem',
      padding: isMobile ? '0.875rem' : '1rem',
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      aspectRatio: '1'
    },

    // Loading
    loading: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: isMobile ? '3rem 0' : '5rem 0'
    },
    spinner: {
      width: isMobile ? '50px' : '60px',
      height: isMobile ? '50px' : '60px',
      border: '4px solid rgba(255,255,255,0.3)',
      borderTop: '4px solid #4facfe',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    },

    // Animations
    animations: `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      /* Mobile optimizations */
      @media (max-width: 768px) {
        .service-card:hover {
          transform: none !important;
        }
        
        button:active {
          transform: scale(0.98);
        }
        
        input, select, textarea {
          font-size: 16px; /* Prevents zoom on iOS */
        }
      }
    `
   
  };

  // Service Card Component
  const ServiceCard = ({ service, index }) => {
    const [isHovered, setIsHovered] = useState(false);

  
    
 
    return (
      <div
        style={{
          ...styles.card,
          ...((isHovered && !isMobile) ? styles.cardHover : {}),
          animationDelay: `${index * 150}ms`
        }}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={() => isMobile && handleExploreClick(service)}
        className="service-card"
      >
        <div style={styles.iconContainer}>
          <div style={styles.iconGlow}></div>
          <div style={styles.icon}>
            {service.icon}
          </div>
          <div style={styles.numberBadge}>
            {index + 1}
          </div>
        </div>

        <h3 style={styles.cardTitle}>{service.title}</h3>
        <p style={styles.cardDescription}>{service.description}</p>

        {/* Progress Line */}
        <div style={styles.progressText}>
          <span>Completion Progress</span>
          <span>{service.progress}%</span>
        </div>
        <div style={styles.progressContainer}>
          <div style={{...styles.progressBar, width: `${service.progress}%`}}></div>
        </div>

        <div style={styles.actionRow}>
          <button 
            style={styles.learnButton}
            onClick={() => handleExploreClick(service)}
          >
            {isMobile ? 'Explore' : 'Explore More'} →
          </button>
          {isAdmin && (
            <button
              style={{
                ...styles.deleteButton,
                opacity: (isHovered || isMobile) ? 1 : 0.7
              }}
              onClick={(e) => {
                e.stopPropagation();
                deleteService(service._id);
              }}
              title="Delete Service"
            >
              {isMobile ? '🗑️' : '🗑️ Delete'}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* Background Elements */}
      <div style={styles.bgBubble1}></div>
      <div style={styles.bgBubble2}></div>

      {/* Global Styles */}
      <style>{styles.animations}</style>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: isMobile ? '0 0.5rem' : '0 1rem', 
        position: 'relative', 
        zIndex: 10 
      }}>
        
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.badge}>
            <div style={styles.badgeDot}></div>
            Premium Services Dashboard
          </div>
          <h1 style={styles.mainTitle}>Our Amazing Services</h1>
          <p style={styles.subtitle}>
            Discover our comprehensive suite of professional services with detailed technology stacks, development insights, and real-time progress tracking
          </p>
        </div>

        {/* Admin Bar */}
        {isAdmin && !showForm && (
          <div style={styles.adminBar}>
            <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
              <h2 style={{ 
                color: 'white', 
                fontSize: isMobile ? '1.25rem' : '1.5rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem' 
              }}>
                👑 Admin Dashboard
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                Manage your services with powerful tools and analytics
              </p>
            </div>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              flexDirection: isMobile ? 'column' : 'row',
              width: isMobile ? '100%' : 'auto'
            }}>
              <button style={styles.addButton} onClick={handleOpenForm}>
                ➕ Add New Service
              </button>
              <button 
                style={{
                  ...styles.addButton,
                  background: 'rgba(255,255,255,0.2)',
                  boxShadow: 'none'
                }}
                onClick={() => {
                  setIsAdmin(false);
                  alert("Logged out successfully!");
                }}
              >
                🔓 Logout
              </button>
            </div>
          </div>
        )}


        {/* Loading */}
        {loading && (
          <div style={styles.loading}>
            <div style={styles.spinner}></div>
          </div>
        )}

        {/* Services Grid */}
        {!loading && services.length > 0 && (
          <div style={styles.grid}>
            {services.map((service, index) => (
              <ServiceCard key={service._id || index} service={service} index={index} />
            ))}
          </div>
        )}

        {/* Service Detail Modal */}
        {showDetailModal && selectedService && (
          <div style={styles.detailModal} onClick={() => setShowDetailModal(false)}>
            <div style={styles.detailContent} onClick={(e) => e.stopPropagation()}>
              <div style={styles.detailHeader}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    padding: isMobile ? '0.875rem' : '1rem',
                    borderRadius: isMobile ? '1.25rem' : '1.5rem',
                    fontSize: isMobile ? '2rem' : '2.5rem'
                  }}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 style={{ 
                      color: 'white', 
                      margin: 0, 
                      fontSize: isMobile ? '1.5rem' : '1.8rem',
                      lineHeight: '1.2'
                    }}>
                      {selectedService.title}
                    </h2>
                    <p style={{ 
                      color: 'rgba(255,255,255,0.7)', 
                      margin: isMobile ? '0.5rem 0 0 0' : '0',
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}>
                      {selectedService.level} Level • {selectedService.duration} • {selectedService.language}
                    </p>
                  </div>
                </div>
                <button 
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    color: 'white',
                    padding: isMobile ? '0.75rem' : '0.5rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontSize: isMobile ? '1.5rem' : '1.2rem',
                    alignSelf: isMobile ? 'flex-end' : 'center',
                    marginTop: isMobile ? '-2rem' : '0'
                  }}
                  onClick={() => setShowDetailModal(false)}
                >
                  ✕
                </button>
              </div>
              
              <div style={styles.detailBody}>
                {/* Stats Grid */}
                <div style={styles.statsGrid}>
                  <div style={styles.statCard}>
                    <div style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 'bold', color: '#4facfe' }}>
                      {selectedService.rating}/5
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Rating</div>
                  </div>
                  <div style={styles.statCard}>
                    <div style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 'bold', color: '#43e97b' }}>
                      {selectedService.projects}+
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Projects</div>
                  </div>
                  <div style={styles.statCard}>
                    <div style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 'bold', color: '#fa709a' }}>
                      {selectedService.clients}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Clients</div>
                  </div>
                  <div style={styles.statCard}>
                    <div style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 'bold', color: '#fee140' }}>
                      {selectedService.progress}%
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Progress</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div style={{ marginBottom: isMobile ? '1.5rem' : '2rem' }}>
                  <div style={styles.progressText}>
                    <span>Development Progress</span>
                    <span>{selectedService.progress}%</span>
                  </div>
                  <div style={styles.progressContainer}>
                    <div style={{...styles.progressBar, width: `${selectedService.progress}%`}}></div>
                  </div>
                </div>

                {/* Description */}
                <div style={{ marginBottom: isMobile ? '1.5rem' : '2rem' }}>
                  <h3 style={{ 
                    color: 'white', 
                    marginBottom: '1rem',
                    fontSize: isMobile ? '1.1rem' : '1.25rem'
                  }}>
                    Service Description
                  </h3>
                  <p style={{ 
                    color: 'rgba(255,255,255,0.8)', 
                    lineHeight: '1.6', 
                    fontSize: isMobile ? '0.95rem' : '1.1rem' 
                  }}>
                    {selectedService.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div style={{ marginBottom: isMobile ? '1.5rem' : '2rem' }}>
                  <h3 style={{ 
                    color: 'white', 
                    marginBottom: '1rem',
                    fontSize: isMobile ? '1.1rem' : '1.25rem'
                  }}>
                    Technology Stack
                  </h3>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                    gap: '1rem' 
                  }}>
                    <div>
                      <strong style={{ color: '#4facfe', fontSize: isMobile ? '0.9rem' : '1rem' }}>Programming Language:</strong>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: isMobile ? '0.9rem' : '1rem' }}>{selectedService.language}</p>
                    </div>
                    <div>
                      <strong style={{ color: '#43e97b', fontSize: isMobile ? '0.9rem' : '1rem' }}>Framework:</strong>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: isMobile ? '0.9rem' : '1rem' }}>{selectedService.framework}</p>
                    </div>
                    <div>
                      <strong style={{ color: '#fa709a', fontSize: isMobile ? '0.9rem' : '1rem' }}>Development Team:</strong>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: isMobile ? '0.9rem' : '1rem' }}>{selectedService.developer}</p>
                    </div>
                    <div>
                      <strong style={{ color: '#fee140', fontSize: isMobile ? '0.9rem' : '1rem' }}>Start Date:</strong>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: isMobile ? '0.9rem' : '1rem' }}>{selectedService.startDate}</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 style={{ 
                    color: 'white', 
                    marginBottom: '1rem',
                    fontSize: isMobile ? '1.1rem' : '1.25rem'
                  }}>
                    Technologies & Skills
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {selectedService.tags.map((tag, index) => (
                      <span key={index} style={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add Service Modal Form */}
        {showForm && (
          <div style={styles.modalOverlay} onClick={handleCloseForm}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
              <div style={styles.modalHeader}>
                <h2 style={{ 
                  color: 'white', 
                  fontSize: isMobile ? '1.25rem' : '1.5rem', 
                  fontWeight: '700', 
                  margin: 0,
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  {currentStep === 1 ? '🎨 Choose Icon' : currentStep === 2 ? '✏️ Service Details' : '👁️ Review & Additional Info'}
                </h2>
                <button 
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    color: 'white',
                    padding: isMobile ? '0.75rem' : '0.5rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontSize: isMobile ? '1.25rem' : '1rem'
                  }}
                  onClick={handleCloseForm}
                >
                  ✕
                </button>
              </div>
              <div style={styles.modalContent}>
                
                {/* Step 1: Icon Selection */}
                {currentStep === 1 && (
                  <div>
                    <p style={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      textAlign: 'center', 
                      marginBottom: isMobile ? '1.5rem' : '2rem',
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}>
                      Choose an icon that represents your service
                    </p>
                    <div style={styles.iconGrid}>
                      {commonIcons.map((icon) => (
                        <button
                          key={icon}
                          style={{
                            ...styles.iconButton,
                            ...(formData.icon === icon ? {
                              borderColor: '#43e97b',
                              background: 'rgba(67, 233, 123, 0.2)',
                              transform: 'scale(1.1)'
                            } : {})
                          }}
                          onClick={() => handleInputChange('icon', icon)}
                        >
                          {icon}
                        </button>
                      ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>Selected Icon:</p>
                      <div style={{ fontSize: isMobile ? '2.5rem' : '3rem', marginTop: '0.5rem' }}>{formData.icon || '❌'}</div>
                    </div>
                  </div>
                )}

                {/* Step 2: Service Basic Details */}
                {currentStep === 2 && (
                  <div>
                    <p style={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      textAlign: 'center', 
                      marginBottom: isMobile ? '1.5rem' : '2rem',
                      fontSize: isMobile ? '0.9rem' : '1rem'
                    }}>
                      Enter your service basic details
                    </p>
                    <input
                      style={styles.input}
                      placeholder="Service Title (e.g., Web Development)"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                    />
                    <textarea
                      style={{...styles.input, minHeight: isMobile ? '100px' : '120px', resize: 'vertical'}}
                      placeholder="Service Description (Minimum 20 characters)..."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                    />
                    <div style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: isMobile ? '0.875rem' : '1rem',
                      borderRadius: isMobile ? '0.875rem' : '1rem',
                      marginTop: '1rem'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem', 
                        marginBottom: isMobile ? '0.875rem' : '1rem',
                        flexDirection: isMobile ? 'column' : 'row',
                        textAlign: isMobile ? 'center' : 'left'
                      }}>
                        <div style={{
                          background: 'linear-gradient(135deg, #667eea, #764ba2)',
                          padding: isMobile ? '0.75rem' : '0.5rem',
                          borderRadius: isMobile ? '1rem' : '0.75rem',
                          fontSize: isMobile ? '1.75rem' : '1.5rem'
                        }}>
                          {formData.icon}
                        </div>
                        <div>
                          <p style={{ 
                            color: 'rgba(255,255,255,0.8)', 
                            margin: 0, 
                            fontSize: isMobile ? '0.8rem' : '0.9rem' 
                          }}>
                            Preview
                          </p>
                          <p style={{ 
                            color: '#43e97b', 
                            margin: 0, 
                            fontWeight: '600',
                            fontSize: isMobile ? '1rem' : '1.1rem'
                          }}>
                            {formData.title || 'Your service title'}
                          </p>
                        </div>
                      </div>
                      <p style={{ 
                        color: 'rgba(255,255,255,0.7)', 
                        fontSize: isMobile ? '0.8rem' : '0.9rem', 
                        margin: 0,
                        textAlign: isMobile ? 'center' : 'left'
                      }}>
                        {formData.description || 'Service description will appear here...'}
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Information */}
                {currentStep === 3 && (
                  <div>
                    <p style={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      textAlign: 'center', 
                      marginBottom: isMobile ? '1.5rem' : '2rem',
                      fontSize: isMobile ? '0.9rem' : '1rem',
                    
                    }}>
                      Add technical details and additional information
                    </p>
                    
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                      gap: '1rem' 
                    }}>
                      <select
                        style={styles.select}
                        value={formData.language}
                        onChange={(e) => handleInputChange('language', e.target.value)}
                      >
                        <option value="">Select Language</option>
                        {languages.map(lang => (
                          <option key={lang} value={lang}>{lang}</option>
                        ))}
                      </select>

                      <select
                        style={styles.select}
                        value={formData.framework}
                        onChange={(e) => handleInputChange('framework', e.target.value)}
                      >
                        <option value="">Select Framework</option>
                        {frameworks.map(fw => (
                          <option key={fw} value={fw}>{fw}</option>
                        ))}
                      </select>
                    </div>

                    <input
                      style={styles.input}
                      placeholder="Developer/Team Name"
                      value={formData.developer}
                      onChange={(e) => handleInputChange('developer', e.target.value)}
                    />

                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                      gap: '1rem' 
                    }}>
                      <select
                        style={styles.select}
                        value={formData.level}
                        onChange={(e) => handleInputChange('level', e.target.value)}
                      >
                        <option value="">Select Level</option>
                        {levels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>

                      <select
                        style={styles.select}
                        value={formData.duration}
                        onChange={(e) => handleInputChange('duration', e.target.value)}
                      >
                        <option value="">Select Duration</option>
                        {durations.map(duration => (
                          <option key={duration} value={duration}>{duration}</option>
                        ))}
                      </select>
                    </div>

                    <div style={{ marginBottom: isMobile ? '0.875rem' : '1rem' }}>
                      <label style={{ 
                        color: 'rgba(255,255,255,0.8)', 
                        display: 'block', 
                        marginBottom: '0.5rem',
                        fontSize: isMobile ? '0.9rem' : '1rem'
                      }}>
                        Progress ({formData.progress}%)
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={formData.progress}
                        onChange={(e) => handleInputChange('progress', parseInt(e.target.value))}
                        style={{ width: '100%', marginBottom: '0.5rem' }}
                      />
                    </div>

                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
                      gap: '1rem', 
                      marginBottom: isMobile ? '0.875rem' : '1rem' ,
                   
                    }}>
                      <div>
                        <label style={{ 
                          color: 'rgba(255,255,255,0.8)', 
                          display: 'block', 
                          marginBottom: '0.5rem',
                          fontSize: isMobile ? '0.9rem' : '1rem'
                        }}>
                          Projects Completed
                        </label>
                        <input
                          type="number"
                          style={styles.input}
                          value={formData.projects}
                          onChange={(e) => handleInputChange('projects', parseInt(e.target.value) || 0)}
                        />
                      </div>
                      <div>
                        <label style={{ 
                          color: 'rgba(255,255,255,0.8)', 
                          display: 'block', 
                          marginBottom: '0.5rem',
                          fontSize: isMobile ? '0.9rem' : '1rem'
                        }}>
                          Happy Clients
                        </label>
                        <input
                          type="number"
                          style={styles.input}
                          value={formData.clients}
                          onChange={(e) => handleInputChange('clients', parseInt(e.target.value) || 0)}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: isMobile ? '0.875rem' : '1rem' }}>
                      <label style={{ 
                        color: 'rgba(255,255,255,0.8)', 
                        display: 'block', 
                        marginBottom: '0.5rem',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                       
                      }}>
                        Select Tags (Max 6)
                      </label>
                      <div style={styles.tagContainer}>
                        {commonTags.map(tag => (
                          <button
                            key={tag}
                            style={{
                              ...styles.tagButton,
                              ...(formData.tags.includes(tag) ? styles.selectedTag : {})
                            }}
                            onClick={() => handleTagToggle(tag)}
                            disabled={formData.tags.length >= 6 && !formData.tags.includes(tag)}
                          >
                            {isMobile ? tag.split(' ')[0] : tag} {formData.tags.includes(tag) ? '✓' : ''}
                          </button>
                        ))}
                      </div>
                      <p style={{ 
                        color: 'rgba(255,255,255,0.6)', 
                        fontSize: isMobile ? '0.75rem' : '0.8rem', 
                        margin: '0.5rem 0 0 0',
                        textAlign: 'center'
                      }}>
                        {formData.tags.length}/6 tags selected
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  marginTop: isMobile ? '1.5rem' : '2rem', 
                  gap: '1rem',
                  flexDirection: isMobile ? 'column' : 'row'
                }}>
                  {currentStep > 1 ? (
                    <button
                      style={{
                        ...styles.learnButton,
                        background: 'rgba(255,255,255,0.2)',
                        flex: 1
                      }}
                      onClick={handlePrevStep}
                    >
                      ← Previous
                    </button>
                  ) : (
                    <button
                      style={{
                        ...styles.learnButton,
                        background: 'rgba(255,255,255,0.2)',
                        flex: 1
                      }}
                      onClick={handleCloseForm}
                    >
                      Cancel
                    </button>
                  )}

                  {currentStep < 3 ? (
                    <button style={{...styles.learnButton, flex: 1}} onClick={handleNextStep}>
                      Next →
                    </button>
                  ) : (
                    <button 
                      style={{
                        ...styles.learnButton,
                        background: 'linear-gradient(45deg, #43e97b, #38f9d7)',
                        flex: 1
                      }}
                      onClick={handleAddService}
                    >
                      🚀 Add Service
                    </button>
                  )}
                </div>

                {/* Step Indicator */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginTop: isMobile ? '1.25rem' : '1.5rem', 
                  gap: '0.5rem',
                   
                }}>
                  {[1, 2, 3].map(step => (
                    <div
                      key={step}
                      style={{
                        width: isMobile ? '10px' : '12px',
                        height: isMobile ? '10px' : '12px',
                        borderRadius: '50%',
                        background: currentStep === step 
                          ? 'linear-gradient(45deg, #43e97b, #38f9d7)' 
                          : 'rgba(255,255,255,0.3)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

{/** */}
<div
  style={{
    display: 'flex',
    justifyContent: 'center',  // horizontally center
    alignItems: 'center',       // vertically center
    height: '10vh',            // poori screen ki height
   
  }}
>
{/** Admin Login Button **/}
<button 
  style={{
    background: 'rgba(255,255,255,0.15)',
    color: 'white',
    border: 'none',
    borderRadius: '1rem',
    padding: isMobile ? '0.6rem 1.2rem' : '0.75rem 1.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: isMobile ? '0.9rem' : '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    width: isMobile ? '100%' : 'auto',
    margin: isMobile ? '0.5rem 0' : '0'
  }}
  onClick={() => setShowLogin(true)}
>
  👑 Admin
</button>
</div>
{/* Admin Login Modal */}
{showLogin && !isAdmin && !showForm && (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: isMobile ? '1rem' : '2rem'
  }}>
    <div style={{
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: isMobile ? '1rem' : '2rem',
      padding: isMobile ? '1.5rem' : '3rem',
      width: isMobile ? '100%' : '400px',
      maxWidth: '90vw',
      maxHeight: '90vh',
      overflow: 'auto',
      border: '1px solid rgba(255,255,255,0.2)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: isMobile ? '1rem' : '2rem'
      }}>
        <h2 style={{
          color: 'white',
          margin: 0,
          fontSize: isMobile ? '1.25rem' : '1.75rem',
        }}>
          🔐 Admin Login
        </h2>
        <button
          style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: isMobile ? '2rem' : '2.5rem',
            height: isMobile ? '2rem' : '2.5rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: isMobile ? '0.9rem' : '1rem'
          }}
          onClick={() => setShowLogin(false)}
        >
          ✕
        </button>
      </div>

      {/* Input Fields */}
      <input
        style={{
          width: '100%',
          padding: isMobile ? '0.75rem' : '1rem',
          marginBottom: isMobile ? '0.8rem' : '1rem',
          borderRadius: isMobile ? '0.75rem' : '1rem',
          border: '1px solid rgba(255,255,255,0.3)',
          background: 'rgba(255,255,255,0.1)',
          color: 'white',
          fontSize: isMobile ? '0.9rem' : '1rem',
          boxSizing: 'border-box'
        }}
        placeholder="Admin Email"
        value={admin.email}
        onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
      />
      <input
        style={{
          width: '100%',
          padding: isMobile ? '0.75rem' : '1rem',
          marginBottom: isMobile ? '1rem' : '1.5rem',
          borderRadius: isMobile ? '0.75rem' : '1rem',
          border: '1px solid rgba(255,255,255,0.3)',
          background: 'rgba(255,255,255,0.1)',
          color: 'white',
          fontSize: isMobile ? '0.9rem' : '1rem',
          boxSizing: 'border-box'
        }}
        placeholder="Password"
        type="password"
        value={admin.password}
        onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
        onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
      />

      {/* Login Button */}
      <button
        style={{
          width: '100%',
          padding: isMobile ? '0.75rem' : '1rem',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          color: 'white',
          border: 'none',
          borderRadius: isMobile ? '0.75rem' : '1rem',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: isMobile ? '0.9rem' : '1rem',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
          marginBottom: isMobile ? '1rem' : '1.5rem'
        }}
        onClick={handleAdminLogin}
        disabled={loginLoading}
      >
        {loginLoading ? '🔄 Logging in...' : '🚀 Login as Admin'}
      </button>

      {/* Demo Credentials */}
      <div style={{
        textAlign: 'center',
        color: 'rgba(255,255,255,0.7)',
        fontSize: isMobile ? '0.75rem' : '0.9rem',
        lineHeight: '1.4',
        marginBottom: isMobile ? '1rem' : '1.5rem',
        padding: isMobile ? '0.8rem' : '1rem',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: isMobile ? '0.5rem' : '0.75rem'
      }}>
        <p style={{ margin: '0 0 0.5rem 0', fontWeight: '600' }}>Demo Credentials:</p>
        <p style={{ margin: '0.25rem 0' }}>Email: admin@gmail.com</p>
        <p style={{ margin: '0.25rem 0' }}>Password: admin123</p>
      </div>

      {/* Close Button */}
      <button
        style={{
          width: '100%',
          background: 'rgba(255,255,255,0.1)',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: isMobile ? '0.75rem' : '1rem',
          padding: isMobile ? '0.6rem' : '0.75rem',
          cursor: 'pointer',
          fontSize: isMobile ? '0.85rem' : '0.9rem'
        }}
        onClick={() => setShowLogin(false)}
      >
        ❌ Close
      </button>
    </div>
  </div>
)}


        {/* Empty State */}
        {!loading && services.length === 0 && isAdmin && !showForm && (
          <div style={{ 
            textAlign: 'center', 
            padding: isMobile ? '3rem 1rem' : '5rem 0', 
            color: 'white' 
          }}>
            <div style={{ fontSize: isMobile ? '3rem' : '4rem', marginBottom: '1rem' }}>🌟</div>
            <h3 style={{ 
              fontSize: isMobile ? '1.5rem' : '2rem', 
              marginBottom: '1rem' 
            }}>
              No Services Created Yet
            </h3>
            <p style={{ 
              color: 'rgba(255,255,255,0.7)', 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              marginBottom: isMobile ? '1.5rem' : '2rem' 
            }}>
              Start by adding your first service to showcase your offerings
            </p>
            <button style={styles.addButton} onClick={handleOpenForm}>
              ➕ Create Your First Service
            </button>
          </div>
        )}
      {  /* */}



      </div>
    </div>
  );
}