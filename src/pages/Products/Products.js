import React from "react";
import "./Products.scss";
const Products = () => {
  return (
    <div className="Products">
      <div className="container-fluid bg-black">
        <div className="row h-100">
          <div className="col-5 d-flex flex-column position-relative">
            <div
              className="product-title-wrap mb-20 "
              onMouseOver={() => {
                document.querySelector(".the-sam-img").style.top = "50%";
                document.querySelector(".product-color-blue").style.left =
                  "50%";
              }}
              onMouseLeave={() => {
                document.querySelector(".the-sam-img").style.top = "150%";
                document.querySelector(".product-color-blue").style.left =
                  "-450px";
              }}
            >
              <div className="product-title-line "></div>
              <p className="product-title f-muli fw-700 fs-48 text-white">
                THE SAM
              </p>
            </div>
            <div
              className="product-title-wrap mb-20"
              onMouseOver={() => {
                document.querySelector(".service-pro-img").style.top = "50%";
                document.querySelector(".product-color-orange").style.left =
                  "50%";
              }}
              onMouseLeave={() => {
                document.querySelector(".service-pro-img").style.top = "150%";
                document.querySelector(".product-color-orange").style.left =
                  "-450px";
              }}
            >
              <div className="product-title-line "></div>
              <p className="product-title f-muli fw-700 fs-48 text-white">
                SERVICE PRO
              </p>
            </div>
            <div className="product-title-wrap">
              <div className="product-title-line"></div>
              <p className="product-title f-muli fw-700 fs-48 text-white">
                X PROJECT
              </p>
            </div>
          </div>
          <div className="col-7 d-flex align-items-center">
            <div className="row w-100">
              <div className="col-12 projects-visual-wrap">
                <div className="projects-circle">
                  <div className="products-color-circle product-color-orange"></div>
                  <div className="products-color-circle product-color-blue"></div>
                  <div className="products-color-circle product-color-purple"></div>
                </div>
                <div className="projects-img">
                  <img
                    src="./assets/img/projects/service-pro.png"
                    alt=""
                    className="service-pro-img"
                  />
                  <img
                    src="./assets/img/projects/healthcare-hospital-lamp.jpg"
                    alt=""
                    className="the-sam-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
