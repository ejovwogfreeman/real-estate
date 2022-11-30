import React, { useState, useEffect } from "react";
import "../css/Main.css";
import ScrollToTop from "../components/ScrollToTop";
import MapSearch from "../components/FindApartment/MapSearch";
import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import logo from "../images/recoalogo.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FindApartment = () => {
  const [property, setProperty] = useState([]);
  const params = useParams();

  let status = {
    live: 1,
    waitlist: 2,
  };

  useEffect(() => {
    axios
      .get("https://taximania-api.onrender.com/api/property", (res) => {
        res.json();
      })
      .then((data) =>
        setProperty(
          data.data.properties.sort(
            (a, b) => status[a.status] - status[b.status]
          )
        )
      );
  });

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
          <div
            className="img ms-2"
            style={{ height: "500px", overflowY: "scroll" }}
          >
            {property.length > 0 ? (
              <>
                {" "}
                {property.map((x) => {
                  return (
                    <Link
                      to={
                        x.status === "live"
                          ? "/find_apartment/detail/" + x.id
                          : "/join_waitlist/" + x.id
                      }
                    >
                      <div
                        className="row m-0 mb-2 p-2 rounded"
                        style={{ background: "rgba(0,0,0,0.1)" }}
                      >
                        <div className="col-4">
                          <img src={logo} alt="" style={{ width: "100%" }} />
                        </div>
                        <div className="col-8">
                          <p className="h6">{x.name.toUpperCase()}</p>
                          <small className="d-block mb-2 text-muted italic">
                            {x.location}
                          </small>
                          <small
                            className={
                              x.status === "live"
                                ? "bg-success text-light p-1 px-2 rounded"
                                : "bg-danger text-light p-1 px-2 rounded"
                            }
                          >
                            {x.status}
                          </small>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </>
            ) : (
              <p>Loading Properties...</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindApartment;
