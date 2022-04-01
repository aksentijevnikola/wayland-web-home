import React, { useEffect, useState } from "react";
import OwlCarousel from "../../components/OwlCarousel/OwlCarousel";
import "./Home.scss";

const Home = () => {
  const [currentRangeInputValue, setCurrentRangeInputValue] = useState(1);
  const autoplayT = true;
  const loopT = true;
  const lazyContentT = true;

  useEffect(() => {
    let targetRange = document.getElementById("range");
    const carouselItems = document.querySelectorAll(".carousel-item");
    [...carouselItems].forEach((element, index) => {
      if (element.classList.contains("active")) {
        console.log(index + 1);
        setCurrentRangeInputValue(index + 1);
      }
    });
    targetRange.value = currentRangeInputValue;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCarouselPagination = (e) => {
    let targetRange = document.getElementById("range");
    const carouselItems = document.querySelectorAll(".carousel-item");
    console.log([...carouselItems]);

    setTimeout(() => {
      [...carouselItems].forEach((element) => {
        if (element.classList.contains("active")) {
          targetRange.value = parseInt(element.getAttribute("rangevalue"));
          setCurrentRangeInputValue(element.getAttribute("rangevalue"));
        }
      });
    }, 605);
  };
  useEffect(() => {
    let target = document.getElementById("range");
    if (currentRangeInputValue < 1) {
      console.log(currentRangeInputValue, "current value === 0");
      setCurrentRangeInputValue(1);
    }
    if (target) {
      const min = target.min;
      const max = target.max;
      const val = currentRangeInputValue;
      target.style.backgroundSize = `${
        ((val - min) * 100) / (max - min)
      }% 100%`;
    }
  }, [currentRangeInputValue]);

  const renderParticleWrapperOne = (i) => {
    return (
      <div className="particle-wrapper" key={i}>
        <div className="particle-1"></div>
      </div>
    );
  };
  const renderParticleWrapperTwo = (i) => {
    return (
      <div className="particle-wrapper" key={i}>
        <div className="particle-2"></div>
      </div>
    );
  };
  const renderParticleWrapperThree = (i) => {
    return (
      <div className="particle-wrapper" key={i}>
        <div className="particle-3"></div>
      </div>
    );
  };

  return (
    <div className="Home">
      <div className="home-container">
        <div className="home-section-one">
          <div className="row mb-30">
            <div className="col-5">
              <p className="f-muli fw-700 fs-48 text-dark mb-20">
                BUILDING BETTER <br /> APPS
              </p>
              <p className="fs-300 fs-22 text-dark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                urna sapien, tincidunt in tempor tristique, consequat ut velit.
                Donec at consectetur mi.
              </p>
            </div>
          </div>
          {/* row */}
          <div className="row mb-70">
            <div className="col-5 position-relative h-200">
              <img
                className="home-section-one-arrow"
                src="./assets/img/font-icons/home-arrow-downwards.png"
                alt=""
              />
              <div className="home-section-one-circle"></div>

              <p className="f-muli fs-18 fw-600 text-dark home-section-one-text">
                The more that you read, the more <br /> things you will know
              </p>
            </div>
          </div>
          {/* row */}
          <div className="row d-flex justify-content-center mb-50">
            <div className="col d-flex justify-content-center py-30 ">
              <OwlCarousel
                timeout="5000"
                items="3"
                lazyContent={lazyContentT}
                autoplay={autoplayT}
                loop={loopT}
              >
                <p className="f-muli fs-40 fw-700 text-dark text-center">
                  Cloud Security.
                </p>
                <p className="f-muli fs-40 fw-700 text-dark text-center">
                  Network.
                </p>
                <p className="f-muli fs-40 fw-700 text-dark text-center">
                  Development.
                </p>
              </OwlCarousel>
            </div>
          </div>
          {/* row */}
        </div>
        {/* home-section-one */}
      </div>
      {/* home-container */}
      <div className="home-container bg-black">
        <div className="home-section-two">
          <div className="row h-100">
            <div className="col-7 d-flex justify-content-center align-items-center flex-column">
              <div className="row">
                <div className="col-6 d-flex justify-content-end align-items-center flex-column">
                  <div className="home-section-two-card">
                    <div className="home-section-two-card-icon mb-35">
                      <img src="./assets/img/icons/cloud-pink.png" alt="" />
                    </div>
                    <p className="text-uppercase f-muli fw-700 fs-18 text-white-smoke mb-25">
                      embedded <br /> system
                    </p>
                    <p className="fw-300 fs-14 text-white-smoke mb-35">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus urna sapien. Write stuff here
                    </p>
                    <hr />
                  </div>
                  <div className="home-section-two-card">
                    <div className="home-section-two-card-icon mb-35">
                      <img src="./assets/img/icons/cloud-pink.png" alt="" />
                    </div>
                    <p className="text-uppercase f-muli fw-700 fs-18 text-white-smoke mb-25">
                      machine learning
                      <br />& data
                    </p>
                    <p className="fw-300 fs-14 text-white-smoke mb-35">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus urna sapien. Write stuff here
                    </p>
                    <hr />
                  </div>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center flex-column">
                  <div className="home-section-two-card">
                    <div className="home-section-two-card-icon mb-35">
                      <img src="./assets/img/icons/cloud-pink.png" alt="" />
                    </div>
                    <p className="text-uppercase f-muli fw-700 fs-18 text-white-smoke mb-25">
                      app <br />
                      development
                    </p>
                    <p className="fw-300 fs-14 text-white-smoke mb-35">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus urna sapien. Write stuff here
                    </p>
                    <hr />
                  </div>
                  <div className="home-section-two-card">
                    <div className="home-section-two-card-icon mb-35">
                      <img src="./assets/img/icons/cloud-pink.png" alt="" />
                    </div>
                    <p className="text-uppercase f-muli fw-700 fs-18 text-white-smoke mb-25">
                      devops <br />
                    </p>
                    <p className="fw-300 fs-14 text-white-smoke mb-35">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus urna sapien. Write stuff here
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
              {/* row */}
            </div>
            {/* col */}
            <div className="col-5  d-flex flex-column justify-content-center  align-items-center">
              <div className="home-sunset-blur-circle"></div>
              <p className="f-muli fs-30 fw-700 text-white-smoke mb-30">
                LET US TAKE YOUR <br />
                BUSINESS TO NEW <br />
                LEVELS
              </p>
              <p className="fw-300 fs-14 text-white-smoke">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                urna sapien. Write stuff here
              </p>
            </div>
            {/* col */}
          </div>
          {/* row */}
        </div>
        {/* home-section-two */}
      </div>
      {/* home-container */}
      <div className="home-container vh-100 home-section-three">
        <div className="row h-100">
          <div className="col-5 d-flex flex-column justify-content-center align-items-start h-100">
            <p className="f-muli fw-700 fs-48 text-dark mb-40">
              Costumer <br /> Services
            </p>
            <p className="fw-400 fs-20 text-dark mb-40">
              Design web applications and any web-oriented projects. We are
              ready for projects with already-prepared designs as well as
              full-circle projects. We are willing to start working on your web
              idea. With Wayland you can also develop iOS and Android
              applications based on Java technologies.
            </p>
            <div className="home-btn f-muli fs-16 fw-700">WORK WITH US</div>
          </div>
        </div>
      </div>
      {/* home-container / home-section-three */}
      <div className="home-container vh-100 home-section-four bg-black">
        <div className="row h-100">
          <div className="col-6 h-100 position-relative">
            <div id="particle-container" className="w-100 h-100">
              {Array(10)
                .fill(0)
                .map((_, i) => renderParticleWrapperOne(i))}
              {Array(15)
                .fill(0)
                .map((_, i) => renderParticleWrapperTwo(i))}
              {Array(15)
                .fill(0)
                .map((_, i) => renderParticleWrapperThree(i))}
            </div>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center">
            <p className="f-muli fw-700 fs-48 text-white-smoke mb-10">
              Our <br /> Industries
            </p>
            <p className="f-muli fw-700 fs-24 text-white-smoke opacity-06 mb-80">
              Solving complex digital transformation.
            </p>
            <div className="row mb-70">
              <div className="col-4">
                <img
                  src="./assets/img/icons/cyber-security.png"
                  alt=""
                  className="img-fluid d-flex align-self-center shield-img"
                />
                <p className="f-muli fw-700 fs-18 text-white">Cybersecurity</p>
              </div>
              <div className="col-4">
                <div className="home-section-four-icon-wrap mx-auto">
                  <img
                    src="./assets/img/icons/healthcare.png"
                    alt=""
                    className="img-fluid d-flex align-self-center "
                  />
                </div>

                <p className="f-muli fw-700 fs-18 text-white text-center">
                  Healthcare
                </p>
              </div>
              <div className="col-4">
                <div className="home-section-four-icon-wrap mx-auto"></div>
                <p className="f-muli fw-700 fs-18 text-white text-center">
                  Education
                </p>
              </div>
            </div>
            {/* row */}
            <p className="f-muli fw-700 fs-16 text-white-smoke mb-50">
              Let’s get the conversation started, and see if we are the right
              company for what YOU need.
            </p>
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <div className="home-btn f-muli fs-16 fw-700">
                  CONNECT WITH US
                </div>
              </div>
            </div>
          </div>
          {/* col-6 */}
        </div>
        {/* row */}
      </div>
      {/* home-section-four */}
      <div className="home-container home-section-five my-100">
        <div className="row">
          <div className="col-12 position-relative">
            <p className="f-muli fw-700 fs-48 text-dark mb-30">
              News & <br /> Insights
            </p>
            <div
              id="waylandHomeCarouselControls"
              className="carousel slide carousel-fade"
              data-bs-interval="false"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" rangevalue={1}>
                  <div>
                    <div className="news-card-1">
                      <img
                        src="./assets/img/news/n-img-1.png"
                        alt=""
                        className="d-block w-100 mb-30"
                      />
                      <p className="fw-600 fs-16 text-dark mb-30">
                        Title of news: Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Integer consectetur erat.
                      </p>
                      <div className="home-discover-btn d-flex flex-row align-items-center">
                        <span className="f-muli fs-12 fw-700 text-pink pr-05">
                          DISCOVER
                        </span>
                        <img
                          src="./assets/img/icons/pink-discover-icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="news-card-2">
                      <img
                        src="./assets/img/news/n-img-2.png"
                        alt=""
                        className="d-block w-100 mb-30"
                      />
                      <p className="fw-600 fs-16 text-dark mb-30">
                        Title of news: Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Integer consectetur erat.
                      </p>
                      <div className="home-discover-btn d-flex flex-row align-items-center">
                        <span className="f-muli fs-12 fw-700 text-pink pr-05">
                          DISCOVER
                        </span>
                        <img
                          src="./assets/img/icons/pink-discover-icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="carousel-item" rangevalue={2}>
                  <div>
                    <div className=" news-card-1">
                      <img
                        src="./assets/img/sam/sam-device-img-5.png"
                        alt=""
                        className="d-block w-100 mb-30"
                      />
                      <p className="fw-600 fs-16 text-dark mb-30">
                        Title of news: Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Integer consectetur erat.
                      </p>
                      <div className="home-discover-btn d-flex flex-row align-items-center">
                        <span className="f-muli fs-12 fw-700 text-pink pr-05">
                          DISCOVER
                        </span>
                        <img
                          src="./assets/img/icons/pink-discover-icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" news-card-2">
                      <img
                        src="./assets/img/sam/surgery-in-third-world-countries.jpg"
                        alt=""
                        className="d-block w-100 mb-30"
                      />
                      <p className="fw-600 fs-16 text-dark mb-30">
                        Title of news: Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Integer consectetur erat.
                      </p>
                      <div className="home-discover-btn d-flex flex-row align-items-center">
                        <span className="f-muli fs-12 fw-700 text-pink pr-05">
                          DISCOVER
                        </span>
                        <img
                          src="./assets/img/icons/pink-discover-icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="carousel-item" rangevalue={3}>
                  <div>
                    <div className=" news-card-1">
                      <img
                        src="./assets/img/sam/sam-device-img-5.png"
                        alt=""
                        className="d-block w-100 mb-30"
                      />
                      <p className="fw-600 fs-16 text-dark mb-30">
                        Title of news: Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Integer consectetur erat.
                      </p>
                      <div className="home-discover-btn d-flex flex-row align-items-center">
                        <span className="f-muli fs-12 fw-700 text-pink pr-05">
                          DISCOVER
                        </span>
                        <img
                          src="./assets/img/icons/pink-discover-icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" news-card-2">
                      <img
                        src="./assets/img/sam/the-sam-img-venezuela.jpg"
                        alt=""
                        className="d-block w-100 mb-30"
                      />
                      <p className="fw-600 fs-16 text-dark mb-30">
                        Title of news: Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Integer consectetur erat.
                      </p>
                      <div className="home-discover-btn d-flex flex-row align-items-center">
                        <span className="f-muli fs-12 fw-700 text-pink pr-05">
                          DISCOVER
                        </span>
                        <img
                          src="./assets/img/icons/pink-discover-icon.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* item */}
              </div>
              {/* Carousel Inner */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#waylandHomeCarouselControls"
                data-bs-slide="prev"
                onClick={() => handleCarouselPagination()}
              >
                <i className="fa-solid fa-angle-left"></i>

                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#waylandHomeCarouselControls"
                data-bs-slide="next"
                onClick={() => handleCarouselPagination()}
              >
                <i className="fa-solid fa-angle-right"></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* Carousel */}

            <div className="row mt-30">
              <div className="d-flex justify-content-start">
                <div className="home-btn f-muli fs-16 fw-700">
                  NEWS AND INSIGHTS
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="volume">
                    {currentRangeInputValue < 10
                      ? `0${currentRangeInputValue}`
                      : `${currentRangeInputValue}`}
                  </label>
                  <input
                    type="range"
                    id="range"
                    name="range"
                    val={currentRangeInputValue}
                    min={0}
                    max={10}
                    step={1}
                    disabled
                    // onChange={(e) => handleCarouselPagination(e)}
                    onBlur={(e) => handleCarouselPagination(e)}
                  />
                  <label htmlFor="volume">10</label>
                </div>
              </div>
            </div>
            {/* row */}
          </div>
          {/* col-12 */}
        </div>
        {/* row */}
      </div>
      {/* home-section-five */}
    </div>
  );
};

export default Home;
