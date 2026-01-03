import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '⚡',
      title: 'Solar Panel Installation',
      description: 'Professional installation of high-quality solar panels for residential and commercial properties with expert guidance and support.'
    },
    {
      icon: '🔥',
      title: 'Solar Hot Water Solution',
      description: 'Efficient solar water heating systems that utilize solar energy to provide hot water for residential and commercial use, reducing energy costs significantly.'
    },
    {
      icon: '🚜',
      title: 'Agriculture Solar Pump Solution',
      description: 'Solar-powered water pump systems designed for agricultural use, providing reliable irrigation solutions while reducing operational costs and dependency on grid electricity.'
    },
    {
      icon: '🏢',
      title: 'Commercial and Industrial Solar Projects',
      description: 'Large-scale solar installations for businesses and industries to maximize energy savings, reduce carbon footprint, and achieve sustainability goals.'
    },
    {
      icon: '🔧',
      title: 'Maintenance and Support',
      description: 'Comprehensive maintenance services and ongoing support to ensure optimal performance and longevity of your solar system with regular inspections and repairs.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Comprehensive solar energy solutions tailored to your needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

