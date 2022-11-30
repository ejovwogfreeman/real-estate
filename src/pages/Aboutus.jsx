import React from "react";
import "../css/Main.css";
import ScrollToTop from "../components/ScrollToTop";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import img1 from "../RecoaImages/Pic 026 - Afolabi Headshot.jpg";
import img2 from "../RecoaImages/Pic 027 - Damilare Headshot.jpg";
import img3 from "../RecoaImages/Pic 028 - Chibuzor Headshot.jpg";
import img4 from "../RecoaImages/Pic 029 - Emmanuel Headshot.jpg";

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
            <h3 className="h3 text-success">THE DEVELOPMENT TEAM</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="p-lg-3">
                  <img
                    src={img1}
                    alt=""
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                  <div className="mt-2 mb-3">
                    <h5 className="h3 m-0">Afolabi Seriki</h5>
                    <p className="italic m-0">CEO/Development Director</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-lg-3">
                  <img
                    src={img2}
                    alt=""
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                  <div className="mt-2 mb-3">
                    <h5 className="h3 m-0">Damilore Egunjbi</h5>
                    <p className="italic m-0">Development Associate</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-lg-3">
                  <img
                    src={img3}
                    alt=""
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                  <div className="mt-2 mb-3">
                    <h5 className="h3 m-0">Chibuzor Festus Onujiogu</h5>
                    <p className="italic m-0">Development Operations</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-lg-3">
                  <img
                    src={img4}
                    alt=""
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                  <div className="mt-2 mb-3">
                    <h5 className="h3 m-0">Emmanuel Kilani</h5>
                    <p className="italic m-0">Development Analyst</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
