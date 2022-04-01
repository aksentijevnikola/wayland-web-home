import React from "react";
import "./SlideButton.scss";

const SlideButton = ({ handleScrollClick }) => {
  return (
    <div className="slide-btn-wrap">
      <img
        src="./assets/img/shapes/contact-arrow-dark.png"
        alt=""
        className="slide-dark-btn-arrow"
      />
      <img
        src="./assets/img/shapes/contact-arrow-light.png"
        alt=""
        className="slide-light-btn-arrow"
      />
      <div className="SlideButton" onClick={handleScrollClick}></div>
    </div>
  );
};

export default SlideButton;
