import React from "react";
import "../css/style.css";

const FactContents = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="h-100">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                Why Choose Us
              </h6>
              <h1
                className="display-6 mb-4"
                style={{ fontFamily: "JostMedium" }}
              >
                Why People Trust Us?
              </h1>
              <p className="mb-4" style={{ fontFamily: "JostMedium" }}>
                At JrSignage, we set the standard with quality and standards.
                Beyond exceptional services, we're committed to unique
                innovatives, making a difference where it counts. Trust us for
                quality that exceeds expectations and a commitment to building
                stronger communities.
              </p>
              <div className="row g-4">
                <div className="col-12">
                  <div className="skill">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2" style={{ fontFamily: "JostMedium" }}>
                        Signage Letters
                      </p>
                      <p className="mb-2" style={{ fontFamily: "JostMedium" }}>
                        85%
                      </p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="skill">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2" style={{ fontFamily: "JostMedium" }}>
                        LED works
                      </p>
                      <p className="mb-2" style={{ fontFamily: "JostMedium" }}>
                        90%
                      </p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="img-border">
              <img className="img-fluid" src={require('../assets/happy.jpg')} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactContents;
