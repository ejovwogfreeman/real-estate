import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import NavbarMobile from "./NavbarMobile";
import axios from "axios";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import logo from "../images/recoalogo.png";

const NavbarComp = ({ style }) => {
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);

  const [open, setOpen] = useState(false);
  const [UserState, setUserState] = React.useContext(UserContext);
  const [change, setChange] = useState(false);
  const [property, setProperty] = useState([]);
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    axios
      .get("https://taximania-api.onrender.com/api/property", (res) => {
        res.json();
      })
      .then((data) => setProperty(data.data.properties));
  });

  useEffect(() => {
    axios
      .get("https://taximania-api.onrender.com/api/auth/investors", (res) => {
        res.json();
      })
      .then((data) => setInvestors(data.data.investors));
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setChange(true);
      } else {
        setChange(false);
      }
    });
  }, []);

  const handleOpen = () => {
    setOpen(false);
  };
  return (
    <>
      <NavbarMobile open={open} handleOpen={handleOpen} />
      <nav style={style} className={change ? "add-bg" : "transparent"}>
        <div className="main-nav">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" style={{ width: "80px" }} />
            </Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about_us">About Us</Link>
            </li>
            <li>
              <Link to="/find_apartment">Find your Apartment</Link>
            </li>
            <li className="dropdown">
              {/* <Link to="/investor-login">Recoa Communities</Link> */}
              <p
                style={{ color: "white", marginLeft: "30px" }}
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
            <li>
              <Link to="/find_apartment/search">Corporate Tenants</Link>
            </li>
            {/* <li className="dropdown">
              <p
                style={{ color: "white", marginLeft: "30px" }}
                onClick={() => setHide2(!hide2)}
              >
                Corporate Tenants
              </p>
              <ul
                className={
                  hide2 ? "dropdown-details show1" : "dropdown-details hide1"
                }
              >
                {investors.length > 0 ? (
                  <>
                    {" "}
                    {investors.map((x) => {
                      return (
                        <li key={x.id}>
                          <Link to={"/investor_login"}>{x.username}</Link>
                        </li>
                      );
                    })}
                  </>
                ) : (
                  <li>
                    <Link to="/">Loading Investors...</Link>
                  </li>
                )}
              </ul>
            </li> */}
          </ul>
          <div className="right">
            <span className="mobileNav text-light">
              <AiOutlineMenu onClick={() => setOpen(!open)} />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComp;
