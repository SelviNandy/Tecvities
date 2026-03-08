import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeaturedWorks.css";

function FeaturedWorks() {
  return (
    <section className="featured reveal">
      <h2>Featured Works</h2>

      <div className="featured-container">
        <div className="featured-card">
          <img src="project1.jpg" alt="Project 1" />
          <div className="featured-content">
            <h3>Modern Portfolio</h3>
            <p>Animated React portfolio with smooth scrolling and parallax.</p>
          </div>
        </div>

        <div className="featured-card">
          <img src="project2.jpg" alt="Project 2" />
          <div className="featured-content">
            <h3>LMS Dashboard</h3>
            <p>Admin dashboard UI with React + Bootstrap + charts.</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default FeaturedWorks;