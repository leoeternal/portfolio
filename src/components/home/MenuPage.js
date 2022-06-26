import React, { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./menuPage.css";
import { gsap } from "gsap";

function MenuPage({ setMenu }) {
  useEffect(() => {
    gsap.fromTo(
      ".menupage-wrapper",
      {
        opacity: 0,
        scale: 2,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
      }
    );

    gsap.fromTo(
      ".menuitem",
      {
        x: "-1000px",
        scale: 2,
      },
      {
        x: 0,
        scale: 1,
      }
    );
  }, []);
  return (
    <div className="menupage-wrapper">
      <div className="container">
        <a
          onClick={() => setMenu(false)}
          style={{ textDecoration: "none", color: "black" }}
          href="#project"
        >
          <h1 className="menuitem">Projects</h1>
        </a>
        <a
          onClick={() => setMenu(false)}
          style={{ textDecoration: "none", color: "black" }}
          href="#skill"
        >
          <h1 className="menuitem">Skills</h1>
        </a>
        <a
          onClick={() => setMenu(false)}
          style={{ textDecoration: "none", color: "black" }}
          href="#service"
        >
          <h1 className="menuitem">Services</h1>
        </a>
        <a
          onClick={() => setMenu(false)}
          style={{ textDecoration: "none", color: "black" }}
          href="#contact"
        >
          <h1 className="menuitem">Contact</h1>
        </a>
      </div>
      <div className="close">
        <CloseIcon
          onClick={() => setMenu(false)}
          style={{ fontSize: "50px" }}
        />
      </div>
    </div>
  );
}

export default MenuPage;
