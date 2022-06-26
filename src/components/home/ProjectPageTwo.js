import React from "react";
import whatsapp from "../../static/images/whatsapp.png";

import "./projectPageTwo.css";

function ProjectPageTwo() {
  return (
    <div className="projectpagetwo-wrapper">
      <div className="top">
        <img src={whatsapp} alt="portfolio" />
        <p>
          {" "}
          Whatsapp is an incredibly popular application, but the technology
          behind it is actually pretty simple. I build a whatsapp clone using
          MERN stack and Socket.io (for real time communication). You can create
          an account, set DP, message anyone and much more. It is as simple as
          that.
        </p>
      </div>
      <div className="bottom">
        <h1>WHATSAPP CLONE WITH REACT JS</h1>
        <h2>Personal Project</h2>
        <p>
          {" "}
          Whatsapp is an incredibly popular application, but the technology
          behind it is actually pretty simple. I build a whatsapp clone using
          MERN stack and Socket.io (for real time communication). You can create
          an account, set DP, message anyone and much more. It is as simple as
          that.
        </p>
      </div>
    </div>
  );
}

export default ProjectPageTwo;
