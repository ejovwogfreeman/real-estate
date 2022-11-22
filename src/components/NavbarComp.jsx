import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import NavbarMobile from "./NavbarMobile";
// import { ImMail } from "react-icons/im";

// import {
//   FaFacebookSquare,
//   FaTwitterSquare,
//   FaInstagramSquare,
//   FaLinkedin,
// } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const NavbarComp = ({ style }) => {
  const [open, setOpen] = useState(false);
  const [UserState, setUserState] = React.useContext(UserContext);
  const [change, setChange] = useState(false);

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
        {/* <div className="top-nav">
          <div className="mail-cont">
            <ImMail className="mail" />
            info@hope4africa.foundation
          </div>
          <div className="icons">
            <a href="https://facebook.com">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com">
              <FaTwitterSquare />
            </a>
            <a href="https://instagram.com">
              <FaInstagramSquare />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
          </div>
        </div> */}
        <div className="main-nav">
          <div className="logo">
            <Link to="/">
              <h1>Hope4Africa</h1>
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
            <li>
              <Link to="/investor-login">Recoa Communities</Link>
            </li>
            <li>
              <Link to="/corporate-tenant">Corporate Tenants</Link>
            </li>
          </ul>
          <div className="right">
            <span className="mobileNav">
              <AiOutlineMenu onClick={() => setOpen(!open)} />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComp;
