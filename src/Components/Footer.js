import React from "react";
import "../css/style.css";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{ fontFamily: "JostMedium", position: "relative" }}
    >
      <div className="container py-5">
        <div
          className="row g-5"
          style={{ display: "flex", justifyContent: "spaceAround" }}
        >
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">Address</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>#205, 2nd floor, 7th
              cross, Aralimara Road, Subbannapalya, Kammanahalli, Bengaluru,
              Urban, Karnataka,560043
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+91 9663493013
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>jrsignage2420@gmail.com
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-square btn-outline-secondary rounded-circle me-1"
                href=""
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-square btn-outline-secondary rounded-circle me-1"
                href=""
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-square btn-outline-secondary rounded-circle me-1"
                href=""
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="btn btn-square btn-outline-secondary rounded-circle me-0"
                href=""
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <h6 className="text-light mt-2">JRSIGNAGE</h6>
            <img
              src={require("../assets/logoJr.png")}
              alt="JR-Logo"
              className="img-fluid"
              style={{
                display: "block",
                margin: "0 auto",
                width: "fit-content",
                maxWidth: "200px",
              }}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-4">Gallery</h5>
            <div className="row g-2">
              <div className="col-4">
                <img
                  className="img-fluid rounded"
                  src={require("../assets/acpboards.webp")}
                  alt="ImageFor Ac-Boards"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded"
                  src={require("../assets/stand.jpeg")}
                  alt="ImageFor Stand"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded"
                  src={require("../assets/Board.jpeg")}
                  alt="ImageFor Boards"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded"
                  src={require("../assets/lightning3.jpeg")}
                  alt="ImageFor Lightning"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded"
                  src={require("../assets/Flexbanner3.jpeg")}
                  alt="ImageFor Flex"
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded"
                  src={require("../assets/FlexBanner1.jpeg")}
                  alt="ImageFor Flex"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              Copyright &copy; <a href="#">2024 Jr Signage</a>, All Rights
              Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
