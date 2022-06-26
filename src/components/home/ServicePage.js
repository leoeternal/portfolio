import React, { useEffect } from "react";
import "./servicePage.css";
import Lottie from "react-lottie";
import Aos from "aos";
import "aos/dist/aos.css";
import { Elastic, gsap } from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";

function ServicePage() {
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    gsap.fromTo(
      "#box1",
      { xPercent: -50 },
      {
        xPercent: 0,
        scrollTrigger: {
          trigger: "#box1",
          toggleActions: "restart none none none",
        },
        ease: Elastic.easeOut,
        duration: 3,
      }
    );
    gsap.fromTo(
      "#box2",
      { xPercent: 50, display: "none" },
      {
        xPercent: 0,
        display: "flex",
        scrollTrigger: {
          trigger: "#box2",
          toggleActions: "restart none none none",
        },
        ease: Elastic.easeOut,
        duration: 3,
      }
    );
    gsap.fromTo(
      "#box3",
      { xPercent: -50 },
      {
        xPercent: 0,
        scrollTrigger: {
          trigger: "#box3",
          toggleActions: "restart none none none",
        },
        ease: Elastic.easeOut,
        duration: 3,
      }
    );
    gsap.fromTo(
      "#box4",
      { xPercent: 50, display: "none" },
      {
        xPercent: 0,
        display: "flex",
        scrollTrigger: {
          trigger: "#box4",
          toggleActions: "restart none none none",
        },
        ease: Elastic.easeOut,
        duration: 3,
      }
    );

    gsap.to("#textAnimation", {
      scrollTrigger: {
        trigger: "#textAnimation",
      },
      duration: 2,
      text: "I provide everything you need for your perfect website",
      ease: "none",
    });
  }, []);

  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: require("../../static/svg/design.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsTwo = {
    loop: true,
    autoPlay: true,
    animationData: require("../../static/svg/strategy.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsThree = {
    loop: true,
    autoPlay: true,
    animationData: require("../../static/svg/testing.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsFour = {
    loop: true,
    autoPlay: true,
    animationData: require("../../static/svg/contact.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div id="service" className="servicepage-wrapper">
      <h1 id="textAnimation"> </h1>
      <div id="box1" className="boxleft">
        <div className="svg">
          <Lottie options={defaultOptions} />
        </div>
        <div className="text">
          <p id="title">User Experience Design</p>
          <p id="desc">
            I design your website to be as easy to use as possible while guiding
            users towards the end goal. Putting the user’s experience first,
            whether they’re looking to subscribe, trying to contact you, or just
            gathering information.
          </p>
        </div>
      </div>
      <div id="box2" className="boxright">
        <div className="svg">
          <Lottie options={defaultOptionsTwo} />
        </div>
        <div className="text">
          <p id="title">Business Strategy</p>
          <p id="desc">
            We discuss what you are trying to achieve, and place goals on your
            website planning how to achieve that. For example, a product might
            use a small website to collect initial customers which can be grown
            into a much larger website later on with leads ready-to-go.
          </p>
        </div>
      </div>
      <div id="box3" className="boxleft">
        <div className="svg">
          <Lottie options={defaultOptionsThree} />
        </div>
        <div className="text">
          <p id="title">Rigorous Testing</p>
          <p id="desc">
            I ensure your website is of excellent quality by thoroughly testing
            with multiple approaches. Whether you’re looking to ensure
            consistency across multiple browsers or want to isolate visual
            components, testing helps guarantee everything works as expected.
          </p>
        </div>
      </div>
      <div id="box4" className="boxright">
        <div className="svg">
          <Lottie options={defaultOptionsFour} />
        </div>
        <div className="text">
          <p id="title">Ongoing Support</p>
          <p id="desc">
            Your website is always growing. Whether you’re adding new features
            or making improvements I’m here to help. I won’t leave you guessing
            how your own website works and will always be available to answer
            any questions you might have.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
