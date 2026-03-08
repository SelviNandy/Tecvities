import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="logo">NS Web Jovaza</div>

      {/* Hamburger */}
      <div
        className={menuOpen ? "hamburger active" : "hamburger"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={menuOpen ? "nav-links show" : "nav-links"}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}