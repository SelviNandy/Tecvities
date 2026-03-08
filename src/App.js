import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedWorks from "./components/FeaturedWorks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {

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

    reveal()
  });

  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });
  }, []);

  useEffect(() => {
    const move = (e)=>{
      setPos({x:e.clientX, y:e.clientY});
    };
    window.addEventListener("mousemove", move);
    return ()=> window.removeEventListener("mousemove", move);
  }, []);
  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          const cards = entry.target.querySelectorAll(".why-card");

          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("show");
            }, index * 200); // delay
          });

        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".why-container")
      .forEach(section => observer.observe(section));

  }, []);
  useEffect(() => {

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const cards = entry.target.querySelectorAll(".featured-card, .project-card");
        cards.forEach((card,index)=>{
          setTimeout(()=>{ card.classList.add("active") }, index*200);
        });
      }
    });
  }, { threshold:0.2 });

  document.querySelectorAll(".featured-container, .projects-container")
    .forEach(section => observer.observe(section));

}, []);
  return (
    <>
    <div
        className="cursor-glow"
        style={{left:pos.x, top:pos.y}}
      ></div>
      <Navbar/>
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
