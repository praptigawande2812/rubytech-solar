import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Go Solar?</h2>
          <p className="cta-description">
            Book a consultation today and discover how solar energy can reduce your 
            electricity bills while contributing to a sustainable future.
          </p>
          <a href="tel:+919561981743" className="cta-button">
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

