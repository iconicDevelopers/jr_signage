import React from "react";
import "../css/style.css";
const AppBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn nav_style"
      data-wow-delay="0.1s"
    >
      <div className="container-fluid">
        <a
          href="index.html"
          className="navbar-brand m-0 p-0 d-flex align-items-center"
        >
          <img
            src={require('../assets/logoJr.png')}
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
          <h1
            className="fw-bold mt-3 ms-2 nav_head"
            style={{
              color: "#009cff",
              fontFamily: "JostMedium",
              letterSpacing: "1px",
            }}
          >
            JRSIGNAGE
          </h1>
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-3 p-lg-0">
            <a
              href="index.html"
              className="nav-item nav-link active"
              style={{ fontFamily: "JostMedium" }}
            >
              Home
            </a>
            <a
              href="about.html"
              className="nav-item nav-link"
              style={{ fontFamily: "JostMedium" }}
            >
              About Us
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{ fontFamily: "JostMedium" }}
              >
                Services
              </a>
              <div className="dropdown-menu border-0 rounded-0 rounded-bottom m-0">
                <a
                  href="signageServices.html"
                  className="dropdown-item"
                  style={{ fontFamily: "JostMedium" }}
                >
                  Signage Services
                </a>
                <a
                  href="LedServices.html"
                  className="dropdown-item"
                  style={{ fontFamily: "JostMedium" }}
                >
                  Led Services
                </a>
                <a
                  href="PrintingServices.html"
                  className="dropdown-item"
                  style={{ fontFamily: "JostMedium" }}
                >
                  Printing Services
                </a>
                <a
                  href="MarkettingService.html"
                  className="dropdown-item"
                  style={{ fontFamily: "JostMedium" }}
                >
                  Marketing Materials
                </a>
                <a
                  href="IdentificationService.html"
                  className="dropdown-item"
                  style={{ fontFamily: "JostMedium" }}
                >
                  Identification Materials
                </a>
                <a
                  href="SignBoardService.html"
                  className="dropdown-item"
                  style={{ fontFamily: "JostMedium" }}
                >
                  Sign Boards
                </a>
                <a
                  href="CustomService.html"
                  className="dropdown-item"
                  style={{ fontFamily: "JostMedium" }}
                >
                  Custom Products
                </a>
              </div>
            </div>
            <a
              href="contact.html"
              className="nav-item nav-link"
              style={{ fontFamily: "JostMedium" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
