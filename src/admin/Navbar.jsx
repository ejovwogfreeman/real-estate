import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  //   const logout = () => {};
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin-detail");
    navigate("/admin_signin");
  };

  return (
    <nav className="bg-primary admin-nav">
      <h1 className="h3">
        <Link to="/admin_dashboard">Recoa Admin</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Visit Site</Link>
        </li>
        <li>
          <button className="btn btn-outline-light" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
