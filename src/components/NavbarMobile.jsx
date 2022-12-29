import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const NavbarMobile = ({ open, handleOpen }) => {
  const [hide1, setHide1] = useState(false);
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get("https://taximania-api.onrender.com/api/property", (res) => {
        res.json();
      })
      .then((data) => setProperty(data.data.properties));
  });
  const [UserState, setUserState] = React.useContext(UserContext);
  const [hide, setHide] = useState(false);
  setTimeout(() => {
    setHide(!false);
  }, 1000);
  return (
    <div className={hide ? "showall" : null}>
      {hide ? (
        <div className={open ? "show-cont" : "hide"}>
          <div
            className={open ? "show-close" : null}
            onClick={() => handleOpen()}
          ></div>
          <div className={open ? "show" : "hide"}>
            <div className="close">
              <AiOutlineCloseSquare onClick={() => handleOpen()} />
            </div>
            <ul
              className="links mobile-links"
              style={{ overflowY: "scroll", height: "100vh" }}
            >
              <li onClick={() => handleOpen()}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/about_us">About Us</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/find_apartment">Find your Apartment</Link>
              </li>
              <li className="dropdown">
                <p
                  style={{ color: "white", padding: "20px" }}
                  onClick={() => setHide1(!hide1)}
                >
                  Recoa Communities
                </p>
                <ul
                  className={
                    hide1 ? "dropdown-details show1" : "dropdown-details hide1"
                  }
                >
                  {property.length > 0 ? (
                    <>
                      {" "}
                      {property.map((x) => {
                        return (
                          <li key={x.id}>
                            <Link
                              to={
                                x.status === "live"
                                  ? "/investor_login"
                                  : "/join_waitlist/" + x.id
                              }
                            >
                              {x.name}
                            </Link>
                          </li>
                        );
                      })}
                    </>
                  ) : (
                    <li>
                      <Link to="/">Loading properties...</Link>
                    </li>
                  )}
                </ul>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/find_apartment/search">Corporate Tenants</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobile;
