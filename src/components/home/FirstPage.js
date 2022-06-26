import React, { useEffect } from "react";
import "./firstPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import nikhil from "../../static/images/nikhil.png";

function FirstPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    let tl2 = gsap.timeline();
    tl.fromTo(
      "#firstpage-left",
      { xPercent: -100, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 1 }
    ).fromTo(".right", { opacity: 0 }, { opacity: 1, duration: 1 });

    tl2
      .to(".firstpage-wrapper .left h5", {
        xPercent: -20,
        opacity: 0,
      })
      .to(".firstpage-wrapper .left h1", {
        xPercent: -40,
        opacity: 0,
      })
      .to(".firstpage-wrapper .left h3", {
        xPercent: -40,
        opacity: 0,
      })
      .to(".firstpage-wrapper .left p", {
        xPercent: -20,
        opacity: 0,
      });
    ScrollTrigger.create({
      animation: tl2,
      trigger: ".firstpage-wrapper",
      markers: false,
      start: "top 15%",
      end: "+=2000",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    });
    gsap.to(".firstpage-wrapper .right img", {
      scrollTrigger: {
        trigger: ".firstpage-wrapper .right img",
        markers: false,
        start: "top 15%",
        end: "+=2200",
        scrub: 1,
      },
      opacity: 0,
      duration: 4,
    });
  }, []);
  return (
    <div className="firstpage-wrapper">
      <div id="firstpage-left" className="left">
        <h5>NIKHIL JINDAL</h5>
        <h1>Full Stack Web Developer</h1>
        <h3>
          I'm an Indian, Full Stack Web Developer currently based in Ghaziabad,
          Uttar Pradesh. I've been a developer for last 2 years and I specialize
          in responsive websites and functional user interfaces.
        </h3>
        <p>
          <strong>View Projects</strong>{" "}
          <span style={{ color: "grey", padding: "0px 20px" }}>or</span>{" "}
          <strong>Read About Me</strong>
        </p>
      </div>
      <div className="right">
        <img src={nikhil} alt="portfolio" />
      </div>
    </div>
  );
}

export default FirstPage;
