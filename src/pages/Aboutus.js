import React from "react";
import "../css/Main.css";
import ScrollToTop from "../components/ScrollToTop";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";

const Aboutus = () => {
  const style = {
    background: "rgb(2, 86, 144)",
  };
  return (
    <>
      <NavbarComp style={style} />
      <div className="">
        <ScrollToTop />
        <div className="about-container">
          <div className="mb-3">
            <h3 className="h3 text-success">RECOA F2E</h3>
            <p className="">
              Recoa stands for Real Estate Company of Africa. We are
              constitutional real estate developers, exclusively focused on
              building a truly world class portfolio of sustainable rental
              apartment communities in the heart of urban African cities.
            </p>
          </div>
          <div className="mb-3">
            <h3 className="h3 text-success">OUR MISSION</h3>
            <p className="">
              To us an affordable home in the heart of Urban cities is not a
              luxury, it is the price of admission for access to the best
              opportunities in the modern economy.
            </p>
            <p className="">
              Our Mission on behalf of institutional investors is to create
              developments that will give more people a chance to reach these
              opportunities. As we unveil our debut portfolio across Lagos,
              Nigeria's economic centers, we invite you to join our waitlist so
              you can secure your future address.
            </p>
          </div>

          <div>
            <div className="">
              <h3 className="h3 text-success">THE DEVELOPMENT TEAM</h3>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
