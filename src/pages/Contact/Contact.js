import React, { useEffect, useState } from "react";
import "./Contact.scss";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import useScrollBlock from "../../components/useScrollBlock/useScrollBlock";
import SlideButton from "../../components/SlideButton/SlideButton";
import styles from "../../components/Button/ButtonStyles.module.css";

const itemColors = {
  blackDots: {
    backgroundImage:
      "radial-gradient(circle at 1.75px, rgba(34, 35, 36, 1) 0.5px, rgba(34, 35, 36, 0) 1.75px), radial-gradient(circle, rgba(34, 35, 36, 1) 0.5px, rgba(34, 35, 36, 0) 1.75px)",
  },
  whiteDots: {
    backgroundImage:
      "radial-gradient(circle at 1.75px, rgba(255, 255, 255, 1) 0.5px, rgba(255, 255, 255, 0) 1.75px), radial-gradient(circle, rgba(255, 255, 255, 1) 0.5px, rgba(255, 255, 255, 0) 1.75px)",
  },
};
const Contact = () => {
  const location = useLocation();

  const [blockScroll, allowScroll] = useScrollBlock();
  const [direction, setDirection] = useState("");
  const [slideEvent, setSlideEvent] = useState(false);
  const [trianglePosition, setTrianglePosition] = useState({ top: "-25px" });
  const [contactSlideTextColor, setContactSlideTextColor] = useState(
    "rgba(34, 35, 36, 1)"
  );
  const [contactSlideDotsColor, setContactSlideDotsColor] = useState(
    itemColors.blackDots.backgroundImage
  );
  const windowHeight = window.innerHeight;
  useEffect(() => {
    blockScroll();
  });
  useEffect(() => {
    if (location.pathname === "/contact") {
      window.addEventListener("wheel", handleScroll);
    }
    return () => {
      window.removeEventListener("wheel", handleScroll);
      allowScroll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (location.pathname === "/contact") {
      window.addEventListener("keydown", handleScroll);
    }
    return () => {
      window.removeEventListener("keydown", handleScroll);
      allowScroll();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    let animatedText = document.querySelector(".animated-contact-text");
    let slideBtnDarkArrow = document.querySelector(".slide-dark-btn-arrow");
    let slideBtnLightArrow = document.querySelector(".slide-light-btn-arrow");
    if (direction !== "up") {
      setContactSlideTextColor("rgba(34, 35, 36, 1)");
      setContactSlideDotsColor(itemColors.blackDots.backgroundImage);
      setTrianglePosition({ top: "-25px" });
      slideBtnLightArrow.style.opacity = "0";
      slideBtnDarkArrow.style.opacity = "1";
      animatedText.innerHTML =
        " to <span className='animated-contact-text-1'>hear</span><br /><span className='animated-contact-text-2'>from</span> you";
    } else if (direction !== "down") {
      setContactSlideTextColor("rgba(255, 255, 255, 1)");
      setContactSlideDotsColor(itemColors.whiteDots.backgroundImage);
      setTrianglePosition({ top: "332px" });
      slideBtnLightArrow.style.opacity = "1";
      slideBtnDarkArrow.style.opacity = "0";
      animatedText.innerHTML =
        "to <span className='animated-contact-text-1'>work</span><br /><span className='animated-contact-text-2'>with</span> you";
    }
  }, [direction]);

  const handleScroll = (e, direction) => {
    console.log(e.type);
    if (!slideEvent && location.pathname === "/contact") {
      setSlideEvent(true);
      if (e.wheelDelta < 0) {
        if (direction !== "up") {
          allowScroll();
          setDirection("up");
          document.body.scrollTo({
            left: 0,
            top: windowHeight,
            behavior: "smooth",
          });
          blockScroll();
        }
      } else if (e.wheelDelta > 0) {
        if (direction !== "down") {
          allowScroll();
          setDirection("down");
          document.body.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
          });
          blockScroll();
        }
      } else if (e.keyCode === 40) {
        if (direction !== "up") {
          allowScroll();
          setDirection("up");
          document.body.scrollTo({
            left: 0,
            top: windowHeight,
            behavior: "smooth",
          });
          blockScroll();
        }
      } else if (e.keyCode === 38) {
        if (direction !== "down") {
          allowScroll();
          setDirection("down");
          document.body.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
          });
          blockScroll();
        }
      }
      setSlideEvent(false);
    }
  };

  const handleScrollClick = (e) => {
    e.preventDefault();
    if (direction !== "up") {
      allowScroll();
      setDirection("up");
      document.body.scrollTo({
        left: 0,
        top: windowHeight,
        behavior: "smooth",
      });
      blockScroll();
    } else if (direction !== "down") {
      allowScroll();
      setDirection("down");
      document.body.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
      blockScroll();
    }
  };

  return (
    <div className="Contact">
      <SlideButton
        handleScrollClick={handleScrollClick}
        direction={direction}
      />
      <div className="contact-container">
        <div className="row pt-40 contact-section-one">
          <div className="col-4">
            <div className="wayland-contact-side d-flex flex-row align-items-center">
              <div className="wayland-contact-side-animate">
                <img
                  src="./assets/img/contact/wayland-contact-triangle.svg"
                  alt=""
                  style={trianglePosition}
                />

                <div
                  className="contact-dots"
                  style={{ backgroundImage: `${contactSlideDotsColor}` }}
                ></div>
              </div>
              <p
                className="contact-title-1 fw-800 f-muli"
                style={{ color: `${contactSlideTextColor}` }}
              >
                Come <br /> hang <br /> with us <br /> we <br /> would <br />
                love
                <br />
                <span className="animated-contact-text"></span>
              </p>
            </div>
          </div>
          {/* col end */}

          <div className="col">
            <div className="row">
              <div className="col d-flex justify-content-end">
                <img
                  src="./assets/img/contact/wayland-contact-img-1.png"
                  alt=""
                />
              </div>
            </div>
            {/* row end */}

            <div className="row">
              <div className="col">
                <p className="f-muli fw-700 pt-20 pb-10 fsdark">WAYLAND</p>
                <hr className="hr-devider" />
              </div>
            </div>
            {/* row end */}

            <div className="row mt-20 mb-70">
              <div className="col-5">
                <p className="fw-400 fs-14 text-dark">
                  Weather you’re a client, potential partner, or just want to
                  know more about wayland. We will be happy to talk with you.
                </p>
              </div>
              {/* col end */}
              <div className="col d-flex flex-row justify-content-end">
                <ul className="list-unstyled">
                  <li className="fs-14 fw-700 text-dark">US</li>
                  <li className="fs-14 fw-700 text-dark">NMK</li>
                  <li className="fs-14 fw-700 text-dark">RKS</li>
                </ul>
                <ul className="list-unstyled mx-20">
                  <li className="fs-14 fw-700 text-dark">+1 456 841 7484 </li>
                  <li className="fs-14 fw-700 text-dark">+389 75 123 432</li>
                  <li className="fs-14 fw-700 text-dark">+383 49 234 232</li>
                </ul>
                <ul className="list-unstyled">
                  <li className="fs-14 fw-700 text-dark">info@wayland.io</li>
                  <li className="fs-14 fw-700 text-dark">info@wayland.io</li>
                  <li className="fs-14 fw-700 text-dark">info@wayland.io</li>
                </ul>
              </div>
              {/* col end */}
            </div>
            {/* row end */}

            <div className="row">
              <div className="col-3">
                <div className="contact-gradient-circle-wrap">
                  <div className="gradient-circle" data-aos="fade-in"></div>
                  <div className="gradient-circle"></div>
                  <div className="gradient-circle"></div>
                </div>
                <p className="fw-400 fs-14 text-black">
                  Feel free to reach out if you want to collaborate with us, or
                  simply have a chat
                </p>
              </div>
              {/* col end */}
              <div className="col d-flex flex-row justify-content-end">
                <ul className="list-unstyled pr-20">
                  <li className="fs-14 fw-700 text-dark mb-20">US Office</li>
                  <li className="fs-14 fw-400 text-dark">
                    Inform Innovation Inc
                  </li>
                  <li className="fs-14 fw-400 text-dark">Austin, Texas</li>
                  <li className="fs-14 fw-400 text-dark">Texas, 22300</li>
                  <li className="fs-14 fw-400 text-dark">Texas, 22300</li>
                </ul>
                <ul className="list-unstyled pl-20 pr-20 border-start border-end">
                  <li className="fs-14 fw-700 text-dark mb-20">
                    Skopje Office
                  </li>
                  <li className="fs-14 fw-400 text-dark">Wayland Skopje</li>
                  <li className="fs-14 fw-400 text-dark">
                    Orce Nikolov 190/3/6
                  </li>
                  <li className="fs-14 fw-400 text-dark">Skopje, 1000</li>
                  <li className="fs-14 fw-400 text-dark">North Macedonia</li>
                </ul>
                <ul className="list-unstyled pl-20">
                  <li className="fs-14 fw-700 text-dark mb-20">
                    Prishtina Office
                  </li>
                  <li className="fs-14 fw-400 text-dark">Wayland Prishtina</li>
                  <li className="fs-14 fw-400 text-dark">
                    St. Garibaldi, 32/2
                  </li>
                  <li className="fs-14 fw-400 text-dark">Prishtina 10000</li>
                  <li className="fs-14 fw-400 text-dark">Kosovo</li>
                </ul>
              </div>
              {/* col end */}
            </div>
            {/* row end */}
          </div>
          {/* col end */}
        </div>
        {/* contact-section-one */}
      </div>
      {/* container end */}

      <div className="contact-container bg-black vh-100">
        <div className="contact-section-two h-100 py-80">
          <div className="row contact-section-two h-100 d-flex justify-content-between">
            <div className="col-4"></div>
            {/* col end */}
            <div className="col-6">
              <div className="row mb-40">
                <div className="col-12 border-left pl-20 py-20">
                  <p className="fw-700 fs-25 text-white mb-15">
                    Let’s make your <br /> project reality
                  </p>
                  <p className="fw-400 fs-14 text-white-smoke">
                    Weather you’re a client, potential partner, or just want to
                    know more about wayland. We will be happy to talk with you.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Input placeholder={"name"} />
                  <Input placeholder={"last name"} />
                  <TextArea placeholder={"message"} />
                </div>
              </div>
              <div className="row pt-20">
                <div className="col d-flex justify-content-end">
                  <Button
                    wrap={styles.navbar_wrap}
                    transition={styles.navbar_btn_transition}
                    btn={styles.navbar_btn}
                  />
                </div>
              </div>
            </div>
            {/* col end */}
          </div>
          {/* row - contact-section-two end */}
        </div>
        {/* container end */}
      </div>
      {/* container fluid end */}
    </div>
  );
};

export default Contact;
