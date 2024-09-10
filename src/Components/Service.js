import React from "react";
import "../css/style.css";

const Service = () => {
  return (
    <div className="container-xxl py-5" id="service_id">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h6
            className="section-title bg-white text-center text-primary px-3"
            style={{ fontFamily: "JostMedium" }}
          >
            Services
          </h6>
          <h1 className="display-6 mb-4" style={{ fontFamily: "JostMedium" }}>
            Our Commitment to Quality and Community
          </h1>
        </div>
        <div
          className="row g-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <a
              className="service-item d-block rounded text-center h-100 p-4"
              href="signageServices.html"
            >
              <img
                className="img-fluid rounded mb-4"
                src={require('../assets/signage-services.jpg')}
                alt="ImageFor Signage-Services"
              />
              <h4 className="mb-0" style={{ fontFamily: "JostMedium" }}>
                Signage Services
              </h4>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <a
              className="service-item d-block rounded text-center h-100 p-4"
              href="LedServices.html"
            >
              <img
                className="img-fluid rounded mb-4"
                src={require('../assets/Led-works.jpg')}
                alt="ImageFor Led-Works"
              />
              <h4 className="mb-0" style={{ fontFamily: "JostMedium" }}>
                Led Works
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
