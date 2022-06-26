import React, { useEffect } from "react";
import "./projectPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function ProjectPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".projectpage-wrapper h1, .projectpage-wrapper #desctext, .projectpage-wrapper #scrolltext",
      { opacity: 0, scale: 0.1 },
      {
        scrollTrigger: {
          trigger: ".projectpage-wrapper",
          markers: false,
          start: "top 60%",
          end: "bottom 60%",
          toggleActions: "restart none none reset",
          scrub: 2,
        },
        opacity: 1,
        duration: 3,
        scale: 1,
      }
    );
  }, []);
  return (
    <div id="project" className="projectpage-wrapper">
      <h1>Projects</h1>
      <p id="desctext">
        Since I started working as a Full Stack Web Developer I follow the Peter
        Parker principle “With great power comes great responsibility”. It's my
        first and prime duty to keep my client happy. In my projects, I have
        worked freelance and also with a company called Valuebound. I love
        creating things that drive people crazy.
      </p>
      <p id="scrolltext">
        Keep scrolling to see a small selection of projects I've worked on.
      </p>
    </div>
  );
}

export default ProjectPage;
