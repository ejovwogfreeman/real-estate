import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import car_image1 from "../images/Rectangle 49 (6).jpg";
// import car_image2 from "../images/Rectangle 49 (7).jpg";
// import car_image3 from "../images/Rectangle 49 (4).jpg";
// import car_image4 from "../images/Rectangle 49 (3).jpg";
import img7 from "../RecoaImages/Pic 001 - Home Page Image - D.png";
import img8 from "../RecoaImages/Pic 008 - Recoa Square Main Shot.png";
import img9 from "../RecoaImages/Pic 009 - Recoa Park.jpg";
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
        <div className="item">
          <img src={img8} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <p className="h3-lg h4">Recoa Square</p>
        </div>
        <div className="item">
          <img src={img9} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <p className="h3-lg h4">Recoa Park</p>
        </div>
        <div className="item">
          <img src={img7} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <p className="h3-lg h4">Recoa Lakes</p>
        </div>
        <div className="item">
          <img src={img8} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <p className="h3-lg h4">Recoa Square</p>
        </div>
      </OwlCarousel>
      ;
    </div>
  );
};

export default Slider2;
