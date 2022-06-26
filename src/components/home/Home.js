import React, { useEffect } from "react";
import FirstPage from "./FirstPage";
import ProjectPage from "./ProjectPage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectPageOne from "./ProjectPageOne";
import ProjectPageTwo from "./ProjectPageTwo";
import "./home.css";
import ProjectPageThree from "./ProjectPageThree";
import SkillPage from "./SkillPage";
import ServicePage from "./ServicePage";
import ContactPage from "./ContactPage";
import TempPage from "./TempPage";

function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    tl.fromTo(".projectone", { xPercent: -150 }, { xPercent: 0 })
      .fromTo(
        ".projecttwo",
        { xPercent: 100, display: "none" },
        { xPercent: 0, display: "block" }
      )
      .fromTo(".projectthree", { xPercent: -100 }, { xPercent: 0 });
    ScrollTrigger.create({
      animation: tl,
      trigger: ".parallax-container",
      markers: false,
      start: "top top",
      end: "+=5000",
      pin: true,
      scrub: 1,
    });
  }, []);

  return (
    <div className="home-wrapper">
      <FirstPage />
      <TempPage />
      <div className="parallax-container">
        <ProjectPage />

        <div className="projectone">
          <ProjectPageOne />
        </div>
        <div className="projecttwo">
          <ProjectPageTwo />
        </div>
        <div className="projectthree">
          <ProjectPageThree />
        </div>
      </div>

      <SkillPage />
      <ServicePage />
      <ContactPage />
    </div>
  );
}

export default Home;
