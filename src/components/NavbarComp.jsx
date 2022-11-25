import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import NavbarMobile from "./NavbarMobile";
import axios from "axios";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const NavbarComp = ({ style }) => {
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);

  const [open, setOpen] = useState(false);
  const [UserState, setUserState] = React.useContext(UserContext);
  const [change, setChange] = useState(false);
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get("https://recoa-api.herokuapp.com/api/property", (res) => {
        res.json();
      })
      .then((data) => setProperty(data.data.properties));
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
              <h1>RECOA COMMUTITIES</h1>
            </Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/find-apartment">Find your Apartment</Link>
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
                {/* {property.map((x) => {
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
                })} */}
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Join Wait List</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              {/* <Link to="/corporate-tenant">Corporate Tenants</Link> */}
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
                {
                  <li>
                    <a href="">NDDC</a>
                  </li>
                }
                <li>
                  <a href="">Naijacat</a>
                </li>
                <li>
                  <a href="">NPDC</a>
                </li>
              </ul>
            </li>
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
