import React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Lottie from "react-lottie";
import "./header.css";

function Header({ setMenu }) {
  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: require("../static/svg/n-letter.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="header-wrapper">
      <div className="left">
        <div className="logo">
          <Lottie options={defaultOptions} height={50} width={50} />
        </div>
        <div className="name">
          <h2>Nikhil Jindal</h2>
          <p>WEB DEVELOPER</p>
        </div>
      </div>
      <div className="right">
        <p onClick={() => setMenu(true)}>MENU</p>
        <DensityMediumIcon
          style={{ cursor: "pointer" }}
          onClick={() => setMenu(true)}
        />
      </div>
    </div>
  );
}

export default Header;
