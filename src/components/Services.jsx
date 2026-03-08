import React from "react";

function Services() {
  return (
    <section id="services" className="services reveal">

      <h2 className="services-title">Our Services</h2>

      <div className="services-container">

        <div className="service-card" data-aos="flip-left">
          <i className="bi bi-code-slash"></i>
          <h3>Web Development</h3>
          <p>Modern responsive websites using React & Bootstrap.</p>
        </div>

        <div className="service-card" data-aos="flip-left">
          <i className="bi bi-phone"></i>
          <h3>Responsive Design</h3>
          <p>Mobile friendly and clean UI experience.</p>
        </div>

        <div className="service-card" data-aos="flip-left">
          <i className="bi bi-rocket-takeoff"></i>
          <h3>Website Optimization</h3>
          <p>Fast loading and SEO optimized websites.</p>
        </div>

      </div>

    </section>
  );
}

export default Services;