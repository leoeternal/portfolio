import React from "react";
import "./contactPage.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactPage() {
  return (
    <div id="contact" className="contactpage-wrapper">
      <h1>Get In Touch</h1>
      <p id="headingone">
        Have a project in mind? Would you like to share it? Feel free to reach
        out by writing an e-mail.
      </p>
      <EmailIcon style={{ color: "white", position: "relative", top: "3px" }} />
      <a href="mailto:nikhiljindal79@gmail.com">
        <p id="mail">nikhiljindal79@gmail.com</p>
      </a>

      <br />
      <LinkedInIcon
        style={{ color: "white", position: "relative", top: "3px" }}
      />
      <a
        href="https://www.linkedin.com/in/nikhil-jindal-497499167/"
        target="_blank"
        rel="noreferrer"
      >
        <p id="linkedin">LinkedIn</p>
      </a>
    </div>
  );
}

export default ContactPage;
