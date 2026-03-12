
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedWorks from "./components/FeaturedWorks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import "aos/dist/aos.css";
import AOS from "aos";

import { useEffect} from "react";

function App() {
 
  // AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });
  }, []);// eslint-disable-next-line

  // cursor glow movement
  useEffect(() => {

    const glow = document.querySelector(".cursor-glow");

    const moveCursor = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);

  }, []);

  // scroll reveal animation
  useEffect(() => {

    const reveal = () => {

      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          element.classList.add("active");
        }

      });

    };

    window.addEventListener("scroll", reveal);

    reveal();

    return () => window.removeEventListener("scroll", reveal);

  }, []);

  // why choose us animation
  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const cards = entry.target.querySelectorAll(".why-card");

          cards.forEach((card, index) => {

            setTimeout(() => {
              card.classList.add("show");
            }, index * 200);

          });

        }

      });

    }, { threshold: 0.3 });

    document.querySelectorAll(".why-container")
      .forEach(section => observer.observe(section));

  }, []);

  useEffect(() => {

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const cards = entry.target.querySelectorAll(".featured-card");

cards.forEach((card,index)=>{

  setTimeout(() => { card.classList.add("active"); }, index * 200);
});
  }
});

},{threshold:0.2});

document
.querySelectorAll(".featured-container")
.forEach(section => observer.observe(section));

  }, []); 

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const cards = entry.target.querySelectorAll(".project-card");

          cards.forEach((card, index) => {

            setTimeout(() => {
              card.classList.add("active");
            }, index * 200);

          });

        }

      });

    }, { threshold: 0.2 });

    document
      .querySelectorAll(".projects-container")
      .forEach(section => observer.observe(section));

  }, []);

  return (
    <>

      {/* Cursor Glow */}
      <div className="cursor-glow"></div>

      <Navbar />

      <Hero />

      <Services />

      <WhyChooseUs />

      <FeaturedWorks />

      <Projects />

      <Contact />

    </>
  );
}

export default App;