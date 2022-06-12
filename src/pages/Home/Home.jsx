import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import BannerSection from "./BannerSection/BannerSection";
import MuslimCities from "./MuslimCities/MuslimCities";
import RecentReviews from "./RecentReviews/RecentReviews";
import WhyUsSection from "./WhyUsSection/WhyUsSection";
import YouMightLikeSection from "./YouMightLikeSection/YouMightLikeSection";
import HotelDetails from "../HotelDetails/HotelDetails";

const Home = () => {
  return (
    <>
      {/* <Navigation /> */}
      <div className="container">
        <BannerSection />
        <YouMightLikeSection />
      </div>
      <WhyUsSection />
      <MuslimCities />
      <RecentReviews />
      {/* <HotelDetails /> */}
    </>
  );
};

export default Home;
