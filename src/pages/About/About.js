import React, { useEffect, useState } from "react";
import "./About.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Button from "../../components/Button/Button";
import styles from "../../components/Button/ButtonStyles.module.css";
import VerticalOwlCarousel from "../../components/VerticalOwlCarousel/VerticalOwlCarousel";
const TeamMember = ({ text }) => {
  return (
    <div className={`vertical-owl-item ${text}`}>
      <div className="owl-item-img-wrap">
        <img
          src="./assets/img/about/team/sec-02-owl-carousel-img.png"
          draggable="false"
          alt=""
        />
      </div>
      <div className="owl-text-wrap">
        <p className="text-dark fs-13 fw-700">John Doe</p>
        <p className="text-dark fs-13 fw-600">CEO</p>
        <p>
          <a
            href="mailto:john@wayland.io"
            className="text-dark text-decoration-underline fs-13 fw-400"
          >
            john@wayland.io
          </a>
        </p>
      </div>
    </div>
  );
};
const About = () => {
  const owlOptions = {
    loop: true,
    nav: true,
    dots: false,
    margin: 0,
    lazyLoad: true,
    navText: [
      '<img src="./assets/img/icons/sunset-angle-left.png" alt=""/>',
      '<img src="./assets/img/icons/sunset-angle-right.png" alt="" />',
    ],
  };

  const [expertsImageTransition, setExpertsImageTransition] = useState(false);
  const [currentCompanyValue, setCurrentCompanyValue] = useState("trust");

  useEffect(() => {
    AOS.refresh();
  }, []);

  useEffect(() => {
    let expertsText = document.querySelectorAll(".expert-wrap p");
    let expertsImages = document.querySelectorAll(".expert-wrap img");
    if (expertsImageTransition) {
      expertsImages[0].style.top = "50%";
      expertsImages[0].style.left = "0";
      expertsImages[0].style.transform = "translateY(-50%)";
      expertsImages[2].style.top = "50%";
      expertsImages[2].style.left = "0";
      expertsText.forEach((element) => (element.style.opacity = "1"));
    } else {
      expertsImages[0].style.top = "65px";
      expertsImages[0].style.left = "45px";
      expertsImages[0].style.transform = "none";
      expertsImages[2].style.top = "-50%";
      expertsImages[2].style.left = "90px";
      expertsText.forEach((element) => (element.style.opacity = "0"));
    }
  }, [expertsImageTransition]);
  useEffect(() => {
    const trustWrap = document.querySelector(".trust-wrap");
    const collaborationWrap = document.querySelector(".collaboration-wrap");
    const resultsWrap = document.querySelector(".results-wrap");
    const improvementWrap = document.querySelector(".improvement-wrap");
    if (currentCompanyValue === "collaboration") {
      resultsWrap.style.opacity = "0";
      improvementWrap.style.opacity = "0";
      trustWrap.style.opacity = "0";
      collaborationWrap.style.opacity = "1";
    } else if (currentCompanyValue === "results") {
      improvementWrap.style.opacity = "0";
      trustWrap.style.opacity = "0";
      collaborationWrap.style.opacity = "0";
      resultsWrap.style.opacity = "1";
    } else if (currentCompanyValue === "improvement") {
      resultsWrap.style.opacity = "0";
      trustWrap.style.opacity = "0";
      collaborationWrap.style.opacity = "0";
      improvementWrap.style.opacity = "1";
    } else {
      resultsWrap.style.opacity = "0";
      improvementWrap.style.opacity = "0";
      collaborationWrap.style.opacity = "0";
      trustWrap.style.opacity = "1";
    }
  }, [currentCompanyValue]);
  return (
    <div className="About">
      <div className="about-section-1">
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-between align-items-lg-start">
            <p className="fw-400 fs-13 text-dark">
              Our mission is to create valuable technology that will shape the
              future of applied science and the history of nations. Our vision
              is to develop and deploy innovation leaders that create future
              technologies today.
            </p>
            <div className="our-experts-wrap ">
              <div className="our-experts-title-wrap">
                <div className="our-experts-title">
                  <hr />
                  <p className="fw-600">OUR EXPERTS</p>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div
                  className="expert-wrap"
                  onClick={() =>
                    setExpertsImageTransition(!expertsImageTransition)
                  }
                >
                  <img src="./assets/img/about/experts/expert-01.png" alt="" />
                  <p className="fw-400 fs-13">Filan Fisteku</p>
                  <p className="fw-600">
                    <a
                      href="mailto:filan.wayland.io"
                      className="fw-600 text-sunset"
                    >
                      filan.wayland.io
                    </a>
                  </p>
                </div>
                <div
                  className="expert-wrap"
                  onClick={() =>
                    setExpertsImageTransition(!expertsImageTransition)
                  }
                >
                  <img src="./assets/img/about/experts/expert-02.png" alt="" />
                  <p className="fw-400 fs-13">Filan Fisteku</p>
                  <p className="fw-600">
                    <a
                      href="mailto:filan.wayland.io"
                      className="fw-600 text-sunset"
                    >
                      filan.wayland.io
                    </a>
                  </p>
                </div>
                <div
                  className="expert-wrap"
                  onClick={() =>
                    setExpertsImageTransition(!expertsImageTransition)
                  }
                >
                  <img src="./assets/img/about/experts/expert-03.png" alt="" />
                  <p className="fw-400 fs-13">Filan Fisteku</p>
                  <p className="fw-600">
                    <a
                      href="mailto:filan.wayland.io"
                      className="fw-600 text-sunset"
                    >
                      filan.wayland.io
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <p className="text-dark">
              <span
                className="fs-36 fw-500 f-muli"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                Work with fascinating
              </span>
              <span
                className="text-sunset fs-48 fw-700 f-muli"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                &nbsp;clients&nbsp;
              </span>
              <span
                className="fs-36 fw-500 f-muli"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                that
              </span>
            </p>
            <p className="text-dark mb-40">
              <span
                className="fs-48 fw-500 f-muli"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                have problems worth solving.
              </span>
            </p>
            <div className="carousel-wrapper">
              <div
                id="waylandAboutCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#waylandAboutCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#waylandAboutCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#waylandAboutCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="./assets/img/about/carousel/sec-01-img-01.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./assets/img/about/carousel/sec-01-img-02.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./assets/img/about/carousel/sec-01-img-03.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev d-none"
                  type="button"
                  data-bs-target="#waylandAboutCarousel"
                  data-bs-slide="prev"
                >
                  <i className="fa-solid fa-angle-left"></i>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#waylandAboutCarousel"
                  data-bs-slide="next"
                >
                  <i className="fa-solid fa-angle-right"></i>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      {/* about-section-1 */}
      <div className="about-section-2 pt-40">
        <div className="section-title-wrap">
          <div className="section-title">
            <hr />
            <p className="fw-600">OUR TEAM</p>
          </div>
        </div>
        <div className="h-100 owl-carousel-wrap">
          <VerticalOwlCarousel>
            <TeamMember text={"text-left-side"} />
            <TeamMember text={"text-left-side"} />
            <TeamMember text={"text-left-side"} />
            <TeamMember text={"text-left-side"} />
            <TeamMember text={"text-left-side"} />
            <TeamMember text={"text-left-side"} />
            <TeamMember text={"text-left-side"} />
            <TeamMember text={"text-left-side"} />
            <TeamMember text={"text-left-side"} />
            <TeamMember text={"text-left-side"} />
            <TeamMember text={"text-left-side"} />
            <TeamMember text={"text-left-side"} />
            <TeamMember text={"text-right-side"} />
            <TeamMember text={"text-right-side"} />
            <TeamMember text={"text-right-side"} />
            <TeamMember text={"text-right-side"} />
            <TeamMember text={"text-right-side"} />
            <TeamMember text={"text-right-side"} />
            <TeamMember text={"text-right-side"} />
            <TeamMember text={"text-right-side"} />
            <TeamMember text={"text-right-side"} />
            <TeamMember text={"text-right-side"} />
            <TeamMember text={"text-right-side"} />
            <TeamMember text={"text-right-side"} />
          </VerticalOwlCarousel>
        </div>

        <div>
          <p className="fw-400 fs-13 text-dark mb-20">
            Our mission is to create valuable technology that will shape the
            future of applied science and the history of nations. Our vision is
            to develop and deploy innovation leaders that create future
            technologies today.
          </p>
          <p className="fw-400 fs-13 text-dark mb-25">
            Our mission is to create valuable technology that will shape the
            future of applied science and the history of nations. Our vision is
            to develop and deploy innovation leaders that create future
            technologies today.
          </p>
          <div>
            <Button
              wrap={styles.about_btn_wrap}
              transition={styles.about_btn_transition}
              btn={styles.about_btn}
              text={"JOIN US"}
              transitionText={"SEND"}
            />
          </div>
        </div>
      </div>
      {/* about-section-2 */}
      <div className="about-section-3">
        <div className="section-title-wrap">
          <div className="section-title">
            <hr />
            <p className="fw-600">OUR VALUES</p>
          </div>
        </div>
        <div className="row h-100 d-flex align-items-center">
          <div className="col-6 pr-50 position-relative">
            <div className="trust-wrap section-3-wrap">
              <span className="f-muli fw-400 fs-144 text-light-orange">1</span>
              <p className="f-muli fw-600 fs-48 text-dark mb-20">TRUST</p>
              <p className="fw-400 fs-13 text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur ultrices lacus, risus congue. Nisi, parturient urna
                tortor in orci. Ultrices nunc neque ultrices habitasse urna,
                orci faucibus diam placerat. Orci bibendum amet viverra vitae
                et. Gravida aliquam praesent pellentesque sem. Fringilla elit,
                pellentesque eget placerat. Turpis habitant id congue ultrices
                varius sit purus dictumst. Purus nulla id massa egestas est
                congue. Tortor pellentesque magna magna amet, magna scelerisque
                facilisis.
              </p>
            </div>
            <div className="collaboration-wrap section-3-wrap">
              <span className="f-muli fw-400 fs-144 text-light-orange">2</span>
              <p className="f-muli fw-600 fs-48 text-dark mb-20">
                COLLABORATION
              </p>
              <p className="fw-400 fs-13 text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur ultrices lacus, risus congue. Nisi, parturient urna
                tortor in orci. Ultrices nunc neque ultrices habitasse urna,
                orci faucibus diam placerat. Orci bibendum amet viverra vitae
                et. Gravida aliquam praesent pellentesque sem. Fringilla elit,
                pellentesque eget placerat. Turpis habitant id congue ultrices
                varius sit purus dictumst. Purus nulla id massa egestas est
                congue. Tortor pellentesque magna magna amet, magna scelerisque
                facilisis.
              </p>
            </div>
            <div className="results-wrap section-3-wrap">
              <span className="f-muli fw-400 fs-144 text-light-orange">3</span>
              <p className="f-muli fw-600 fs-48 text-dark mb-20">RESULTS</p>
              <p className="fw-400 fs-13 text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur ultrices lacus, risus congue. Nisi, parturient urna
                tortor in orci. Ultrices nunc neque ultrices habitasse urna,
                orci faucibus diam placerat. Orci bibendum amet viverra vitae
                et. Gravida aliquam praesent pellentesque sem. Fringilla elit,
                pellentesque eget placerat. Turpis habitant id congue ultrices
                varius sit purus dictumst. Purus nulla id massa egestas est
                congue. Tortor pellentesque magna magna amet, magna scelerisque
                facilisis.
              </p>
            </div>
            <div className="improvement-wrap section-3-wrap">
              <span className="f-muli fw-400 fs-144 text-light-orange">4</span>
              <p className="f-muli fw-600 fs-48 text-dark mb-20">
                CONSTANT IMPROVEMENT
              </p>
              <p className="fw-400 fs-13 text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur ultrices lacus, risus congue. Nisi, parturient urna
                tortor in orci. Ultrices nunc neque ultrices habitasse urna,
                orci faucibus diam placerat. Orci bibendum amet viverra vitae
                et. Gravida aliquam praesent pellentesque sem. Fringilla elit,
                pellentesque eget placerat. Turpis habitant id congue ultrices
                varius sit purus dictumst. Purus nulla id massa egestas est
                congue. Tortor pellentesque magna magna amet, magna scelerisque
                facilisis.
              </p>
            </div>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center align-items-start pl-50">
            <p
              className="f-muli fw-600 fs-24 text-dark mb-25"
              onClick={() => setCurrentCompanyValue("trust")}
            >
              TRUST
            </p>
            <p
              className="f-muli fw-600 fs-24 text-dark mb-25"
              onClick={() => setCurrentCompanyValue("collaboration")}
            >
              COLLABORATION
            </p>
            <p
              className="f-muli fw-600 fs-24 text-dark mb-25"
              onClick={() => setCurrentCompanyValue("results")}
            >
              RESULTS
            </p>
            <p
              className="f-muli fw-600 fs-24 text-dark"
              onClick={() => setCurrentCompanyValue("improvement")}
            >
              CONSTANT IMPROVEMENT
            </p>
          </div>
        </div>
      </div>
      {/* about-section-3 */}
      <div className="about-section-4 py-100">
        <OwlCarousel className="owl-theme" {...owlOptions}>
          <div className="item">
            <img
              src="./assets/img/about/logos/johnson-johnson.png"
              alt=""
              className="johnson-logo"
            />
          </div>
          <div className="item">
            <img
              src="./assets/img/about/logos/google.png"
              alt=""
              className="google-logo"
            />
          </div>
          <div className="item">
            <img
              src="./assets/img/about/logos/logos-asana.png"
              alt=""
              className="asana-logo"
            />
          </div>
          <div className="item">
            <img
              src="./assets/img/about/logos/logos-asana.png"
              alt=""
              className="asana-logo"
            />
          </div>
        </OwlCarousel>
      </div>
      {/* about-section-4 */}
    </div>
  );
};

export default About;
