import React from "react";
import "../css/style.css";

const WaCaller = () => {
  return (
    <div class="icon-container">
      <a
        href="https://wa.me/9663493013"
        target="_blank"
        id="whatsapp-icon"
        class="btn btn-lg btn-success btn-lg-square rounded-circle"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
      <a
        href="tel:9663493013"
        id="call-icon"
        class="btn btn-lg btn-info btn-lg-square rounded-circle"
      >
        <i class="fas fa-phone-alt"></i>
      </a>
    </div>
  );
};

export default WaCaller;
