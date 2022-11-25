import React from "react";
import NavbarComp from "../components/NavbarComp";
import ScrollToTop from "../components/ScrollToTop";
import Slider from "../components/Slider";
import Slider2 from "../components/Slider2";
import Header from "./Header";
import Footer from "../components/Footer";

const HomeComp = () => {
  return (
    <div>
      <ScrollToTop />
      <NavbarComp />
      <Header />
      <Slider />
      <Slider2 />
      <Footer />
    </div>
  );
};

export default HomeComp;
