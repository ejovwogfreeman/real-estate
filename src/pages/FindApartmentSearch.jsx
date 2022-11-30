import React, { useEffect, useState } from "react";
import "../css/Main.css";
import NavbarComp from "../components/NavbarComp";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import axios from "axios";

const FindApartmentSearch = () => {
  const [investors, setInvestors] = useState([]);
  useEffect(() => {
    axios
      .get("https://taximania-api.onrender.com/api/auth/investors", (res) => {
        res.json();
      })
      .then((data) => setInvestors(data.data.investors));
  });

  return (
    <>
      <ScrollToTop />
      <NavbarComp />
      <header className="background">
        <div>
          <h1 className="h2 fw-bold">Recoa Corporate Tenants</h1>
          <p>View Our Corporate Tenants List</p>
          <form action="" className="select-form my-5-lg mt-3 mb-5">
            <select>
              {investors.length > 0 ? (
                <>
                  {" "}
                  {investors.map((x) => {
                    return (
                      <option>
                        <Link to="/investor_login">{x.username}</Link>
                      </option>
                    );
                  })}
                </>
              ) : (
                <option>Loading Eligible Investors...</option>
              )}
            </select>
          </form>
          <Link
            to="/investor_login"
            style={{
              border: "3px solid white",
              padding: "10px 15px",
              borderRadius: "50px",
            }}
            className="nohover"
          >
            Login To Reserve Unit
          </Link>
        </div>
      </header>
    </>
  );
};

export default FindApartmentSearch;
