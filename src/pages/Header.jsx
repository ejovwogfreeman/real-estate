import React, { useState, useEffect } from "react";
import "../css/Main.css";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [select, setSelect] = useState("Ajah LA, Nigeria");

  const [property, setProperty] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  let status = {
    live: 1,
    waitlist: 2,
  };

  useEffect(() => {
    axios
      .get("https://taximania-api.onrender.com/api/property", (res) => {
        res.json();
      })
      .then((data) =>
        setProperty(
          data.data.properties.sort(
            (a, b) => status[a.status] - status[b.status]
          )
        )
      );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/find_apartment");
  };

  return (
    <header className="background">
      <div>
        <h1 className="h2 fw-bold">Find Your New Home Here</h1>
        <form onSubmit={handleSubmit} className="select-form my-5-lg my-3">
          <select
            id=""
            onChange={(e) => setSelect(e.target.value)}
            value={select}
            name="company"
            required
          >
            {property.length > 0 ? (
              <>
                {" "}
                {property.map((x) => {
                  return (
                    <option value="Victoria Island" key={x.id}>
                      {x.location}
                    </option>
                  );
                })}
              </>
            ) : (
              <option>Loading Locations...</option>
            )}

            {/* <option value="Victoria Island">Victoria Island</option>
            <option value="Ajah LA, Nigeria">Ajah LA, Nigeria</option>
            <option value="Ikeja">Ikeja</option>
            <option value="Apapa">Apapa</option> */}
          </select>
          <button>
            <BsSearch />
          </button>
        </form>
        <p>Find Rental Appartment Homes in the bussiness district of Lagos</p>
      </div>
    </header>
  );
};

export default Header;
