import React from "react";
import "../css/style.css";

const Facts = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="fact-item bg-light rounded text-center h-100 p-5">
              <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
              <h5 className="mb-3" style={{ fontFamily: "JostMedium" }}>
                Years Experience
              </h5>
              <h1
                className="display-5 mb-0"
                data-toggle="counter-up"
                style={{ fontFamily: "JostMedium" }}
              >
                3
              </h1>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="fact-item bg-light rounded text-center h-100 p-5">
              <i className="fa fa-users fa-4x text-primary mb-4"></i>
              <h5 className="mb-3" style={{ fontFamily: "JostMedium" }}>
                Satisfied Clients
              </h5>
              <h1
                className="display-5 mb-0"
                data-toggle="counter-up"
                style={{ fontFamily: "JostMedium" }}
              >
                150
              </h1>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="fact-item bg-light rounded text-center h-100 p-5">
              <i className="fa fa-check fa-4x text-primary mb-4"></i>
              <h5 className="mb-3" style={{ fontFamily: "JostMedium" }}>
                Projects Done
              </h5>
              <h1
                className="display-5 mb-0"
                data-toggle="counter-up"
                style={{ fontFamily: "JostMedium" }}
              >
                124
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
