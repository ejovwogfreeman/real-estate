import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="div">
        <h1 className="h1 mb-lg-5">Recoa Logo</h1>
        <p className="mt-3">
          Copyright &copy; 2022 Join Recoa. All rights reserved.
        </p>
      </div>
      <div>
        <ul>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Now Leasing</a>
          </li>
          <li>
            <a href="">Join Wait List</a>
          </li>
          <li>
            <a href="">Investors</a>
          </li>
        </ul>
        <div className="icons mt-lg-2 my-3">
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
      </div>
    </footer>
  );
};

export default Footer;
