import { useState, useEffect } from "react";
import "./FeaturedWorks.css";

export default function FeaturedWorks() {

  const works = [
    {
      title: "Web Development",
      desc: "Modern responsive websites",
      img: "https://picsum.photos/400/250?1"
    },
    {
      title: "UI / UX Design",
      desc: "Clean modern interface design",
      img: "https://picsum.photos/400/250?2"
    },
    {
      title: "Performance",
      desc: "Fast optimized websites",
      img: "https://picsum.photos/400/250?3"
    },
    {
      title: "SEO Ready",
      desc: "Search engine optimized",
      img: "https://picsum.photos/400/250?4"
    },
    {
      title: "Mobile Friendly",
      desc: "Fully responsive design",
      img: "https://picsum.photos/400/250?5"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % works.length);
    }, 3000);

    return () => clearInterval(slider);

  }, [works.length]);


  // always show 3 cards
  const visibleWorks = [
    works[index],
    works[(index + 1) % works.length],
    works[(index + 2) % works.length]
  ];

  return (

    <section className="featured reveal">

      <h2 className="featured-title">Featured Works</h2>

      <div className="featured-slider">

        {visibleWorks.map((work, i) => (

          <div className="featured-card" key={i}>

            <img src={work.img} alt={work.title} />

            <h3>{work.title}</h3>

            <p>{work.desc}</p>

          </div>

        ))}

      </div>

    </section>

  );

}