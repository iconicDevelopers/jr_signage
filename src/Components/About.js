import React from "react";
import "../css/style.css";
const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="img-border">
              <img className="img-fluid" src={require('../assets/about.jpg')} alt="ImageForAbout" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <h6
                className="section-title bg-white text-start text-primary pe-3"
                style={{ fontFamily: "JostMedium" }}
              >
                About Us
              </h6>
              <h1 className="display-6 mb-4">Jr Signage</h1>
              <p style={{ fontFamily: "JostMedium", lineHeight: "30px" }}>
                Welcome to JRsignage, your trusted partner in high-quality
                signage solutions. We specialize in creating impactful and
                innovative signage that helps businesses stand out and
                communicate effectively. Our team of experienced professionals
                is dedicated to delivering exceptional service and products that
                meet your specific needs.
              </p>
              <p
                className="mb-4"
                style={{ fontFamily: "JostMedium", lineHeight: "30px" }}
              >
                At &ensp;JRsignage, we believe in the power of great design and
                quality craftsmanship. Whether you need custom signs, banners,
                or digital displays, we have the expertise and technology to
                bring your vision to life. Our commitment to excellence and
                customer satisfaction has made us a leading name in the signage
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
