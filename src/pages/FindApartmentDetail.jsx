import React, { useState, useEffect } from "react";
import "../css/Main.css";
import ScrollToTop from "../components/ScrollToTop";
import NavbarComp from "../components/NavbarComp";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import img1 from "../images/default.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function FindApartmentDetail({
  closeModal,
  openModal,
  countState,
  handleIncrease,
  handleDecrease,
}) {
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState([]);
  const [prop, setProp] = useState({});

  const params = useParams();
  let status = {
    available: 1,
    reserved: 2,
  };

  useEffect(() => {
    axios
      .get(
        `https://taximania-api.onrender.com/api/property/unit/${params.id}`,
        (res) => {
          res.json();
        }
      )
      .then((data) =>
        setUnit(
          data.data.units.sort(
            (a, b) => status[a.unitstatus] - status[b.unitstatus]
          )
        )
      );
  }, [params.id]);

  useEffect(() => {
    axios
      .get(
        `https://taximania-api.onrender.com/api/property/${params.id}`,
        (res) => {
          res.json();
        }
      )
      .then((data) => {
        setProp(data.data.property);
      });
  }, [params.id]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const style = {
    background: "rgb(2, 86, 144)",
  };
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
        items: 1,
      },
    },
  };
  return (
    <>
      <NavbarComp style={style} />
      <ScrollToTop />
      <div className="pt-8 top-space component">
        <div className="h3 text-center mb-0">Welcome to Reqoa Square</div>
        <OwlCarousel className="owl-theme" {...options}>
          {prop.images
            ? prop.images.length > 0
              ? prop.images.map((x, index) => {
                  return (
                    <div className="item" key={index}>
                      <img src={x} alt="" className="rounded" />
                      <p className="h3-lg h4">{prop.name}</p>
                    </div>
                  );
                })
              : img1
            : null}
        </OwlCarousel>
        <div className="mb-5 row">
          {unit.length > 0 ? (
            <>
              {unit.map((x) => {
                return (
                  <div className="col-md-4 p-2 show-cont-comp" key={x.id}>
                    <div
                      key={x.id}
                      className="p-3 rounded text-center"
                      style={{ background: "rgba(0,0,0,0.1)" }}
                    >
                      {
                        <img
                          src={`https://taximania-api.onrender.com/api/property/unit/image/${x.id}`}
                          alt=""
                          className="rounded"
                        />
                      }
                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <p className="h6 m-0">{x.name.toUpperCase()}</p>
                        <p className="h6 m-0">₦{numberWithCommas(x.price)}</p>
                      </div>
                      <p className="py-2" style={{ textAlign: "justify" }}>
                        {x.description}
                      </p>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="text-start">
                          <span>Available:</span>
                          <span className="ms-2">{x.count}</span>
                        </div>

                        <div className="text-end show-action">
                          {countState.length > 0 ? (
                            <>
                              {countState.map((y) => {
                                return (
                                  <span id={y.id}>
                                    {y.id === x.id ? (
                                      <span>
                                        {y.quantity > 0 ? (
                                          <button
                                            className="btn btn-outline-danger py-0"
                                            onClick={() => handleDecrease(x)}
                                          >
                                            -
                                          </button>
                                        ) : null}
                                        <span className="px-3">
                                          {y.quantity > y.count
                                            ? y.count
                                            : y.quantity}
                                        </span>
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </span>
                                );
                              })}
                            </>
                          ) : (
                            ""
                          )}
                          <button
                            className="btn btn-outline-success py-0"
                            onClick={() => handleIncrease(x)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <small
                          className={
                            x.unitstatus === "available"
                              ? "bg-success text-light p-1 rounded"
                              : "bg-warning text-light p-1 rounded"
                          }
                        >
                          {x.unitstatus.charAt(0).toUpperCase() +
                            x.unitstatus.slice(1)}
                        </small>{" "}
                        {x.unitstatus === "available" ? (
                          <Link
                            to={`/reserve_unit/${x.id}`}
                            className="btn btn-outline-primary"
                          >
                            Reserve
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <p className="py-5 h3">Loading Units Under {prop.name}...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default FindApartmentDetail;
