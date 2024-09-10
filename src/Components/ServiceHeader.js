import React from "react";
import '../css/style.css';

const ServiceHeader = ()=>{
    return(
<div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1
          className="display-4 text-white animated slideInDown mb-3"
          style="font-family: JostMedium"
        >
          Services
        </h1>
      </div>
    </div>
    )
}
export default ServiceHeader
