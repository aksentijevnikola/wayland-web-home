import React, { useState } from "react";
import "./Button.scss";

const Button = ({
  wrap,
  transition,
  btn,
  text,
  transitionText,
  background,
}) => {
  const [mouseHover, setMouseHover] = useState(false);
  return (
    <div
      className={`btn-wayland-wrap ${wrap}`}
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      <div className={`btn-wayland-transition  ${transition}`}></div>
      <div className={`btn-wayland ${btn}`}>
        <p
          style={
            mouseHover
              ? { opacity: "0", transition: "opacity 0s ease-in-out" }
              : { opacity: "1", transition: "opacity 0.6s ease-in-out" }
          }
        >
          {text}
        </p>
        <p
          style={
            mouseHover
              ? { opacity: "1", transition: "opacity 0.6s ease-in-out" }
              : { opacity: "0", transition: "opacity 0s ease-in-out" }
          }
        >
          {transitionText}
        </p>
      </div>
    </div>
  );
};

export default Button;
