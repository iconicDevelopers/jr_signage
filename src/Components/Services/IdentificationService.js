import React from "react";
import "../../css/style.css";

const IdentificationService = () => {
  return (
    <section className="service-section">
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style="max-width: 600px"
          >
            <h6
              className="section-title bg-white text-center text-primary px-3"
              style="font-family: JostMedium"
            >
              Services
            </h6>
            <h1 className="display-6 mb-4" style="font-family: JostMedium">
              Our Commitment to Quality and Community
            </h1>
          </div>
          <br />
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-lg-1">
              <div className="img-border">
                <img
                  className="img-fluid"
                  src="img/idcard1.jpg"
                  alt="serviceone"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <h6
                className="section-title bg-white text-start text-primary pe-3"
                style="font-family: JostMedium"
              >
                Identification Materials
              </h6>
              <h2 style={{ fontFamily: "JostMedium", letterSpacing: "1px" }}>
                ID Cards
              </h2>
              <br />
              <div className="signageList">
                <ul className="list-unstyled mb-4">
                  <li className="mb-2" style="font-family: JostMedium">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    <span>Secure and Reliable:</span> Includes options for photo
                    ID, magnetic strips, and RFID.
                  </li>
                  <li className="mb-2" style="font-family: JostMedium">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    <span>Customizable: </span>Personalized designs and layouts
                    to match your branding.
                  </li>
                  <li className="mb-2" style="font-family: JostMedium">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    <span>Durable:</span>Made from high-quality materials to
                    withstand daily use.
                  </li>
                  <li className="mb-2" style="font-family: JostMedium">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    <span>Various Formats:</span>Available in different formats
                    like PVC, laminated, or smart cards.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="img-border">
                <img
                  className="img-fluid"
                  src="img/IdcardDesign.jpg"
                  alt="service2"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <h6
                className="section-title bg-white text-start text-primary pe-3"
                style="font-family: JostMedium"
              >
                Identification Materials
              </h6>
              <h2 style={{ fontFamily: "JostMedium", letterSpacing: "1px" }}>
                ID Card Printing
              </h2>

              <div className="signageList">
                <ul className="list-unstyled mb-4">
                  <li className="mb-2" style="font-family: JostMedium">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    <span>Fast and Efficient:</span>Quick turnaround times for
                    large batches.
                  </li>
                  <li className="mb-2" style="font-family: JostMedium">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    <span>High-Resolution Prints:</span>Clear and sharp images
                    and text.
                  </li>
                  <li className="mb-2" style="font-family: JostMedium">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    <span>Secure Options: </span>Includes lamination and
                    security features.
                  </li>
                  <li className="mb-2" style="font-family: JostMedium">
                    <i className="fas fa-check-circle text-primary me-2"></i>
                    <span>Custom Layouts:</span>Personalized layouts to include
                    logos, photos, and other essential details.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentificationService;
