import React from "react";
// import project from "../../static/images/project.png";
import project2 from "../../static/images/urlredirection2.png";
import "./projectPageThree.css";

function ProjectPageThree() {
  return (
    <div className="projectpagethree-wrapper">
      <h1>URL REDIRECTION (KENDALHUNT)</h1>
      <div className="picture-text">
        <img src={project2} alt="portfolio" />
        <div className="text">
          <h2>Client Project</h2>
          <p>
            This website handles URL redirection using lambda and dynamoDB. A
            lambda function to fetch the redirection details from dynamoDB. All
            the requests will be processed by cloudfront and Amazon API gateway
            which will keep the record of redirection hits and can be cache for
            lowering the DB usage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectPageThree;
