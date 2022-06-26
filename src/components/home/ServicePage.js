import React, { useEffect, useRef } from "react";
import "./servicePage.css";
import Lottie from "react-lottie";
import Aos from "aos";
import "aos/dist/aos.css";
import { Elastic, gsap } from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";

function ServicePage() {
  let boxRef1 = useRef(null);
  let boxRef2 = useRef(null);
  let boxRef3 = useRef(null);
  let boxRef4 = useRef(null);
  let textRef = useRef(null);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    const el = boxRef1.current;
    const el2 = boxRef2.current;
    const el3 = boxRef3.current;
    const el4 = boxRef4.current;
    const textEl = textRef.current;
    gsap.fromTo(
      el,
      { xPercent: -50 },
      {
        xPercent: 0,
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart none none none",
        },
        ease: Elastic.easeOut,
        duration: 3,
      }
    );
    gsap.fromTo(
      el2,
      { xPercent: 50, display: "none" },
      {
        xPercent: 0,
        display: "flex",
        scrollTrigger: {
          trigger: el2,
          toggleActions: "restart none none none",
        },
        ease: Elastic.easeOut,
        duration: 3,
      }
    );
    gsap.fromTo(
      el3,
      { xPercent: -50 },
      {
        xPercent: 0,
        scrollTrigger: {
          trigger: el3,
          toggleActions: "restart none none none",
        },
        ease: Elastic.easeOut,
        duration: 3,
      }
    );
    gsap.fromTo(
      el4,
      { xPercent: 50, display: "none" },
      {
        xPercent: 0,
        display: "flex",
        scrollTrigger: {
          trigger: el4,
          toggleActions: "restart none none none",
        },
        ease: Elastic.easeOut,
        duration: 3,
      }
    );

    gsap.to(textEl, {
      scrollTrigger: {
        trigger: textEl,
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
      <h1 ref={textRef}> </h1>
      <div ref={boxRef1} className="boxleft">
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
      <div ref={boxRef2} className="boxright">
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
      <div ref={boxRef3} className="boxleft">
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
      <div ref={boxRef4} className="boxright">
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
