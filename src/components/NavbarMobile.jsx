import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { UserContext } from "../context/UserContext";

const NavbarMobile = ({ open, handleOpen }) => {
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
            <ul className="links mobile-links">
              <li onClick={() => handleOpen()}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/about_us">About Us</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/find_apartment">Find your Apartment</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/investor_login">Recoa Communities</Link>
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
