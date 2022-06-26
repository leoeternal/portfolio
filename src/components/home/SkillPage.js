import React, { useEffect } from "react";
import "./skillPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
function SkillPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      "#leftbox",
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        scrollTrigger: {
          trigger: "#leftbox",
        },

        opacity: 1,
        scale: 1,
        duration: 1.5,
      }
    );
    gsap.fromTo(
      "#rightbox",
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        scrollTrigger: {
          trigger: "#rightbox",
        },

        opacity: 1,
        scale: 1,
        duration: 1.5,
      }
    );
  }, []);
  return (
    <div id="skill" className="skillpage-wrapper">
      <h1>SKILLS</h1>
      <div className="skills">
        <div id="leftbox" className="left">
          <p>React</p>
          <p>React Native</p>
          <p>Node.js</p>
          <p>MongoDB</p>
          <br />
          <br />
          <p>C++</p>
          <p>Data Structures</p>
          <p>Algorithms</p>
        </div>
        <div id="rightbox" className="right">
          <p>HTML, CSS</p>
          <p>Java Script</p>
          <p>Material UI CSS</p>
          <p>Responsive Website</p>
          <p>Animations/gsap</p>
        </div>
      </div>
    </div>
  );
}

export default SkillPage;
