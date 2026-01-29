import React from "react";
import Lottie from "lottie-react";
import splashAnimation from "../Assets/lottie/splashAnimation.json";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      {props.load && (
        <Lottie
          animationData={splashAnimation}
          loop={true}
          style={{ width: "300px", height: "300px", margin: "auto" }}
        />
      )}
    </div>
  );
}

export default Pre;
