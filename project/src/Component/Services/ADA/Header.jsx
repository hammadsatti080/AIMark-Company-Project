import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaAccessibleIcon, 
  FaDollarSign, 
  FaGavel, 
  FaUsers, 
  FaChartLine, 
  FaShieldAlt,
  FaCheckCircle,
  FaMobileAlt,
  FaDesktop,
  FaSearch,
  FaRocket,
  FaStar,
  FaQuoteLeft,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaBars,
  FaTimes
} from "react-icons/fa";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="ada-website">
      {/* Navigation */}
      <NavBar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isMobile={isMobile}
      />
      
      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} isMobile={isMobile} />
      
      {/* Statistics Section */}
      <StatsSection isMobile={isMobile} />
      
      {/* Services Section */}
      <ServicesSection isMobile={isMobile} />
      
      {/* Why Choose Us */}
      <WhyChooseUs isMobile={isMobile} />
      
      {/* Process Section */}
      <ProcessSection isMobile={isMobile} />
      
      {/* Testimonials */}
      <TestimonialsSection isMobile={isMobile} />
      
      {/* Pricing */}
      <PricingSection isMobile={isMobile} />
      
      {/* Contact */}
      <ContactSection isMobile={isMobile} />
      
      {/* Footer */}
      <Footer />
      
      <style jsx>{`
        .ada-website {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        /* Mobile First Responsive Design */
        @media (max-width: 768px) {
          .ada-website {
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
};

// Navigation Component - Mobile Optimized
const NavBar = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen, isMobile }) => (
  <motion.nav
    className="navbar"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="nav-container">
      <motion.div 
        className="nav-logo"
        whileHover={{ scale: 1.05 }}
      >
        ADAPro
      </motion.div>

      {/* Desktop Menu */}
      <div className={`nav-menu ${isMobile ? 'mobile-hidden' : 'desktop-visible'}`}>
        {['home', 'stats', 'services', 'process', 'pricing', 'contact'].map((item) => (
          <motion.button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`nav-item ${activeSection === item ? 'active' : ''}`}
            whileHover={{ 
              color: "#0dcaf0",
              background: "rgba(13, 202, 240, 0.1)"
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.button>
        ))}
        <motion.button
          className="nav-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
        >
          Get Started
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={`mobile-menu-btn ${isMobile ? 'mobile-visible' : 'mobile-hidden'}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMobile && isMenuOpen && (
      <motion.div
        className="mobile-menu"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {['home', 'stats', 'services', 'process', 'pricing', 'contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`mobile-nav-item ${activeSection === item ? 'active' : ''}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
        <button
          className="mobile-nav-cta"
          onClick={() => scrollToSection('contact')}
        >
          Get Started
        </button>
      </motion.div>
    )}

    <style jsx>{`
      .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        background: rgba(13, 27, 42, 0.95);
        backdrop-filter: blur(10px);
        z-index: 1000;
        padding: 15px 0;
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }

      .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .nav-logo {
        font-size: 1.8rem;
        font-weight: 700;
        background: linear-gradient(90deg, #0dcaf0, #20c997);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .nav-menu {
        display: flex;
        gap: 30px;
        align-items: center;
      }

      .nav-item {
        background: none;
        border: none;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        padding: 8px 16px;
        border-radius: 5px;
        transition: all 0.3s ease;
      }

      .nav-item.active {
        color: #0dcaf0;
      }

      .nav-cta {
        background: linear-gradient(90deg, #dc3545, #fd7e14);
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
      }

      .mobile-menu-btn {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
      }

      .mobile-menu {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(13, 27, 42, 0.98);
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .mobile-nav-item {
        display: block;
        width: 100%;
        background: none;
        border: none;
        color: #fff;
        padding: 15px;
        text-align: left;
        font-size: 1.1rem;
        cursor: pointer;
      }

      .mobile-nav-item.active {
        color: #0dcaf0;
      }

      .mobile-nav-cta {
        background: linear-gradient(90deg, #dc3545, #fd7e14);
        color: white;
        border: none;
        padding: 15px;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 10px;
      }

      /* Mobile Responsive */
      @media (max-width: 768px) {
        .nav-container {
          padding: 0 15px;
        }

        .nav-logo {
          font-size: 1.5rem;
        }

        .mobile-hidden {
          display: none !important;
        }

        .mobile-visible {
          display: block !important;
        }
      }

      @media (min-width: 769px) {
        .mobile-hidden {
          display: flex !important;
        }

        .mobile-visible {
          display: none !important;
        }
      }
    `}</style>
  </motion.nav>
);

// Hero Section Component - Mobile Optimized
const HeroSection = ({ scrollToSection, isMobile }) => (
  <section id="home" className="hero-section">
    <div className="background-animation"></div>
    
    <div className="hero-content">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ADA Compliance Made Simple
      </motion.h1>
      
      <motion.p
        className="hero-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Protect your business from costly lawsuits while opening your doors to 61 million 
        Americans with disabilities. Comprehensive WCAG 2.1 AA compliance solutions.
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.button
          onClick={() => scrollToSection('services')}
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Compliant Today
        </motion.button>
        
        <motion.button
          onClick={() => scrollToSection('process')}
          className="btn-secondary"
          whileHover={{ scale: 1.05 }}
        >
          How It Works
        </motion.button>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        className="trust-badges"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        {['WCAG 2.1 AA', 'ADA Compliant', 'Section 508', '100% Legal'].map((badge, index) => (
          <motion.div
            key={badge}
            className="trust-badge"
            whileHover={{ color: "#0dcaf0" }}
          >
            <FaCheckCircle className="badge-icon" />
            {badge}
          </motion.div>
        ))}
      </motion.div>
    </div>

    <style jsx>{`
      .hero-section {
        min-height: 100vh;
        background: linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%);
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        padding: 80px 20px 60px;
      }

      .background-animation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
          radial-gradient(circle at 20% 80%, rgba(13, 110, 253, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(220, 53, 69, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(25, 135, 84, 0.1) 0%, transparent 50%);
        animation: pulse 8s ease-in-out infinite alternate;
      }

      .hero-content {
        position: relative;
        z-index: 10;
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        width: 100%;
      }

      .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        background: linear-gradient(90deg, #0dcaf0, #20c997, #0d6efd);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 20px;
        line-height: 1.2;
      }

      .hero-description {
        font-size: 1.3rem;
        color: #e9ecef;
        max-width: 800px;
        margin: 0 auto 40px;
        line-height: 1.6;
      }

      .hero-buttons {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 40px;
      }

      .btn-primary {
        background: linear-gradient(90deg, #dc3545, #fd7e14);
        color: white;
        border: none;
        padding: 15px 40px;
        font-size: 1.1rem;
        font-weight: 600;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .btn-secondary {
        background: transparent;
        color: #0dcaf0;
        border: 2px solid #0dcaf0;
        padding: 15px 40px;
        font-size: 1.1rem;
        font-weight: 600;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .trust-badges {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        flex-wrap: wrap;
      }

      .trust-badge {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #adb5bd;
        font-size: 0.9rem;
        font-weight: 600;
      }

      .badge-icon {
        color: #20c997;
      }

      /* Mobile Responsive */
      @media (max-width: 768px) {
        .hero-section {
          min-height: 80vh;
          padding: 100px 15px 40px;
        }

        .hero-title {
          font-size: 2.2rem;
          margin-bottom: 15px;
        }

        .hero-description {
          font-size: 1.1rem;
          margin-bottom: 30px;
        }

        .hero-buttons {
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .btn-primary, .btn-secondary {
          width: 100%;
          max-width: 300px;
          padding: 12px 30px;
          font-size: 1rem;
        }

        .trust-badges {
          gap: 20px;
          flex-direction: column;
        }

        .trust-badge {
          font-size: 0.8rem;
        }
      }

      @media (max-width: 480px) {
        .hero-title {
          font-size: 1.8rem;
        }

        .hero-description {
          font-size: 1rem;
        }
      }

      @keyframes pulse {
        0% { opacity: 0.6; transform: scale(1); }
        100% { opacity: 0.8; transform: scale(1.1); }
      }
    `}</style>
  </section>
);

// Stats Section Component - Mobile Optimized
const StatsSection = ({ isMobile }) => {
  const stats = [
    { icon: <FaDollarSign />, value: "Billions", label: "Lost by Companies", description: "Due to inaccessible websites" },
    { icon: <FaGavel />, value: "$75K", label: "Lawsuit Cost", description: "Average settlement amount" },
    { icon: <FaUsers />, value: "61M+", label: "Americans", description: "With disabilities gain access" },
    { icon: <FaChartLine />, value: "490%", label: "ROI", description: "Average return on compliance" }
  ];

  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Cost of Non-Compliance
        </motion.h2>

        <div className={`stats-grid ${isMobile ? 'mobile-grid' : 'desktop-grid'}`}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-description">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #1b263b 0%, #0d1b2a 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 50px;
          background: linear-gradient(90deg, #ff6b6b, #ffa500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        .stats-grid {
          display: grid;
          gap: 30px;
        }

        .desktop-grid {
          grid-template-columns: repeat(4, 1fr);
        }

        .mobile-grid {
          grid-template-columns: 1fr;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-icon {
          font-size: 3rem;
          color: #0dcaf0;
          margin-bottom: 15px;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(90deg, #20c997, #0dcaf0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #f8f9fa;
        }

        .stat-description {
          color: #adb5bd;
          font-size: 0.9rem;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .stats-section {
            padding: 60px 15px;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 40px;
          }

          .stat-card {
            padding: 25px 20px;
          }

          .stat-icon {
            font-size: 2.5rem;
          }

          .stat-value {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.8rem;
          }

          .stat-value {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

// Services Section Component - Mobile Optimized
const ServicesSection = ({ isMobile }) => {
  const services = [
    {
      icon: <FaDesktop />,
      title: "Website Audit",
      description: "Comprehensive WCAG 2.1 AA compliance audit of your entire website",
      features: ["Manual Testing", "Automated Scanning", "Screen Reader Testing", "Keyboard Navigation"]
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Accessibility",
      description: "Ensure your mobile experience is accessible to all users",
      features: ["Touch Target Size", "Screen Reader Compatible", "Gesture Navigation", "Responsive Design"]
    },
    {
      icon: <FaSearch />,
      title: "Continuous Monitoring",
      description: "Ongoing monitoring and compliance maintenance",
      features: ["Monthly Scans", "Compliance Reports", "Update Support", "Legal Protection"]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Complete ADA compliance solutions tailored to your business needs
        </motion.p>

        <div className={`services-grid ${isMobile ? 'mobile-grid' : 'desktop-grid'}`}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 80px 20px;
          background: #0d1b2a;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #adb5bd;
          margin-bottom: 50px;
          max-width: 600px;
          margin: 0 auto 50px;
        }

        .services-grid {
          display: grid;
          gap: 30px;
        }

        .desktop-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .mobile-grid {
          grid-template-columns: 1fr;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 30px;
          transition: all 0.3s ease;
        }

        .service-icon {
          font-size: 2.5rem;
          color: #0dcaf0;
          margin-bottom: 20px;
        }

        .service-title {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 15px;
        }

        .service-description {
          color: #adb5bd;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .service-features {
          color: #adb5bd;
          padding-left: 20px;
        }

        .service-features li {
          margin-bottom: 8px;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .services-section {
            padding: 60px 15px;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1.1rem;
            margin-bottom: 40px;
          }

          .service-card {
            padding: 25px 20px;
          }

          .service-icon {
            font-size: 2rem;
          }

          .service-title {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.8rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

// Why Choose Us Component - Mobile Optimized
const WhyChooseUs = ({ isMobile }) => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Legal Protection",
      description: "Comprehensive compliance that protects against lawsuits"
    },
    {
      icon: <FaRocket />,
      title: "Fast Implementation",
      description: "Get compliant in weeks, not months with our expert team"
    },
    {
      icon: <FaStar />,
      title: "5-Star Support",
      description: "Dedicated account manager and 24/7 technical support"
    },
    {
      icon: <FaAccessibleIcon />,
      title: "Expert Team",
      description: "Certified accessibility specialists with 10+ years experience"
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose ADAPro?
        </motion.h2>

        <div className={`features-grid ${isMobile ? 'mobile-grid' : 'desktop-grid'}`}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.div
                className="feature-icon"
                whileHover={{ scale: 1.2, rotate: isMobile ? 0 : 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-choose-us {
          padding: 80px 20px;
          background: linear-gradient(135deg, #1b263b 0%, #0d1b2a 100%);
        }

        .features-grid {
          display: grid;
          gap: 30px;
        }

        .desktop-grid {
          grid-template-columns: repeat(4, 1fr);
        }

        .mobile-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .feature-card {
          text-align: center;
          padding: 30px;
        }

        .feature-icon {
          font-size: 3rem;
          color: #0dcaf0;
          margin-bottom: 20px;
        }

        .feature-title {
          font-size: 1.3rem;
          color: #fff;
          margin-bottom: 15px;
        }

        .feature-description {
          color: #adb5bd;
          line-height: 1.6;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .why-choose-us {
            padding: 60px 15px;
          }

          .section-title {
            font-size: 2rem;
          }

          .mobile-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .feature-card {
            padding: 20px;
          }

          .feature-icon {
            font-size: 2.5rem;
          }

          .feature-title {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.8rem;
          }

          .feature-icon {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

// Process Section Component - Mobile Optimized
const ProcessSection = ({ isMobile }) => (
  <section id="process" className="process-section">
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our 4-Step Process
      </motion.h2>

      <div className={`process-grid ${isMobile ? 'mobile-grid' : 'desktop-grid'}`}>
        {[
          { step: "01", title: "Free Audit", desc: "Comprehensive website analysis" },
          { step: "02", title: "Implementation", desc: "ADA compliance fixes applied" },
          { step: "03", title: "Certification", desc: "Get your compliance certificate" },
          { step: "04", title: "Monitoring", desc: "Continuous compliance maintenance" }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="process-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
          >
            <div className="process-step">{item.step}</div>
            <h3 className="process-title">{item.title}</h3>
            <p className="process-description">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <style jsx>{`
      .process-section {
        padding: 80px 20px;
        background: #0d1b2a;
      }

      .process-grid {
        display: grid;
        gap: 30px;
      }

      .desktop-grid {
        grid-template-columns: repeat(4, 1fr);
      }

      .mobile-grid {
        grid-template-columns: 1fr;
      }

      .process-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 30px;
        text-align: center;
        position: relative;
        transition: all 0.3s ease;
      }

      .process-step {
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(90deg, #dc3545, #fd7e14);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.9rem;
      }

      .process-title {
        font-size: 1.3rem;
        color: #fff;
        margin: 30px 0 15px;
      }

      .process-description {
        color: #adb5bd;
      }

      /* Mobile Responsive */
      @media (max-width: 768px) {
        .process-section {
          padding: 60px 15px;
        }

        .section-title {
          font-size: 2rem;
        }

        .process-card {
          padding: 25px 20px;
        }

        .process-step {
          width: 35px;
          height: 35px;
          font-size: 0.8rem;
        }

        .process-title {
          font-size: 1.2rem;
          margin: 25px 0 10px;
        }
      }

      @media (max-width: 480px) {
        .section-title {
          font-size: 1.8rem;
        }
      }
    `}</style>
  </section>
);

// Testimonials Section Component - Mobile Optimized
const TestimonialsSection = ({ isMobile }) => (
  <section className="testimonials-section">
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Clients Say
      </motion.h2>

      <div className={`testimonials-grid ${isMobile ? 'mobile-grid' : 'desktop-grid'}`}>
        {[
          { name: "Sarah Johnson", company: "TechCorp Inc.", text: "ADAPro saved us from a potential $50K lawsuit. Their team was professional and efficient." },
          { name: "Mike Chen", company: "Retail Giant", text: "The compliance process was seamless. We've seen a 25% increase in users with disabilities." },
          { name: "Emily Davis", company: "Healthcare Plus", text: "Outstanding service! Our website is now fully accessible and we feel protected." }
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: isMobile ? 1 : 1.02 }}
          >
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <p className="author-name">{testimonial.name}</p>
              <p className="author-company">{testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <style jsx>{`
      .testimonials-section {
        padding: 80px 20px;
        background: linear-gradient(135deg, #1b263b 0%, #0d1b2a 100%);
      }

      .testimonials-grid {
        display: grid;
        gap: 30px;
      }

      .desktop-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .mobile-grid {
        grid-template-columns: 1fr;
      }

      .testimonial-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 30px;
        position: relative;
        transition: all 0.3s ease;
      }

      .quote-icon {
        font-size: 2rem;
        color: #0dcaf0;
        margin-bottom: 20px;
      }

      .testimonial-text {
        color: #e9ecef;
        font-style: italic;
        margin-bottom: 20px;
        line-height: 1.6;
      }

      .author-name {
        color: #fff;
        font-weight: 600;
        margin-bottom: 5px;
      }

      .author-company {
        color: #adb5bd;
      }

      /* Mobile Responsive */
      @media (max-width: 768px) {
        .testimonials-section {
          padding: 60px 15px;
        }

        .section-title {
          font-size: 2rem;
        }

        .testimonial-card {
          padding: 25px 20px;
        }

        .quote-icon {
          font-size: 1.5rem;
        }

        .testimonial-text {
          font-size: 0.9rem;
        }
      }

      @media (max-width: 480px) {
        .section-title {
          font-size: 1.8rem;
        }
      }
    `}</style>
  </section>
);

// Pricing Section Component - Mobile Optimized
const PricingSection = ({ isMobile }) => (
  <section id="pricing" className="pricing-section">
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Simple, Transparent Pricing
      </motion.h2>

      <div className={`pricing-grid ${isMobile ? 'mobile-grid' : 'desktop-grid'}`}>
        {[
          { name: "Starter", price: "$1,499", desc: "Perfect for small businesses", features: ["Website Audit", "Basic Fixes", "Compliance Report", "30 Days Support"], popular: false },
          { name: "Professional", price: "$2,999", desc: "Most popular choice", features: ["Full Audit", "All Fixes", "Certificate", "6 Months Monitoring", "Legal Support"], popular: true },
          { name: "Enterprise", price: "$4,999", desc: "For large organizations", features: ["Multi-site Audit", "Priority Fixes", "Team Training", "1 Year Monitoring", "Dedicated Manager"], popular: false }
        ].map((plan, index) => (
          <motion.div
            key={index}
            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
          >
            {plan.popular && (
              <div className="popular-badge">MOST POPULAR</div>
            )}
            <h3 className="plan-name">{plan.name}</h3>
            <div className="plan-price">{plan.price}</div>
            <p className="plan-description">{plan.desc}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="feature-icon" />
                  {feature}
                </li>
              ))}
            </ul>
            <motion.button
              className={`plan-button ${plan.popular ? 'popular-btn' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>

    <style jsx>{`
      .pricing-section {
        padding: 80px 20px;
        background: #0d1b2a;
      }

      .pricing-grid {
        display: grid;
        gap: 30px;
      }

      .desktop-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .mobile-grid {
        grid-template-columns: 1fr;
      }

      .pricing-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 40px;
        text-align: center;
        position: relative;
        transition: all 0.3s ease;
      }

      .pricing-card.popular {
        background: linear-gradient(135deg, #dc3545, #fd7e14);
      }

      .popular-badge {
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background: #ffd700;
        color: #000;
        padding: 5px 20px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 700;
      }

      .plan-name {
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 10px;
      }

      .plan-price {
        font-size: 2.5rem;
        font-weight: 700;
        color: #0dcaf0;
        margin-bottom: 10px;
      }

      .pricing-card.popular .plan-price {
        color: #fff;
      }

      .plan-description {
        color: #adb5bd;
        margin-bottom: 30px;
      }

      .pricing-card.popular .plan-description {
        color: #fff;
      }

      .plan-features {
        color: #adb5bd;
        margin-bottom: 30px;
        text-align: left;
      }

      .pricing-card.popular .plan-features {
        color: #fff;
      }

      .plan-features li {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .feature-icon {
        color: #20c997;
      }

      .plan-button {
        background: linear-gradient(90deg, #dc3545, #fd7e14);
        color: #fff;
        border: none;
        padding: 15px 30px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
        transition: all 0.3s ease;
      }

      .popular-btn {
        background: #fff;
        color: #dc3545;
      }

      /* Mobile Responsive */
      @media (max-width: 768px) {
        .pricing-section {
          padding: 60px 15px;
        }

        .section-title {
          font-size: 2rem;
        }

        .pricing-card {
          padding: 30px 20px;
        }

        .plan-price {
          font-size: 2rem;
        }

        .plan-features {
          font-size: 0.9rem;
        }
      }

      @media (max-width: 480px) {
        .section-title {
          font-size: 1.8rem;
        }

        .plan-price {
          font-size: 1.8rem;
        }
      }
    `}</style>
  </section>
);

// Contact Section Component - Mobile Optimized
const ContactSection = ({ isMobile }) => (
  <section id="contact" className="contact-section">
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get Your Free ADA Audit
      </motion.h2>

      <div className={`contact-grid ${isMobile ? 'mobile-grid' : 'desktop-grid'}`}>
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="contact-title">Ready to Protect Your Business?</h3>
          <p className="contact-description">
            Contact us today for a free website audit and consultation. 
            Discover how affordable and simple ADA compliance can be.
          </p>
          <div className="contact-details">
            <p>📧 hello@adapro.com</p>
            <p>📞 1-800-ADA-PRO1</p>
            <p>🕒 Mon-Fri 9AM-6PM EST</p>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-grid">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <input type="text" placeholder="Website URL" className="form-input" />
            <textarea placeholder="Tell us about your needs..." rows="4" className="form-textarea"></textarea>
            <motion.button
              type="submit"
              className="form-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Audit
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>

    <style jsx>{`
      .contact-section {
        padding: 80px 20px;
        background: linear-gradient(135deg, #1b263b 0%, #0d1b2a 100%);
      }

      .contact-grid {
        display: grid;
        gap: 50px;
        align-items: center;
      }

      .desktop-grid {
        grid-template-columns: 1fr 1fr;
      }

      .mobile-grid {
        grid-template-columns: 1fr;
      }

      .contact-info {
        padding: 20px;
      }

      .contact-title {
        font-size: 1.8rem;
        color: #fff;
        margin-bottom: 20px;
      }

      .contact-description {
        color: #adb5bd;
        line-height: 1.6;
        margin-bottom: 30px;
      }

      .contact-details {
        color: #adb5bd;
      }

      .contact-details p {
        margin-bottom: 10px;
      }

      .contact-form {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 30px;
      }

      .form-grid {
        display: grid;
        gap: 20px;
      }

      .form-input, .form-textarea {
        width: 100%;
        padding: 15px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        color: #fff;
        font-size: 1rem;
        outline: none;
        transition: all 0.3s ease;
      }

      .form-textarea {
        resize: vertical;
        min-height: 120px;
      }

      .form-input:focus, .form-textarea:focus {
        border-color: #0dcaf0;
      }

      .form-button {
        background: linear-gradient(90deg, #dc3545, #fd7e14);
        color: white;
        border: none;
        padding: 15px;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
        font-size: 1.1rem;
        transition: all 0.3s ease;
      }

      /* Mobile Responsive */
      @media (max-width: 768px) {
        .contact-section {
          padding: 60px 15px;
        }

        .section-title {
          font-size: 2rem;
        }

        .contact-title {
          font-size: 1.5rem;
        }

        .contact-form {
          padding: 25px 20px;
        }

        .form-input, .form-textarea {
          padding: 12px;
        }
      }

      @media (max-width: 480px) {
        .section-title {
          font-size: 1.8rem;
        }

        .contact-title {
          font-size: 1.3rem;
        }
      }
    `}</style>
  </section>
);

// Footer Component - Mobile Optimized
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-info">
          <h3 className="footer-logo">ADAPro</h3>
          <p className="footer-description">
            Making the web accessible to everyone while protecting businesses from costly lawsuits.
          </p>
        </div>
        
        <div className="footer-links">
          <h4 className="footer-title">Quick Links</h4>
          {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((link) => (
            <p key={link}>
              <a href="#" className="footer-link">{link}</a>
            </p>
          ))}
        </div>
        
        <div className="footer-links">
          <h4 className="footer-title">Legal</h4>
          {['Privacy Policy', 'Terms of Service', 'Accessibility Statement', 'Compliance'].map((link) => (
            <p key={link}>
              <a href="#" className="footer-link">{link}</a>
            </p>
          ))}
        </div>
        
        <div className="footer-social">
          <h4 className="footer-title">Connect</h4>
          <div className="social-icons">
            {[FaLinkedin, FaTwitter, FaFacebook, FaInstagram].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="social-icon"
                whileHover={{ color: "#0dcaf0", scale: 1.2 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 ADAPro. All rights reserved. Making the web accessible for everyone.</p>
      </div>
    </div>

    <style jsx>{`
      .footer {
        background: #0d1b2a;
        border-top: 1px solid rgba(255,255,255,0.1);
        padding: 40px 20px;
      }

      .footer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 40px;
        margin-bottom: 40px;
      }

      .footer-logo {
        color: #fff;
        margin-bottom: 20px;
        font-size: 1.5rem;
        background: linear-gradient(90deg, #0dcaf0, #20c997);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
      }

      .footer-description {
        color: #adb5bd;
        line-height: 1.6;
      }

      .footer-title {
        color: #fff;
        margin-bottom: 15px;
        font-size: 1.1rem;
      }

      .footer-link {
        color: #adb5bd;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .footer-link:hover {
        color: #0dcaf0;
      }

      .social-icons {
        display: flex;
        gap: 15px;
      }

      .social-icon {
        color: #adb5bd;
        font-size: 1.2rem;
        transition: all 0.3s ease;
      }

      .footer-bottom {
        border-top: 1px solid rgba(255,255,255,0.1);
        padding-top: 20px;
        text-align: center;
        color: #adb5bd;
      }

      /* Mobile Responsive */
      @media (max-width: 768px) {
        .footer {
          padding: 30px 15px;
        }

        .footer-grid {
          grid-template-columns: 1fr;
          gap: 30px;
          text-align: center;
        }

        .social-icons {
          justify-content: center;
        }

        .footer-bottom p {
          font-size: 0.9rem;
        }
      }

      @media (max-width: 480px) {
        .footer-grid {
          gap: 25px;
        }
      }
    `}</style>
  </footer>
);

export default Header;