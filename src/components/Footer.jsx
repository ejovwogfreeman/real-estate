import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../images/recoalogo.png";

const Footer = () => {
  return (
    <footer>
      <h1 className="h1">
        <img src={logo} alt="" style={{ width: "80px" }} />
      </h1>
      <p>Copyright &copy; 2022 Join Recoa. All rights reserved.</p>
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
    </footer>
  );
};

export default Footer;
