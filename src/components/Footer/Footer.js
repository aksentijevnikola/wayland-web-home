import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container-fluid bg-overlay-black py-100">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex flex-column justify-content-center align-items-start">
              <img
                src="./assets/img/footer/wayland-footer-logo.svg"
                alt=""
                className="mb-10"
              />
              <a href="mailto:info@wayland.io" className="text-white">
                info@wayland.io
              </a>
            </div>
            {/* col end */}

            <div className="col-6">
              <div className="row mb-35">
                <div className="col">
                  <p className="fw-700 display-4 text-white">GOOD TALKS</p>
                </div>
              </div>

              <div className="row">
                <div className="col d-flex flex-row justify-content-start">
                  <ul className="list-unstyled pr-40">
                    <li className="paragraph fw-400 text-white mb-15">
                      WAYLAND ACADEMY
                    </li>
                    <li className="paragraph fw-400 text-white mb-15">
                      WAYLAND ACADEMY
                    </li>
                    <li className="paragraph fw-400 text-white mb-15">
                      WAYLAND ACADEMY
                    </li>
                  </ul>
                  <ul className="list-unstyled pr-40">
                    <li className="paragraph fw-400 text-white mb-15">
                      ABOUT US
                    </li>
                    <li className="paragraph fw-400 text-white mb-15">
                      CAREER
                    </li>
                    <li className="paragraph fw-400 text-white mb-15">
                      GET IN TOUCH
                    </li>
                  </ul>
                  <ul className="list-unstyled pr-40">
                    <li className="paragraph fw-400 text-white mb-15">
                      INSIGHTS
                    </li>
                    <li className="paragraph fw-400 text-white mb-15">EVENT</li>
                    <li className="paragraph fw-400 text-white mb-15">
                      RESEARCH
                    </li>
                  </ul>
                  <ul className="list-unstyled pl-40">
                    <li className="paragraph text-white mb-15">
                      <img
                        src="./assets/img/footer/footer-facebook-icon.svg"
                        alt=""
                      />
                    </li>
                    <li className="paragraph text-white mb-15">
                      <img
                        src="./assets/img/footer/footer-instagram-icon.svg"
                        alt=""
                      />
                    </li>
                    <li className="paragraph text-white mb-15">
                      <img
                        src="./assets/img/footer/footer-linkedin-icon.svg"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
                {/* col end */}
              </div>
              {/* row end */}
            </div>
            {/* col end */}
          </div>
          {/* row end */}
        </div>
        {/* container */}
      </div>
      {/* container fluid */}
    </div>
  );
};

export default Footer;
