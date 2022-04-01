import React, { useRef } from "react";
import "./VerticalOwlCarousel.scss";
const VerticalOwlCarousel = (props) => {
  let itemRef = useRef(props.children[0]);
  console.log(props.children[0]);

  return (
    <div className="custom-vertical-carousel">
      <div className="vertical-group-1 vertical-stage-outer">
        <div className="vertical-stage">
          {props.children.forEach((item, i) => {
            if (i < props.children.length / 2) {
              return item;
            }
          })}
        </div>
      </div>
      <div className="vertical-group-2 vertical-stage-outer">
        <div className="vertical-stage">
          {props.children.forEach((item, i) => {
            if (i >= props.children.length / 2) {
              return item;
            }
          })}
        </div>
      </div>
      <div className="indicators">
        <i
          className="fa-solid fa-circle active"
          onClick={() => handleCarouselMovement}
        ></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </div>
    </div>
  );
};

export default VerticalOwlCarousel;
