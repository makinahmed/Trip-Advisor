import React from "react";
import imgOne from "../../../assets/images/dubai-skyline-s.png";
import imgTwo from "../../../assets/images/view-famous-abu.png";
import imgThree from "../../../assets/images/muslim-landmark.png";
import imgFour from "../../../assets/images/view-riyadh-fro.png";
import "./MuslimCities.css";

const MuslimCities = () => {
  return (
    <section className="muslim-cities-section container">
      {/* SECTION CONTENT STARTED HERE */}

      <div className="section-content d-flex align-items-center justify-content-between">
        <div>
          <h1 className="section-heading">Muslim Friendly Cities</h1>
          <p className="section-sub-heading">Around the world</p>
        </div>
        <button>View All Cities</button>
      </div>

      {/* SECTION CONTENT ENDED HERE */}

      {/* CARD SECTION STARTED HERE */}

      <div className="row gy-4 my-4">
        <div className="col-md-3">
          <div className="muslim-cities-card">
            <img src={imgOne} alt="" className="img-fluid w-100 h-100" />
            <div className="content text-white d-flex flex-column align-items-center justify-content-center">
              <h3 className="m-0">Dubai</h3>
              <p>United Arab Emirates</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="muslim-cities-card">
            <img src={imgTwo} alt="" className="img-fluid w-100 h-100" />
            <div className="content text-white d-flex flex-column align-items-center justify-content-center">
              <h3 className="m-0">Abu Dhabi</h3>
              <p>United Arab Emirates</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="muslim-cities-card">
            <img src={imgThree} alt="" className="img-fluid w-100 h-100" />
            <div className="content text-white d-flex flex-column align-items-center justify-content-center">
              <h3 className="m-0">Kuala Lampur</h3>
              <p>Malaysia</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="muslim-cities-card">
            <img src={imgFour} alt="" className="img-fluid w-100 h-100" />
            <div className="content text-white d-flex flex-column align-items-center justify-content-center">
              <h3 className="m-0">Riyadh</h3>
              <p>Saudi Arabia</p>
            </div>
          </div>
        </div>
      </div>

      {/* CARD SECTION ENDED HERE */}
    </section>
  );
};

export default MuslimCities;
