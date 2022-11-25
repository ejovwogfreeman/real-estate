import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import car_image1 from "../images/Rectangle 49 (6).jpg";
import car_image2 from "../images/Rectangle 49 (7).jpg";
import car_image3 from "../images/Rectangle 49 (4).jpg";
import car_image4 from "../images/Rectangle 49 (3).jpg";
import "./Slider.css";
import { Link } from "react-router-dom";

const Slider2 = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    navText: ["&#x2770;", "&#x2771;"],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  };
  return (
    <div>
      <h1 className="h1 text-center mt-lg-5 mt-3 text-success">
        Browse SubMarkets
      </h1>
      <OwlCarousel className="owl-theme" {...options}>
        <div class="item">
          <img src={car_image1} alt="" />
          <Link to="/find-apartment" className="bg"></Link>
          <p className="h3-lg h4">Lekki Phase 1</p>
        </div>
        <div class="item">
          <img src={car_image2} alt="" />
          <Link to="/find-apartment" className="bg"></Link>
          <p className="h3-lg h4">Lekki Orchid District</p>
        </div>
        <div class="item">
          <img src={car_image3} alt="" />
          <Link to="/find-apartment" className="bg"></Link>
          <p className="h3-lg h4">Epe New Town</p>
        </div>
        <div class="item">
          <img src={car_image4} alt="" />
          <Link to="/find-apartment" className="bg"></Link>
          <p className="h3-lg h4">Lekki Phase 2</p>
        </div>
      </OwlCarousel>
      ;
    </div>
  );
};

export default Slider2;
