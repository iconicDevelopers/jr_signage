import React from "react";
import "../css/style.css";
const HeaderCarousel = () => {
  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <img
              className="img-fluid"
              src={require('../assets/carousel-1.jpg')}
              alt="Carosual"
            />
          </button>
          <button
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <img
              className="img-fluid"
              src={require('../assets/carousel-2.jpg')}
              alt="Carosual"
            />
          </button>
          <button
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <img
              className="img-fluid"
              src={require('../assets/carousel-3.jpg')}
              alt="Carosual"
            />
          </button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="w-100"
              src={require('../assets/carousel-1.jpg')}
              alt="Carosual"
              style={{height: "700px"}}
            />
            <div className="carousel-caption">
              <div className="p-3" style={{maxWidth: "900px"}}>
                <h4
                  className="text-white text-uppercase mb-4 animated zoomIn"
                  style={{fontFamily: "JostMedium"}}
                >
                  We are making
                </h4>
                <h1
                  className="display-1 text-white mb-0 animated zoomIn"
                  style={{fontFamily: "JostMedium"}}
                >
                  Signage letters for business
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="w-100"
              src={require('../assets/carousel-2.jpg')}
              alt="Carosual"
              style={{
                height: "700px",
              }}
            />
            <div className="carousel-caption">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h4
                  className="text-white text-uppercase mb-4 animated zoomIn"
                  style={{ fontFamily: "JostMedium" }}
                >
                  We Are Experts In
                </h4>
                <h1
                  className="display-1 text-white mb-0 animated zoomIn"
                  style={{ fontFamily: "JostMedium" }}
                >
                  Highquality Glow sign boards
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="w-100"
              src={require('../assets/carousel-3.jpg')}
              alt="Carosual"
              style={{
                height: "700px",
              }}
            />
            <div className="carousel-caption">
              <div className="p-3" style={{maxWidth: "900px"}}>
                <h4
                  className="text-white text-uppercase mb-4 animated zoomIn"
                  style={{ fontFamily: "JostMedium" }}
                >
                  We Are
                </h4>
                <h1
                  className="display-1 text-white mb-0 animated zoomIn"
                  style={{ fontFamily: "JostMedium" }}
                >
                  Driving Your Digital Transformation
                </h1>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderCarousel;
