import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Product.scss";

const Product = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div className="Product">
      <div className="container-fluid bg-black product-section-1">
        <div className="product-lines-wrap">
          <img src="./assets/img/sam/sam-health-line.png" alt="" />
          <img src="./assets/img/sam/sam-vector-4.png" alt="" />
          <img src="./assets/img/sam/sam-vector-1.png" alt="" />
          <img src="./assets/img/sam/sam-vector-3.png" alt="" />
          <img src="./assets/img/sam/sam-vector-5.png" alt="" />
        </div>
        <div className="container d-flex justify-content-start h-100 bg-transparent">
          <div className="row d-flex justify-content-between align-items-center w-100">
            <div className="circle-img-wrap">
              <div className="img-black-overlay"></div>
              <img src="./assets/img/sam/sam-device-img-5.png" alt="" />
            </div>
            <div
              id="waylandProductCarouselControls"
              className="carousel slide"
              data-interval="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <p className="f-muli fs-60 fw-700 mb-30">PULSE OXIMETRY</p>
                  <p className=" fs-13 fw-400">
                    Measurement of the oxygen saturation of the blood improved
                    the safety of anesthesia, perhaps more than any other
                    innovation in history.
                  </p>
                </div>
                <div className="carousel-item">
                  <p className="f-muli fs-60 fw-700 mb-30">PULSE OXIMETRY</p>
                  <p className=" fs-13 fw-400">
                    Measurement of the oxygen saturation of the blood improved
                    the safety of anesthesia, perhaps more than any other
                    innovation in history.
                  </p>
                </div>
                <div className="carousel-item">
                  <p className="f-muli fs-60 fw-700 mb-30">PULSE OXIMETRY</p>
                  <p className=" fs-13 fw-400">
                    Measurement of the oxygen saturation of the blood improved
                    the safety of anesthesia, perhaps more than any other
                    innovation in history.
                  </p>
                </div>
              </div>
              {/* Carousel Inner */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#waylandProductCarouselControls"
                data-bs-slide="prev"
              >
                <div className="product-carousel-action-btn">
                  <img
                    src="./assets/img/font-icons/carousel-back-button.png"
                    alt=""
                  />
                  <div className="circle"></div>
                </div>

                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#waylandProductCarouselControls"
                data-bs-slide="next"
              >
                <div className="product-carousel-action-btn">
                  <img
                    src="./assets/img/font-icons/carousel-next-button.png"
                    alt=""
                  />
                  <div className="circle"></div>
                </div>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* Carousel */}
          </div>
          {/* Row */}
        </div>
        {/* Container */}
      </div>
      {/* Container Fluid - Black BG */}
      <div className="constainer-fluid product-section-2 py-80">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="product-card-image-bottom ">
                <p className="f-muli fw-800 fs-20 text-black text-uppercase">
                  Of the annual 1/4 billion surgeries/year worldwide, merely
                  3.5% are done on the world’s poorest 1/3rd
                </p>
                <img
                  src="./assets/img/sam/surgery-in-third-world-countries.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="product-card-image-top">
                <img
                  src="./assets/img/sam/the-sam-img-venezuela.jpg"
                  alt=""
                  className="img-fluid"
                />
                <p className="f-muli fw-800 fs-20 text-uppercase text-black pl-15">
                  At least 4·8 billion people do not have access to surgery
                </p>
              </div>
            </div>
            {/* col */}
            <div className="col d-flex flex-column justify-content-between">
              <div className="row">
                <p className="f-muli fw-900 fs-48 mb-40 text-dark">
                  EVERYONE <br /> DESERVES <br /> SAFE SURGERY
                </p>
                <p className="fw-400 paragraph text-black ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus sit pretium vel ornare quam rutrum. Facilisi id
                  suspendisse adipiscing convallis fermentum sit turpis ornare
                  cras. Natoque venenatis varius scelerisque vitae mus eu arcu
                  at id. Sit pretium pulvinar tristique facilisi nullam felis
                  iaculis.
                </p>
              </div>
              {/* row */}
              <div className="row ">
                <div className="col d-flex justify-content-end">
                  <a href="/">
                    <div className="arrow-btn">
                      <div className="arrow-btn-circle"></div>
                      <span className="text-black">LEARN MORE</span>
                      <img src="./assets/img/product/button-arrow.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
              {/* row */}
            </div>
            {/* col */}
          </div>
          {/* row */}
        </div>
        {/* Container */}
      </div>
      {/* Product Section 2 - Container Fluid*/}
      <div className="container-fluid product-section-3 py-100 bg-white-smoke">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-9 d-flex justify-content-between flex-column pr-50">
              <div className="row mb-50">
                <div className="col">
                  <div className="product-blue-blur-circle"></div>
                  <p className="f-muli fw-800 fs-20 text-black">
                    The SAM system is built on the foundational idea that the
                    computer in your pocket is more powerful than the one that
                    put men on the moon.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex flex-row align-items-end">
                  <div
                    className="product-card-section-3"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-offset="260"
                  >
                    <div className="d-flex flex-row justify-content-between align-items-end mb-20 pr-15">
                      <img src="./assets/img/icons/phone.png" alt="" />
                      <p className="f-muli fw-800 fs-20 text-dark">
                        Easy to Use
                      </p>
                    </div>
                    <div className="px-15">
                      <p className="fw-400 fs-13 text-dark">
                        The SAM is understandable and straightforward to use for
                        the non-technician, as well as the experienced
                        physician. Recognizable visual cues and a reserved
                        design create the space for clear, timely information.
                      </p>
                    </div>
                  </div>
                  <div
                    className="product-card-section-3"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="800"
                    data-aos-offset="280"
                  >
                    <div className="d-flex flex-row justify-content-between align-items-end mb-20 pr-15 pl-05">
                      <img src="./assets/img/icons/badge.png" alt="" />
                      <p className="f-muli fw-800 fs-20 text-dark">Reliable</p>
                    </div>
                    <div className="px-15">
                      <p className="fw-400 fs-13 text-dark">
                        The SAM is robust medical hardware that saves lives in
                        difficult places - from the operating theater to a
                        remote mountainside. The SAM works hard so you can save
                        lives when it counts.
                      </p>
                    </div>
                  </div>
                  <div
                    className="product-card-section-3"
                    data-aos="fade-up"
                    data-aos-delay="800"
                    data-aos-duration="800"
                    data-aos-offset="300"
                  >
                    <div className="d-flex flex-row justify-content-between align-items-end mb-20 px-15">
                      <img src="./assets/img/icons/padlock.png" alt="" />
                      <p className="f-muli fw-800 fs-20 text-dark">Secure</p>
                    </div>
                    <div className="px-15">
                      <p className="fw-400 fs-13 text-dark">
                        Every part of The SAM's ecosystem is built with rigorous
                        medical compliance in mind, even as we liberate data to
                        help doctors make great decisions. We are committed to
                        patient privacy and data security across the globe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Col */}

            <div className="col d-flex flex-column justify-content-between pl-40">
              <div className="row">
                <p className="f-muli fw-800 fs-60 text-black mb-60">THE SAM</p>
                <ul className="product-list">
                  <li className="fw-400 fs-13 text-dark mb-10">
                    Share the Story of The SAM
                  </li>
                  <li className="fw-400 fs-13 text-dark mb-10">
                    Volunteer or Make Helpful Connections
                  </li>
                  <li className="fw-400 fs-13 text-dark">
                    Join #TheSAMGlobalTeam as a Monthly Partner
                  </li>
                </ul>
              </div>

              <div className="row ">
                <div className="col d-flex justify-content-end">
                  <a href="/">
                    <div className="arrow-btn">
                      <div className="arrow-btn-circle"></div>
                      <span className="text-black">LEARN MORE</span>
                      <img src="./assets/img/product/button-arrow.png" alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Col */}
          </div>
          {/* Row */}
        </div>
        {/* Container */}
      </div>
      {/* Product Section 3 - Container Fluid */}
    </div>
    // Product
  );
};

export default Product;
