import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import bookingImg from "../../assets/images/bookinglogo.png";
import dubaiImg from "../../assets/images/dubai-night-dub.png";
import "./HotelDetails.css";

const HotelDetails = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  const [inValue, inOnChange] = useState(new Date());
  const [value, onChange] = useState(new Date());

  console.log(inValue.toLocaleDateString());

  const [calendarValue, setCalendarValue] = useState(false);
  const [checkoutCalendarValue, setcheckoutCalendarValue] = useState(false);
  console.log(checkoutCalendarValue);
  return (
    <div>
      <div className="hotel-details-section">
        <div className="bread-crumb-banner">
          <div className="container">
            <div className="breadcrumb">
              <a href="">Middle East</a>
              <a href="">United Arab Emirates</a>
              <a href="">Dubai</a>
              <a href="">Dubai Hotels</a>
            </div>

            <div className="d-flex align-items-center mt-3">
              <h1 className="fw-bold">AI Bandar Rotana - Crell</h1>
              <div>
                <div className="rating-dtl-banner">
                  <p>9.5</p>
                </div>
              </div>
            </div>

            <div className="d-flex">
              <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star outline-star"></i>
                <span className="ms-2">10,560 reviews</span>
              </div>
              <div className="ms-3 hotel-number">
                <p>#111 of 880 hotels in Dubai</p>
              </div>
            </div>

            <div className="mt-3">
              <i class="fa-solid fa-location-dot"></i>
              <p className="d-inline ms-2 location-hotel-dtl">
                Baniyas Road Roggat Al Buteen, Dubai United Arab Emirates
              </p>
            </div>

            <div className="d-flex justify-content-end pb-2">
              <div>
                <i class="fa-solid fa-heart me-1"></i>
                <span>Save</span>
              </div>
              <div className="ms-2 share-side">
                <i class="fa-solid fa-share-from-square me-1"></i>
                <span>Share</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row mt-3">
            <div className="col-lg-4 view-hotel-col">
              <div className="view-hotel p-1">
                <div className="text-center mt-4">
                  <i class="fa-solid fa-users text-danger"></i>
                  <p className="d-inline ms-2 text-danger ">
                    4 people are viewing this hotel
                  </p>
                </div>

                <div>
                  <div className="check-in mt-3">
                    <div className="row">
                      <div className="col-lg-6 col-12 col-md-6">
                        Check in
                        <div className="d-flex mt-2">
                          <div className="d-flex align-items-center">
                            <i class="fa-solid fa-calendar-days me-2"></i>

                            <p>{inValue.toLocaleDateString()}</p>
                          </div>
                          <div className="calendar-wrapper">
                            <i
                              onClick={() => setCalendarValue(!calendarValue)}
                              class="fa-solid fa-caret-down calendar-handler ms-4"
                            ></i>
                            <div
                              className={`calendar-block ${
                                calendarValue == true ? "d-block" : "d-none"
                              }`}
                            >
                              <Calendar onChange={inOnChange} value={inValue} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="checkout col-lg-6 col-12 col-md-6">
                        Check out
                        <div className="d-flex mt-2">
                          <div className="d-flex align-items-center">
                            <i class="fa-solid fa-calendar-days me-2"></i>

                            <p>{value.toLocaleDateString()}</p>
                          </div>
                          <div className="calendar-wrapper">
                            <i
                              onClick={() =>
                                setcheckoutCalendarValue(!checkoutCalendarValue)
                              }
                              class="fa-solid fa-caret-down calendar-handler ms-4"
                            ></i>
                            <div
                              className={`calendar-blockchecout ${
                                checkoutCalendarValue == true
                                  ? "d-block"
                                  : "d-none"
                              }`}
                            >
                              <Calendar onChange={onChange} value={value} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="guest mt-3">
                    <div className="row">
                      <div className="col-lg-12">
                        Guests
                        <div className="d-flex mt-2">
                          <div className="d-flex align-items-center">
                            <i class="fa-solid fa-calendar-days me-2"></i>

                            <p>1 room, 2 adults, 1 children</p>
                          </div>
                          <div>
                            <i class="fa-solid fa-caret-down ms-4"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="view-deal mt-2">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <img className="img-fluid" src={bookingImg} alt="" />
                    </div>
                    <div className="col-lg-4">
                      <h3 className="mb-2 mb-md-0 mb-lg-0 fw-bold">AED 2550</h3>
                    </div>
                    <div className="col-lg-4">
                      <button type="button" className="view-deal-btn">
                        View Deal
                      </button>
                    </div>
                  </div>
                  <div className="row my-2 align-items-center">
                    <div className="col-lg-4">
                      <img className="img-fluid" src={bookingImg} alt="" />
                    </div>
                    <div className="col-lg-4">
                      <h3 className="mb-2 mb-md-0 mb-lg-0 fw-bold">AED 2550</h3>
                    </div>
                    <div className="col-lg-4">
                      <button type="button" className="view-deal-btn">
                        View Deal
                      </button>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <img className="img-fluid" src={bookingImg} alt="" />
                    </div>
                    <div className="col-lg-4">
                      <h3 className="mb-2 mb-md-0 mb-lg-0 fw-bold">AED 2550</h3>
                    </div>
                    <div className="col-lg-4">
                      <button type="button" className="view-deal-btn">
                        View Deal
                      </button>
                    </div>
                  </div>
                </div>

                <div className="company-name mt-4">
                  <div className="row">
                    <div className="col-lg-2 col-6 col-md-2 mt-3 mt-md-3 mt-lg-0">
                      <p>Agoda.com</p>
                      <p>AED2800</p>
                    </div>
                    <div className="col-lg-2 col-6 col-md-2 mt-3 mt-md-3 mt-lg-0">
                      <p>Agoda.com</p>
                      <p>AED2800</p>
                    </div>
                    <div className="col-lg-2 col-6 col-md-2 mt-3 mt-md-3 mt-lg-0">
                      <p>Agoda.com</p>
                      <p>AED2800</p>
                    </div>
                    <div className="col-lg-2 col-6 col-md-2 mt-3 mt-md-3 mt-lg-0">
                      <p>Agoda.com</p>
                      <p>AED2800</p>
                    </div>
                    <div className="col-lg-2 col-6 col-md-2 mt-3 mt-md-3 mt-lg-0">
                      <p>Agoda.com</p>
                      <p>AED2800</p>
                    </div>
                    <div className="col-lg-2 col-6 col-md-2 mt-3 mt-md-3 mt-lg-0">
                      <p>Agoda.com</p>
                      <p>AED2800</p>
                    </div>
                  </div>

                  <h6 className="mt-3 text-center">
                    Prices are the average nightly price provided by our
                    partners
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-9 pe-0">
                  <div className="img-gallery">
                    <ImageGallery autoPlay={true} items={images} />
                  </div>
                </div>

                <div className="col-lg-3 px-1">
                  <div className="row">
                    <div className="col-12">
                      <div
                        style={{ height: "190px" }}
                        className="img-gallery-box mb-2"
                      >
                        <div className="img-gallery-media">
                          <img
                            className="img-fluid"
                            src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            alt=""
                          />
                        </div>
                        <div className="gallery-media-content text-light text-center">
                          <i class="fa-solid fa-bell-concierge"></i>
                          <h5>Traveler</h5>
                          <h6>(863)</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        style={{ height: "190px" }}
                        className="img-gallery-box mb-2"
                      >
                        <div className="img-gallery-media">
                          <img
                            className="img-fluid"
                            src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            alt=""
                          />
                        </div>
                        <div className="gallery-media-content text-light text-center">
                          <i class="fa-solid fa-utensils"></i>
                          <h5>Dining</h5>
                          <h6>83</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div
                        style={{ height: "190px" }}
                        className="img-gallery-box"
                      >
                        <div className="img-gallery-media">
                          <img
                            className="img-fluid"
                            src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            alt=""
                          />
                        </div>
                        <div className="gallery-media-content text-light text-center">
                          <i class="fa-solid fa-bed"></i>
                          <h5>Room Suite</h5>
                          <h6>150</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* you may like */}
        <div className="container px-0">
          <div className="may-like mt-5">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="fw-bold">Yoy may also like</h3>
                <p className=" mb-3">Popular nearby (Geo Location) </p>
              </div>
              <div>
                <button type="button" className="viewBtn">
                  View All
                </button>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="nearby-place-box">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="img-box">
                          <img className="img-fluid" src={dubaiImg} alt="" />

                          <div className="img-rating">
                            <div className="rating-count">
                              <p>9.5</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="location-details py-4">
                          <h3>Burj AL Arab</h3>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star outline-star-place "></i>
                          <span className="ms-2">10,560</span>

                          <div className="mt-2">
                            <i class="fa-solid fa-location-dot"></i>
                            <p className="d-inline ms-2 location-hotel-dtl">
                              2.5 mi
                            </p>
                          </div>

                          <button type="button" className="nearby-btn mt-2">
                            {" "}
                            AED280
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="nearby-place-box">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="img-box">
                          <img className="img-fluid" src={dubaiImg} alt="" />

                          <div className="img-rating">
                            <div className="rating-count">
                              <p>9.5</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="location-details py-4">
                          <h3>Burj AL Arab</h3>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star outline-star-place "></i>
                          <span className="ms-2">10,560</span>

                          <div className="mt-2">
                            <i class="fa-solid fa-location-dot"></i>
                            <p className="d-inline ms-2 location-hotel-dtl">
                              2.5 mi
                            </p>
                          </div>

                          <button type="button" className="nearby-btn mt-2">
                            {" "}
                            AED280
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="nearby-place-box">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="img-box">
                          <img className="img-fluid" src={dubaiImg} alt="" />

                          <div className="img-rating">
                            <div className="rating-count">
                              <p>9.5</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="location-details py-4">
                          <h3>Burj AL Arab</h3>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star outline-star-place "></i>
                          <span className="ms-2">10,560</span>

                          <div className="mt-2">
                            <i class="fa-solid fa-location-dot"></i>
                            <p className="d-inline ms-2 location-hotel-dtl">
                              2.5 mi
                            </p>
                          </div>

                          <button type="button" className="nearby-btn mt-2">
                            {" "}
                            AED280
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* travel-safe */}

        <div className="container px-0 mt-5 mb-5">
          <div className="travel-safe">
            <h3>Travel safe during COVID-19</h3>

            <div className="row">
              <div className="col-lg-6">
                <p>What you can expect during your stay</p>
                <ul>
                  <li>
                    <span>
                      {" "}
                      - All linens sanitized in high-temperature wash
                    </span>
                  </li>
                  <li>
                    <span>
                      {" "}
                      - Face masks required for guests in public areas
                    </span>
                  </li>
                  <li>
                    <span>- Face masks required for staff in public areas</span>
                  </li>
                  <li>
                    <span>- Floors marked for social distancing</span>
                  </li>
                  <li>
                    <span>
                      {" "}
                      - All linens sanitized in high-temperature wash
                    </span>
                  </li>
                  <li>
                    <span>
                      {" "}
                      - Face masks required for guests in public areas
                    </span>
                  </li>
                </ul>

                <div className="community">
                  <div className="d-flex align-items-center ms-3">
                    <i class="fa-solid fa-message me-2"></i>
                    <span>Ask a question</span>
                  </div>
                  <div className="d-flex align-items-center ms-3">
                    <i class="fa-solid fa-pen-to-square me-2"></i>
                    <span>Write a review</span>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="pe-5">
                    Updated 07/03/20 Safety precautions are provided by the
                    property and are not checked by HalaTrips for accuracy.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <p className=" travel-right-safe">
                  A note from Al Bandar Rotana - Creek Wishing you a warm
                  welcome to Al Bandar Rotana Hotel where genuine care, comfort
                  and safety of our guests is our goal. The health and wellbeing
                  of our guests and colleagues is an unwavering priority for all
                  and social distancing and online interactions and services
                  have become the norm. For this reason, we have embraced the
                  latest technology, boosted our employee training and
                  strengthened our already stringent health, safety and cleaning
                  procedures with our ‘Rotana Safe Space’ programme designed to
                  give you peace of mind from check-in to check-out. For more
                  information please see our website and dedicated brochure:
                  https://www.rotanatimes.com/ While our hotel procedures and
                  services have changed to protect you, the warm welcome you
                  will receive when you stay with us most definitely has not.
                  Our best wishes for an enjoyable and safe stay with us.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT SECTION STARTED HERE */}

        <div className="hotel-details-about container py-4 px-4">
          <div className="row">
            <div className="col-md-4">
              <h3>About</h3>
              <div className="content-left">
                <div>
                  <h1>5.0</h1>
                  <p>Excellent</p>
                  <div>10,560</div>
                </div>
              </div>
            </div>
            <div className="col-md-8"></div>
          </div>
        </div>

        {/* ABOUT SECTION ENDED HERE */}
      </div>
    </div>
  );
};

export default HotelDetails;
