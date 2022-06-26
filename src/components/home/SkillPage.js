import React, { useEffect, useRef } from "react";
import "./skillPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
function SkillPage() {
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const leftBoxRefEl = leftBoxRef.current;
    const rightBoxRefEl = rightBoxRef.current;
    gsap.fromTo(
      leftBoxRefEl,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        scrollTrigger: {
          trigger: leftBoxRefEl,
        },

        opacity: 1,
        scale: 1,
        duration: 1.5,
      }
    );
    gsap.fromTo(
      rightBoxRefEl,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        scrollTrigger: {
          trigger: rightBoxRefEl,
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
        <div ref={leftBoxRef} className="left">
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
        <div ref={rightBoxRef} className="right">
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
