import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-icon">☀️</span>
          <span className="logo-text">Rubytech Solar</span>
        </div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu-open' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
              Services
            </a>
          </li>
          <li>
            <a href="#cta" onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }}>
              Contact
            </a>
          </li>
          <li>
            <a href="tel:+919561981743" className="navbar-cta">
              Call Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

