import React from "react";
import Rating from "react-rating";
import imgOne from "../../../assets/images/dubai-night-dub-2.png";
import "./RecentReviews.css";

const RecentReviews = () => {
  return (
    <section className="recent-reviews-section">
      <div className="container py-5">
        {/* SECTION CONTENT STARTED HERE */}

        <div className="section-content d-flex align-items-center justify-content-between">
          <div>
            <h1 className="section-heading">Most Recent Reviews</h1>
            <p className="section-sub-heading">
              Recent reviews given by the users.
            </p>
          </div>
        </div>

        {/* SECTION CONTENT ENDED HERE */}

        {/* CARD CONTAINER STARTED HERE */}

        <div className="card-container my-4">
          <div className="row g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div className="col-md-3">
                <div class="card border-0">
                  <img src={imgOne} alt="" />
                  <div class="card-body">
                    <h5 class="card-title mt-3 mn-2">First Name Last Name</h5>
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
      </div>
    </section>
  );
};

export default RecentReviews;
