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
      icon: '🔋',
      title: 'Battery Storage Solutions',
      description: 'Advanced battery storage systems to store solar energy for use during peak hours and power outages.'
    },
    {
      icon: '🏠',
      title: 'Residential Solar Systems',
      description: 'Customized solar solutions designed for homes to reduce electricity bills and carbon footprint.'
    },
    {
      icon: '🏢',
      title: 'Commercial Solar Projects',
      description: 'Large-scale solar installations for businesses and industries to maximize energy savings and sustainability.'
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance services and ongoing support to ensure optimal performance of your solar system.'
    },
    {
      icon: '💡',
      title: 'Energy Consultation',
      description: 'Expert consultation to assess your energy needs and design the most efficient solar solution for your property.'
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

