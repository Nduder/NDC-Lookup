import React, { useState } from "react";

const ScaleButton = () => {
  const [toggleScale, setToggleScale] = useState("Off");
  const changeScale = () => {
    if (toggleScale === "On") {
      document.querySelector("html").style.fontSize = "16px";
      setToggleScale("Off");
    } else {
      document.querySelector("html").style.fontSize = "1vw";
      setToggleScale("On");
    }
  };
  return (
    <div className="btn scaler" onClick={() => changeScale()}>
      Screen scaling: {`${toggleScale}`}
    </div>
  );
};

export default ScaleButton;
