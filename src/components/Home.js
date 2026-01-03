import React from 'react';
import './Home.css';
import heroImage from '../assets/solar.jpg';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">Rubytech Solar Power</h1>
            <h2 className="home-subtitle">Leading Solar Energy Solutions</h2>
            <p className="home-description">
              Welcome to Rubytech Solar Power, where we provide sustainable and 
              efficient solar energy solutions for your home and business. We are dedicated to helping you harness the power of the sun with reliable, 
              cost-effective solar installations.
            </p>
            <div className="home-buttons">
              <a href="tel:+919561981743" className="btn btn-primary">
                <span className="btn-icon">📞</span>
                Call Us
              </a>
              <a href="https://wa.me/919561981743" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Contact Us
              </a>
            </div>
            {/* <p className="home-hours">Open 7 days a week</p> */}
          </div>
          <div className="home-image">
            <img src={heroImage} alt="Rubytech Solar Power" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

