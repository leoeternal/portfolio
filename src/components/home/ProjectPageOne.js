import React from "react";
import "./projectPageOne.css";
// import impact1 from "../../static/images/impact1.png";
import impact11 from "../../static/images/impact11.png";
// import impact2 from "../../static/images/impact2.png";

function ProjectPageOne() {
  return (
    <div className="projectpageone-wrapper">
      <div className="left">
        <img src={impact11} alt="portfolio" />
      </div>
      <div className="right">
        <h1>Strengthening a business with UX design</h1>
        <h2>Freelance Work</h2>

        <p>
          Impact Cables is a great business and has an excellent system in
          place, but were missing the polish of a strong good looking website
          where they can showcase their products. This website is a more
          prominent way for leads to find and know about desired products.
        </p>
      </div>
    </div>
  );
}

export default ProjectPageOne;
