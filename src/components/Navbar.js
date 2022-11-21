import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-30 ">
      <div className="flex flex-row justify-between bg-white py-5 drop-shadow-lg">
        <div>{/* <img src=''/> */}</div>
        <div>
          <ul className="flex flex-row gap-4 mr-6">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "active text-green-600 border-b-4 py-1 border-green-600"
                      : ""
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "active text-green-600 border-b-4 py-1 border-green-600"
                      : ""
                  }`
                }
                to="/about-us"
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "active text-green-600 border-b-4 py-1 border-green-600"
                      : ""
                  }`
                }
                to="/find-apartment"
              >
                Find your Apartment
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "active text-green-600 border-b-4 py-1 border-green-600"
                      : ""
                  }`
                }
                to="/recoa-communities"
              >
                Recoa Communities
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "active text-green-600 border-b-4 py-1 border-green-600"
                      : ""
                  }`
                }
                to="/corporate-tenant"
              >
                Corporate Tenants
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
