import React, { useEffect, useState } from "react";
import "./loadingPage.css";
import Lottie from "react-lottie";

function LoadingPage() {
  const [loadingText, setLoadingText] = useState(true);
  const [settingText, setSettingText] = useState(false);

  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: require("../../static/svg/loading2.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingText(false);
      setSettingText(true);
    }, 6000);

    setTimeout(() => {
      setSettingText(false);
    }, 10000);
  }, []);

  return (
    <div className="loadingpage-wrapper">
      <div className="container">
        <Lottie width="90" height="90" options={defaultOptions} />
      </div>
      <div className="text">
        {loadingText ? (
          <p>Loading... Please Wait</p>
        ) : (
          <>
            {settingText ? (
              <p>We're setting things up for you</p>
            ) : (
              <>
                <p>There you go!</p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default LoadingPage;
