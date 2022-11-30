import React from "react";
import "../css/Main.css";
import ScrollToTop from "../components/ScrollToTop";
import SearchSideBar from "../components/FindApartment/SearchSideBar";
import car_image1 from "../images/Rectangle 71.png";
import car_image2 from "../images/Rectangle 78.png";
import car_image3 from "../images/Rectangle 78 (1).png";
import car_image4 from "../images/Rectangle 74.png";
import car_image5 from "../images/Rectangle 49.png";
import car_image6 from "../images/Rectangle 49 (1).png";
import MapSearch from "../components/FindApartment/MapSearch";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";

const FindApartment = () => {
  const style = {
    background: "rgb(2, 86, 144)",
  };
  return (
    <>
      <NavbarComp style={style} />
      <div className="find-container">
        <ScrollToTop />
        <div className="cont">
          <div className="map">
            <MapSearch />
          </div>
          <div className="img">
            <SearchSideBar
              images={[
                car_image1,
                car_image2,
                car_image3,
                car_image4,
                car_image5,
                car_image6,
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindApartment;
