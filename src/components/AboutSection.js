import React from "react";
import home1 from "../img/home1.png";

function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>

          <div className="hide">
            <h2>
              your <span>dream</span>come
            </h2>
          </div>

          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>

        <p>
          Contact us for any photography or videography ideas that you havve. We
          have professionals with amazing skills to help you achieve it.
        </p>

        <button>Contact Us</button>
      </div>

      <div className="image">
        <img src={home1} alt="photographer" />
      </div>
    </div>
  );
}

export default AboutSection;
