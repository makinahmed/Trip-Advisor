import React from "react";
import imgOne from "../../../assets/images/big-ben-houses-.png";
import imgTwo from "../../../assets/images/dubai-night-dub.png";
import imgThree from "../../../assets/images/cafe-lunch-asia.png";
import "./WhyUsSection.css";

const WhyUsSection = () => {
  return (
    <section className="why-us-section my-5">
      <div className="container h-100 py-5">
        <div className="row gy-5">
          <div className="col-md-3">
            <div className="content">
              <h1 className="mb-3">Why us ?</h1>
              <p>
                Travel with ease with our qualified halal check properties and
                much more around the World{" "}
              </p>
            </div>
          </div>
          <div className="col-md-9 text-center">
            <div className="row gy-4 p-0">
              <div className="col-md-4">
                <div className="why-us-card">
                  <img src={imgOne} alt="" className="img-fluid w-100 h-100" />
                  <div className="btn-container">
                    <button className="border-0 bg-white rounded-pill">
                      Attractions
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="why-us-card">
                  <img src={imgTwo} alt="" className="img-fluid w-100 h-100" />
                  <div className="btn-container">
                    <button className="border-0 bg-white rounded-pill">
                      Hotels
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="why-us-card">
                  <img
                    src={imgThree}
                    alt=""
                    className="img-fluid w-100 h-100"
                  />
                  <div className="btn-container">
                    <button className="border-0 bg-white rounded-pill">
                      Restaurants
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
