import React from "react";
import "./Projects.css"



function Projects() {
  return (
    <section className="projects reveal">
      <h2>Projects I’ve Done</h2>

      <div className="projects-container">
        <div className="project-card">
          <img src="project3.jpg" alt="Project 3" />
          <h3>E-commerce Website</h3>
          <p>React + Firebase + Stripe payment integration.</p>
        </div>

        <div className="project-card">
          <img src="project4.jpg" alt="Project 4" />
          <h3>Blog Platform</h3>
          <p>Next.js + Tailwind CSS + Markdown blog posts.</p>
        </div>

        <div className="project-card">
          <img src="project5.jpg" alt="Project 5" />
          <h3>Portfolio Redesign</h3>
          <p>Professional portfolio with animations and responsive layout.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;