import React from "react";
import "./OwlCarousel.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const WaylandOwlCarousel = (props) => {
  return (
    <OwlCarousel className="owl-theme" {...props}>
      {props.children}
    </OwlCarousel>
  );
};

export default WaylandOwlCarousel;
