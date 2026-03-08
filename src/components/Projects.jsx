import { useRef, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern personal portfolio built with React",
      img: "https://picsum.photos/500/300?1"
    },
    {
      title: "Ecommerce UI",
      desc: "Clean ecommerce design interface",
      img: "https://picsum.photos/500/300?2"
    },
    {
      title: "Dashboard",
      desc: "Admin dashboard with analytics",
      img: "https://picsum.photos/500/300?3"
    },
    {
      title: "Landing Page",
      desc: "High converting product landing page",
      img: "https://picsum.photos/500/300?4"
    }
  ];

  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Start dragging
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  // Move
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1; // swipe speed
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // End dragging
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="projects">
      <h2 className="projects-title">Our Projects</h2>

      <div
        className="projects-slider"
        ref={trackRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="slider-track">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-img">
                <img src={project.img} alt={project.title} />
                <div className="project-overlay">
                  <button>View Project</button>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {projects.map((project, index) => (
            <div className="project-card" key={`dup-${index}`}>
              <div className="project-img">
                <img src={project.img} alt={project.title} />
                <div className="project-overlay">
                  <button>View Project</button>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}