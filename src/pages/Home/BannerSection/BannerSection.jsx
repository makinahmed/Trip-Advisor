import React from "react";
import locationIcon from "../../../assets/images/location-icon.png";
import bedIcon from "../../../assets/images/bed-icon.png";
import restaurantIcon from "../../../assets/images/restaurant-icon.png";
import locationTwoIcon from "../../../assets/images/location-2-icon.png";
import insuranceIcon from "../../../assets/images/insurance-icon.png";
import shipIcon from "../../../assets/images/cruise-ship-icon.png";
import dotIcon from "../../../assets/images/3-dot-icon.png";
import "./BannerSection.css";

const BannerSection = () => {
  return (
    // BANNER SECTION STARTED HERE

    <section className="banner-section my-3 container-fluid">
      {/* BANNER CONTAINER TOP STARTED HERE */}

      <div className="banner-container-top">
        <div className="row h-100">
          <div className="col-md-6 h-100 d-flex flex-column justify-content-center">
            {/* BANNER CONTENT TOP STARTED HERE */}

            <div className="banner-content-top">
              <h1 className="banner-heading">
                Plan Your Perfect Halal Family Stay.
              </h1>
              <div className="banner-search-container px-3 my-4 d-flex align-items-center justify-content-between rounded-pill">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="h-100 w-100 ms-1 ps-3 pe-1 rounded-pill border-0"
                />
              </div>
            </div>

            {/* BANNER CONTENT TOP ENDED HERE */}

            {/* BANNER CONTENT BOTTOM STARTED HERE */}

            <div className="banner-content-bottom">
              <div className="banner-content-bottom">
                <h4 className="banner-bottom-sub-heading text-start">
                  Recently Viewed
                </h4>
                <div className="recent-view-main">
                  <div className="recent-view-container px-3 d-flex align-items-center">
                    <img src={locationIcon} className="me-2" alt="" />
                    <span>Dubai, U.A.E</span>
                  </div>
                  <div className="recent-view-container px-3 mx-md-3 d-flex align-items-center">
                    <img src={locationIcon} className="me-2" alt="" />
                    <span>Hyderabad, India</span>
                  </div>
                  <div className="recent-view-container px-3 d-flex align-items-center">
                    <img src={locationIcon} className="me-2" alt="" />
                    <span>Istanbul, Turkey</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BANNER CONTENT BOTTOM ENDED HERE */}
          </div>
        </div>
      </div>

      {/* BANNER CONTAINER TOP ENDED HERE */}

      {/* BANNER CONTAINER BOTTOM STARTED HERE */}

      <div className="banner-container-bottom my-5">
        <div className="row gy-4 p-0">
          <div className="col-md-2">
            <div className="banner-bottom-category">
              <span className="category-name">
                Halal <br /> Hotels
              </span>
              <img className="img-fluid category-img" src={bedIcon} alt="" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="banner-bottom-category">
              <span className="category-name">
                Halal <br /> Restaurants
              </span>
              <img
                className="img-fluid category-img"
                src={restaurantIcon}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="banner-bottom-category">
              <span className="category-name">
                Halal <br /> Tours
              </span>
              <img
                className="img-fluid category-img"
                src={locationTwoIcon}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="banner-bottom-category">
              <span className="category-name">
                Halal <br /> Insurance
              </span>
              <img
                className="img-fluid category-img"
                src={insuranceIcon}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="banner-bottom-category">
              <span className="category-name">
                Halal <br /> Cruise
              </span>
              <img className="img-fluid category-img" src={shipIcon} alt="" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="banner-bottom-category">
              <span className="category-name">More</span>
              <img className="img-fluid category-img" src={dotIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* BANNER CONTAINER BOTTOM ENDED HERE */}
    </section>

    // BANNER SECTION ENDED HERE
  );
};

export default BannerSection;
