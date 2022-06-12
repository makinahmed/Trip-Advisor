import React from "react";
import Rating from "react-rating";
import demoCardImg from "../../../assets/images/demo-card-img.png";
import "./YouMightLikeSection.css";

const YouMightLikeSection = () => {
  return (
    <section className="you-might-like-section container">
      {/* SECTION CONTENT STARTED HERE */}

      <div className="section-content d-flex align-items-center justify-content-between">
        <div>
          <h1 className="section-heading">You might like these</h1>
          <p className="section-sub-heading">
            More things to do in (Geo Location)
          </p>
        </div>
        <button>View All Attractions</button>
      </div>

      {/* SECTION CONTENT ENDED HERE */}

      {/* CARD CONTAINER STARTED HERE */}

      <div className="card-container my-4">
        <div className="row g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div className="col-md-3">
              <div class="card border-0">
                <img src={demoCardImg} alt="" />
                <div class="card-body p-0">
                  <h5 class="card-title mt-3 mn-2">Humayun’s Tomb</h5>
                  <div className="rating-star-container">
                    <Rating
                      readonly
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                    />
                    <small className="ms-2">10,500</small>
                  </div>
                  <p class="card-text">
                    Architectural Buildings, Religious Sites
                  </p>
                </div>

                <div className="save-container d-flex align-items-center justify-content-center">
                  <i class="fa-regular fa-heart"></i>
                </div>
                <div className="rating-container">
                  <div className="rating-content d-flex align-items-center justify-content-center">
                    9.5
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CARD CONTAINER ENDED HERE */}
    </section>
  );
};

export default YouMightLikeSection;
