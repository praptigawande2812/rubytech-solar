import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-icon">☀️</div>
              <h3 className="footer-company-name">Rubytech Solar Power</h3>
              <p className="footer-tagline">Solar Energy Solutions</p>
            </div>
            <p className="footer-description">
              Providing sustainable and efficient solar energy solutions for homes 
              and businesses. Your trusted partner in renewable energy.
            </p>
            <div className="footer-gst">
              <strong>GSTIN:</strong> 27ABPPP8917M1ZO
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li>Solar Panel Installation</li>
              <li>Battery Storage Solutions</li>
              <li>Residential Solar Systems</li>
              <li>Commercial Solar Projects</li>
              <li>Maintenance & Support</li>
              <li>Energy Consultation</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-text">
                Survey No.309/2/A/19,<br />
                GANARAYA, State Bank of India Colony,<br />
                Shegaon-444203, Dist: Buldhana (M.S)
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:+919561981743" className="contact-link">
                +91 9561981743
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:srpote55@gmail.com" className="contact-link">
                srpote55@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕒</span>
              {/* <div className="contact-text">
                Open 7 days a week
              </div> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Rubytech Solar Power. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy" className="footer-link">Privacy Policy</a>
            <span className="footer-separator">|</span>
            <a href="#terms" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
