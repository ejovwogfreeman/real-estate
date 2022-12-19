import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../RecoaImages/Pic 001 - Home Page Image - D.png";
import img2 from "../RecoaImages/Pic 002 - Victoria Island.png";
import img3 from "../RecoaImages/Pic 003 - Lekki Orchid District.jpg";
import img5 from "../RecoaImages/Pic 005 - Ikoyi Main.png";
import img6 from "../RecoaImages/Pic 006 - Banana Island.png";
import "./Slider.css";
import { Link } from "react-router-dom";

const Slider = () => {
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
          <img src={img2} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <p className="h3-lg h4">Victoria Island</p>
        </div>
        <div className="item">
          <img src={img3} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <p className="h3-lg h4">Lekki Orchid District</p>
        </div>
        <div className="item">
          <img src={img5} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <p className="h3-lg h4">Ikoyi Main</p>
        </div>
        <div className="item">
          <img src={img6} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <p className="h3-lg h4">Banana Island</p>
        </div>
        <div className="item">
          <img src={img1} alt="" />
          <Link to="/find_apartment" className="bg"></Link>
          <p className="h3-lg h4">Lekki Free Zone Axis</p>
        </div>
      </OwlCarousel>
      ;
    </div>
  );
};

export default Slider;
